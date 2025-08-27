// import React, { useMemo } from "react";
// import { FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   // Generate drifting stars (random start & end positions, varied duration)
//   const stars = useMemo(
//     () =>
//       Array.from({ length: 35 }).map((_, i) => {
//         const startX = Math.random() * 100;
//         const startY = Math.random() * 100;
//         const endX = Math.random() * 100;
//         const endY = Math.random() * 100;
//         const duration = 12 + Math.random() * 18;
//         return { id: i, startX, startY, endX, endY, duration };
//       }),
//     []
//   );

//   return (
//     <section className="relative w-full h-[600px] flex items-center justify-center bg-[#140021] overflow-hidden">
//       {/* Pattern image synced with floating effect */}
//       <div
//         className="absolute pointer-events-none z-0
//                    w-[20vw] max-w-[250px] h-auto aspect-[16/9]
//                    bg-center bg-no-repeat bg-contain opacity-60
//                    animate-floatingScene"
//         style={{
//           top: "22%",
//           left: "calc(50% - 180px)",
//           backgroundImage: `url('/Jowis-Pattern.png')`,
//         }}
//       ></div>

//       {/* Background drifting stars */}
//       <div className="absolute inset-0 pointer-events-none z-0">
//         {stars.map(({ id, startX, startY, endX, endY, duration }) => (
//           <motion.div
//             key={`star-${id}`}
//             className="absolute rounded-full bg-white"
//             style={{
//               width: `${Math.random() * 2 + 1}px`,
//               height: `${Math.random() * 2 + 1}px`,
//             }}
//             initial={{ x: `${startX}vw`, y: `${startY}vh`, opacity: 0 }}
//             animate={{
//               x: [`${startX}vw`, `${endX}vw`],
//               y: [`${startY}vh`, `${endY}vh`],
//               opacity: [0, 1, 0],
//             }}
//             transition={{
//               duration,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       {/* Purple glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-purple-500/40 rounded-full blur-[120px] z-0"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 w-full max-w-3xl mx-auto">
//         <h1 className="text-4xl md:text-6xl font-semibold text-purple-300 leading-snug relative">
//           <span className="relative z-10">Effective</span> tech solutions
//           <br />
//           <span className="text-purple-200">for real business needs.</span>
//         </h1>
//         <p className="text-gray-300 mt-4 text-lg md:text-xl">
//           We focus on what works, not just what’s trendy.
//         </p>
//         <button className="mt-8 px-8 py-4 flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white rounded-md transition duration-300 mx-auto text-lg">
//           Get Started today
//           <FaArrowRight />
//         </button>
//       </div>

//       {/* Floating animation for pattern image */}
//       <style>
//         {`
//           @keyframes floatingScene {
//             0% { transform: translateY(0) scale(1); }
//             50% { transform: translateY(-8px) scale(1.03); }
//             100% { transform: translateY(0) scale(1); }
//           }
//           .animate-floatingScene {
//             animation: floatingScene 14s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </section>
//   );
// }

import React, { useMemo } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function HeroSection() {
  // Generate drifting stars (random start & end positions, varied duration)
  const stars = useMemo(
    () =>
      Array.from({ length: 35 }).map((_, i) => {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = Math.random() * 100;
        const endY = Math.random() * 100;
        const duration = 12 + Math.random() * 18;
        return { id: i, startX, startY, endX, endY, duration };
      }),
    []
  );

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-[#140021] overflow-hidden">
      {/* Pattern image synced with floating effect */}
      <div
        className="absolute pointer-events-none z-0 
                   w-[20vw] max-w-[250px] h-auto aspect-[16/9] 
                   bg-center bg-no-repeat bg-contain opacity-60 
                   animate-floatingScene"
        style={{
          top: "32%",
          left: "calc(44% - 180px)",
          backgroundImage: `url('/Jowis-Pattern.png')`,
        }}
      ></div>

      {/* Background drifting stars */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {stars.map(({ id, startX, startY, endX, endY, duration }) => (
          <motion.div
            key={`star-${id}`}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
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

      {/* Purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-purple-500/40 rounded-full blur-[120px] z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-3xl mx-auto">
        <h1 className="m-0 text-4xl md:text-6xl font-semibold text-purple-300 leading-tight relative">
          <span className="relative z-10 leading-none">Effective</span> tech
          solutions
          <br />
          <span className="text-purple-200 leading-none">
            for real business needs.
          </span>
        </h1>
        <p className="mt-2 text-gray-300 text-lg md:text-xl">
          We focus on what works, not just what’s trendy.
        </p>
        <button className="mt-6 px-8 py-4 flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white rounded-md transition duration-300 mx-auto text-lg">
          Get Started today
          <FaArrowRight />
        </button>
      </div>

      {/* Floating animation for pattern image */}
      <style>
        {`
          @keyframes floatingScene {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-8px) scale(1.03); }
            100% { transform: translateY(0) scale(1); }
          }
          .animate-floatingScene {
            animation: floatingScene 14s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
