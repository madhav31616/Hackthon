import React from 'react';
import './styles/Template2.css'; // CSS file for Template 2

const Template2 = () => {
  return (
    <div className="template2">
      <aside>
        <h2>Jane Doe</h2>
        <p>Graphic Designer</p>
      </aside>
      <main>
        <section>
          <h2>About Me</h2>
          <p>I am Jane Doe, a graphic designer who believes in the power of visual storytelling.</p>
        </section>
        <section>
          <h2>Portfolio</h2>
          <div className="projects-grid">
            <div>Project 1: Branding</div>
            <div>Project 2: Website Design</div>
            <div>Project 3: Print Media</div>
          </div>
        </section>
      </main>
      <footer>
        <p>Reach out at janedoe@example.com</p>
      </footer>
    </div>
  );
};

export default Template2;
