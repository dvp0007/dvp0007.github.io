import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { heroData, socialLinks } from "../constants";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import StarsCanvas from "./StarsCanvas";
import Avatar3D from "./Avatar3D";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      <StarsCanvas />

      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#6366f1]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#8b5cf6]/8 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#06b6d4]/8 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-24 pb-20">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[#818cf8] text-lg md:text-xl font-medium mb-4 tracking-wide">
              Hello, I&apos;m
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-display)] mb-4">
              <span className="gradient-text">{heroData.name}</span>
            </h1>

            <div className="mb-6">
              <RoleCycler roles={heroData.roles} />
            </div>

            <p className="text-[#94a3b8] text-base md:text-lg max-w-xl leading-relaxed mb-8">
              {heroData.tagline}
            </p>

            <div className="flex items-center flex-wrap gap-4">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[#6366f1]/30 flex items-center justify-center text-[#94a3b8] hover:text-[#818cf8] hover:border-[#818cf8] hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300">
                <FaGithub size={22} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-[#6366f1]/30 flex items-center justify-center text-[#94a3b8] hover:text-[#818cf8] hover:border-[#818cf8] hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300">
                <FaLinkedin size={22} />
              </a>
              <a href={socialLinks.email} className="w-12 h-12 rounded-full border border-[#6366f1]/30 flex items-center justify-center text-[#94a3b8] hover:text-[#818cf8] hover:border-[#818cf8] hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300">
                <FaEnvelope size={22} />
              </a>
              <a href="#contact" className="ml-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-medium text-sm hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-105">
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Right - 3D Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full h-[420px] md:h-[500px] lg:h-[580px]"
          >
            <Avatar3D />
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about">
          <div className="w-6 h-10 rounded-full border-2 border-[#6366f1]/40 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-[#818cf8]"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}

function RoleCycler({ roles }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="h-20 md:h-16 lg:h-12 overflow-hidden">
      <motion.div
        key={index}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#06b6d4]"
      >
        {roles[index]}
      </motion.div>
    </div>
  );
}
