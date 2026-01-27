import React from 'react';
import ProjectCard from '../components/ProjectCard';

function ProfessionalWork() {
  const professionalProjects = [
    {
      id: 'inbody',
      title: 'InBody USA',
      image: 'images/inbodyusa.png',
      description: 'Migrated $50M WordPress site to Next.js on GCP, boosting performance scores from 40s to 90s. Built AI chatbot increasing engagement 500%. Automated deployments with CI/CD via Cloud Build.',
      skills: [],
      demoLink: 'https://inbodyusa.com',
      demoText: 'Visit Website',
      sourceCodeLink: null
    },
    {
      id: 'aria',
      title: 'Ria',
      image: 'images/aria.png',
      description: 'Built production AI chatbot for 20,000 SHRM attendees. Enhanced user time on chat by 500% with resilient loading states and increased engagement through AI prompt suggestions and user feedback integration.',
      skills: [],
      demoLink: 'https://shrm2025-chatbot-812026523855.us-central1.run.app/',
      demoText: 'Try Chatbot',
      sourceCodeLink: null
    }
  ];

  return (
    <div className='max-w-[800px] mx-auto w-full px-4'>
      <h2 className='text-lg font-semibold mb-4 text-primary'>
        Professional Work
      </h2>

      <div className='grid grid-cols-2 gap-6 max-[768px]:grid-cols-1'>
        {professionalProjects.map((work, index) => (
          <ProjectCard key={work.id} project={work} index={index} />
        ))}
      </div>
    </div>
  );
}

export default ProfessionalWork;
