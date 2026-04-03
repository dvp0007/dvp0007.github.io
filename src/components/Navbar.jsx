import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a1a]/90 backdrop-blur-lg border-b border-[#6366f1]/10 shadow-lg shadow-[#6366f1]/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          className="text-2xl font-bold font-[family-name:var(--font-display)]"
          whileHover={{ scale: 1.05 }}
        >
          <span className="gradient-text">DP</span>
        </motion.a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#818cf8] ${
                  active === link.title ? "text-[#818cf8]" : "text-[#94a3b8]"
                }`}
                onClick={() => setActive(link.title)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setToggle(!toggle)} className="text-2xl text-[#e2e8f0]">
            {toggle ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#0a0a1a]/95 backdrop-blur-lg border-b border-[#6366f1]/10"
          >
            <ul className="flex flex-col items-center py-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-base font-medium text-[#94a3b8] hover:text-[#818cf8] transition-colors"
                    onClick={() => {
                      setActive(link.title);
                      setToggle(false);
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
