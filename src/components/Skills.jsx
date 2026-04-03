import { motion } from "framer-motion";
import { skillCategories } from "../constants";
import SectionWrapper from "./SectionWrapper";

function SkillBar({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          {skill.icon && <skill.icon className="text-[#818cf8] text-sm" />}
          <span className="text-sm text-[#e2e8f0] font-medium">{skill.name}</span>
        </div>
        <span className="text-xs text-[#94a3b8]">{skill.level}%</span>
      </div>
      <div className="w-full h-2 bg-[#1a1a3e] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-[#6366f1] to-[#06b6d4] relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#06b6d4] opacity-50 blur-sm" />
        </motion.div>
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#818cf8] text-sm uppercase tracking-[4px] mb-3">My Expertise</p>
        <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
          Technical <span className="gradient-text">Skills</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-semibold text-[#818cf8] mb-5 font-[family-name:var(--font-display)]">
              {category.title}
            </h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <SkillBar key={skillIndex} skill={skill} index={skillIndex} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Skills, "skills");
