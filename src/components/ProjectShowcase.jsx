import React, { useMemo } from "react";
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
  // Generate plus-star positions once per mount
  const stars = useMemo(
    () =>
      [...Array(20)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
      })),
    []
  );

  return (
    <section className="min-h-screen bg-[#1A002D] relative overflow-hidden">
      {/* Background Plus Stars */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <span
            key={i}
            className="absolute text-purple-300 text-xs animate-pulse"
            style={star}
          >
            +
          </span>
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
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-500 hover:shadow-2xl"
            >
              {/* Content */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors group/link"
                >
                  <span className="text-sm font-medium">See Project</span>
                  <FaArrowUpRightFromSquare className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900 to-gray-800 h-[420px]">
                <img
                  src={project.image}
                  alt={`Mockup of ${project.title} website`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    boxShadow: "0 0 25px rgba(168, 85, 247, 0.5)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
