import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Start Here", path: "/" },
  { name: "Who we are", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/contact" },
];

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, height: 0, transition: { duration: 0.2 } },
  };

  return (
    <div className="fixed top-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-lg shadow-lg z-50 md:hidden">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center w-[100px]">
          <img
            src="/assets/jowisLogo.svg"
            alt="Logo"
            className="h-10 w-full object-contain"
          />
        </Link>

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md text-white hover:scale-110 transition"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col px-6 pb-4 space-y-4 text-white text-base overflow-hidden"
          >
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={index}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    isActive
                      ? "text-purple-400 font-semibold"
                      : "hover:text-purple-300"
                  } transition-colors duration-200`}
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
