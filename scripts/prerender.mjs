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
import { mkdir, writeFile } from "node:fs/promises";
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

    const browser = await chromium.launch();
    const page = await browser.newPage();

    for (const route of ROUTES) {
      await page.goto(`${BASE_URL}${route.path}`, { waitUntil: "networkidle" });
      await page.waitForSelector("footer", { timeout: 15000 });
      const html = "<!DOCTYPE html>\n" + (await page.content());

      const outPath = path.join(distDir, route.out);
      await mkdir(path.dirname(outPath), { recursive: true });
      await writeFile(outPath, html, "utf-8");
      console.log(`Prerendered ${route.path} -> dist/${route.out}`);
    }

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
