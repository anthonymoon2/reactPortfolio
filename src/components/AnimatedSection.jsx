import React from 'react';
import { motion } from 'framer-motion';

function AnimatedSection({ children, id, className = '', index = 0 }) {
  const delay = index * 0.2;

  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;
