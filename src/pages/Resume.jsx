import React from 'react';

// array of skills with name and corresponding image path
const skills = [
  { name: 'HTML', image: '../images/html.webp' },
  { name: 'CSS', image: '../images/css.webp' },
  { name: 'JavaScript', image: '../images/javascript.webp' },
  { name: 'TypeScript', image: '../images/typescript.png' },
  { name: 'Python', image: '../images/python.webp' },
  { name: 'C++', image: '../images/c++.webp' },
  { name: 'Java', image: '../images/java.png' },
  { name: 'Vite', image: '../images/vite.png' },
  { name: 'React', image: '../images/react.webp' },
  { name: 'Docker', image: '../images/docker.webp' },
  { name: 'VSCode', image: '../images/vscode.webp' },
  { name: 'Git', image: '../images/git.webp' },
  { name: 'Github', image: '../images/github.webp' },
  { name: 'SQL', image: '../images/sql.webp' },
  { name: 'Flask', image: '../images/flask.png' },
  { name: 'Figma', image: '../images/figma.png' },
  { name: 'Node.js', image: '../images/node.png' },
  { name: 'Unity', image: '../images/unity.png' },
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
    <div className='max-w-[900px] mx-auto w-full px-4'>
      {/* <h1>-RESUME-</h1>

      <a
        href='/resume/AnthonyMoonResume.pdf'
        download="Anthony Moon's Resume"
        className='flex justify-center mb-[50px]'
      >
        <button className='border-0 rounded-[20px] px-[5%] py-[1.5%] bg-[#222222] text-white transition-colors duration-500 hover:bg-[rgb(116,113,113)]'>
          Download
        </button>
      </a> */}

      <hr className='border-t-[1.5px] border-[#939292] mb-[50px]'></hr>

      {/* Education section */}
      <section className='flex justify-center mb-[60px] max-[768px]:flex-col max-[768px]:items-center max-[768px]:h-[740px]'>
        <div className='flex'>
          <div
            className='h-[380px] w-[300px] border shadow-[15px_15px_5px_lightgrey] bg-[rgb(248,248,248)]'
            data-tilt
          >
            <div className='mt-[35px] pl-[30px] text-[25px]'>SCHOOL</div>
            <div className='pl-[45px] text-[22px] text-[#8C8C73]'>
              CHAPMAN UNIVERSITY
              <img
                className='mt-[2px] h-[25px] ml-[8px] inline-block'
                src='images/chapmanlogo.png'
                alt='Chapman Logo'
              ></img>
            </div>
            <div className='text-[18px] pl-[60px] text-[#666666]'>
              &#x2022; Fowler School of Engineering <br></br> &#x2022; Argyros
              College of Business & Economics
            </div>
            <hr className='mt-[25px] mx-[10px] border border-[rgb(75,75,75)] border-t'></hr>
            <div className='text-[22px] ml-[30px]'>MAJOR</div>
            <div className='text-[18px] ml-[35px] text-[#666666]'>
              &#x2022; Computer Science
            </div>
            <div className='text-[22px] ml-[30px]'>MINOR</div>
            <div className='text-[18px] ml-[35px] text-[#666666]'>
              &#x2022; Business Administration
            </div>
          </div>
        </div>

        {/* Relevant courses */}
        <div className='ml-[40px] w-[300px] max-[768px]:mt-[20px]'>
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

      <hr className='border-t-[1.5px] border-[#939292] mb-[50px]'></hr>

      <h1>-SKILLS-</h1>

      <section className='mt-[45px] flex justify-center mb-[80px]'>
        <div className='grid grid-cols-3 gap-[50px] max-[576px]:gap-[25px]'>
          {skills.map((skill, index) => (
            <div
              className='flex text-[20px] transition-transform duration-200 hover:scale-[1.1]'
              key={index}
            >
              <img
                className='h-[25px] mr-[10px]'
                src={skill.image}
                alt={skill.name}
              ></img>
              <div>{skill.name}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className='border-t-[1.5px] border-[#939292] mb-[50px]'></hr>

      {/* Language proficiencies */}
      <h1>-LANGUAGES-</h1>

      <section className='flex justify-center mb-[80px]'>
        <ul>
          <li>English (native, fluent)</li>
          <li>Korean (proficient)</li>
        </ul>
      </section>

      <hr className='border-t-[1.5px] border-[#939292] mb-[50px]'></hr>

      {/* Extracurricular activities */}
      <h1>-EXTRACURRICULAR-</h1>

      <section className='flex justify-center mb-[80px]'>
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
