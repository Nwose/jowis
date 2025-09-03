import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import andrewImg from "../../assets/andrew.JPG";
import seyiImg from "../../assets/seyi.png";
import wilsonImg from "../../assets/wilson.jpg";
import feranmiImg from "../../assets/feronmi.jpg";
import joyImg from "../../assets/joy.jpg";
import johnsonImg from "../../assets/johnson.jpg";
import wealthyImg from "../../assets/Wealthy.jpg";
const teamMembers = [
  {
    name: "Andrew",
    color: "cyan",
    top: 15,
    left: 12,
    role: "Frontend Developer",
    funFact: "Loves React and animations.",
    image: andrewImg,
  },
  {
    name: "Seyi",
    color: "gray",
    top: 12,
    left: 78,
    role: "Frontend Developer",
    funFact: "Specializes in bringing designs to life.",
    image: seyiImg,
  },
  {
    name: "Johnson",
    color: "red",
    top: 45,
    left: 8,
    role: "CEO",
    funFact: "Passionate about human-centered design.",
    image: johnsonImg,
  },
  {
    name: "Wilson",
    color: "yellow",
    top: 25,
    left: 85,
    role: "Graphhic Designer",
    funFact: "Ensures smooth collaboration across teams.",
    image: wilsonImg,
  },
  {
    name: "Tolu",
    color: "cyan",
    top: 75,
    left: 82,
    role: "UI/UX Designer",
    funFact: "Enjoys creating designs.",
    image: wealthyImg,
  },
  {
    name: "Feranmi",
    color: "orange",
    top: 68,
    left: 18,
    role: "Data Analyst",
    funFact: "Data Driven and loves insights.",
    image: feranmiImg,
  },
  {
    name: "Joy",
    color: "#68F02D",
    top: 68,
    left: 18,
    role: "Machine Learning Engineer",
    funFact: "Makes sure nothing breaks before launch.",
    image: joyImg,
  },
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
    case "#68F02D":
      return "bg-[#68F02D] text-black hover:shadow-[#68F02D]/50";
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
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setPos((prev) => {
        let newTop = prev.top + vel.vy;
        let newLeft = prev.left + vel.vx;
        let { vx, vy } = vel;

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
  }, [vel, paused]);

  return (
    <div
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
      style={{
        top: `${pos.top}%`,
        left: `${pos.left}%`,
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Badge */}
      <div
        className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition ${getColorClasses(
          member.color
        )}`}
      >
        <FaArrowRight />
        {member.name}
      </div>

      {/* Big Chat Box Popup */}
      <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-72 bg-black text-white rounded-2xl border-2 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)] p-5 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-top z-20">
        {/* Arrow */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-purple-500"></div>

        <div className="flex items-center gap-3 mb-3">
          <img
            src={member.image}
            alt={member.name}
            className="w-12 h-12 rounded-full border-2 border-purple-400"
          />
          <h3 className="text-lg font-bold" style={{ color: member.color }}>
            {member.name}
          </h3>
        </div>
        <p className="text-sm font-medium text-purple-300 mb-2">
          {member.role}
        </p>
        <p className="text-sm text-gray-300 leading-snug">{member.funFact}</p>
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
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
  });
  const size = Math.random() * 2 + 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setPos((prev) => {
        let newTop = prev.top + vel.vy;
        let newLeft = prev.left + vel.vx;
        let { vx, vy } = vel;

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
      {/* Background Stars */}
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

// import React, { useEffect, useState } from "react";
// import { FaArrowRight } from "react-icons/fa";

// const teamMembers = [
//   {
//     name: "Andrew",
//     color: "cyan",
//     top: 15,
//     left: 12,
//     role: "Frontend Developer",
//     funFact: "Loves React and animations.",
//   },
//   {
//     name: "Seyi",
//     color: "gray",
//     top: 12,
//     left: 78,
//     role: "Backend Engineer",
//     funFact: "Specializes in Node.js and APIs.",
//   },
//   {
//     name: "Johnson",
//     color: "red",
//     top: 45,
//     left: 8,
//     role: "UI/UX Designer",
//     funFact: "Passionate about human-centered design.",
//   },
//   {
//     name: "Wilson",
//     color: "yellow",
//     top: 25,
//     left: 85,
//     role: "Project Manager",
//     funFact: "Ensures smooth collaboration across teams.",
//   },
//   {
//     name: "Tolu",
//     color: "cyan",
//     top: 75,
//     left: 82,
//     role: "Fullstack Developer",
//     funFact: "Enjoys building with Next.js.",
//   },
//   {
//     name: "Feranmi",
//     color: "orange",
//     top: 68,
//     left: 18,
//     role: "QA Engineer",
//     funFact: "Makes sure nothing breaks before launch.",
//   },
// ];

// // ---------------- COLORS ---------------- //
// const getColorClasses = (color) => {
//   switch (color) {
//     case "cyan":
//       return "bg-cyan-400 text-black hover:shadow-cyan-400/50";
//     case "red":
//       return "bg-red-500 text-white hover:shadow-red-500/50";
//     case "yellow":
//       return "bg-yellow-300 text-black hover:shadow-yellow-300/50";
//     case "orange":
//       return "bg-orange-500 text-white hover:shadow-orange-500/50";
//     case "gray":
//       return "bg-gray-400 text-black hover:shadow-gray-400/50";
//     default:
//       return "bg-white text-black";
//   }
// };

// // ---------------- TEAM BADGES ---------------- //
// const TeamMemberBadge = ({ member }) => {
//   const [pos, setPos] = useState({ top: member.top, left: member.left });
//   const [vel, setVel] = useState({
//     vx: (Math.random() - 0.5) * 2,
//     vy: (Math.random() - 0.5) * 2,
//   });
//   const [paused, setPaused] = useState(false);

//   useEffect(() => {
//     if (paused) return;

//     const interval = setInterval(() => {
//       setPos((prev) => {
//         let newTop = prev.top + vel.vy;
//         let newLeft = prev.left + vel.vx;
//         let { vx, vy } = vel;

//         // Bounce off edges
//         if (newTop < 2 || newTop > 98) {
//           vy = -vy;
//           newTop = Math.max(2, Math.min(98, newTop));
//         }
//         if (newLeft < 2 || newLeft > 98) {
//           vx = -vx;
//           newLeft = Math.max(2, Math.min(98, newLeft));
//         }

//         setVel({ vx, vy });
//         return { top: newTop, left: newLeft };
//       });
//     }, 50);

//     return () => clearInterval(interval);
//   }, [vel, paused]);

//   return (
//     <div
//       className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
//       style={{
//         top: `${pos.top}%`,
//         left: `${pos.left}%`,
//       }}
//       onMouseEnter={() => setPaused(true)}
//       onMouseLeave={() => setPaused(false)}
//     >
//       {/* Badge */}
//       <div
//         className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition ${getColorClasses(
//           member.color
//         )}`}
//       >
//         <FaArrowRight />
//         {member.name}
//       </div>

//       {/* Modern Chat Box Popup */}
//       <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-72 bg-white/90 backdrop-blur-lg text-black rounded-2xl shadow-xl p-5 border border-gray-200/50 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out origin-top z-20">
//         {/* Arrow */}
//         <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white"></div>

//         <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
//         <p className="text-sm font-semibold text-purple-600 mb-2">
//           {member.role}
//         </p>
//         <p className="text-sm text-gray-700 leading-snug">{member.funFact}</p>
//       </div>
//     </div>
//   );
// };

// // ---------------- MOVING STAR ---------------- //
// const Star = () => {
//   const [pos, setPos] = useState({
//     top: Math.random() * 100,
//     left: Math.random() * 100,
//   });
//   const [vel, setVel] = useState({
//     vx: (Math.random() - 0.5) * 0.5,
//     vy: (Math.random() - 0.5) * 0.5,
//   });
//   const size = Math.random() * 2 + 1;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPos((prev) => {
//         let newTop = prev.top + vel.vy;
//         let newLeft = prev.left + vel.vx;
//         let { vx, vy } = vel;

//         if (newTop < 0 || newTop > 100) {
//           vy = -vy;
//           newTop = Math.max(0, Math.min(100, newTop));
//         }
//         if (newLeft < 0 || newLeft > 100) {
//           vx = -vx;
//           newLeft = Math.max(0, Math.min(100, newLeft));
//         }

//         setVel({ vx, vy });
//         return { top: newTop, left: newLeft };
//       });
//     }, 100);

//     return () => clearInterval(interval);
//   }, [vel]);

//   return (
//     <div
//       className="absolute rounded-full bg-white opacity-80"
//       style={{
//         width: size,
//         height: size,
//         top: `${pos.top}%`,
//         left: `${pos.left}%`,
//       }}
//     />
//   );
// };

// const TeamMember = () => {
//   return (
//     <div className="relative min-h-screen bg-[#1A002D] text-white overflow-hidden">
//       {/* Background Stars */}
//       {Array.from({ length: 50 }).map((_, i) => (
//         <Star key={i} />
//       ))}

//       {/* Team Members */}
//       {teamMembers.map((member, i) => (
//         <TeamMemberBadge key={i} member={member} />
//       ))}

//       {/* Central Card */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//         <div className="relative border-2 border-purple-500/40 rounded-lg p-8 max-w-lg text-center bg-purple-900/20 backdrop-blur-sm">
//           <h1 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
//             Built for Humans, <br /> by Humans
//           </h1>
//           <p className="text-white/80">
//             We care about the people who use our products. <br />
//             That's why we build with understanding, not just code, <br />
//             so things feel, look, and work just right.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamMember;

// import React, { useState } from "react";
// import { motion } from "framer-motion";

// // Team members (restored with 6 members + positions)
// const teamMembers = [
//   {
//     name: "Andrew",
//     color: "cyan",
//     top: 15,
//     left: 12,
//     img: "https://i.pravatar.cc/50?img=1",
//   },
//   {
//     name: "Seyi",
//     color: "gray",
//     top: 12,
//     left: 78,
//     img: "https://i.pravatar.cc/50?img=2",
//   },
//   {
//     name: "Johnson",
//     color: "red",
//     top: 45,
//     left: 20,
//     img: "https://i.pravatar.cc/50?img=3",
//   },
//   {
//     name: "Amaka",
//     color: "purple",
//     top: 70,
//     left: 60,
//     img: "https://i.pravatar.cc/50?img=4",
//   },
//   {
//     name: "Emily",
//     color: "green",
//     top: 30,
//     left: 50,
//     img: "https://i.pravatar.cc/50?img=5",
//   },
//   {
//     name: "Daniel",
//     color: "blue",
//     top: 60,
//     left: 80,
//     img: "https://i.pravatar.cc/50?img=6",
//   },
// ];

// const FloatingTeam = () => {
//   const [paused, setPaused] = useState(false);
//   const [hoveredMember, setHoveredMember] = useState(null);

//   return (
//     <div className="relative w-full h-[500px] bg-gray-950 overflow-hidden rounded-xl">
//       {teamMembers.map((member, idx) => (
//         <motion.div
//           key={idx}
//           className="absolute"
//           style={{ top: `${member.top}%`, left: `${member.left}%` }}
//           animate={!paused ? { y: [0, -10, 0], x: [0, 10, 0] } : { y: 0, x: 0 }}
//           transition={{
//             duration: 4 + idx,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           onMouseEnter={() => {
//             setPaused(true);
//             setHoveredMember(member);
//           }}
//           onMouseLeave={() => {
//             setPaused(false);
//             setHoveredMember(null);
//           }}
//         >
//           {/* Badge (circle with initials) */}
//           <div
//             className={`w-14 h-14 flex items-center justify-center rounded-full cursor-pointer text-white font-bold shadow-lg`}
//             style={{ backgroundColor: member.color }}
//           >
//             {member.name[0]}
//           </div>

//           {/* Popup Chat Box */}
//           {hoveredMember?.name === member.name && (
//             <div className="absolute top-16 left-1/2 -translate-x-1/2 w-64 p-4 rounded-2xl shadow-2xl bg-gray-900 border-2 border-purple-500 animate-fadeIn">
//               <div className="flex items-center gap-3">
//                 <img
//                   src={member.img}
//                   alt={member.name}
//                   className="w-12 h-12 rounded-full border border-gray-700"
//                 />
//                 <h3
//                   className="text-lg font-semibold"
//                   style={{ color: member.color }}
//                 >
//                   {member.name}
//                 </h3>
//               </div>
//               <p className="text-sm text-gray-300 mt-2">
//                 {member.name} is an awesome team member bringing value to the
//                 project!
//               </p>
//             </div>
//           )}
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default FloatingTeam;
