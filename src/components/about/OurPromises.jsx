import React, { useMemo } from "react";
import { motion } from "framer-motion";

const OurPromise = () => {
  // Generate stars only once on mount
  const stars = useMemo(
    () =>
      Array.from({ length: 30 }).map((_, i) => {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = Math.random() * 100;
        const endY = Math.random() * 100;
        const duration = 10 + Math.random() * 15;
        return {
          id: i,
          startX,
          startY,
          endX,
          endY,
          size: Math.random() * 2 + 1,
          duration,
        };
      }),
    []
  );

  return (
    <section className="relative bg-[#1b002e] text-center text-white py-20 overflow-hidden">
      {/* Drifting Stars */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {stars.map(({ id, startX, startY, endX, endY, size, duration }) => (
          <motion.span
            key={`star-${id}`}
            className="absolute rounded-full bg-white opacity-70"
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
            initial={{ x: `${startX}vw`, y: `${startY}vh`, opacity: 0 }}
            animate={{
              x: [`${startX}vw`, `${endX}vw`],
              y: [`${startY}vh`, `${endY}vh`],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Top Icon with cut-in effect */}
      <div className="flex justify-center mb-8 relative z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[15%] h-[2px] bg-purple-900/30 shadow-[0_0_6px_rgba(88,28,135,0.4)]" />
        <div className="relative w-40 h-20 overflow-hidden">
          <img
            src="/Vector.png"
            alt="Top Icon"
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 object-contain"
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-200 mb-4 relative z-10">
        Our Promise
      </h2>

      {/* Description */}
      <p className="max-w-lg mx-auto text-gray-300 leading-relaxed px-4 relative z-10">
        At Jowis, we don’t just offer solutions, we build trust. We promise to
        simplify the complex, communicate clearly, and deliver reliable results
        on time. You can count on us to be consistent, transparent, and
        committed to your success.
      </p>

      {/* Signature */}
      <div className="flex justify-center mt-8 relative z-10">
        <img
          src="/signature.png"
          alt="Signature"
          className="h-12 object-contain"
        />
      </div>

      {/* Stamp */}
      <div className="flex justify-center mt-6 relative z-10">
        <img
          src="/stamp.png"
          alt="Stamp"
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
    </section>
  );
};

export default OurPromise;
