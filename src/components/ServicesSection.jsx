import React from "react";
import { motion } from "framer-motion";
import StarField from "./StarField";
import TiltCard from "./TiltCard";

const ServiceSection = () => {
  // card container variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  // card entrance variants (hover/tilt is handled by TiltCard now)
  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardShadow =
    "transition-shadow duration-300 hover:shadow-[0_25px_60px_-20px_rgba(138,92,255,0.55)]";

  return (
    <section className="bg-[#0e0023] text-white py-16 px-4 relative overflow-hidden">
      {/* Background Stars */}
      <StarField count={35} />

      {/* Foreground */}
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

        {/* Grid container */}
        <motion.div
          className="relative max-w-[1060px] mx-auto w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Central glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[320px] md:w-[420px] h-[320px] md:h-[420px] rounded-full bg-[#860EFE] blur-[120px] md:blur-[160px] animate-glow" />
          </div>

          {/* Desktop design kept, mobile stacks */}
          <div className="relative flex flex-col md:flex-row gap-2 h-auto md:h-[726px]">
            {/* Left column */}
            <div className="flex flex-col gap-2 w-full md:w-[632px]">
              <TiltCard
                variants={cardVariants}
                maxTilt={9}
                liftZ={22}
                className="h-[250px] md:h-[287px] w-full"
                rotatorClassName={`rounded-md overflow-hidden bg-[url('/website.png'),_linear-gradient(to_top_right,_#1A002D,_#481F66)] bg-cover bg-no-repeat ${cardShadow}`}
                contentClassName="p-6 flex flex-col"
              >
                <h3 className="text-white text-xl font-semibold mb-2">
                  Website design <br /> & Development
                </h3>
                <p className="text-sm text-[#b3a6ff]">
                  We design fast, mobile-ready <br /> sites that help your
                  business <br />
                  make sales{" "}
                  <span className="text-white font-medium">online</span>.
                </p>
              </TiltCard>

              <TiltCard
                variants={cardVariants}
                maxTilt={9}
                liftZ={22}
                className="flex-1 min-h-[200px] w-full"
                rotatorClassName={`rounded-md overflow-hidden bg-[url('/setUp.png'),_linear-gradient(to_top_right,_#1A002D,_#481F66)] bg-cover bg-no-repeat ${cardShadow}`}
                contentClassName="p-6 flex flex-col"
              >
                <h3 className="text-white text-xl font-semibold mb-2">
                  Network Setup <br /> & Management
                </h3>
                <p className="text-sm text-[#b3a6ff]">
                  Reliable network setup and <br /> fixes for smooth connection.
                </p>
              </TiltCard>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-2 flex-1 w-full">
              <TiltCard
                variants={cardVariants}
                maxTilt={9}
                liftZ={26}
                className="h-[250px] md:h-[439px] w-full"
                rotatorClassName={`rounded-md overflow-hidden bg-[url('/ictSupport.png'),_linear-gradient(to_top_right,_#1A002D,_#481F66)] bg-cover bg-center bg-no-repeat ${cardShadow}`}
                contentClassName="p-6 flex flex-col"
              >
                <h3 className="text-white text-xl font-semibold mb-2">
                  ICT Support
                </h3>
                <p className="text-sm text-[#b3a6ff]">
                  Reliable tech support that keeps your <br /> team and tools
                  running smoothly
                </p>
              </TiltCard>

              <TiltCard
                variants={cardVariants}
                maxTilt={9}
                liftZ={22}
                className="flex-1 min-h-[200px] w-full"
                rotatorClassName={`rounded-md overflow-hidden bg-[url('/consult.png')] bg-cover bg-no-repeat ${cardShadow}`}
                contentClassName="p-6 flex flex-col"
                overlay={
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1A002D]/80 to-[#481F66]/80" />
                }
              >
                <h3 className="text-white text-xl font-semibold mb-2">
                  IT Consulting
                </h3>
                <p className="text-sm text-[#b3a6ff]">
                  We provide expert tech guidance <br /> to help your business
                  grow.
                </p>
              </TiltCard>
            </div>
          </div>

          {/* Fifth service, full width */}
          <TiltCard
            variants={cardVariants}
            maxTilt={6}
            liftZ={18}
            className="mt-2 w-full"
            rotatorClassName={`rounded-md overflow-hidden bg-gradient-to-tr from-[#1A002D] to-[#481F66] ${cardShadow}`}
            contentClassName="p-6 flex flex-col"
          >
            <h3 className="text-white text-xl font-semibold mb-2">
              Email Administration
            </h3>
            <p className="text-sm text-[#b3a6ff]">
              Zoho and Microsoft business email setup, migration, and ongoing
              administration for your team.
            </p>
          </TiltCard>
        </motion.div>
      </div>

      {/* Glow animation */}
      <style>{`
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
