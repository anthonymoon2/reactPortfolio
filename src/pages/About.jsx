import React from 'react';

function About() {
  return (
    <div className='max-w-[800px] mx-auto w-full px-4'>
      {/* Header with Navigation */}
      <div className='flex justify-between items-center pb-4 mb-12 border-b border-primary/5'>
        <div className='text-2xl text-primary font-light'>
          Anthony Moon
        </div>
        <div className='flex gap-6 text-sm text-primary'>
          <a href='#contact' className='no-underline hover:opacity-70 transition-opacity'>
            Contact
          </a>
        </div>
      </div>

      <h2 className='text-2xl text-primary font-medium leading-tight mb-3'>
        I'm a <span className='font-bold italic'>full stack developer</span>
      </h2>

      <p className='text-lg font-light text-primary/70 leading-relaxed'>
        Hi, I'm Anthony! I graduated in 2024 from Chapman University and I'm currently a full-stack
        developer at InBody. I build clean, user-focused applications, with
        my most recent personal project surpassing 50K downloads last year. Explore
        my work below :D
      </p>
    </div>
  );
}

export default About;
