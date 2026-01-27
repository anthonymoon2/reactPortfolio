import React from 'react';
import ProjectCard from '../components/ProjectCard';

// finds all projects and displays them
function Portfolio() {
  // Transform projects to match ProjectCard format
  const formattedProjects = projects.map(project => ({
    id: project.id,
    title: project.title,
    image: project.image,
    description: project.bulletPointsArray[0].replace(/<[^>]*>/g, ''), // Strip HTML tags
    skills: project.skillsArray.map(skill => skill.charAt(0) + skill.slice(1).toLowerCase()), // Convert to proper case
    demoLink: project.demoLink,
    sourceCodeLink: project.sourceCodeLink
  }));

  return (
    <div className='max-w-[800px] mx-auto w-full px-4'>
      <h2 className='text-lg font-semibold mb-4 text-primary'>
        Personal Projects
      </h2>

      <div className='grid grid-cols-2 gap-6 max-[768px]:grid-cols-1'>
        {formattedProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
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
];

export default Portfolio;
