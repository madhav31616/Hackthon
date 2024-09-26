import React, { useState } from 'react';
import './styles/PortfolioEditor.css';

const PortfolioEditor = () => {
  const [sections, setSections] = useState([]);

  const addSection = (section) => {
    setSections([...sections, section]);
  };

  return (
    <div className="portfolio-editor">
      <h2>Portfolio Editor</h2>
      <button onClick={() => addSection('New Section')}>Add Section</button>
      <div className="portfolio-preview">
        {sections.map((section, index) => (
          <div key={index} className="portfolio-section">
            {section}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioEditor;
