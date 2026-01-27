import React from 'react';

function Education() {
  return (
    <div className='max-w-[800px] mx-auto w-full px-4'>
      <h2 className='text-lg font-semibold mb-4 text-primary'>
        Education
      </h2>
      <div className='space-y-4'>
        <div className='flex gap-3 justify-between items-start'>
          <div className='flex gap-3'>
            <img
              className='h-12 w-12 shrink-0'
              src='images/chapmanlogo.png'
              alt='Chapman Logo'
            />
            <div>
              <div className='text-lg text-primary mb-0.5'>
                Chapman University
              </div>
              <div className='text-base text-primary/70'>
                Fowler School of Engineering · Argyros College of Business &
                Economics
              </div>
            </div>
          </div>
          <div className='text-base text-primary/70 whitespace-nowrap'>
            Graduation: 2024
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
