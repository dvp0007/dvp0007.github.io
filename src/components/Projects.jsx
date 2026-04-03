import { motion } from "framer-motion";
import { projects } from "../constants";
import SectionWrapper from "./SectionWrapper";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass-card p-6 group hover:border-[#6366f1]/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#6366f1]/20 to-[#8b5cf6]/20 flex items-center justify-center text-[#818cf8] group-hover:from-[#6366f1]/30 group-hover:to-[#8b5cf6]/30 transition-all">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      <h3 className="text-lg font-bold text-[#e2e8f0] mb-1 group-hover:text-[#818cf8] transition-colors">
        {project.title}
      </h3>
      <p className="text-xs text-[#818cf8] font-medium mb-3">{project.subtitle}</p>
      <p className="text-sm text-[#94a3b8] leading-relaxed mb-4 flex-grow">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-[#6366f1]/10 text-[#818cf8] border border-[#6366f1]/20"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-[#818cf8] text-sm uppercase tracking-[4px] mb-3">My Work</p>
        <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)]">
          Projects & <span className="gradient-text">Publications</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Projects, "projects");
