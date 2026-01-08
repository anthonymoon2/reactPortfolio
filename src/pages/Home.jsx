import React from 'react';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';

function Home() {
  return (
    <main className='flex flex-col'>
      {/* ABOUT */}
      <section
        id='about'
        className='h-[500px] pt-[150px] flex flex-col scroll-mt-6'
      >
        <div className='max-w-[900px] mx-auto w-full px-4'>
          {/* Name */}
          <div className='inline-block'>
            <p className='p-0 m-0 text-[40px] text-black max-[768px]:text-[45px] max-[576px]:text-[55px]'>
              Anthony Moon
            </p>
          </div>

          {/* Introduction Section */}
          <div>
            <p className='text-[18px] text-gray-700'>
              Hello! I'm currently a full stack developer at Inbody with a
              passion for building clean, efficient, and user-focused full stack
              applications. Check out my projects!
            </p>

            <div className='mt-[20px]'>
              <a href='#projects'>
                <button className='border-0 rounded-[20px] px-[5%] py-[1.5%] bg-[#222222] text-white transition-colors duration-500 hover:bg-[rgb(116,113,113)]'>
                  Projects
                </button>
              </a>
              <a href='#contact'>
                <button className='border-0 rounded-[20px] px-[5%] py-[1.5%] ml-[10px] transition-colors duration-500 hover:bg-[#8c8c73] hover:text-white'>
                  Contact
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id='projects' className='scroll-mt-6'>
        <Projects />
      </section>

      <section id='resume' className='scroll-mt-6'>
        <Resume />
      </section>

      <section id='contact' className='scroll-mt-6'>
        <Contact />
      </section>
    </main>
  );
}

export default Home;
