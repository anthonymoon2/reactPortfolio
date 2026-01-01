import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import '../styles/index.css';

function App(){
    return(
        <div>
            <div className="app-container">
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
            </div>

            <Footer />
        </div>
    )
}

export default App;