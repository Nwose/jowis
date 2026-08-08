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
  FaGlobe,
  FaNetworkWired,
  FaHeadset,
  FaLaptopCode,
  FaEnvelope,
];

// No dedicated artwork exists yet for Email Administration — the gradient
// alone (same treatment used elsewhere on the site for that card) covers it.
const images = ["/website.png", "/setUp.png", "/ictSupport.png", "/consult.png", null];

const DetailedServicesSection = () => {
  return (
    <section className="bg-[#0e0023] text-white py-16 px-4 relative overflow-hidden">
      <StarField count={35} />

      <div className="relative z-10">
        <div className="text-center mb-20">
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

        <div className="max-w-6xl mx-auto flex flex-col gap-20 md:gap-28">
          {services.map((service, i) => {
            const Icon = icons[i];
            const image = images[i];
            const reversed = i % 2 === 1;

            return (
              <motion.div
                key={service.title}
                className="group flex flex-col md:flex-row items-center gap-8 md:gap-14"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Image panel */}
                <motion.div
                  className={`relative w-full md:w-[420px] shrink-0 h-[260px] md:h-[320px] rounded-2xl overflow-hidden border border-white/10 ${
                    reversed ? "md:order-2" : "md:order-1"
                  }`}
                  style={
                    image
                      ? {
                          backgroundImage: `url('${image}'), linear-gradient(to top right, #1A002D, #481F66)`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }
                      : {
                          backgroundImage:
                            "linear-gradient(to top right, #1A002D, #481F66)",
                        }
                  }
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0023]/70 via-transparent to-transparent transition-opacity duration-500 group-hover:from-[#0e0023]/40" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_60px_rgba(154,125,255,0.35)]" />

                  <span className="absolute top-5 left-5 text-5xl md:text-6xl font-bold text-white/10 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="absolute bottom-5 left-5 flex items-center justify-center w-14 h-14 rounded-xl bg-[#0e0023]/70 border border-white/10 backdrop-blur-sm transition-all duration-500 group-hover:border-[#9a7dff]/60 group-hover:shadow-[0_0_25px_rgba(138,92,255,0.5)]">
                    <Icon className="w-6 h-6 text-[#9a7dff] transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </motion.div>

                {/* Content panel */}
                <div
                  className={`flex-1 ${
                    reversed ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-semibold text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#c9b8ff]">
                    {service.title}
                  </h3>
                  <p className="text-[#b3a6ff] mt-4 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-6">
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;
