import React from "react";

// ✅ Simple ProjectCard component
const ProjectCard = ({ title, type, deviceType, mockupContent, className }) => {
  return (
    <div
      className={`bg-[#1A1A2E] text-white rounded-2xl p-6 shadow-lg ${className}`}
    >
      <div className="mb-4">
        <span className="text-sm text-purple-400 font-semibold uppercase">
          {type}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>

      {/* Mockup / Preview area */}
      <div className="flex justify-center items-center h-48 bg-[#0F0F1C] rounded-xl overflow-hidden">
        {mockupContent}
      </div>

      <div className="mt-4 text-sm text-gray-400 italic">
        Device: {deviceType}
      </div>
    </div>
  );
};

// ✅ Example mockups (replace with real components/images later)
const HiveIncubatorMockup = () => (
  <div className="w-32 h-32 bg-purple-600 rounded-lg flex items-center justify-center">
    Hive Mockup
  </div>
);

const AnmutMockup = () => (
  <div className="w-32 h-32 bg-blue-600 rounded-lg flex items-center justify-center">
    Anmut Mockup
  </div>
);

const SquareFarmsMockup = () => (
  <div className="w-32 h-32 bg-green-600 rounded-lg flex items-center justify-center">
    Square Farms
  </div>
);

// ✅ Main Index Page
const WorkStation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A1A] to-[#1A0033] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section - Mobile projects */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <ProjectCard
            title="The Hive Incubator"
            type="Website"
            deviceType="mobile"
            mockupContent={<HiveIncubatorMockup />}
            className="transform hover:scale-105 transition-transform duration-300"
          />

          <ProjectCard
            title="Anmut Estate and Property Development"
            type="Website"
            deviceType="mobile"
            mockupContent={<AnmutMockup />}
            className="transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Bottom section - Laptop projects */}
        <div className="grid lg:grid-cols-3 gap-12">
          <ProjectCard
            title="Square Farms Africa"
            type="Website"
            deviceType="laptop"
            mockupContent={<SquareFarmsMockup />}
            className="transform hover:scale-105 transition-transform duration-300"
          />

          <ProjectCard
            title="Square Farms Africa"
            type="Website"
            deviceType="laptop"
            mockupContent={<SquareFarmsMockup />}
            className="transform hover:scale-105 transition-transform duration-300"
          />

          <ProjectCard
            title="Square Farms Africa"
            type="Website"
            deviceType="laptop"
            mockupContent={<SquareFarmsMockup />}
            className="transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkStation;
