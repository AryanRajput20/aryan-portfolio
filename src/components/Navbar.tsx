"use client";

import { Download, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import ResumeModal from "./ResumeModal";
import { useState } from "react";

export default function Navbar() {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50
        bg-white/5 backdrop-blur-2xl
        border-b border-white/10
        shadow-[0_0_40px_rgba(0,255,255,0.15)]"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <h1 className="text-xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Aryan
          </h1>

          <div className="flex items-center gap-8 text-sm">

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>

            {/* Resume Button (Now Opens Modal) */}
            <button
              onClick={() => setShowResume(true)}
              className="flex items-center gap-2 px-4 py-2
              bg-cyan-500/80 hover:bg-cyan-400
              rounded-full transition
              shadow-[0_0_25px_rgba(0,255,255,0.5)]"
            >
              <Download size={16} />
              Resume
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/AryanRajput20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} className="hover:text-cyan-400 transition" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aryan-rajput21/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} className="hover:text-cyan-400 transition" />
            </a>

          </div>
        </div>
      </motion.nav>

      {/* Resume Modal */}
      {showResume && (
        <ResumeModal onClose={() => setShowResume(false)} />
      )}
    </>
  );
}