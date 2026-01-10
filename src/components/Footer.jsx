function Footer() {
  return (
    <footer className='bg-[#212121]'>
      <div className='max-w-[600px] mx-auto w-full px-4'>
        <section className='pt-[3%] pb-0 flex justify-center gap-5'>
          <a
            className='group text-white no-underline flex items-center'
            href='#resume'
          >
            RESUME
            <img
              className='h-[1em] ml-[5px] transition-transform duration-100 group-hover:scale-[2]'
              src='images/arrow.png'
              alt='Arrow'
            />
          </a>
          <a
            className='group text-white no-underline flex items-center'
            href='#projects'
          >
            PROJECTS
            <img
              className='h-[1em] ml-[5px] transition-transform duration-100 group-hover:scale-[2]'
              src='images/arrow.png'
              alt='Arrow'
            />
          </a>
          <a
            className='group text-white no-underline flex items-center'
            href='#contact'
          >
            CONTACT
            <img
              className='h-[1em] ml-[5px] transition-transform duration-100 group-hover:scale-[2]'
              src='images/arrow.png'
              alt='Arrow'
            />
          </a>
        </section>

        <div className='text-center text-white py-[2%] text-[10px]'>
          Made in 2024 by Anthony Moon
        </div>
      </div>
    </footer>
  );
}

export default Footer;
