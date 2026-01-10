import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import Contact from './Contact';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';
import WorkExperience from './WorkExperience';

function Home() {
  return (
    <main className='flex flex-col gap-24 py-30'>
      {/* ABOUT */}
      <AnimatedSection id='about' className='flex flex-col scroll-mt-6'>
        <div className='max-w-[600px] mx-auto w-full px-4'>
          {/* Name */}
          <h1 className='text-[35px] text-black leading-none mb-2'>
            Anthony
            <br />
            Moon
          </h1>

          <p className='text-[15px] text-gray-600'>
            Graduated in 2024 from Chapman University and currently a full-stack
            developer at InBody. I build clean, user-focused applications, with
            my most recent project surpassing 50K downloads last year. Explore
            my work below :D
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection id='projects' className='scroll-mt-6'>
        <Projects />
      </AnimatedSection>

      <AnimatedSection id='work' className='scroll-mt-6'>
        <WorkExperience />
      </AnimatedSection>

      <AnimatedSection id='education' className='scroll-mt-6'>
        <Education />
      </AnimatedSection>

      <AnimatedSection id='skills' className='scroll-mt-6'>
        <Skills />
      </AnimatedSection>

      <AnimatedSection id='contact' className='scroll-mt-6'>
        <Contact />
      </AnimatedSection>
    </main>
  );
}

export default Home;
