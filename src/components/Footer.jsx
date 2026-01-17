function Footer() {
  return (
    <footer className='bg-black'>
      <div className='max-w-[600px] mx-auto w-full px-4'>
        <section className='pt-8 pb-4 flex justify-center gap-6'>
          <a
            className='text-white no-underline text-sm hover:text-gray-300 transition-colors'
            href='#resume'
          >
            Resume
          </a>
          <a
            className='text-white no-underline text-sm hover:text-gray-300 transition-colors'
            href='#projects'
          >
            Projects
          </a>
          <a
            className='text-white no-underline text-sm hover:text-gray-300 transition-colors'
            href='#contact'
          >
            Contact
          </a>
        </section>

        <div className='text-center text-gray-400 py-6 text-xs'>
          Made in 2024 by Anthony Moon
        </div>
      </div>
    </footer>
  );
}

export default Footer;
