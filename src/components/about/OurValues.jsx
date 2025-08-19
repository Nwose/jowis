import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaHourglassHalf, FaSearch } from "react-icons/fa";

export default function OurValues() {
  // Generate stars once
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
    <section className="relative w-full h-[75vh] py-20 bg-[#140021] text-white overflow-hidden">
      {/* Background drifting stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
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

      {/* Glow behind heading */}
      <div
        className="absolute w-[350px] h-[150px] bg-no-repeat bg-contain opacity-70 z-0"
        style={{
          backgroundImage: `url('/Jowis-Pattern.png')`,
          top: "29%",
          left: "calc(50% - 480px)",
        }}
      ></div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col justify-center items-center h-full">
        {/* Heading + description */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-8 justify-center items-center w-full -pt-8">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-200 mb-4 md:mb-0 text-center md:text-left">
            Our Values
          </h2>
          <p className="text-gray-300 md:max-w-2xl text-center md:text-left">
            We build tech solutions on principles that don’t change which are
            clarity, consistency, and care that you can count on.
          </p>
        </div>

        {/* Value cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div
                className="absolute inset-0 -top-3 -left-6 w-[80px] h-[40px] 
                bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_1px,_transparent_1px)] 
                bg-[length:8px_8px] opacity-40"
              ></div>
              <div className="relative z-10 w-14 h-14 flex items-center justify-center bg-purple-600 rounded">
                <FaLightbulb size={28} />
              </div>
            </div>
            <p className="text-gray-300">We fix problems & improve systems.</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div
                className="absolute inset-0 -top-3 -left-6 w-[80px] h-[40px] 
                bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_1px,_transparent_1px)] 
                bg-[length:8px_8px] opacity-40"
              ></div>
              <div className="relative z-10 w-14 h-14 flex items-center justify-center bg-purple-600 rounded">
                <FaHourglassHalf size={28} />
              </div>
            </div>
            <p className="text-gray-300">Our promises are our deadlines.</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <div
                className="absolute inset-0 -top-3 -left-6 w-[80px] h-[40px] 
                bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_1px,_transparent_1px)] 
                bg-[length:8px_8px] opacity-40"
              ></div>
              <div className="relative z-10 w-14 h-14 flex items-center justify-center bg-purple-600 rounded">
                <FaSearch size={28} />
              </div>
            </div>
            <p className="text-gray-300">
              We turn complex tech into useful tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
