import React from 'react';
import { motion } from 'framer-motion';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className='bg-white border border-primary/20 overflow-hidden flex flex-col hover:border-primary/40 transition-colors rounded-md'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
    >
      {/* Image/Video */}
      <div className='w-full h-[170px] overflow-hidden bg-gray-100'>
        {project.image?.endsWith('.mp4') ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className='w-full h-full object-cover'
          >
            <source src={project.image} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className='w-full h-full object-cover'
          />
        )}
      </div>

      {/* Divider line */}
      <div className='border-t border-primary/10'></div>

      {/* Description within card */}
      <div className='p-3 flex flex-col flex-1'>
        <h3 className='text-base text-primary font-medium mb-1.5'>
          {project.title}
        </h3>
        
        {/* Description */}
        <p className='text-xs text-primary/80 leading-relaxed mb-2 flex-1'>
          {project.description}
        </p>

        {/* Skills - under text, smaller, in grey ovals with centered text */}
        {project.skills && project.skills.length > 0 && (
          <div className='flex flex-wrap gap-1 mb-3'>
            {project.skills.map((skill, idx) => (
              <span 
                key={idx} 
                className='px-2 py-0.5 bg-gray-200 text-gray-700 text-[10px] rounded-full text-center'
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Links - always at bottom */}
        <div className='flex gap-2 mt-auto'>
          {project.demoLink && (
            <a
              href={project.demoLink}
              target='_blank'
              rel='noreferrer'
              className={`${project.sourceCodeLink ? 'flex-1' : 'w-1/2'} flex items-center justify-center bg-black text-white px-2 py-1.5 rounded-sm text-xs font-medium hover:bg-black/80 transition-colors no-underline`}
            >
              {project.demoText || 'Live Demo'}
            </a>
          )}
          {project.sourceCodeLink && (
            <a
              href={project.sourceCodeLink}
              target='_blank'
              rel='noreferrer'
              className='flex-1 flex items-center justify-center bg-black text-white border border-black px-2 py-1.5 rounded-sm text-xs font-medium hover:bg-black/80 transition-colors no-underline'
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
