import { useEffect, useState } from 'react';

function Header() {
  const [activeHash, setActiveHash] = useState(
    window.location.hash || '#about'
  );

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash || '#about');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const linkBase =
    "relative text-black no-underline after:content-[''] after:absolute after:bg-[#8c8c73] after:h-[3px] after:left-0 after:-bottom-[10px] after:transition-all after:duration-300 after:w-0 hover:after:w-full";

  return (
    <header>
      <nav className="flex justify-between items-center pt-[3%] text-[25px] font-['Outfit',sans-serif] max-w-[900px] mx-auto w-full px-4">
        <a href='#about' className={linkBase}>
          {' '}
          AM{' '}
        </a>

        <div className='flex gap-5 text-[15px]'>
          <a
            href='#about'
            className={`${linkBase} ${
              activeHash === '#about' ? 'text-[#8c8c73]' : ''
            }`}
          >
            About
          </a>
          <a
            href='#resume'
            className={`${linkBase} ${
              activeHash === '#resume' ? 'text-[#8c8c73]' : ''
            }`}
          >
            Resume
          </a>
          <a
            href='#projects'
            className={`${linkBase} ${
              activeHash === '#projects' ? 'text-[#8c8c73]' : ''
            }`}
          >
            Projects
          </a>
          <a
            href='#contact'
            className={`${linkBase} ${
              activeHash === '#contact' ? 'text-[#8c8c73]' : ''
            }`}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
