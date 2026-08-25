import React from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import StarField from "./StarField";
import TiltCard from "./TiltCard";

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
    link: "https://www.thehiveincubator.com/",
  },
  {
    id: 2,
    title: "Anmut Developers",
    description:
      "Real estate website for a modern development firm in Nigeria.",
    image: anmutDevelopersMockup,
    link: "https://anmutdevelopers.com/",
  },
  {
    id: 3,
    title: "Square Farms Africa",
    description:
      "Responsive website design for an agro-firm brand making impact in Africa.",
    image: squareFarmsMockup,
    link: "https://www.squarefarms.africa/",
  },
];

const ProjectShowcase = () => {
  return (
    <section className="min-h-screen bg-[#1A002D] relative overflow-hidden">
      {/* Background Moving Stars */}
      <StarField count={35} />

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
              <TiltCard
                className="h-[420px] w-full"
                rotatorClassName="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-900 to-gray-800 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.65)] transition-shadow duration-300 hover:shadow-[0_35px_70px_-20px_rgba(138,92,255,0.45)]"
                contentClassName="h-full w-full"
                maxTilt={8}
                liftZ={20}
              >
                {/* Minimal browser chrome to frame the real screenshot as a floating device */}
                <div className="absolute top-0 inset-x-0 z-20 flex items-center gap-1.5 px-4 py-2.5 bg-black/30 backdrop-blur-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
                </div>
                <img
                  src={project.image}
                  alt={`Mockup of ${project.title} website`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </TiltCard>

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
