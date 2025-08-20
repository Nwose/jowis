import React, { useEffect, useState } from "react";
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

        // Bounce
        if (newTop < 2 || newTop > 98) {
          vy = -vy;
          newTop = Math.max(2, Math.min(98, newTop));
        }
        if (newLeft < 2 || newLeft > 98) {
          vx = -vx;
          newLeft = Math.max(2, Math.min(98, newLeft));
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

// ---------------- MOVING STAR ---------------- //
const Star = () => {
  const [pos, setPos] = useState({
    top: Math.random() * 100,
    left: Math.random() * 100,
  });
  const [vel, setVel] = useState({
    vx: (Math.random() - 0.5) * 0.5, // slower speed
    vy: (Math.random() - 0.5) * 0.5,
  });
  const size = Math.random() * 2 + 1; // 1px - 3px

  useEffect(() => {
    const interval = setInterval(() => {
      setPos((prev) => {
        let newTop = prev.top + vel.vy;
        let newLeft = prev.left + vel.vx;
        let { vx, vy } = vel;

        // Bounce off edges
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
    }, 100);

    return () => clearInterval(interval);
  }, [vel]);

  return (
    <div
      className="absolute rounded-full bg-white opacity-80"
      style={{
        width: size,
        height: size,
        top: `${pos.top}%`,
        left: `${pos.left}%`,
      }}
    />
  );
};

const TeamMember = () => {
  return (
    <div className="relative min-h-screen bg-[#1A002D] text-white overflow-hidden">
      {/* Background Stars (now moving) */}
      {Array.from({ length: 50 }).map((_, i) => (
        <Star key={i} />
      ))}

      {/* Team Members */}
      {teamMembers.map((member, i) => (
        <TeamMemberBadge key={i} member={member} />
      ))}

      {/* Central Card */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="relative border-2 border-purple-500/40 rounded-lg p-8 max-w-lg text-center bg-purple-900/20 backdrop-blur-sm">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
            Built for Humans, <br /> by Humans
          </h1>
          <p className="text-white/80">
            We care about the people who use our products. <br />
            That's why we build with understanding, not just code, <br />
            so things feel, look, and work just right.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
