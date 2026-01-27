import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import ProfessionalWork from './ProfessionalWork';
import Education from './Education';
import Skills from './Skills';
import WorkExperience from './WorkExperience';

function Home() {
  return (
    <main className='flex flex-col gap-16 py-20'>
      {/* ABOUT */}
      <AnimatedSection id='about' index={0} className='flex flex-col scroll-mt-6 mb-8'>
        <About />
      </AnimatedSection>

      <AnimatedSection id='work' index={1} className='scroll-mt-6'>
        <WorkExperience />
      </AnimatedSection>

      <AnimatedSection id='education' index={2} className='scroll-mt-6'>
        <Education />
      </AnimatedSection>

      <AnimatedSection id='skills' index={3} className='scroll-mt-6'>
        <Skills />
      </AnimatedSection>

      <AnimatedSection id='professional' index={4} className='scroll-mt-6'>
        <ProfessionalWork />
      </AnimatedSection>

      <AnimatedSection id='projects' index={5} className='scroll-mt-6'>
        <Projects />
      </AnimatedSection>

      <AnimatedSection id='contact' index={6} className='scroll-mt-6'>
        <Contact />
      </AnimatedSection>
    </main>
  );
}

export default Home;
