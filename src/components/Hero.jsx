import React from "react";
import { motion } from "framer-motion";
import StarField from "./StarField";

// Hand-placed to land on the skyline's building mass, not the empty sky
// around it, so the city genuinely reads as "lit up" rather than sparkling at random.
const CITY_LIGHTS = [
  { left: "12%", top: "58%", size: 3, delay: 0 },
  { left: "18%", top: "42%", size: 2, delay: 0.4 },
  { left: "24%", top: "66%", size: 3, delay: 1.1 },
  { left: "31%", top: "50%", size: 2, delay: 0.2 },
  { left: "37%", top: "35%", size: 3, delay: 1.6 },
  { left: "44%", top: "20%", size: 2, delay: 0.8 },
  { left: "49%", top: "44%", size: 3, delay: 0.5 },
  { left: "55%", top: "30%", size: 2, delay: 1.3 },
  { left: "61%", top: "55%", size: 3, delay: 0.1 },
  { left: "67%", top: "40%", size: 2, delay: 1.8 },
  { left: "73%", top: "60%", size: 3, delay: 0.9 },
  { left: "79%", top: "48%", size: 2, delay: 0.3 },
  { left: "85%", top: "62%", size: 3, delay: 1.5 },
  { left: "90%", top: "52%", size: 2, delay: 0.6 },
];

// Pulsing window lights + rising energy trails over the skyline, so it reads
// as a city running on live ICT infrastructure rather than a flat silhouette.
function CityGlowOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 mix-blend-screen">
      {CITY_LIGHTS.map((light, i) => (
        <span
          key={i}
          className="city-light absolute rounded-full bg-[#e7d9ff]"
          style={{
            left: light.left,
            top: light.top,
            width: light.size,
            height: light.size,
            animationDelay: `${light.delay}s`,
          }}
        />
      ))}

      {[28, 50, 72].map((left, i) => (
        <span
          key={`trail-${i}`}
          className="city-trail absolute bottom-[20%] w-px"
          style={{ left: `${left}%`, animationDelay: `${i * 1.3}s` }}
        />
      ))}

      <style>{`
        @keyframes city-light-pulse {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.6); }
        }
        .city-light {
          animation: city-light-pulse 3.4s ease-in-out infinite;
          box-shadow: 0 0 6px 1px rgba(231, 217, 255, 0.8);
        }
        @keyframes city-trail-rise {
          0% { height: 0; opacity: 0; }
          15% { opacity: 0.9; }
          85% { opacity: 0.4; }
          100% { height: 46%; opacity: 0; }
        }
        .city-trail {
          animation: city-trail-rise 4.5s ease-out infinite;
          background: linear-gradient(to top, rgba(184,144,255,0.9), rgba(184,144,255,0));
        }
        @media (prefers-reduced-motion: reduce) {
          .city-light,
          .city-trail {
            animation: none;
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}

const Hero = () => {
  return (
    <motion.section className="relative min-h-screen w-full bg-[#1A002D] text-white overflow-hidden px-4 sm:px-6 font-sans flex flex-col justify-center pt-[80px]">
      {/* Stars */}
      <StarField count={30} />

      {/* Purple cubes */}
      {Array.from({ length: 15 }).map((_, i) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;

        return (
          <div
            key={`cube-${i}`}
            className="absolute w-2 h-2 bg-purple-500/10"
            style={{ left: `${randomX}vw`, top: `${randomY}vh` }}
          />
        );
      })}

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center">
        {/* Image */}
        <motion.div
          className="relative z-10 w-[80%] max-w-[320px] sm:max-w-[500px] md:max-w-[850px] lg:max-w-[1000px] mb-4 sm:mb-6 md:mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img
            src="/assets/cityscape.png"
            alt="Jowis Studio digital solutions illustration"
            className="w-full"
          />
          <CityGlowOverlay />
        </motion.div>

        {/* Heading overlaps image nicely */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent leading-snug sm:leading-tight relative z-30 -mt-12 sm:-mt-16 md:-mt-24 lg:-mt-32"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Building reliable digital solutions
          <br className="hidden sm:block" />
          for businesses that need technology to work.
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="mt-3 text-sm sm:text-base md:text-lg text-gray-300 max-w-[90%] sm:max-w-[600px] relative z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          From websites to ICT support, we’re here to make tech simple
        </motion.p>

        {/* Button */}
        <motion.div
          className="mt-6 sm:mt-8 relative z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a
            href="#contact"
            className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-md bg-gradient-to-r from-[#7B2FF7] to-[#3A0CA3] text-white text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-purple-500/50 transition-transform"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
