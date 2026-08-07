import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaNetworkWired,
  FaHeadset,
  FaLaptopCode,
  FaEnvelope,
  FaCheck,
} from "react-icons/fa";
import StarField from "../StarField";
import { services } from "../../data/servicesData";

const icons = [
  <FaGlobe className="w-7 h-7 text-[#9a7dff]" />,
  <FaNetworkWired className="w-7 h-7 text-[#9a7dff]" />,
  <FaHeadset className="w-7 h-7 text-[#9a7dff]" />,
  <FaLaptopCode className="w-7 h-7 text-[#9a7dff]" />,
  <FaEnvelope className="w-7 h-7 text-[#9a7dff]" />,
];

const DetailedServicesSection = () => {
  return (
    <section className="bg-[#0e0023] text-white py-16 px-4 relative overflow-hidden">
      <StarField count={35} />

      <div className="relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 text-sm bg-[#8a5cff] text-white rounded-full mb-4 shadow-md">
            Tech you can trust
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
            At <span className="text-[#9a7dff]">Jowis Studio</span>, we help
            businesses do more with{" "}
            <span className="text-[#9a7dff]">less stress</span>.
          </h2>
          <p className="text-lg text-[#b3a6ff] mt-4 max-w-xl mx-auto">
            We build websites, set up networks, and handle ICT needs so{" "}
            <br className="hidden md:block" />
            everything works the way it should.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="p-6 md:p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex items-start gap-4 md:w-[320px] shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-600/20 shrink-0">
                    {icons[i]}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#b3a6ff] mt-2">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 flex-1 content-start">
                  {service.included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <FaCheck className="w-3 h-3 text-[#9a7dff] mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;
