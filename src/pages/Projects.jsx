import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// finds all projects and displays them
function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className='max-w-[600px] mx-auto w-full px-4'>
      <h2 className='text-[16px] font-medium mb-3 dark:text-white'>
        Personal projects
      </h2>

      <div className='grid grid-cols-2 gap-6 max-[768px]:grid-cols-1'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className='bg-white border border-gray-300 overflow-hidden transition-shadow duration-700 hover:shadow-[-15px_15px_25px_-5px_rgba(0,0,0,0.4)] flex flex-col cursor-pointer h-[170px]'
            onClick={() => setSelectedProject(project)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{
              duration: 0.7,
              ease: 'easeInOut',
            }}
          >
            {/* Image/Video */}
            <div className='w-full h-full overflow-hidden bg-gray-100'>
              {project.image.endsWith('.mp4') ? (
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
          </motion.div>
        ))}
      </div>

      {/* Modal - App Store Style */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              className='fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              {/* Modal Content */}
              <motion.div
                className='bg-white rounded-[20px] max-w-[600px] w-full max-h-[90vh] overflow-y-auto relative'
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
                    onClick={() => setSelectedProject(null)}
                    className='absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors z-10'
                  >
                    ✕
                  </button>

                  {/* Modal Image/Video */}
                  <div className='w-full h-[400px] overflow-hidden bg-gray-100'>
                    {selectedProject.image.endsWith('.mp4') ? (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className='w-full h-full object-cover'
                      >
                        <source src={selectedProject.image} type='video/mp4' />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={selectedProject.image}
                        alt={selectedProject.title}
                        className='w-full h-full object-cover'
                      />
                    )}
                  </div>

                  {/* Modal Details */}
                  <div className='p-6'>
                    <h3 className='text-black text-[24px] font-bold mb-2'>
                      {selectedProject.title}
                    </h3>
                    <div className='text-gray-600 text-[16px] mb-4'>
                      <ul className='list-disc list-inside'>
                        {selectedProject.bulletPointsArray.map(
                          (point, pointIndex) => (
                            <li
                              key={pointIndex}
                              dangerouslySetInnerHTML={{ __html: point }}
                            ></li>
                          )
                        )}
                      </ul>
                    </div>
                    <div className='flex gap-3 mt-4'>
                      <a
                        href={selectedProject.demoLink}
                        target='_blank'
                        rel='noreferrer'
                        className='no-underline'
                      >
                        <motion.button
                          whileHover={{ scale: 1.02, opacity: 0.9 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className='bg-black text-white px-5 py-2.5 rounded-sm font-medium text-sm hover:bg-gray-800 transition-colors cursor-pointer'
                        >
                          Live Demo
                        </motion.button>
                      </a>
                      <a
                        href={selectedProject.sourceCodeLink}
                        target='_blank'
                        rel='noreferrer'
                        className='no-underline'
                      >
                        <motion.button
                          whileHover={{ scale: 1.02, opacity: 0.9 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className='bg-transparent border border-gray-300 text-gray-700 px-5 py-2.5 rounded-sm font-medium text-sm hover:border-gray-400 hover:text-gray-900 transition-colors flex items-center justify-center cursor-pointer'
                        >
                          <span>Source Code</span>
                          <img
                            className='h-[16px] ml-2'
                            src='images/github.png'
                            alt='GitHub'
                          />
                        </motion.button>
                      </a>
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

class Project {
  constructor(
    id,
    title,
    image,
    demoLink,
    sourceCodeLink,
    skillsArray,
    bulletPointsArray
  ) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.demoLink = demoLink;
    this.sourceCodeLink = sourceCodeLink;
    this.skillsArray = skillsArray;
    this.bulletPointsArray = bulletPointsArray;
  }
}

// array of all projects
const projects = [
  // -- PROJECT 5 --
  new Project(
    0,
    'trackBod (IOS App)',
    'images/trackBod.jpg',
    'https://v0-track-bod-website-design.vercel.app/tech-stack',
    'https://github.com/anthonymoon2',
    ['Swift', 'NODE.JS', 'EXPRESS.JS', 'POSTGRESQL', 'AWS'],
    [
      'Designed, developed, and deployed an iOS fitness app in <span style="color:rgb(90, 177, 239)">SwiftUI</span>, achieving 17,000+ downloads in under 3 months, generating $6,000+ in revenue, while maintaining a 4.7-star App Store rating from 500+ (global) reviews.',
      'Engineered a scalable backend with <span style="color:rgb(90, 177, 239)">Node.js</span> & <span style="color:rgb(90, 177, 239)">Express</span>, deployed via AWS Elastic Beanstalk with S3-powered image and data storage, ensuring secure and efficient performance.',
    ]
  ),
  new Project(
    1,
    'dishUp (Full Stack Website)',
    'images/dishUp.png',
    'https://recipemaker-xwnr.onrender.com/',
    'https://github.com/anthonymoon2/recipeMaker',
    [
      'HTML',
      'CSS',
      'TYPESCRIPT',
      'REACT',
      'NODE.JS',
      'EXPRESS.JS',
      'POSTGRESQL',
    ],
    [
      'Built a full-stack recipe discovery website with <span style="color:rgb(90, 177, 239);">TypeScript</span> and <span style="color:rgb(90, 177, 239);">Node.js</span>, integrating the <span style="color:rgb(90, 177, 239);">OpenAI API</span> to deliver personalized recipe suggestions based on available ingredients.',
      'Designed a dynamic, responsive UI in <span style="color:rgb(90, 177, 239);">React</span> with efficient data handling through <span style="color:rgb(90, 177, 239);">PostgreSQL</span> and <span style="color:rgb(90, 177, 239);">Sequelize</span> for streamlined ingredient and recipe management.',
      'Implemented <span style="color:rgb(90, 177, 239);">JWT</span>-based authentication for secure, personalized user sessions to save and access recipes across logins.',
    ]
  ),
  // -- PROJECT 2 --
  new Project(
    2,
    "CHE'LU ADVENTURES (Unity)",
    'images/gameVid.mp4',
    'https://anthonymoon2.itch.io/chelu-adventures?secret=6F5kR3BCobdP4qrhvB2cfW46d5I',
    'https://source-code-link.com',
    ['C#', 'UNITY', 'ADOBE PHOTOSHOP'],
    [
      'Developed and designed a <span style="color:rgb(90, 177, 239)">Unity</span> game using <span style="color:rgb(90, 177, 239)">C#</span> to exhibit the unique characteristics of my home, Guam, through a 2D-pixel art game.',
      'Designed custom game sprites and animations through <span style="color:rgb(90, 177, 239)">Adobe Photoshop</span> to represent architectural landmarks and characters, ensuring visual appeal and authenticity.',
    ]
  ),
  // -- PROJECT 3 --
  new Project(
    3,
    'RUBRIK (Flask)',
    'images/sbg.png',
    'http://172.233.137.123/',
    'https://github.com/anthonymoon2/sbg-website',
    ['HTML', 'CSS', 'PYTHON', 'FLASK'],
    [
      'Developed a website using <span style="color:rgb(90, 177, 239)">HTML</span>, <span style="color:rgb(90, 177, 239)>CSS</span>, <span style="color:rgb(90, 177, 239)">JavaScript</span>, <span style="color:rgb(90, 177, 239)">BootStrap</span>, and <span style="color:rgb(90, 177, 239)">Flask</span> to create a Learning Management System (LMS).',
      'Implemented <span style="color:rgb(90, 177, 239)">SQLAlchemy</span> for database management, offering secure user authentication with two different account types, a personalized class homepage, and a personalized profile page.',
      'Collaborated with the principal of a middle school to ensure the management system met administrative and educational needs. ',
    ]
  ),
  // -- PROJECT 4 --
  new Project(
    4,
    'PORTFOLIO',
    'images/portfolioVid.mp4',
    'https://www.anthonymoon.com/',
    'https://github.com/anthonymoon2/Portfolio',
    ['JAVASCRIPT', 'HTML', 'CSS', 'REACT'],
    [
      'Created a portfolio website using <span style="color:rgb(90, 177, 239)">HTML</span>, <span style="color:rgb(90, 177, 239)">CSS</span>, <span style="color:rgb(90, 177, 239)">React</span>, <span style="color:rgb(90, 177, 239)">Javascript</span>, and <span style="color:rgb(90, 177, 239)">Vite</span> to showcase live demonstrations of my projects and access to the source code.',
      'Focused on the front end and layout of the website, using tools such as <span style="color:rgb(90, 177, 239)">Figma</span> to ensure a creative and visually appealing portfolio.',
      'Implemented <span style="color:rgb(90, 177, 239)">CSS media queries</span>, ensuring responsiveness across desktop, tablet, and mobile devices to enhance user experience.',
    ]
  ),
  // -- PROJECT 5 --
  new Project(
    5,
    'Mario Simulator',
    'images/mario.png',
    'https://demo-link.com',
    'https://github.com/anthonymoon2/Mario-Simulator',
    ['C++'],
    [
      'Created a game simulator in <span style="color:rgb(90, 177, 239)">C++</span> that features a customizable input validation of levels, lives, and probability-based coin and enemy presence for an adaptable simulation environment.',
      'Implemented an input validation system, ensuring inputs for levels, lives, and probabilities are within range, enhancing reliability and user experience.',
    ]
  ),
];

export default Portfolio;
