import { motion } from "framer-motion";
import { aboutData } from "../constants";
import { FaMapMarkerAlt, FaEnvelope, FaGlobeAmericas, FaLanguage } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

function About() {
  const info = aboutData.info;

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#818cf8] text-sm uppercase tracking-[4px] mb-3">Introduction</p>
        <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
          About <span className="gradient-text">Me</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {aboutData.description.map((para, i) => (
            <p key={i} className="text-[#94a3b8] leading-relaxed mb-4 text-base">
              {para}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8 space-y-5"
        >
          <h3 className="text-xl font-semibold mb-6 gradient-text font-[family-name:var(--font-display)]">
            Quick Info
          </h3>
          <InfoItem icon={<FaEnvelope />} label="Email" value={info.email} href={`mailto:${info.email}`} />
          <InfoItem icon={<FaMapMarkerAlt />} label="Location" value={info.location} />
          <InfoItem icon={<FaGlobeAmericas />} label="Nationality" value={info.nationality} />
          <InfoItem icon={<FaLanguage />} label="Languages" value={info.languages} />
        </motion.div>
      </div>
    </div>
  );
}

function InfoItem({ icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4 group">
      <div className="w-10 h-10 rounded-lg bg-[#6366f1]/10 flex items-center justify-center text-[#818cf8] flex-shrink-0 group-hover:bg-[#6366f1]/20 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-xs text-[#94a3b8] uppercase tracking-wider mb-0.5">{label}</p>
        <p className="text-[#e2e8f0] text-sm font-medium">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block hover:translate-x-1 transition-transform">{content}</a>
  ) : (
    <div>{content}</div>
  );
}

export default SectionWrapper(About, "about");
