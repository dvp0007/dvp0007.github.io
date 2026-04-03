import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { socialLinks } from "../constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-[#6366f1]/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#94a3b8]">
          &copy; {year} Dharmik Patel. Built with <FaHeart className="inline text-[#6366f1] mx-1" size={12} /> using React & Three.js
        </p>
        <div className="flex gap-4">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] hover:text-[#818cf8] transition-colors">
            <FaGithub size={18} />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#94a3b8] hover:text-[#818cf8] transition-colors">
            <FaLinkedin size={18} />
          </a>
          <a href={socialLinks.email} className="text-[#94a3b8] hover:text-[#818cf8] transition-colors">
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
