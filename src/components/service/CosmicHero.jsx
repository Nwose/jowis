import React from "react";
import { FaGlobe } from "react-icons/fa";

const CosmicHero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-[#0a001a] to-[#1a0033] overflow-hidden text-white">
      {/* Animated Stars */}
      <div
        className="absolute bg-white rounded-full animate-bounce"
        style={{ top: "10%", left: "10%", width: "2px", height: "2px" }}
      />
      <div
        className="absolute bg-white rounded-full animate-ping"
        style={{ top: "20%", right: "15%", width: "3px", height: "3px" }}
      />
      <div
        className="absolute bg-white rounded-full animate-pulse"
        style={{ top: "15%", left: "80%", width: "1px", height: "1px" }}
      />
      <div
        className="absolute bg-white rounded-full animate-bounce"
        style={{ bottom: "25%", left: "5%", width: "2px", height: "2px" }}
      />
      <div
        className="absolute bg-white rounded-full animate-ping"
        style={{ bottom: "15%", right: "20%", width: "2px", height: "2px" }}
      />
      <div
        className="absolute bg-white rounded-full animate-pulse"
        style={{ top: "60%", left: "90%", width: "1px", height: "1px" }}
      />
      <div
        className="absolute bg-white rounded-full animate-bounce"
        style={{ top: "70%", left: "15%", width: "3px", height: "3px" }}
      />
      <div
        className="absolute bg-white rounded-full animate-ping"
        style={{ bottom: "40%", right: "10%", width: "1px", height: "1px" }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-32">
        {/* Icon */}
        <div className="mx-auto mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-purple-600/30">
          <FaGlobe className="w-8 h-8 text-purple-400" />
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight">
          Website Design, Mobile
          <br />
          Design & Development
        </h1>

        {/* Glowing Bar */}
        <div className="w-32 h-1 mx-auto mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>

        {/* Tagline */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-gray-300 leading-relaxed">
          Your digital presence
          <br />
          should work seamlessly
          <br />
          everywhere.
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto text-gray-400 leading-relaxed">
          We create custom, responsive websites and mobile experiences that are
          fast, scalable, designed and built to convert with your brand and
          users in mind.
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
