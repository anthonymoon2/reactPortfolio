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
    <div className='max-w-[600px] mx-auto w-full px-4'>
      <h2 className='text-base font-normal mb-4 dark:text-white'>Contact</h2>

      <div className='p-[30px]'>
        <div className='text-[15px] mb-[30px]'>
          Thank you for taking the time to look at my portfolio. <br></br>
          <br></br>
          Email: anthonymoon2@gmail.com <br></br>
          Cell: (949) 413 3700
        </div>
        <div className='text-right'>
          <div className='text-[14px] text-[lightslategrey]'>
            Anthony's Current Time
          </div>
          <div className='text-[30px]'>{time}</div>
          <div className='text-[10px] text-[lightslategrey] pl-[50px]'>
            Time in California (PST)
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
