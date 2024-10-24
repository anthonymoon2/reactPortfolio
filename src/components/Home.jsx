import React from 'react';
import { Link } from 'react-router-dom';

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
          Hello! I’m a computer science graduate and aspiring web developer from Chapman University who enjoys building user-friendly and creative websites, games, and everything in between.
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