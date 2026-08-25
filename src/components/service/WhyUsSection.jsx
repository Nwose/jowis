import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { FaGlobe, FaNetworkWired, FaHeadset } from "react-icons/fa";

const PARALLAX_SPRING = { stiffness: 120, damping: 16, mass: 0.6 };

// Floating service chips, each tracking the pointer at a different depth so
// the stage reads as real 3D space rather than a flat image with a tilt.
const STAGE_CHIPS = [
  { Icon: FaGlobe, className: "left-[6%] top-[16%]", depthX: 14, depthY: 10, bobDelay: 0 },
  { Icon: FaNetworkWired, className: "right-[8%] top-[26%]", depthX: 28, depthY: 20, bobDelay: 0.6 },
  { Icon: FaHeadset, className: "left-[12%] bottom-[16%]", depthX: 24, depthY: 18, bobDelay: 1.2 },
];

function StageChip({ Icon, className, depthX, depthY, bobDelay, pointerX, pointerY }) {
  const chipX = useSpring(
    useTransform(pointerX, [0, 1], [-depthX, depthX]),
    PARALLAX_SPRING
  );
  const chipY = useSpring(
    useTransform(pointerY, [0, 1], [-depthY, depthY]),
    PARALLAX_SPRING
  );

  return (
    <motion.div
      className={`absolute z-20 hidden sm:flex items-center justify-center w-14 h-14 rounded-2xl bg-white/8 border border-white/15 backdrop-blur-md shadow-[0_15px_40px_-15px_rgba(138,92,255,0.6)] ${className}`}
      style={{ x: chipX, y: chipY }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: bobDelay,
      }}
    >
      <Icon className="w-6 h-6 text-[#c9b8ff]" />
    </motion.div>
  );
}

function PhoneStage() {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  const rotateX = useSpring(
    useTransform(pointerY, [0, 1], [8, -8]),
    PARALLAX_SPRING
  );
  const rotateY = useSpring(
    useTransform(pointerX, [0, 1], [-10, 10]),
    PARALLAX_SPRING
  );

  const handlePointerMove = (e) => {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width);
    pointerY.set((e.clientY - rect.top) / rect.height);
  };

  const handlePointerLeave = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="w-screen h-[600px] relative [perspective:1600px]"
    >
      {/* --- horizon glow (far layer, stays still for depth contrast) --- */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[1600px] h-[520px] -bottom-[60%]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(189,135,255,0.9) 35%, rgba(115,69,255,0.55) 55%, rgba(12,0,24,0) 70%)",
          filter: "blur(60px)",
          opacity: 0.9,
        }}
      />

      {/* --- floating service chips (mid layer, parallax) --- */}
      {!reduceMotion &&
        STAGE_CHIPS.map((chip, i) => (
          <StageChip key={i} {...chip} pointerX={pointerX} pointerY={pointerY} />
        ))}

      {/* --- stage: hand + phone (near layer, tilts toward the pointer) --- */}
      <div className="absolute -bottom-[10%] left-1/2 z-10">
        <motion.img
          src="/phone.png"
          alt="Hand holding a phone displaying a Jowis Studio web project"
          className="left-1/2 -translate-x-1/2 top-[75%] max-w-none w-[570px] h-[570px]"
          draggable={false}
          style={reduceMotion ? undefined : { rotateX, rotateY }}
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

      <PhoneStage />

      <div className="bg-gradient-to-t to-[#1a00335d] from-[#180030] backdrop-blur-md relative z-20">
        {/* --- content --- */}
        <div className="relative max-w-3xl mx-auto text-center px-6 py-[140px] pt-20">
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] bg-gradient-to-r from-[#cbb6ff] via-white to-[#cbb6ff] bg-clip-text text-transparent p-2">
            This is why you need us
          </h1>
          <p className="mt-6 text-lg md:text-xl text-purple-100/90">
            We simplify tech, amplify your brand, and help your business run
            smarter
          </p>
          <button className="mt-10 px-8 py-4 rounded-md bg-[#3b1a78] hover:bg-[#2f1461] active:translate-y-0.5 transition shadow-lg shadow-purple-900/30">
            Let&apos;s work together
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
