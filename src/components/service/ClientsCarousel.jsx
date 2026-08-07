import React from "react";
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

const ClientsCarousel = () => {
  // Duplicate the list so the marquee loops seamlessly.
  const track = [...clients, ...clients];

  return (
    <section className="bg-[#0e0023] text-white py-16 px-4 relative overflow-hidden border-t border-white/5">
      <div className="relative z-10 max-w-5xl mx-auto text-center mb-10">
        <div className="inline-block px-4 py-1 text-sm bg-[#8a5cff] text-white rounded-full mb-6 shadow-md">
          Trusted With Their IT
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
          Companies we consult for & manage IT operations
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#0e0023] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#0e0023] to-transparent z-10" />

        <div className="flex w-max animate-clients-marquee">
          {track.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="flex items-center gap-3 mx-4 px-6 py-4 rounded-xl bg-white/5 border border-white/10 whitespace-nowrap"
            >
              <FaBuilding className="w-5 h-5 text-[#9a7dff]" />
              <span className="text-sm font-medium text-[#e2d9ff]">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes clients-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-clients-marquee {
          animation: clients-marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ClientsCarousel;
