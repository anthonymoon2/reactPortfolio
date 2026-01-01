import React from 'react';
import '../../styles/Resume.css';

// array of skills with name and corresponding image path
const skills = [
  {name: 'HTML', image: '../images/html.webp'},
  {name: 'CSS', image: '../images/css.webp'},
  {name: 'JavaScript', image: '../images/javascript.webp'},
  {name: 'TypeScript', image: '../images/typescript.png'},
  {name: 'Python', image: '../images/python.webp'},
  {name: 'C++', image: '../images/c++.webp'},
  {name: 'Java', image: '../images/java.png'},
  {name: 'Vite', image: '../images/vite.png'},
  {name: 'React', image: '../images/react.webp'},
  {name: 'Docker', image: '../images/docker.webp'},
  {name: 'VSCode', image: '../images/vscode.webp'},
  {name: 'Git', image: '../images/git.webp'},
  {name: 'Github', image: '../images/github.webp'},
  {name: 'SQL', image: '../images/sql.webp'},
  {name: 'Flask', image: '../images/flask.png'},
  {name: 'Figma', image: '../images/figma.png'},
  {name: 'Node.js', image: '../images/node.png'},
  {name: 'Unity', image: '../images/unity.png'},
];

/*
Resume Component
----------------
includes: 
- Resume PDF download button
- Education info (University, majors/minors, coursework)
- Technical skills (dynamically rendered from an array of skill objects)
- Language proficiencies
- Extracurricular involvement
*/
function Resume() {
  return (
    <div>
      <h1>-RESUME-</h1>

      <a href="/resume/AnthonyMoonResume.pdf" download="Anthony Moon's Resume" className="resume-container">
        <button className="dark-button">Download</button>
      </a>


      <hr className="animated-hr"></hr>

      {/* Education section */}
      <section className="education-section">
        <div className="school-outer">
          <div className="school-inner" data-tilt>
            <div className="school-title">SCHOOL</div>
            <div className="school-name">
              CHAPMAN UNIVERSITY
              <img className="chap-img" src="images/chapmanlogo.png" alt="Chapman Logo"></img>
            </div>
            <div className="school-desc">&#x2022; Fowler School of Engineering <br></br> &#x2022; Argyros College of Business & Economics</div>
            <hr className="school-line"></hr>
            <div className="study">MAJOR</div>
            <div className="study-desc">&#x2022; Computer Science</div>
            <div className="study">MINOR</div>
            <div className="study-desc">&#x2022; Business Administration</div>
          </div>
        </div>

        {/* Relevant courses */}
        <div className="education-classes">
          <h2>Relevant Coursework</h2>
          <ul>
            <li>Data Structures and Algorithms</li>
            <li>Web Engineering</li>
            <li>Database Management</li>
            <li>Python</li>
            <li>Java</li>
            <li>Visual Programming</li>
            <li>Operating Systems</li>
            <li>Algorithm Analysis</li>
            <li>Data Communication/Computer Networks</li>
            <li>Artificial Intelligence</li>
            <li>Digital Logic Design</li>
            <li>Computer Architecture</li>
          </ul>
        </div>
      </section>

      <hr className="animated-hr"></hr>

      <h1>-SKILLS-</h1>

      <section className="skills-section">
        <div className='skills-section-inner'>
          {skills.map((skill, index) => (
            <div className='skill' key={index}>
              <img className="skill-image" src={skill.image} alt={skill.name}></img>
              <div>{skill.name}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="animated-hr"></hr>
      
      {/* Language proficiencies */}
      <h1>-LANGUAGES-</h1>
        
      <section className="languages-section">
        <ul>
          <li>English (native, fluent)</li>
          <li>Korean (proficient)</li>
        </ul>
      </section>

      <hr className="animated-hr"></hr>
      
      {/* Extracurricular activities */}
      <h1>-EXTRACURRICULAR-</h1>

      <section className="extras-section">
        <ul>
          <li>Chapman University Computer Science Club</li>
          <li>Chapman University Men's Soccer Team</li>
          <li>Chapman Korean American Student Association</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;

