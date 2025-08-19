import React, { useMemo } from "react";

const ServiceSection = () => {
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
    <section className="bg-[#0e0023] text-white py-16 px-4 relative overflow-hidden">
      {/* Background Plus Stars */}
      <div className="absolute inset-0 pointer-events-none">
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

      {/* Foreground Content */}
      <div className="relative z-10">
        {/* Header */}
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

        {/* Grid with central glow */}
        <div className="relative max-w-[1060px] mx-auto w-[1044px] h-[726px]">
          {/* Central animated purple glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[420px] h-[420px] rounded-full bg-[#860EFE] blur-[160px] animate-glow" />
          </div>

          {/* Cards grid */}
          <div className="relative flex gap-2 h-full">
            {/* Left column */}
            <div className="w-[632px] flex flex-col gap-2">
              <div className="h-[287px] p-6 relative rounded-sm overflow-hidden bg-[url('/website.png'),_linear-gradient(to_top_right,_#1A002D,_#481F66)] bg-cover bg-no-repeat">
                <h3 className="text-white text-xl font-semibold mb-2">
                  Website design <br /> & Development
                </h3>
                <p className="text-sm text-[#b3a6ff]">
                  We design fast, mobile-ready <br /> sites that help your
                  business <br />
                  make sales{" "}
                  <span className="text-white font-medium">online</span>.
                </p>
              </div>
              <div className="flex-1 p-6 relative rounded-sm overflow-hidden bg-[url('/setUp.png'),_linear-gradient(to_top_right,_#1A002D,_#481F66)] bg-cover bg-no-repeat">
                <h3 className="text-white text-xl font-semibold mb-2">
                  Network Setup <br /> & Management
                </h3>
                <p className="text-sm text-[#b3a6ff]">
                  Reliable network setup and <br /> fixes for smooth connection.
                </p>
              </div>
            </div>

            {/* Right column */}
            <div className="flex-1 flex flex-col gap-2">
              <div className="h-[439px] p-6 relative rounded-sm overflow-hidden bg-[url('/ictSupport.png'),_linear-gradient(to_top_right,_#1A002D,_#481F66)] bg-cover bg-center bg-no-repeat">
                <h3 className="text-white text-xl font-semibold mb-2">
                  ICT Support
                </h3>
                <p className="text-sm text-[#b3a6ff]">
                  Reliable tech support that keeps your <br /> team and tools
                  running smoothly
                </p>
              </div>

              <div className="flex-1 p-6 relative rounded-sm overflow-hidden bg-[url('/consult.png')] bg-cover bg-no-repeat">
                {/* Purple overlay tint */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1A002D]/80 to-[#481F66]/80 mix-blend-multiply"></div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    IT Consulting
                  </h3>
                  <p className="text-sm text-[#b3a6ff]">
                    We provide expert tech guidance <br /> to help your business
                    grow.
                  </p>
                </div>

                {/* Fade overlay at bottom to blend white part of image */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#1A002D] to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom stronger glow animation */}
      <style jsx>{`
        @keyframes glow {
          0%,
          100% {
            opacity: 0.75;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }
        .animate-glow {
          animation: glow 2.5s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default ServiceSection;
