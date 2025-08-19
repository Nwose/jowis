// import React from "react";

// // Generate star positions and animation settings
// const stars = Array.from({ length: 20 }, (_, i) => ({
//   id: i,
//   top: Math.random() * 100 + "%",
//   left: Math.random() * 100 + "%",
//   size: Math.random() * 2 + 1 + "px",
//   duration: Math.random() * 8 + 5 + "s",
//   delay: Math.random() * 5 + "s",
// }));

// const OurPromise = () => {
//   return (
//     <section className="relative bg-[#1b002e] text-center text-white py-20 overflow-hidden">
//       {/* Moving Stars */}
//       {stars.map((star) => (
//         <span
//           key={star.id}
//           className="absolute bg-white rounded-full opacity-70 animate-brownian"
//           style={{
//             top: star.top,
//             left: star.left,
//             width: star.size,
//             height: star.size,
//             animationDuration: star.duration,
//             animationDelay: star.delay,
//           }}
//         />
//       ))}

//       {/* Top Icon */}
//       <div className="flex justify-center mb-8 relative z-10">
//         <img
//           src="/Vector.png"
//           alt="Top Icon"
//           className="w-28 h-28 object-contain"
//         />
//       </div>

//       {/* Title */}
//       <h2 className="text-2xl font-semibold text-gray-200 mb-4 relative z-10">
//         Our Promise
//       </h2>

//       {/* Description */}
//       <p className="max-w-lg mx-auto text-gray-300 leading-relaxed px-4 relative z-10">
//         At Jowis, we don’t just offer solutions, we build trust. We promise to
//         simplify the complex, communicate clearly, and deliver reliable results
//         on time. You can count on us to be consistent, transparent, and
//         committed to your success.
//       </p>

//       {/* Signature */}
//       <div className="flex justify-center mt-8 relative z-10">
//         <img
//           src="/signature.png"
//           alt="Signature"
//           className="h-12 object-contain"
//         />
//       </div>

//       {/* Stamp */}
//       <div className="flex justify-center mt-6 relative z-10">
//         <img
//           src="/stamp.png"
//           alt="Stamp"
//           className="w-20 h-20 rounded-full object-cover"
//         />
//       </div>

//       {/* Brownian motion animation */}
//       <style>{`
//         @keyframes brownian {
//           0% { transform: translate(0, 0); }
//           25% { transform: translate(3px, -3px); }
//           50% { transform: translate(-3px, 2px); }
//           75% { transform: translate(2px, 3px); }
//           100% { transform: translate(0, 0); }
//         }
//         .animate-brownian {
//           animation-name: brownian;
//           animation-iteration-count: infinite;
//           animation-timing-function: ease-in-out;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default OurPromise;

// import React from "react";

// // Generate star positions and animation settings
// const stars = Array.from({ length: 20 }, (_, i) => ({
//   id: i,
//   top: Math.random() * 100 + "%",
//   left: Math.random() * 100 + "%",
//   size: Math.random() * 2 + 1 + "px",
//   duration: Math.random() * 8 + 5 + "s",
//   delay: Math.random() * 5 + "s",
// }));

// const OurPromise = () => {
//   return (
//     <section className="relative bg-[#1b002e] text-center text-white py-20 overflow-hidden">
//       {/* Moving Stars */}
//       {stars.map((star) => (
//         <span
//           key={star.id}
//           className="absolute bg-white rounded-full opacity-70 animate-brownian"
//           style={{
//             top: star.top,
//             left: star.left,
//             width: star.size,
//             height: star.size,
//             animationDuration: star.duration,
//             animationDelay: star.delay,
//           }}
//         />
//       ))}

//       {/* Top Icon with cut-in effect */}
//       <div className="flex justify-center mb-8 relative z-10">
//         <div className="relative w-40 h-20 overflow-hidden border-t border-purple-400">
//           <img
//             src="/Vector.png"
//             alt="Top Icon"
//             className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 object-contain"
//           />
//         </div>
//       </div>

//       {/* Title */}
//       <h2 className="text-2xl font-semibold text-gray-200 mb-4 relative z-10">
//         Our Promise
//       </h2>

//       {/* Description */}
//       <p className="max-w-lg mx-auto text-gray-300 leading-relaxed px-4 relative z-10">
//         At Jowis, we don’t just offer solutions, we build trust. We promise to
//         simplify the complex, communicate clearly, and deliver reliable results
//         on time. You can count on us to be consistent, transparent, and
//         committed to your success.
//       </p>

//       {/* Signature */}
//       <div className="flex justify-center mt-8 relative z-10">
//         <img
//           src="/signature.png"
//           alt="Signature"
//           className="h-12 object-contain"
//         />
//       </div>

//       {/* Stamp */}
//       <div className="flex justify-center mt-6 relative z-10">
//         <img
//           src="/stamp.png"
//           alt="Stamp"
//           className="w-20 h-20 rounded-full object-cover"
//         />
//       </div>

//       {/* Brownian motion animation */}
//       <style>{`
//         @keyframes brownian {
//           0% { transform: translate(0, 0); }
//           25% { transform: translate(3px, -3px); }
//           50% { transform: translate(-3px, 2px); }
//           75% { transform: translate(2px, 3px); }
//           100% { transform: translate(0, 0); }
//         }
//         .animate-brownian {
//           animation-name: brownian;
//           animation-iteration-count: infinite;
//           animation-timing-function: ease-in-out;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default OurPromise;

import React from "react";

// Generate star positions and animation settings
const stars = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  top: Math.random() * 100 + "%",
  left: Math.random() * 100 + "%",
  size: Math.random() * 2 + 1 + "px",
  duration: Math.random() * 8 + 5 + "s",
  delay: Math.random() * 5 + "s",
}));

const OurPromise = () => {
  return (
    <section className="relative bg-[#1b002e] text-center text-white py-20 overflow-hidden">
      {/* Moving Stars */}
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute bg-white rounded-full opacity-70 animate-brownian"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
            animationDelay: star.delay,
          }}
        />
      ))}

      {/* Top Icon with cut-in effect */}
      <div className="flex justify-center mb-8 relative z-10">
        {/* Glow line outside overflow-hidden so it can extend */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[15%] h-[2px] bg-purple-900/30 shadow-[0_0_6px_rgba(88,28,135,0.4)]" />

        {/* Cropped icon container */}
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

      {/* Brownian motion animation */}
      <style>{`
        @keyframes brownian {
          0% { transform: translate(0, 0); }
          25% { transform: translate(3px, -3px); }
          50% { transform: translate(-3px, 2px); }
          75% { transform: translate(2px, 3px); }
          100% { transform: translate(0, 0); }
        }
        .animate-brownian {
          animation-name: brownian;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default OurPromise;
