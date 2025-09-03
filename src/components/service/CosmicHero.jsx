import React, { useState, useEffect } from "react";
import {
  FaGlobe,
  FaLaptopCode,
  FaHeadset,
  FaNetworkWired,
} from "react-icons/fa";

// ---------------- MOVING STAR ---------------- //
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
      }}
    />
  );
};

const slides = [
  {
    icon: <FaGlobe className="w-8 h-8 text-purple-400" />,
    title: "Website Design, Mobile Design & Development",
    tagline: "Your digital presence should work seamlessly everywhere.",
    description:
      "We create custom, responsive websites and mobile experiences that are fast, scalable, designed and built to convert with your brand and users in mind.",
  },
  {
    icon: <FaLaptopCode className="w-8 h-8 text-purple-400" />,
    title: "IT Consulting",
    tagline: "We provide expert tech guidance to help your business grow.",
    description:
      "Our IT consultants analyze, design, and implement strategies that give your business the technology edge it needs to succeed.",
  },
  {
    icon: <FaHeadset className="w-8 h-8 text-purple-400" />,
    title: "ICT Support",
    tagline:
      "Reliable tech support that keeps your team and tools running smoothly.",
    description:
      "From troubleshooting to ongoing support, we ensure your systems are always operational with minimal downtime.",
  },
  {
    icon: <FaNetworkWired className="w-8 h-8 text-purple-400" />,
    title: "Network Setup & Management",
    tagline: "Reliable network setup and fixes for smooth connection.",
    description:
      "We design, deploy, and manage secure networks that power seamless communication and connectivity.",
  },
];

const CosmicHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // auto-slide every 5s
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-[#0a001a] to-[#1a0033] overflow-hidden text-white">
      {/* Animated Stars */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <Star key={i} />
        ))}
      </div>

      {/* Main Content (Slide View) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-32 transition-all duration-700">
        {/* Icon */}
        <div className="mx-auto mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-purple-600/30">
          {slide.icon}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight">
          {slide.title}
        </h1>

        {/* Glowing Bar */}
        <div className="w-32 h-1 mx-auto mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>

        {/* Tagline */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-gray-300 leading-relaxed">
          {slide.tagline}
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-gray-400 leading-relaxed">
          {slide.description}
        </p>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute rounded-full opacity-20 blur-3xl bg-purple-500"
          style={{
            top: "30%",
            left: "50%",
            width: "300px",
            height: "300px",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
  );
};

export default CosmicHero;
