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
    "relative text-primary no-underline transition-opacity hover:opacity-70";

  return (
    <header className='border-b border-primary/20'>
      <nav className="flex justify-between items-center py-6 max-w-[800px] mx-auto w-full px-4">
        <a href='#about' className='text-primary text-lg font-light no-underline hover:opacity-70 transition-opacity'>
          Anthony Moon
        </a>

        <div className='flex gap-6 text-base'>
          <a
            href='#projects'
            className={linkBase}
          >
            Projects
          </a>
          <a
            href='#work'
            className={linkBase}
          >
            Work
          </a>
          <a
            href='#contact'
            className={linkBase}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
