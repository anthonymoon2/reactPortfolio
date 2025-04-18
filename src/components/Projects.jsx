import React from 'react';
import { useState, useEffect } from 'react';

// finds all projects and displays them
function Portfolio() {
  const [skills, setSkills] = useState([]);

  // helper function checks whether a particular skill is currently selected
  const isSkillSelected = (skill) => skills.includes(skill);

  // function to add skill
  function addSkill(skill){
    if (!skills.includes(skill)){ // add skill
      setSkills((prevSkills) => [...prevSkills, skill]);
      console.log(`${skill} added successfully!`)
    } else{ // remove skill
      setSkills((prevSkills) => prevSkills.filter((s) => s !== skill));
    }
  }

  const filteredProjects = skills.length === 0 ? projects : projects.filter((project) =>
    project.skillsArray.some((skill) => skills.includes(skill))
  );

  return (
    <div>
      <h1>-PROJECTS-</h1>

      <div className='skillsContainer'>
        <button className={isSkillSelected('HTML') ? 'button-selected' : 'button-unselected'} onClick={() => addSkill('HTML')}>HTML</button>
        <button className={isSkillSelected('CSS') ? 'button-selected' : 'button-unselected'} onClick={() => addSkill('CSS')}>CSS</button>
        <button className={isSkillSelected('JAVASCRIPT') ? 'button-selected' : 'button-unselected'} onClick={() => addSkill('JAVASCRIPT')}>JAVASCRIPT</button>
        <button className={isSkillSelected('C++') ? 'button-selected' : 'button-unselected'} onClick={() => addSkill('C++')}>C++</button>
        <button className={isSkillSelected('FLASK') ? 'button-selected' : 'button-unselected'} onClick={() => addSkill('FLASK')}>FLASK</button>
        <button className={isSkillSelected('UNITY') ? 'button-selected' : 'button-unselected'} onClick={() => addSkill('UNITY')}>UNITY</button>
        <button className={isSkillSelected('PYTHON') ? 'button-selected' : 'button-unselected'} onClick={() => addSkill('PYTHON')}>PYTHON</button>
        <button className={isSkillSelected('REACT') ? 'button-selected' : 'button-unselected'} onClick={() => addSkill('REACT')}>REACT</button>
        <button className={isSkillSelected('TYPESCRIPT') ? 'button-selected' : 'button-unselected'} onClick={() => addSkill('TYPESCRIPT')}>TYPESCRIPT</button>
        <button className={isSkillSelected('NODE.JS') ? 'button-selected' : 'button-unselected'} onClick={() => addSkill('NODE.JS')}>NODE.JS</button>
        <button className={isSkillSelected('POSTGRESQL') ? 'button-selected' : 'button-unselected'} onClick={() => addSkill('POSTGRESQL')}>POSTGRESQL</button>
      </div>

      {/* Projects */}
      {filteredProjects.map((project) => (
        <div className="second-container-row" key={project.id}>
          <div className="project-container">
            <div className="project-container-left">
              {project.image.endsWith('.mp4') ? (
                // render video if link ends with .mp4
                <div>
                  <video autoPlay loop muted playsInline className="project-media">
                    <source src={project.image} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

              ) : (
                // render an image for other (png)
                <div>
                  <img src={project.image} alt={project.title} className="project-media"/>
                </div>
              )}
            </div>
            <div className="project-container-right">
              <div className="project-container-title">{project.title}</div>
              <div className="project-desc">
                <ul>
                  {project.bulletPointsArray.map((point, pointIndex) => (
                    <li key={pointIndex} dangerouslySetInnerHTML={{ __html: point }}></li>
                  ))}
                </ul> 
                <div className="project-buttons-container">
                    <a href={project.demoLink} target="_blank">
                      <button className="project-button-demo" type="button">
                        Live Demo
                      </button>
                    </a>
                    <a href={project.sourceCodeLink} target="_blank">
                      <button className="project-button-github" type="button">
                        Source Code
                        <img className="image-github" src="images/github.png"></img>
                      </button>
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


class Project {
  constructor(id, title, image, demoLink, sourceCodeLink, skillsArray, bulletPointsArray){
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
      'Engineered a scalable backend with <span style="color:rgb(90, 177, 239)">Node.js</span> & <span style="color:rgb(90, 177, 239)">Express</span>, deployed via AWS Elastic Beanstalk with S3-powered image and data storage, ensuring secure and efficient performance.'
    ],    
  ),
  new Project(
    1,
    'dishUp (Full Stack Website)',
    'images/dishUp.png',
    'https://recipemaker-xwnr.onrender.com/',
    'https://github.com/anthonymoon2/recipeMaker',
    ['HTML', 'CSS', 'TYPESCRIPT', 'REACT', 'NODE.JS', 'EXPRESS.JS', 'POSTGRESQL'],
    [
      'Built a full-stack recipe discovery website with <span style="color:rgb(90, 177, 239);">TypeScript</span> and <span style="color:rgb(90, 177, 239);">Node.js</span>, integrating the <span style="color:rgb(90, 177, 239);">OpenAI API</span> to deliver personalized recipe suggestions based on available ingredients.', 
      'Designed a dynamic, responsive UI in <span style="color:rgb(90, 177, 239);">React</span> with efficient data handling through <span style="color:rgb(90, 177, 239);">PostgreSQL</span> and <span style="color:rgb(90, 177, 239);">Sequelize</span> for streamlined ingredient and recipe management.', 
      'Implemented <span style="color:rgb(90, 177, 239);">JWT</span>-based authentication for secure, personalized user sessions to save and access recipes across logins.'
    ],
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
      'Designed custom game sprites and animations through <span style="color:rgb(90, 177, 239)">Adobe Photoshop</span> to represent architectural landmarks and characters, ensuring visual appeal and authenticity.'
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
      'Collaborated with the principal of a middle school to ensure the management system met administrative and educational needs. '
    ],
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
      'Implemented <span style="color:rgb(90, 177, 239)">CSS media queries</span>, ensuring responsiveness across desktop, tablet, and mobile devices to enhance user experience.'
    ],
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
      'Implemented an input validation system, ensuring inputs for levels, lives, and probabilities are within range, enhancing reliability and user experience.'
    ],
  ),
]

export default Portfolio;