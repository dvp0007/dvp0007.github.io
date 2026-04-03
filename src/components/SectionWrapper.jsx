import { motion } from "framer-motion";

function SectionWrapper(Component, idName) {
  function HOC() {
    return (
      <motion.section
        id={idName}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="py-20 md:py-28 px-6 sm:px-10 md:px-16 lg:px-20 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <Component />
        </div>
      </motion.section>
    );
  }

  return HOC;
}

export default SectionWrapper;
