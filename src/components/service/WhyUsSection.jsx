import React, { useEffect, useState } from "react";

function Hero() {
  return (
    <div className="w-screen h-[600px] relative">
      {/* --- horizon glow --- */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[1600px] h-[520px] -bottom-[60%]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(189,135,255,0.9) 35%, rgba(115,69,255,0.55) 55%, rgba(12,0,24,0) 70%)",
          filter: "blur(60px)",
          opacity: 0.9,
        }}
      />

      {/* --- stage: hand + phone --- */}
      <div className="absolute -bottom-[10%] left-1/2 z-10">
        <img
          src="/phone.png"
          alt="Hand holding phone"
          className="left-1/2 -translate-x-1/2 top-[75%] max-w-none w-[570px] h-[570px]"
          draggable={false}
        />
      </div>
    </div>
  );
}

// ---------------- MOVING STAR ---------------- //
const Star = () => {
  const [pos, setPos] = useState({
    top: Math.random() * 100,
    left: Math.random() * 100,
  });
  const [vel, setVel] = useState({
    vx: (Math.random() - 0.5) * 0.3, // slower drift than badges
    vy: (Math.random() - 0.5) * 0.3,
  });
  const size = Math.random() * 2 + 1; // 1–3px star

  useEffect(() => {
    const interval = setInterval(() => {
      setPos((prev) => {
        let newTop = prev.top + vel.vy;
        let newLeft = prev.left + vel.vx;
        let { vx, vy } = vel;

        // Bounce at edges
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
    }, 120); // slower updates for subtle drift

    return () => clearInterval(interval);
  }, [vel]);

  return (
    <span
      className="absolute rounded-full bg-white opacity-80"
      style={{
        width: size,
        height: size,
        top: `${pos.top}%`,
        left: `${pos.left}%`,
      }}
    />
  );
};

const WhyUsSection = () => {
  return (
    <section className="relative min-h-[110vh] bg-[#0c0018] text-white overflow-hidden">
      {/* --- starry sky (animated) --- */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <Star key={i} />
        ))}
      </div>

      <Hero />

      <div className="bg-gradient-to-t to-[#1a00335d] from-[#180030] backdrop-blur-md relative z-20">
        {/* --- content --- */}
        <div className="relative max-w-3xl mx-auto text-center px-6 py-[140px] pt-20">
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] bg-gradient-to-r from-[#cbb6ff] via-white to-[#cbb6ff] bg-clip-text text-transparent p-2">
            This is why you need us
          </h2>
          <p className="mt-6 text-lg md:text-xl text-purple-100/90">
            We simplify tech, amplify your brand, and help your business run
            smarter
          </p>
          <button className="mt-10 px-8 py-4 rounded-md bg-[#3b1a78] hover:bg-[#2f1461] transition shadow-lg shadow-purple-900/30">
            Let&apos;s work together
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
