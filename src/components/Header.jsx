import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();  

    return(
        <header>
            <nav>
                <Link to="/"> AM </Link>

                <div className="nav-right">
                    <Link to="/" className={location.pathname === '/' ? 'current-nav' : ''}>
                        About
                    </Link>
                    <Link to="/resume" className={location.pathname === '/resume' ? 'current-nav' : ''}>
                        Resume
                    </Link>
                    <Link to="/projects" className={location.pathname === '/projects' ? 'current-nav' : ''}>
                        Projects
                    </Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'current-nav' : ''}>
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;

