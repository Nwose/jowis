import { motion } from "framer-motion";
import { FaBuilding } from "react-icons/fa";

// Placeholder slots — swap "name" for each client's actual name/logo once approved to list.
const clients = [
  { name: "Client 1" },
  { name: "Client 2" },
  { name: "Client 3" },
  { name: "Client 4" },
  { name: "Client 5" },
  { name: "Client 6" },
  { name: "Client 7" },
  { name: "Client 8" },
  { name: "Client 9" },
  { name: "Client 10" },
];

// Cards live on a fixed radius so they read as one continuous ring; the
// radius is derived from card width so spacing holds if the list changes.
const CARD_W = 180;
const CARD_H = 128;
const GAP = 26;
const ANGLE_STEP = 360 / clients.length;
const RADIUS = Math.round(
  (CARD_W + GAP) / (2 * Math.sin(Math.PI / clients.length))
);

const ClientsCarousel = () => {
  return (
    <section className="bg-[#0e0023] text-white py-16 px-4 relative overflow-hidden border-t border-white/5">
      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="inline-block px-4 py-1 text-sm bg-[#8a5cff] text-white rounded-full mb-6 shadow-md">
          Trusted With Their IT
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
          Companies we consult for & manage IT operations
        </h2>
      </motion.div>

      <div className="relative h-[240px] md:h-[280px]">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#0e0023] to-transparent z-30" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#0e0023] to-transparent z-30" />

        {/* Ambient glow behind the ring, echoes the glow used on the services grid */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[260px] h-[260px] rounded-full bg-[#860EFE] blur-[130px] opacity-30" />
        </div>

        <div className="clients-ring-wrap relative h-full flex items-center justify-center [perspective:1400px] scale-[0.55] sm:scale-[0.75] md:scale-[0.9] lg:scale-100">
          <div className="clients-ring-stage relative [transform-style:preserve-3d]">
            {clients.map((client, i) => {
              const angle = i * ANGLE_STEP;
              return (
                <div
                  key={`${client.name}-${i}`}
                  className="absolute top-1/2 left-1/2 [backface-visibility:hidden]"
                  style={{
                    width: CARD_W,
                    height: CARD_H,
                    transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${RADIUS}px)`,
                  }}
                >
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-[#9a7dff]/60 hover:shadow-[0_0_25px_rgba(138,92,255,0.45)]">
                    <FaBuilding className="w-6 h-6 text-[#9a7dff]" />
                    <span className="text-sm font-medium text-[#e2d9ff]">
                      {client.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes clients-ring-spin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        .clients-ring-stage {
          animation: clients-ring-spin 42s linear infinite;
        }
        .clients-ring-wrap:hover .clients-ring-stage {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .clients-ring-stage {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientsCarousel;
