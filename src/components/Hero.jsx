import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section className="relative min-h-screen w-full bg-[#1A002D] text-white overflow-hidden px-4 sm:px-6 font-sans flex flex-col justify-center">
      {/* Stars */}
      {Array.from({ length: 30 }).map((_, i) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const randomDuration = 8 + Math.random() * 12;

        return (
          <motion.div
            key={`star-${i}`}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            initial={{ x: `${randomX}vw`, y: `${randomY}vh`, opacity: 0 }}
            animate={{
              x: [`${randomX}vw`, `${Math.random() * 100}vw`],
              y: [`${randomY}vh`, `${Math.random() * 100}vh`],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

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
        <motion.img
          src="/assets/cityscape.png"
          alt="Cityscape"
          className="w-[80%] max-w-[320px] sm:max-w-[500px] md:max-w-[850px] lg:max-w-[1000px] mb-4 sm:mb-6 md:mb-0 relative z-10 md:-mt-12 lg:-mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        {/* Heading overlaps image on desktop */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent leading-snug sm:leading-tight relative z-30 md:-mt-24 lg:-mt-32"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Building reliable digital solutions
          <br className="hidden sm:block" />
          for growing businesses.
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
          <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-md bg-gradient-to-r from-[#7B2FF7] to-[#3A0CA3] text-white text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:scale-105 hover:shadow-purple-500/50 transition-transform">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
