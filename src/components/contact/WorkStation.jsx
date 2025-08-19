import React from "react";

const projects = [
  {
    id: 1,
    title: "The Hive Incubator",
    subtitle: "Website",
    image: "/images/hive.png", // replace with your image path
  },
  {
    id: 2,
    title: "Anmut Estate and Property Development",
    subtitle: "Website",
    image: "/images/anmut.png",
  },
  {
    id: 3,
    title: "Square Farms Africa",
    subtitle: "Website",
    image: "/images/square1.png",
  },
  {
    id: 4,
    title: "Square Farms Africa",
    subtitle: "Website",
    image: "/images/square2.png",
  },
  {
    id: 5,
    title: "Square Farms Africa",
    subtitle: "Website",
    image: "/images/square3.png",
  },
];

const WorksSection = () => {
  return (
    <section className="bg-[#1a0033] min-h-screen px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col items-start">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-white text-lg font-semibold mt-4">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm">{project.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksSection;
