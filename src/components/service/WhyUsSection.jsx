import React from "react";

function Hero() {
  return (
    <div className="w-screen h-[600px] relative">
      {/* --- horizon glow --- */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[1600px] h-[520px] -bottom-[60%]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(189,135,255,0.9) 35%, rgba(115,69,255,0.55) 55%, rgba(12,0,24,0) 70%)",
          filter: "blur(60px)",
          opacity: 0.9,
        }}
      />

      {/* --- stage: hand + phone --- */}
      <div className="absolute -bottom-[10%] left-1/2 z-10">
        <img
          src="/phone.png"
          alt="Hand holding phone"
          className="left-1/2 -translate-x-1/2 top-[75%] max-w-none w-[570px] h-[570px]"
          draggable={false}
        />
      </div>
    </div>
  );
}

const WhyUsSection = () => {
  return (
    <section className="relative min-h-[110vh] bg-[#0c0018] text-white overflow-hidden">
      {/* --- starry sky (subtle) --- */}
      <div className="pointer-events-none absolute inset-0">
        {[
          [7, 10],
          [18, 35],
          [26, 22],
          [33, 8],
          [41, 28],
          [48, 16],
          [56, 38],
          [62, 12],
          [70, 30],
          [78, 20],
          [86, 34],
          [92, 14],
        ].map(([t, l], i) => (
          <span
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full bg-white/70"
            style={{ top: `${t}%`, left: `${l}%`, opacity: 0.8 }}
          />
        ))}
      </div>

      <Hero />

      <div className="bg-gradient-to-t to-[#1a00335d] from-[#180030] backdrop-blur-md relative z-20">
        {/* --- soft fog --- */}
        {/* <div
          className="absolute left-1/2 -translate-x-1/2 top-[65%] w-[1400px] h-[520px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.08) 35%, rgba(12,0,24,0) 70%)",
            filter: "blur(30px)",
          }}
        /> */}

        {/* --- content --- */}
        <div className="relative z- max-w-3xl mx-auto text-center px-6 py-[140px] pt-20">
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] bg-gradient-to-r from-[#cbb6ff] via-white to-[#cbb6ff] bg-clip-text text-transparent p-2">
            This is why you need us
          </h2>
          <p className="mt-6 text-lg md:text-xl text-purple-100/90">
            We simplify tech, amplify your brand, and help your business run
            smarter
          </p>
          <button className="mt-10 px-8 py-4 rounded-md bg-[#3b1a78] hover:bg-[#2f1461] transition shadow-lg shadow-purple-900/30">
            Let&apos;s work together
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
