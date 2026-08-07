import React from "react";
import { motion } from "framer-motion";
import { FaMicrosoft } from "react-icons/fa";
import { SiZoho } from "react-icons/si";

const partners = [
  {
    icon: <FaMicrosoft className="w-9 h-9 text-white" />,
    name: "Microsoft",
    tier: "Reseller Partner",
  },
  {
    icon: <SiZoho className="w-9 h-9 text-white" />,
    name: "Zoho",
    tier: "Partner",
  },
];

const PartnersSection = () => {
  return (
    <section className="bg-[#0e0023] text-white py-16 px-4 relative overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1 text-sm bg-[#8a5cff] text-white rounded-full mb-6 shadow-md">
          Official Partnerships
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-10">
          Backed by the platforms your business already runs on
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl px-8 py-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
            >
              {partner.icon}
              <div className="text-left">
                <p className="text-lg font-semibold">{partner.name}</p>
                <p className="text-sm text-[#b3a6ff]">{partner.tier}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
