// Runs after `vite build` (see package.json "postbuild").
//
// This is a plain client-side React app with no SSR/SSG. Vercel's rewrite
// (vercel.json) sends every unmatched path to "/", so every route used to
// serve the exact same empty `<div id="root"></div>` shell to anything that
// doesn't execute JS — crawlers, link-preview bots, most SEO tools. That
// meant every route also showed the same static <title>/<meta> from
// index.html, since the per-page <SEO> tags only exist after React mounts.
//
// To fix this without migrating off Vite/React, we serve the built `dist/`
// output, visit each known route in a real (headless) browser, let React
// mount and set its per-page title/meta/canonical/OG tags, then save the
// fully-rendered HTML as a static file at that route's path
// (dist/about/index.html, etc). Vercel serves a matching static file before
// falling back to the SPA rewrite, so each route now gets real content and
// unique metadata on the very first response — no rewrite change needed.
// Real users still get the normal fast client-side SPA experience; React
// just re-renders over the prerendered markup on load (no hydration, so no
// hydration-mismatch risk).
//
// Keep ROUTES in sync with src/App.jsx and public/sitemap.xml.

import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

const ROUTES = [
  { path: "/", out: "index.html" },
  { path: "/about", out: "about/index.html" },
  { path: "/services", out: "services/index.html" },
  { path: "/contact", out: "contact/index.html" },
];

function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const res = await fetch(url);
        if (res.ok) return resolve();
      } catch {
        // not up yet
      }
      if (Date.now() - start > timeoutMs) {
        return reject(new Error(`Timed out waiting for ${url}`));
      }
      setTimeout(tick, 300);
    };
    tick();
  });
}

async function main() {
  const preview = spawn(
    "npx",
    ["vite", "preview", "--port", String(PORT), "--strictPort"],
    { cwd: root, shell: true, stdio: "pipe" }
  );

  let previewOutput = "";
  preview.stdout.on("data", (d) => (previewOutput += d));
  preview.stderr.on("data", (d) => (previewOutput += d));

  try {
    await waitForServer(BASE_URL);

    // Vercel's build container is a minimal Linux image missing the shared
    // libraries (libnspr4.so etc.) Playwright's own downloaded Chromium
    // needs to launch — it downloads fine via postinstall, it just can't
    // run. @sparticuz/chromium ships a Chromium build made for exactly this
    // environment (AWS Lambda / Vercel), so swap to it only there; local
    // dev keeps using the regular Playwright-managed browser unchanged.
    let launchOptions = {};
    if (process.env.VERCEL) {
      const { default: sparticuzChromium } = await import(
        "@sparticuz/chromium"
      );
      launchOptions = {
        args: sparticuzChromium.args,
        executablePath: await sparticuzChromium.executablePath(),
      };
    }

    const browser = await chromium.launch(launchOptions);
    const page = await browser.newPage();

    // dist/index.html doubles as both the "/" output and the SPA-fallback
    // shell Vite preview serves for every other route. Once it's overwritten
    // with a fully-rendered page (title/meta/canonical baked in), the next
    // route's initial HTML starts from that polluted shell and React just
    // appends its own <title>/<meta>/<link> on top instead of replacing them
    // — producing duplicate, conflicting canonical/OG tags on every route
    // but the one prerendered last. Reset to the pristine build output
    // before every route so each one starts clean.
    const indexPath = path.join(distDir, "index.html");
    const builtIndexHtml = await readFile(indexPath, "utf-8");

    // index.html's own static <title>/<meta description> (there for the
    // instant before React mounts, and for JS-less clients) aren't replaced
    // by the per-page <SEO> tags React renders — React only manages tags it
    // rendered itself, so the static ones stay and we'd end up with two of
    // each. Every route already renders its own <SEO>, so strip the static
    // ones from the shell used to reset between routes; real (non-prerender)
    // page loads still get them since only this in-memory copy is touched.
    const resetShellHtml = builtIndexHtml
      .replace(/<title>.*?<\/title>/s, "")
      .replace(/<meta name="description"[^>]*>\s*/, "");

    let homeHtml = null;

    for (const route of ROUTES) {
      await writeFile(indexPath, resetShellHtml, "utf-8");

      // "networkidle" would also wait on third-party analytics beacons
      // (gtag.js -> analytics.google.com / doubleclick / google ads pixel),
      // which are outside our control and can stall well past the timeout.
      // waitForSelector("footer") is the real signal that React has mounted.
      await page.goto(`${BASE_URL}${route.path}`, { waitUntil: "load" });
      await page.waitForSelector("footer", { timeout: 15000 });
      const html = "<!DOCTYPE html>\n" + (await page.content());

      if (route.path === "/") homeHtml = html;

      const outPath = path.join(distDir, route.out);
      await mkdir(path.dirname(outPath), { recursive: true });
      await writeFile(outPath, html, "utf-8");
      console.log(`Prerendered ${route.path} -> dist/${route.out}`);
    }

    // The loop's last pristine-reset write (done for whichever route ran
    // last) leaves dist/index.html as the un-rendered shell. Restore it to
    // the actual prerendered homepage now that no other route still needs
    // it as a fallback shell.
    await writeFile(indexPath, homeHtml, "utf-8");

    await browser.close();
  } catch (err) {
    console.error("Prerender output so far:\n" + previewOutput);
    throw err;
  } finally {
    preview.kill();
  }
}

main().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
