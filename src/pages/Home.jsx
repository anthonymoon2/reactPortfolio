import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';

function Home() {
  return (
    <main>
      {/* Blinking name */}
      <div className="blinking-name-container">
        <p className="blinking-name-text">&gt; Anthony Moon</p>
      </div>

      {/* Introduction Section */}
      <section>
        <p>
        Hello! I'm currently a full stack developer at Inbody with a passion for building clean, efficient, and user-focused full stack applications. Check out my projects 👇!
        </p>

        {/* Buttons for projects and contact */}
        <Link to="/projects">
          <button className="dark-button">Projects</button>
        </Link>
        <Link to="/contact">
          <button className="light-button">Contact</button>
        </Link>
      </section>
    </main>
  );
}

export default Home;

