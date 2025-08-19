import React from "react";
import { FaStar } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

// FloatingBadge Component
const FloatingBadge = ({ name, variant = "cyan", className = "" }) => {
  const colors = {
    cyan: "bg-cyan-500/20 text-cyan-300 border-cyan-400/50",
    pink: "bg-pink-500/20 text-pink-300 border-pink-400/50",
    red: "bg-red-500/20 text-red-300 border-red-400/50",
    yellow: "bg-yellow-500/20 text-yellow-300 border-yellow-400/50",
    orange: "bg-orange-500/20 text-orange-300 border-orange-400/50",
  };

  return (
    <div
      className={`px-4 py-2 rounded-full border backdrop-blur-md shadow-lg flex items-center gap-2 ${colors[variant]} ${className}`}
    >
      <FaUserCircle className="text-xl" />
      <span className="font-medium">{name}</span>
    </div>
  );
};

// StarField Component
const StarField = () => {
  const stars = Array.from({ length: 40 }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 2 + 1}px`,
    animation: ["animate-pulse", "animate-bounce", "animate-ping"][
      Math.floor(Math.random() * 3)
    ],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star, idx) => (
        <FaStar
          key={idx}
          className={`absolute text-white opacity-70 ${star.animation}`}
          style={{
            top: star.top,
            left: star.left,
            fontSize: star.size,
          }}
        />
      ))}
    </div>
  );
};

// Index Component
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0a001a] to-[#1a0033] relative overflow-hidden">
      {/* Starfield */}
      <StarField />

      {/* Floating Name Badges */}
      <FloatingBadge
        name="Andrew"
        variant="cyan"
        className="absolute top-32 left-32 animate-bounce"
      />
      <FloatingBadge
        name="Seyi"
        variant="pink"
        className="absolute top-40 right-40 animate-pulse"
      />
      <FloatingBadge
        name="Johnson"
        variant="red"
        className="absolute top-72 left-80 animate-bounce"
      />
      <FloatingBadge
        name="Wilson"
        variant="yellow"
        className="absolute top-64 right-80 animate-pulse"
      />
      <FloatingBadge
        name="Feranmi"
        variant="orange"
        className="absolute bottom-48 left-64 animate-bounce"
      />
      <FloatingBadge
        name="Tolu"
        variant="cyan"
        className="absolute bottom-40 right-72 animate-pulse"
      />

      {/* Central Content */}
      <div className="min-h-screen flex items-center justify-center px-8">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            A Selection of the best projects
            <br />
            created by the Jowis Team
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
