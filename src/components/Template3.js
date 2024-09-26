import React from 'react';
import './styles/Template3.css'; // CSS file for Template 3

const Template3 = () => {
  return (
    <div className="template3">
      <header>
        <h1>Alex Smith</h1>
        <p>Data Scientist</p>
      </header>
      <section>
        <h2>Skills</h2>
        <p>Python, R, Machine Learning, Deep Learning, Data Analysis</p>
      </section>
      <section>
        <h2>Work Experience</h2>
        <ul>
          <li>Company A: Data Scientist (2020 - Present)</li>
          <li>Company B: Junior Data Analyst (2018 - 2020)</li>
        </ul>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Email: alexsmith@example.com</p>
      </section>
    </div>
  );
};

export default Template3;
