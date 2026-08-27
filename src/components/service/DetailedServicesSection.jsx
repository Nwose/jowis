import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaNetworkWired,
  FaHeadset,
  FaLaptopCode,
  FaEnvelope,
  FaCheck,
  FaWrench,
  FaWifi,
  FaShieldAlt,
  FaMicrosoft,
} from "react-icons/fa";
import { SiZoho } from "react-icons/si";
import StarField from "../StarField";
import { services } from "../../data/servicesData";

const icons = [
  FaGlobe,
  FaNetworkWired,
  FaHeadset,
  FaLaptopCode,
  FaEnvelope,
];

// Network Setup and IT Consulting still use real photography; the other
// three get a built illustration tailored to that specific service.
const images = [null, "/setUp.png", null, "/consult.png", null];

const PANEL_GRADIENT =
  "absolute inset-0 bg-gradient-to-br from-[#1A002D] via-[#2a1150] to-[#481F66] overflow-hidden";

// Layered device frames with a roaming "edit cursor" — sells responsive,
// hands-on web design without pretending to be a real screenshot.
function WebDesignPanel() {
  return (
    <div className={PANEL_GRADIENT}>
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* desktop frame */}
      <div className="absolute left-[8%] top-[14%] w-[60%] aspect-video rounded-lg bg-[#0e0023]/85 border border-white/15 shadow-2xl overflow-hidden">
        <div className="flex items-center gap-1 h-5 px-2 bg-white/5 border-b border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-white/25" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/25" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/25" />
        </div>
        <div className="p-2.5 flex flex-col gap-1.5">
          <div className="h-2.5 w-2/5 rounded-full bg-[#9a7dff]/60" />
          <div className="h-1.5 w-4/5 rounded-full bg-white/15" />
          <div className="h-1.5 w-3/5 rounded-full bg-white/10" />
          <div className="flex gap-1.5 mt-1.5">
            <div className="h-8 flex-1 rounded-md bg-white/10" />
            <div className="h-8 flex-1 rounded-md bg-white/10" />
            <div className="h-8 flex-1 rounded-md bg-white/10" />
          </div>
        </div>
      </div>

      {/* tablet frame */}
      <div className="absolute right-[7%] bottom-[9%] w-[28%] aspect-[3/4] rounded-xl bg-[#0e0023]/85 border border-white/15 shadow-2xl p-2 flex flex-col gap-1.5">
        <div className="h-2 w-3/5 rounded-full bg-[#9a7dff]/50" />
        <div className="h-1 w-full rounded-full bg-white/10" />
        <div className="h-1 w-4/5 rounded-full bg-white/10" />
        <div className="flex-1 rounded-md bg-white/5 mt-1" />
      </div>

      {/* phone frame */}
      <div className="absolute left-[13%] bottom-[7%] w-[16%] aspect-[9/18] rounded-2xl bg-[#0e0023] border border-white/20 shadow-2xl p-1.5 flex flex-col gap-1">
        <div className="h-1.5 w-2/3 rounded-full bg-[#9a7dff]/60 mx-auto" />
        <div className="flex-1 rounded-md bg-white/5" />
      </div>

      {/* roaming edit cursor */}
      <motion.span
        className="absolute w-2.5 h-2.5 rounded-full bg-[#c9b8ff] shadow-[0_0_12px_4px_rgba(201,184,255,0.6)]"
        animate={{
          left: ["18%", "56%", "38%", "18%"],
          top: ["22%", "20%", "42%", "22%"],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

const ORBIT_ICONS = [FaWrench, FaWifi, FaShieldAlt];
const ORBIT_DURATION = 16;
const ORBIT_RADIUS = 78;

// Support icons orbit a device with a pulsing "online" status — a
// perpetually-moving stand-in for the video/GIF this card could use later.
function ICTSupportPanel() {
  return (
    <div className={`${PANEL_GRADIENT} flex items-center justify-center`}>
      <div className="absolute w-[220px] h-[220px] rounded-full bg-[#8a5cff]/25 blur-[60px]" />
      <div className="absolute w-[170px] h-[170px] rounded-full border border-dashed border-white/15" />

      <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-2xl bg-[#0e0023]/80 border border-white/15 shadow-2xl">
        <FaHeadset className="w-8 h-8 text-[#c9b8ff]" />
        <motion.span
          className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#1A002D]"
          animate={{ scale: [1, 1.25, 1], opacity: [1, 0.7, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {ORBIT_ICONS.map((Icon, i) => {
        const delay = `-${(i * ORBIT_DURATION) / ORBIT_ICONS.length}s`;
        return (
          <div
            key={i}
            className="ict-orbit-pivot absolute left-1/2 top-1/2 w-0 h-0"
            style={{ animationDelay: delay }}
          >
            <div
              className="ict-orbit-icon absolute w-9 h-9 -mt-[18px] flex items-center justify-center rounded-full bg-[#0e0023]/85 border border-white/15 shadow-lg"
              style={{ left: ORBIT_RADIUS, animationDelay: delay }}
            >
              <Icon className="w-4 h-4 text-[#9a7dff]" />
            </div>
          </div>
        );
      })}

      <style>{`
        @keyframes ict-orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ict-orbit-counter-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .ict-orbit-pivot {
          animation: ict-orbit-spin ${ORBIT_DURATION}s linear infinite;
        }
        .ict-orbit-icon {
          animation: ict-orbit-counter-spin ${ORBIT_DURATION}s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .ict-orbit-pivot,
          .ict-orbit-icon {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

// Microsoft + Zoho feeding a branded inbox, contrasted with a generic
// address, to make the "professional email" pitch visual rather than text-only.
function EmailAdminPanel() {
  return (
    <div className={`${PANEL_GRADIENT} flex items-center justify-center px-6`}>
      <div className="absolute inset-0 opacity-[0.06] flex flex-wrap content-start gap-6 p-4">
        {Array.from({ length: 24 }).map((_, i) => (
          <FaEnvelope key={i} className="w-6 h-6 text-white shrink-0" />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[280px] flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          <motion.div
            className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 border border-white/15"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaMicrosoft className="w-5 h-5 text-white" />
          </motion.div>
          <span className="text-white/30 text-lg">+</span>
          <motion.div
            className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/10 border border-white/15"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <SiZoho className="w-5 h-5 text-white" />
          </motion.div>
        </div>

        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center gap-2.5 w-full rounded-lg bg-white/10 border border-[#9a7dff]/50 px-3 py-2.5 shadow-[0_0_20px_rgba(138,92,255,0.25)]">
            <FaEnvelope className="w-3.5 h-3.5 text-[#c9b8ff] shrink-0" />
            <span className="text-sm font-medium text-white truncate">
              info@jowistudio.com
            </span>
            <FaCheck className="w-3 h-3 text-emerald-400 ml-auto shrink-0" />
          </div>
          <div className="flex items-center gap-2.5 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2.5 opacity-50">
            <FaEnvelope className="w-3.5 h-3.5 text-white/40 shrink-0" />
            <span className="text-sm text-white/40 truncate line-through">
              yourbusiness@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const customPanels = {
  0: WebDesignPanel,
  2: ICTSupportPanel,
  4: EmailAdminPanel,
};

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
            const CustomPanel = customPanels[i];
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
                    !CustomPanel
                      ? image
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
                      : undefined
                  }
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {CustomPanel && <CustomPanel />}
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
