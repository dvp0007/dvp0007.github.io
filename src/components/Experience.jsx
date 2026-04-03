import { motion } from "framer-motion";
import { experiences } from "../constants";
import SectionWrapper from "./SectionWrapper";

function TimelineCard({ experience, index }) {
  const Icon = experience.icon;
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-start gap-6 mb-12 last:mb-0">
      {/* Timeline dot */}
      <div className="relative flex-shrink-0 z-10">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg"
          style={{
            background: experience.iconBg,
            boxShadow: `0 0 0 3px rgba(99,102,241,0.3), 0 0 15px ${experience.iconBg}40`,
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
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="glass-card p-5 flex-1"
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="text-lg font-bold text-[#e2e8f0]">{experience.title}</h3>
            <p className="text-[#818cf8] font-semibold text-sm">{experience.company}</p>
            <p className="text-[#94a3b8] text-xs mt-0.5">
              {experience.location} &middot; {experience.type}
            </p>
          </div>
          <span className="text-xs text-[#06b6d4] font-medium bg-[#06b6d4]/10 px-3 py-1 rounded-full whitespace-nowrap">
            {experience.date}
          </span>
        </div>
        <ul className="mt-3 space-y-2">
          {experience.points.map((point, i) => (
            <li
              key={i}
              className="text-[#94a3b8] text-sm pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#6366f1]"
            >
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

function Experience() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#818cf8] text-sm uppercase tracking-[4px] mb-3">What I&apos;ve done</p>
        <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
          Work <span className="gradient-text">Experience</span>
        </h2>
      </motion.div>

      {/* Custom timeline */}
      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-[19px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#6366f1] via-[#8b5cf6] to-[#06b6d4] rounded-full" />

        {experiences.map((exp, i) => (
          <TimelineCard key={i} experience={exp} index={i} />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Experience, "experience");
