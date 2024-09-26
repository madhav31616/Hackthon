import React from 'react';
import './styles/Template1.css'; // CSS file for Template 1

const Template1 = () => {
  return (
    <div className="template1">
      <header>
        <h1>John Doe</h1>
        <p>Software Developer</p>
      </header>
      <section>
        <h2>About Me</h2>
        <p>Hi! I'm John Doe, a passionate developer with a love for clean code and efficient systems.</p>
      </section>
      <section>
        <h2>Projects</h2>
        <ul>
          <li>Project 1: Awesome Web App</li>
          <li>Project 2: Great API</li>
          <li>Project 3: Innovative Mobile App</li>
        </ul>
      </section>
      <footer>
        <p>Contact me at johndoe@example.com</p>
      </footer>
    </div>
  );
};

export default Template1;
