import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function WorkExperience() {
  const [selectedWork, setSelectedWork] = useState(null);

  const inBodyWork = {
    id: 'inbody',
    company: 'InBody',
    position: 'Full Stack Developer',
    period: 'May 2025 - Present',
    logo: 'images/InBodyLogo.jpg',
    description:
      'Full Stack Developer at InBody, building and maintaining web applications.',
  };

  return (
    <div className='max-w-[800px] mx-auto w-full px-4'>
      <h2 className='text-lg font-semibold mb-4 text-primary'>
        Experience
      </h2>
      <div className='space-y-4'>
        <motion.div
          className='flex gap-3 justify-between items-start cursor-pointer hover:opacity-70 transition-opacity'
          onClick={() => setSelectedWork(inBodyWork)}
        >
          <div className='flex gap-3'>
            <img
              className='h-12 w-12 shrink-0 object-contain'
              src='images/InBodyLogo.jpg'
              alt='InBody Logo'
            />
            <div>
              <div className='text-lg text-primary mb-0.5'>InBody</div>
              <div className='text-base text-primary/70'>Full Stack Developer</div>
            </div>
          </div>
          <div className='text-base text-primary/70 whitespace-nowrap'>
            May 2025 - Now
          </div>
        </motion.div>
      </div>

      {/* Modal - App Store Style */}
      <AnimatePresence>
        {selectedWork && (
          <>
            {/* Backdrop */}
            <motion.div
              className='fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWork(null)}
            >
              {/* Modal Content */}
              <motion.div
                className='bg-white rounded-[20px] max-w-[800px] w-full max-h-[90vh] overflow-y-auto relative'
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{
                  type: 'spring',
                  damping: 25,
                  stiffness: 300,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <style>{`
                  .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                <div className='hide-scrollbar'>
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedWork(null)}
                    className='absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/50 text-white flex items-center justify-center hover:bg-primary/70 transition-colors z-10'
                  >
                    ✕
                  </button>

                  {/* Modal Content */}
                  <div className='p-6 pt-12'>
                    <h3 className='text-primary text-[28px] font-bold mb-2'>
                      {selectedWork.company}
                    </h3>
                    <div className='text-primary/80 text-[18px] mb-4'>
                      <div className='font-medium mb-1'>
                        {selectedWork.position}
                      </div>
                      <div className='text-base'>{selectedWork.period}</div>
                    </div>
                    <div className='text-primary/80 text-[18px]'>
                      {selectedWork.description}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default WorkExperience;
