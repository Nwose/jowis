// import React from "react";
// import { FaArrowRight } from "react-icons/fa";

// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-[500px] flex items-center justify-center bg-[#140021] overflow-hidden">
//       {/* Small pattern image behind header text */}
//       <div
//         className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
//         style={{
//           width: "500px",
//           height: "300px",
//           backgroundImage: `url('/Jowis-Pattern.png')`,
//           backgroundSize: "contain",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "center",
//           opacity: 0.25,
//         }}
//       ></div>

//       {/* Random floating stars */}
//       <div className="absolute inset-0 overflow-hidden z-0">
//         {Array.from({ length: 20 }).map((_, i) => {
//           const randomLeft = Math.random() * 100;
//           const randomTop = Math.random() * 100;
//           const randomDuration = 20 + Math.random() * 15;
//           const randomDelay = Math.random() * 10;
//           const randomX = (Math.random() - 0.5) * 40;
//           const randomY = (Math.random() - 0.5) * 40;

//           return (
//             <div
//               key={i}
//               className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-80"
//               style={{
//                 top: `${randomTop}%`,
//                 left: `${randomLeft}%`,
//                 animation: `moveStar-${i} ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`,
//               }}
//             >
//               <style>
//                 {`
//                   @keyframes moveStar-${i} {
//                     0% { transform: translate(0, 0); }
//                     50% { transform: translate(${randomX}px, ${randomY}px); }
//                     100% { transform: translate(0, 0); }
//                   }
//                 `}
//               </style>
//             </div>
//           );
//         })}
//       </div>

//       {/* Purple glow effect */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[250px] bg-purple-500/40 rounded-full blur-[120px] z-0"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 w-full max-w-3xl mx-auto">
//         <h1 className="text-4xl md:text-6xl font-semibold text-purple-300 leading-snug">
//           Effective tech solutions
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
//     </section>
//   );
// }

// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// // If your image is in src/assets, uncomment the next line and adjust path:
// // import pattern from "../assets/Jowis-Pattern.png";

// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-[500px] flex items-center justify-center bg-[#140021] overflow-hidden">
//       {/* Pattern image with gentle motion */}
//       <div
//         className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0
//                    w-[40vw] max-w-[600px] h-auto aspect-[16/9]
//                    bg-center bg-no-repeat bg-contain opacity-60
//                    animate-floatingPattern"
//         style={{
//           backgroundImage: `url('/Jowis-Pattern.png')`, // or `url(${pattern})` if imported
//         }}
//       ></div>

//       {/* Floating stars */}
//       <div className="absolute inset-0 overflow-hidden z-0">
//         {Array.from({ length: 20 }).map((_, i) => {
//           const randomLeft = Math.random() * 100;
//           const randomTop = Math.random() * 100;
//           const randomDuration = 20 + Math.random() * 15;
//           const randomDelay = Math.random() * 10;
//           const randomX = (Math.random() - 0.5) * 40;
//           const randomY = (Math.random() - 0.5) * 40;

//           return (
//             <div
//               key={i}
//               className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-80"
//               style={{
//                 top: `${randomTop}%`,
//                 left: `${randomLeft}%`,
//                 animation: `moveStar-${i} ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`,
//               }}
//             >
//               <style>
//                 {`
//                   @keyframes moveStar-${i} {
//                     0% { transform: translate(0, 0); }
//                     50% { transform: translate(${randomX}px, ${randomY}px); }
//                     100% { transform: translate(0, 0); }
//                   }
//                 `}
//               </style>
//             </div>
//           );
//         })}
//       </div>

//       {/* Purple glow */}
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[250px] bg-purple-500/40 rounded-full blur-[120px] z-0"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 w-full max-w-3xl mx-auto">
//         <h1 className="text-4xl md:text-6xl font-semibold text-purple-300 leading-snug">
//           Effective tech solutions
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

//       {/* Floating animation style */}
//       <style>
//         {`
//           @keyframes floatingPattern {
//             0% { transform: translate(-50%, -50%) scale(1); }
//             50% { transform: translate(-50%, -52%) scale(1.05); }
//             100% { transform: translate(-50%, -50%) scale(1); }
//           }
//           .animate-floatingPattern {
//             animation: floatingPattern 12s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </section>
//   );
// }

// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// // If your image is in src/assets, uncomment and adjust path:
// // import pattern from "../assets/Jowis-Pattern.png";

// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-[600px] flex items-center justify-center bg-[#140021] overflow-hidden">
//       {/* Pattern image synced with stars, behind first letter */}
//       <div
//         className="absolute pointer-events-none z-0
//                    w-[20vw] max-w-[250px] h-auto aspect-[16/9]
//                    bg-center bg-no-repeat bg-contain opacity-60
//                    animate-floatingScene"
//         style={{
//           top: "35%", // places it roughly at heading line height
//           left: "calc(50% - 260px)", // shift to align with first letter
//           backgroundImage: `url('/Jowis-Pattern.png')`, // or `url(${pattern})`
//         }}
//       ></div>

//       {/* Floating stars (synced motion) */}
//       <div className="absolute inset-0 overflow-hidden z-0 animate-floatingScene">
//         {Array.from({ length: 20 }).map((_, i) => {
//           const randomLeft = Math.random() * 100;
//           const randomTop = Math.random() * 100;
//           const randomDuration = 20 + Math.random() * 15;
//           const randomDelay = Math.random() * 10;
//           const randomX = (Math.random() - 0.5) * 40;
//           const randomY = (Math.random() - 0.5) * 40;

//           return (
//             <div
//               key={i}
//               className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-80"
//               style={{
//                 top: `${randomTop}%`,
//                 left: `${randomLeft}%`,
//                 animation: `moveStar-${i} ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`,
//               }}
//             >
//               <style>
//                 {`
//                   @keyframes moveStar-${i} {
//                     0% { transform: translate(0, 0); }
//                     50% { transform: translate(${randomX}px, ${randomY}px); }
//                     100% { transform: translate(0, 0); }
//                   }
//                 `}
//               </style>
//             </div>
//           );
//         })}
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

//       {/* Floating animation for synced motion */}
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

import React from "react";
import { FaArrowRight } from "react-icons/fa";
// If your image is in src/assets, uncomment and adjust path:
// import pattern from "../assets/Jowis-Pattern.png";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center bg-[#140021] overflow-hidden">
      {/* Pattern image synced with stars, positioned at top of first letter */}
      <div
        className="absolute pointer-events-none z-0 
                   w-[20vw] max-w-[250px] h-auto aspect-[16/9] 
                   bg-center bg-no-repeat bg-contain opacity-60 
                   animate-floatingScene"
        style={{
          top: "22%", // ⬅ Move image up/down (smaller % = higher)
          left: "calc(50% - 180px)", // ⬅ Move image left/right (bigger px = more to left)
          backgroundImage: `url('/Jowis-Pattern.png')`, // or `url(${pattern})`
        }}
      ></div>

      {/* Floating stars (synced motion) */}
      <div className="absolute inset-0 overflow-hidden z-0 animate-floatingScene">
        {Array.from({ length: 20 }).map((_, i) => {
          const randomLeft = Math.random() * 100;
          const randomTop = Math.random() * 100;
          const randomDuration = 20 + Math.random() * 15;
          const randomDelay = Math.random() * 10;
          const randomX = (Math.random() - 0.5) * 40;
          const randomY = (Math.random() - 0.5) * 40;

          return (
            <div
              key={i}
              className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-80"
              style={{
                top: `${randomTop}%`,
                left: `${randomLeft}%`,
                animation: `moveStar-${i} ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`,
              }}
            >
              <style>
                {`
                  @keyframes moveStar-${i} {
                    0% { transform: translate(0, 0); }
                    50% { transform: translate(${randomX}px, ${randomY}px); }
                    100% { transform: translate(0, 0); }
                  }
                `}
              </style>
            </div>
          );
        })}
      </div>

      {/* Purple glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-purple-500/40 rounded-full blur-[120px] z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-semibold text-purple-300 leading-snug relative">
          <span className="relative z-10">Effective</span> tech solutions
          <br />
          <span className="text-purple-200">for real business needs.</span>
        </h1>
        <p className="text-gray-300 mt-4 text-lg md:text-xl">
          We focus on what works, not just what’s trendy.
        </p>
        <button className="mt-8 px-8 py-4 flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white rounded-md transition duration-300 mx-auto text-lg">
          Get Started today
          <FaArrowRight />
        </button>
      </div>

      {/* Floating animation for synced motion */}
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
