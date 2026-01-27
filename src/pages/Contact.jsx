import React, { useEffect, useState } from 'react';

function Contact() {
  const [time, setTime] = useState('Loading time...');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles',
      });
      setTime(formattedTime);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='max-w-[800px] mx-auto w-full px-4'>
      <h2 className='text-lg font-semibold mb-6 text-primary'>Contact</h2>

      <div className='flex flex-col gap-8'>
        <div className='text-base text-primary leading-relaxed'>
          <p className='mb-4'>Thank you for taking the time to look at my portfolio.</p>
          <p className='mb-2'>Email: anthonymoon2@gmail.com</p>
          <p>Cell: (949) 413 3700</p>
        </div>
        <div className='flex flex-col items-end'>
          <div className='text-sm text-primary/60 mb-1'>
            Anthony's Current Time
          </div>
          <div className='text-3xl text-primary mb-1'>{time}</div>
          <div className='text-xs text-primary/60'>
            Time in California (PST)
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
