import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Reusable scroll-triggered section wrapper with fade-up animation
 */
const SectionWrapper = ({ children, id, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id={id} className={`py-20 ${className}`} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="section-container"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
