import React from 'react';
import { motion } from 'framer-motion';

function AnimatedSection({ children, id, className = '', index = 0 }) {
  const delay = index * 0.4;

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: 'easeOut', delay }}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;
