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

function Skills() {
  return (
    <div className='max-w-[600px] mx-auto w-full px-4'>
      <h2 className='text-base font-normal mb-4 dark:text-white'>Skills</h2>
      <div className='grid grid-cols-3 gap-x-4 gap-y-4 max-[768px]:grid-cols-2 max-[576px]:grid-cols-1'>
        {skills.map((skill, index) => (
          <div
            className='flex items-center gap-2 text-base text-gray-700 dark:text-gray-300'
            key={index}
          >
            <img className='h-5 w-5' src={skill.image} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
