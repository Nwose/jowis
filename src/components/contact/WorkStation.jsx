import React, { useState, useEffect } from "react";

// ---------------- DRIFTING STAR ---------------- //
const Star = () => {
  const [pos, setPos] = useState({
    top: Math.random() * 100,
    left: Math.random() * 100,
  });
  const [vel, setVel] = useState({
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
  });
  const size = Math.random() * 2 + 1;
  const delay = Math.random() * 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setPos((prev) => {
        let newTop = prev.top + vel.vy;
        let newLeft = prev.left + vel.vx;
        let { vx, vy } = vel;

        if (newTop < 0 || newTop > 100) {
          vy = -vy;
          newTop = Math.max(0, Math.min(100, newTop));
        }
        if (newLeft < 0 || newLeft > 100) {
          vx = -vx;
          newLeft = Math.max(0, Math.min(100, newLeft));
        }

        setVel({ vx, vy });
        return { top: newTop, left: newLeft };
      });
    }, 120);

    return () => clearInterval(interval);
  }, [vel]);

  return (
    <span
      className="absolute rounded-full bg-white opacity-70"
      style={{
        width: size,
        height: size,
        top: `${pos.top}%`,
        left: `${pos.left}%`,
        animation: `twinkle 3s ease-in-out ${delay}s infinite`,
      }}
    />
  );
};

// ---------------- PROJECT CARD ---------------- //
function ProjectCard({
  title,
  subtitle = "Website",
  src,
  alt,
  size = "lg",
  url,
}) {
  const height =
    size === "lg" ? "h-[22rem] md:h-[28rem]" : "h-56 sm:h-64 md:h-72";

  return (
    <article className="group">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none"
      >
        {/* Image frame */}
        <div
          className={[
            "relative overflow-hidden rounded-2xl",
            "bg-zinc-900/40 ring-1 ring-white/10",
            height,
          ].join(" ")}
        >
          <img
            src={src}
            alt={alt || title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute inset-0 rounded-2xl ring-inset ring-transparent focus-within:ring-2 focus-within:ring-violet-300" />
        </div>

        {/* Captions below image */}
        <div className="mt-3">
          <h3 className="text-zinc-50 text-base md:text-lg font-semibold leading-tight hover:underline">
            {title}
          </h3>
          <p className="text-zinc-400 text-sm">{subtitle}</p>
        </div>
      </a>
    </article>
  );
}

// ---------------- WORKS SECTION ---------------- //
export default function WorksSection() {
  const topRow = [
    {
      title: "The Hive Incubator",
      src: "/hive-incubator.png",
      alt: "Tablet mockup of The Hive Incubator website on dark background",
      url: "https://thehiveincubator.com",
    },
    {
      title: "Anmut Estate and Property Development",
      src: "/anmut-developers.png",
      alt: "Mobile mockup of Anmut Estate and Property Development website",
      url: "https://anmutdevelopers.com",
    },
  ];

  const bottomRow = [
    {
      title: "Square Farms Africa",
      src: "/square-farms.png",
      alt: "Laptop mockup of Square Farms Africa website (angle 1)",
      size: "sm",
      url: "https://www.squarefarms.africa",
    },
    {
      title: "Folajomi Adegbulugbe",
      src: "/jomi.png",
      alt: "Folajomi (angle 2)",
      size: "sm",
      url: "https://folajomi.com",
    },
    {
      title: "Tolu Legal",
      src: "/tolu.png",
      alt: "Tolu legal (angle 3)",
      size: "sm",
      url: "https://tolulegal.com",
    },
  ];

  return (
    <section className="relative w-full bg-[#13001f] overflow-hidden">
      {/* Animated background stars */}
      {Array.from({ length: 60 }).map((_, i) => (
        <Star key={i} />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-16 md:py-24">
        {/* GRID — Top: 2 tall cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {topRow.map((p) => (
            <ProjectCard key={p.title} {...p} size="lg" />
          ))}
        </div>

        {/* GRID — Bottom: 3 shorter cards */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {bottomRow.map((p, idx) => (
            <ProjectCard key={`${p.title}-${idx}`} {...p} size="sm" />
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 0.2; transform: scale(0.8); }
          }
        `}
      </style>
    </section>
  );
}
