// import React, { useMemo } from "react";
// import { motion } from "framer-motion";
// import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// // Import your images
// import hiveIncubatorMockup from "../assets/hive-incubator.png";
// import anmutDevelopersMockup from "../assets/anmut-developers.png";
// import squareFarmsMockup from "../assets/square-farms.png";

// const projects = [
//   {
//     id: 1,
//     title: "The Hive Incubator",
//     description:
//       "Website design for a startup incubator helping early-stage founders grow.",
//     image: hiveIncubatorMockup,
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "Anmut Developers",
//     description:
//       "Real estate website for a modern development firm in Nigeria.",
//     image: anmutDevelopersMockup,
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Square Farms Africa",
//     description:
//       "Responsive website design for an agro-firm brand making impact in Africa.",
//     image: squareFarmsMockup,
//     link: "#",
//   },
// ];

// const ProjectShowcase = () => {
//   // Generate drifting stars (random start + end points, varied durations)
//   const stars = useMemo(
//     () =>
//       Array.from({ length: 35 }).map((_, i) => {
//         const startX = Math.random() * 100;
//         const startY = Math.random() * 100;
//         const endX = Math.random() * 100;
//         const endY = Math.random() * 100;
//         const duration = 10 + Math.random() * 15;
//         return { id: i, startX, startY, endX, endY, duration };
//       }),
//     []
//   );

//   return (
//     <section className="min-h-screen bg-[#1A002D] relative overflow-hidden">
//       {/* Background Moving Stars */}
//       <div className="absolute inset-0 pointer-events-none">
//         {stars.map(({ id, startX, startY, endX, endY, duration }) => (
//           <motion.div
//             key={`star-${id}`}
//             className="absolute rounded-full bg-white"
//             style={{
//               width: `${Math.random() * 2 + 1}px`, // random star size
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

//       <div className="relative z-10 container mx-auto px-6 py-16">
//         {/* Header Badge */}
//         <div className="flex justify-center mb-16">
//           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
//             <span className="text-gray-100 text-sm font-medium">
//               Recent Projects
//             </span>
//           </div>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl"
//             >
//               {/* Content */}
//               <div className="mb-6">
//                 <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-300 text-sm leading-relaxed mb-4">
//                   {project.description}
//                 </p>
//                 <a
//                   href={project.link}
//                   className="inline-flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors group/link"
//                 >
//                   <span className="text-sm font-medium">See Project</span>
//                   <FaArrowUpRightFromSquare className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
//                 </a>
//               </div>

//               {/* Project Image */}
//               <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900 to-gray-800 h-[420px]">
//                 <img
//                   src={project.image}
//                   alt={`Mockup of ${project.title} website`}
//                   className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//               </div>

//               {/* Hover Glow */}
//               <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//                 <div
//                   className="absolute inset-0 rounded-2xl"
//                   style={{
//                     boxShadow: "0 0 25px rgba(168, 85, 247, 0.5)",
//                   }}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectShowcase;

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

// Import your images
import hiveIncubatorMockup from "../assets/hive-incubator.png";
import anmutDevelopersMockup from "../assets/anmut-developers.png";
import squareFarmsMockup from "../assets/square-farms.png";

const projects = [
  {
    id: 1,
    title: "The Hive Incubator",
    description:
      "Website design for a startup incubator helping early-stage founders grow.",
    image: hiveIncubatorMockup,
    link: "#",
  },
  {
    id: 2,
    title: "Anmut Developers",
    description:
      "Real estate website for a modern development firm in Nigeria.",
    image: anmutDevelopersMockup,
    link: "#",
  },
  {
    id: 3,
    title: "Square Farms Africa",
    description:
      "Responsive website design for an agro-firm brand making impact in Africa.",
    image: squareFarmsMockup,
    link: "#",
  },
];

const ProjectShowcase = () => {
  // Floating stars
  const stars = useMemo(
    () =>
      Array.from({ length: 35 }).map((_, i) => {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = Math.random() * 100;
        const endY = Math.random() * 100;
        const duration = 10 + Math.random() * 15;
        return { id: i, startX, startY, endX, endY, duration };
      }),
    []
  );

  return (
    <section className="min-h-screen bg-[#1A002D] relative overflow-hidden">
      {/* Background Moving Stars */}
      <div className="absolute inset-0 pointer-events-none">
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

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header Badge */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
            <span className="text-gray-100 text-sm font-medium">
              Recent Projects
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Content */}
              <div className="mb-6">
                <motion.h3
                  className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {project.title}
                </motion.h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <motion.a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors group/link"
                  whileHover={{ x: 3 }}
                >
                  <span className="text-sm font-medium">See Project</span>
                  <FaArrowUpRightFromSquare className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </motion.a>
              </div>

              {/* Project Image */}
              <motion.div
                className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900 to-gray-800 h-[420px]"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <img
                  src={project.image}
                  alt={`Mockup of ${project.title} website`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{ boxShadow: "0 0 25px rgba(168, 85, 247, 0.5)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
