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
        Hello! I’m a recent Computer Science graduate from Chapman University currently seeking full stack developer roles. I’m passionate about building clean, efficient, and user-focused full stack applications. With hands-on experience across both front-end and back-end technologies, I enjoy bringing ideas to life from concept to deployment. Check out my projects 👇!
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