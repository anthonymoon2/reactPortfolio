import React from 'react';
import { useState, useEffect } from 'react';

// finds all projects and displays them
function Portfolio() {
  const [skills, setSkills] = useState([]);
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
      </div>

      {filteredProjects.map((project) => (
        <div className="second-container-row" key={project.id}>
          <div className="project-container">
            <div className="project-container-left">
              {project.image.endsWith('.mp4') ? (
                // render video if link ends with .mp4
                <video autoPlay loop muted playsInline>
                  <source src={project.image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                // render an image for other (png)
                <img src={project.image} alt={project.title} className="project-images"/>
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
              </div>
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
  // -- PROJECT 1 -- 
  new Project(
    1,
    'CARD MATCHER',
    'images/cardMatcherVid.mp4',
    'https://anthonymoon2.github.io/cardMatcherGame/',
    'https://github.com/anthonymoon2/cardMatcherGame',
    ['JAVASCRIPT', 'HTML', 'CSS'],
    [
      'Developed a memorization card matching game using <span style="color:rgb(90, 177, 239);">JavaScript</span> which randomizes pairs of cards that the user has to match under a time limit.', 
      'Implemented a leaderboard which stores the username and top three fastest scores using <span style="color:rgb(90, 177, 239)>local storage</span>. ', 
      'Worked with a partner on code design and implementation and used <span style="color:rgb(90, 177, 239)>Git/GitHub</span> for source control.'
    ],
  ),
  // -- PROJECT 2 -- 
  new Project(
    2,
    "CHE'LU ADVENTURES",
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
    'RUBRIK',
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