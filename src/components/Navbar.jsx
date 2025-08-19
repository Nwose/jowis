import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    open: { width: "700px", transition: { duration: 0.5 } },
    closed: { width: "350px", transition: { duration: 0.5 } },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      animate={isOpen ? "open" : "closed"}
      initial="closed"
      className="fixed top-4 left-1/2 transform -translate-x-1/2 h-16 bg-black/60 backdrop-blur-md rounded-full shadow-lg flex items-center justify-between px-10 z-50 overflow-hidden"
    >
      {/* Logo */}
      <div className="shrink-0 flex items-center gap-2">
        <img src="/assets/JOWIS.png" alt="Logo" className="h-8 w-auto" />
      </div>

      {/* Nav Links (only in open state) */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex-1 flex justify-center items-center gap-10 text-white text-sm"
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="hover:text-purple-300 cursor-pointer"
              >
                <Link
                  to={link.path}
                  className="hover:text-purple-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Gradient Glass-Like Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`ml-auto px-4 py-2 rounded-md transition-all duration-300 shadow-md
          bg-gradient-to-br from-[#1A002D] to-[#44009D] text-white
          backdrop-blur-md bg-opacity-80 border border-white/30
          hover:brightness-90 hover:from-purple-200 hover:via-purple-400 hover:to-purple-700`}
      >
        Menu <FaBars className="inline ml-2" />
      </button>
    </motion.div>
  );
};

export default Navbar;
