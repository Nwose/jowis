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
const CHIP_SPRING = { type: "spring", stiffness: 320, damping: 16 };

// Floating service chips, each tracking the pointer at a different depth so
// the stage reads as real 3D space rather than a flat image with a tilt.
const STAGE_CHIPS = [
  { Icon: FaGlobe, label: "Web", className: "left-[6%] top-[16%]", depthX: 14, depthY: 10 },
  { Icon: FaNetworkWired, label: "Network", className: "right-[8%] top-[26%]", depthX: 28, depthY: 20 },
  { Icon: FaHeadset, label: "Support", className: "left-[12%] bottom-[16%]", depthX: 24, depthY: 18 },
];

// Idle, they just drift gently with the pointer; on hover each one pops
// toward the viewer and names the service it stands for.
function StageChip({ Icon, label, className, depthX, depthY, pointerX, pointerY }) {
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
      className={`absolute z-20 hidden sm:flex flex-col items-center gap-2 ${className}`}
      style={{ x: chipX, y: chipY }}
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <motion.div
        className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/8 border border-white/15 backdrop-blur-md"
        variants={{
          rest: { scale: 1, y: 0, boxShadow: "0 15px 40px -15px rgba(138,92,255,0.6)" },
          hover: { scale: 1.16, y: -8, boxShadow: "0 20px 45px -12px rgba(138,92,255,0.9)" },
        }}
        transition={CHIP_SPRING}
      >
        <Icon className="w-6 h-6 text-[#c9b8ff]" />
      </motion.div>
      <motion.span
        className="text-[11px] font-medium text-[#c9b8ff] bg-[#1a002d]/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/10 whitespace-nowrap"
        variants={{
          rest: { opacity: 0, y: -4 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.18 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}

const PHONE_URL = "jowistudio.com";

// Loops the phone's screen through typing a URL and "opening" a real Jowis
// build, so the hero shows the product instead of just describing it.
function PhoneScreenDemo({ reduceMotion }) {
  const [typed, setTyped] = useState(reduceMotion ? PHONE_URL.length : 0);
  const [showSite, setShowSite] = useState(reduceMotion);

  useEffect(() => {
    if (reduceMotion) return undefined;

    let cancelled = false;
    let typeTimer;
    let cycleTimer;

    const runCycle = () => {
      setShowSite(false);
      setTyped(0);
      let i = 0;
      const typeNext = () => {
        if (cancelled) return;
        i += 1;
        setTyped(i);
        if (i < PHONE_URL.length) {
          typeTimer = setTimeout(typeNext, 90);
        } else {
          typeTimer = setTimeout(() => {
            if (!cancelled) setShowSite(true);
          }, 450);
        }
      };
      typeNext();
    };

    runCycle();
    cycleTimer = setInterval(runCycle, 5200);

    return () => {
      cancelled = true;
      clearTimeout(typeTimer);
      clearInterval(cycleTimer);
    };
  }, [reduceMotion]);

  return (
    <div
      className="absolute overflow-hidden rounded-[14px] bg-[#050014] pointer-events-none"
      style={{ left: 182, top: 59, width: 180, height: 146 }}
    >
      {/* address bar */}
      <div className="flex items-center gap-1.5 h-[24px] px-2.5 bg-white/5 border-b border-white/10">
        <FaGlobe className="w-2.5 h-2.5 text-[#9a7dff] shrink-0" />
        <span className="text-[9px] font-medium text-[#d8cdff] truncate">
          {PHONE_URL.slice(0, typed)}
          {!reduceMotion && (
            <span className="inline-block w-px h-[9px] bg-[#9a7dff] ml-px align-middle animate-pulse" />
          )}
        </span>
      </div>

      {/* page reveal: a crisp built webpage layout reads better than a
          screenshot would at this tiny scale, and needs no extra asset */}
      <div className="relative w-full h-[calc(100%-24px)] bg-gradient-to-br from-[#1A002D] to-[#3a1868]">
        <motion.div
          className="absolute inset-0 flex flex-col gap-1.5 p-2.5"
          initial={false}
          animate={{ opacity: showSite ? 1 : 0, scale: showSite ? 1 : 0.96 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between">
            <div className="h-1.5 w-6 rounded-full bg-[#c9b8ff]/70" />
            <div className="flex gap-1">
              <div className="h-1 w-3 rounded-full bg-white/25" />
              <div className="h-1 w-3 rounded-full bg-white/25" />
            </div>
          </div>
          <div className="h-6 w-4/5 rounded-sm bg-white/15 mt-1" />
          <div className="h-1.5 w-full rounded-full bg-white/10" />
          <div className="h-1.5 w-3/5 rounded-full bg-white/10" />
          <div className="flex gap-1.5 mt-1.5 flex-1">
            <div className="flex-1 rounded-md bg-white/10" />
            <div className="flex-1 rounded-md bg-white/10" />
          </div>
        </motion.div>

        {!showSite && (
          <div className="absolute inset-0 flex flex-col gap-1.5 p-2.5">
            <div className="h-2 w-3/4 rounded-full bg-white/10" />
            <div className="h-2 w-full rounded-full bg-white/5" />
            <div className="h-2 w-5/6 rounded-full bg-white/5" />
          </div>
        )}
      </div>
    </div>
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
        <motion.div
          className="relative w-[570px] h-[570px] -translate-x-1/2"
          style={reduceMotion ? undefined : { rotateX, rotateY }}
        >
          <img
            src="/phone.png"
            alt="Hand holding a phone displaying a Jowis Studio web project"
            className="w-full h-full"
            draggable={false}
          />
          <PhoneScreenDemo reduceMotion={reduceMotion} />
        </motion.div>
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
