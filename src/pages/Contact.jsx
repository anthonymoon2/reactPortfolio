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
      <h2 className='text-[16px] font-medium mb-3 dark:text-white'>Contact</h2>

      <div className='h-[300px] grid grid-cols-2 max-[800px]:grid-cols-1'>
        <div className='p-[30px] text-center'>
          <form action='https://api.web3forms.com/submit' method='POST'>
            <input
              type='hidden'
              name='access_key'
              value='eeafb7ff-c5e4-414f-9b50-993731280bf2'
            ></input>

            <input
              className='h-[30px] w-[97%] mb-[10px] border border-black'
              type='text'
              placeholder='Name'
              name='name'
              required
            ></input>

            <input
              className='h-[30px] w-[97%] mb-[10px] border border-black'
              type='email'
              placeholder='Email'
              name='email'
              required
            ></input>

            <div className='message'>
              <textarea
                className='h-[140px] w-[97%] resize-none overflow-auto border border-black p-2'
                placeholder='Message'
                rows='2'
                name='message'
                required
              ></textarea>
            </div>

            <button
              type='submit'
              className='bg-[#222222] text-white border-0 h-[40px] px-[15px] mt-[12px] transition-colors duration-500 hover:bg-[rgb(116,113,113)]'
            >
              Send Message
            </button>
          </form>
        </div>

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
    </div>
  );
}
export default Contact;
