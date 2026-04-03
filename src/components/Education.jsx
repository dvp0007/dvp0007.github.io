import { motion } from "framer-motion";
import { education, achievements } from "../constants";
import { FaTrophy } from "react-icons/fa";
import SectionWrapper from "./SectionWrapper";

function Education() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#818cf8] text-sm uppercase tracking-[4px] mb-3">Academic Background</p>
        <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
          Education & <span className="gradient-text">Achievements</span>
        </h2>
      </motion.div>

      {/* Custom timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] rounded-full" />

        {education.map((edu, i) => {
          const Icon = edu.icon;
          return (
            <div key={i} className="relative flex items-start gap-6 mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className="relative flex-shrink-0 z-10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg"
                  style={{
                    background: edu.iconBg,
                    boxShadow: `0 0 0 3px rgba(99,102,241,0.3), 0 0 15px ${edu.iconBg}40`,
                  }}
                >
                  <Icon size={18} />
                </div>
              </div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-5 flex-1"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-[#e2e8f0]">{edu.degree}</h3>
                    <p className="text-[#818cf8] font-semibold text-sm">{edu.field}</p>
                    {edu.specialization && (
                      <p className="text-[#06b6d4] text-xs mt-0.5">Specialization: {edu.specialization}</p>
                    )}
                    <p className="text-[#94a3b8] text-xs mt-1">{edu.institution} &middot; {edu.location}</p>
                  </div>
                  <span className="text-xs text-[#06b6d4] font-medium bg-[#06b6d4]/10 px-3 py-1 rounded-full whitespace-nowrap">
                    {edu.date}
                  </span>
                </div>
                <ul className="mt-3 space-y-1">
                  {edu.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-[#94a3b8] text-sm pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#6366f1]"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <h3 className="text-2xl font-bold text-center mb-10 font-[family-name:var(--font-display)]">
          <span className="gradient-text">Achievements</span>
        </h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 hover:border-[#6366f1]/30 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20 flex items-center justify-center text-[#818cf8] flex-shrink-0">
                  <FaTrophy />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#e2e8f0]">{a.title}</h4>
                  <p className="text-xs text-[#818cf8] mt-0.5">{a.organization} &middot; {a.date}</p>
                  <p className="text-sm text-[#94a3b8] mt-2 leading-relaxed">{a.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default SectionWrapper(Education, "education");
