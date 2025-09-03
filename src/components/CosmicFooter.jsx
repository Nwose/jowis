import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaCopy } from "react-icons/fa6";
import VectorLogo from "../assets/Vector.png";

const CosmicFooter = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("info@jowistudio.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      setCopied(false);
    }
  };

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/company/jowis-studio/posts/?feedView=all",
      label: "LinkedIn",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/search?q=jowis%20studio&t=1756822762576",
      label: "TikTok",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/jowis.studio/?hl=en",
      label: "Instagram",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/+2348151377195",
      label: "WhatsApp",
    },
  ];

  // Generate stars once
  const stars = useMemo(
    () =>
      Array.from({ length: 30 }).map((_, i) => {
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const endX = Math.random() * 100;
        const endY = Math.random() * 100;
        const duration = 8 + Math.random() * 12;
        return {
          id: i,
          startX,
          startY,
          endX,
          endY,
          duration,
        };
      }),
    []
  );

  return (
    <footer className="relative min-h-screen bg-[#1A002D] overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map(({ id, startX, startY, endX, endY, duration }) => (
          <motion.div
            key={`star-${id}`}
            className="absolute w-[2px] h-[2px] bg-white rounded-full"
            initial={{ x: `${startX}vw`, y: `${startY}vh`, opacity: 0 }}
            animate={{
              x: [`${startX}vw`, `${endX}vw`],
              y: [`${startY}vh`, `${endY}vh`],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Glowing Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-40">
        <img
          src={VectorLogo}
          alt="Logo"
          className="w-20 h-20 animate-glow-only"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-8 py-4 min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left section - Branding & Social */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-white font-medium">Jowis Studio © 2025</p>
                <p className="text-purple-400 text-sm font-light">
                  Simply Creative
                </p>
              </div>
            </div>
          </div>

          {/* Center section - Logo + Email */}
          <div className="flex flex-col items-center space-y-6">
            <button
              onClick={copyEmail}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:shadow-lg text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center"
            >
              <FaCopy className="w-4 h-4 mr-2" />
              {copied ? "Link copied!" : "info@jowistudio.com"}
            </button>
            <p className="text-gray-300 text-sm">
              {copied ? "✔ Copied to clipboard" : "Click to copy ↗"}
            </p>
          </div>

          {/* Right section - Contact Info */}
          <div className="text-right space-y-4">
            <div className="space-y-2">
              <p className="text-white text-sm leading-relaxed">
                RBD Estate, Opp Dome,
                <br />
                Akure, Nigeria
              </p>
              <p className="text-white text-sm font-medium">08033789282</p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
    @keyframes glowOnly {
      0% {
        filter: drop-shadow(0 0 4px rgba(168, 85, 247, 0.3))
                drop-shadow(0 0 8px rgba(168, 85, 247, 0.5));
      }
      50% {
        filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.9))
                drop-shadow(0 0 35px rgba(139, 92, 246, 1))
                drop-shadow(0 0 50px rgba(139, 92, 246, 0.8));
      }
      100% {
        filter: drop-shadow(0 0 4px rgba(168, 85, 247, 0.3))
                drop-shadow(0 0 8px rgba(168, 85, 247, 0.5));
      }
    }
    .animate-glow-only {
      animation: glowOnly 3.5s ease-in-out infinite;
    }
  `}
      </style>
    </footer>
  );
};

export default CosmicFooter;
