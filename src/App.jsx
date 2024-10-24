import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import '../styles/index.css';
import '../styles/contact.css';

import { Link, useLocation } from 'react-router-dom';

function App(){
    return(
        <div>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>

            <Sidebar />

            <Footer />
        </div>
    )
}

function Header() {
    const location = useLocation(); // Hook to get the current path 

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

function Sidebar(){
    return(
        <div className="sidebar-container">
            |
            <a href="https://www.linkedin.com/in/cu-anthonymoon/" target="_blank" rel="noopener noreferrer">
                <img src="images/linkedInImage.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/anthonymoon2" target="_blank" rel="noopener noreferrer">
                <img src="images/githubImage.png" alt="GitHub" />
            </a>
            |
        </div>
    )
}

function Footer() {
    return(
        <footer>
            <section>
            <a href="/resume">
                RESUME
                <img src="images/arrow.png" alt="Arrow" />
            </a>
            <a href="/projects">
                PROJECTS
                <img src="images/arrow.png" alt="Arrow" />
            </a>
            <a href="/contact">
                CONTACT
                <img src="images/arrow.png" alt="Arrow" />
            </a>
            </section>

            <div className="footer-cred">
                Made in 2024 by Anthony Moon
            </div>
        </footer>
    )
}
export default App;