import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const teamMembers = [
  { name: "Andrew", color: "cyan", top: 15, left: 12 },
  { name: "Seyi", color: "gray", top: 12, left: 78 },
  { name: "Johnson", color: "red", top: 45, left: 8 },
  { name: "Wilson", color: "yellow", top: 25, left: 85 },
  { name: "Tolu", color: "cyan", top: 75, left: 82 },
  { name: "Feranmi", color: "orange", top: 68, left: 18 },
];

// ---------------- COLORS ---------------- //
const getColorClasses = (color) => {
  switch (color) {
    case "cyan":
      return "bg-cyan-400 text-black hover:shadow-cyan-400/50";
    case "red":
      return "bg-red-500 text-white hover:shadow-red-500/50";
    case "yellow":
      return "bg-yellow-300 text-black hover:shadow-yellow-300/50";
    case "orange":
      return "bg-orange-500 text-white hover:shadow-orange-500/50";
    case "gray":
      return "bg-gray-400 text-black hover:shadow-gray-400/50";
    default:
      return "bg-white text-black";
  }
};

// ---------------- TEAM BADGES ---------------- //
const TeamMemberBadge = ({ member }) => {
  const [pos, setPos] = useState({ top: member.top, left: member.left });
  const [vel, setVel] = useState({
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPos((prev) => {
        let newTop = prev.top + vel.vy;
        let newLeft = prev.left + vel.vx;
        let { vx, vy } = vel;

        // Bounce on edges
        if (newTop < 5 || newTop > 95) {
          vy = -vy;
          newTop = Math.max(5, Math.min(95, newTop));
        }
        if (newLeft < 5 || newLeft > 95) {
          vx = -vx;
          newLeft = Math.max(5, Math.min(95, newLeft));
        }

        setVel({ vx, vy });
        return { top: newTop, left: newLeft };
      });
    }, 50);

    return () => clearInterval(interval);
  }, [vel]);

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-75 ease-linear cursor-pointer"
      style={{
        top: `${pos.top}%`,
        left: `${pos.left}%`,
      }}
    >
      <div
        className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full ${getColorClasses(
          member.color
        )}`}
      >
        <FaArrowRight />
        {member.name}
      </div>
    </div>
  );
};

// ---------------- DRIFTING STAR ---------------- //
const Star = () => {
  const [pos, setPos] = useState({
    top: Math.random() * 100,
    left: Math.random() * 100,
  });
  const [vel, setVel] = useState({
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
  });
  const size = Math.random() * 2 + 1;
  const delay = Math.random() * 3; // twinkle offset

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
    }, 120);

    return () => clearInterval(interval);
  }, [vel]);

  return (
    <span
      className="absolute rounded-full bg-white opacity-70"
      style={{
        width: size,
        height: size,
        top: `${pos.top}%`,
        left: `${pos.left}%`,
        animation: `twinkle 3s ease-in-out ${delay}s infinite`,
      }}
    />
  );
};

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0a0f1c] to-[#1a2238] text-white overflow-hidden">
      {/* Background Stars (drifting + twinkling) */}
      {Array.from({ length: 50 }).map((_, i) => (
        <Star key={i} />
      ))}

      {/* Team Members */}
      {teamMembers.map((member, i) => (
        <TeamMemberBadge key={i} member={member} />
      ))}

      {/* Central Card */}
      <div className="flex items-center justify-center min-h-screen absolute top-0 left-0 w-full z-10 pointer-events-none">
        <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-white to-purple-400 bg-clip-text text-transparent drop-shadow-lg px-4">
          A Selection of the best projects
          <br />
          created by the Jowis Team
        </h1>
      </div>

      {/* Star animations */}
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.8; transform: scale(1); }
            50% { opacity: 0.2; transform: scale(0.8); }
          }
        `}
      </style>
    </div>
  );
};

export default Index;
