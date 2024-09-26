import React from 'react';
import './styles/Section.css';

const Section = ({ title }) => {
  return (
    <div className="section">
      <h3>{title}</h3>
      <p>This is a {title.toLowerCase()} section</p>
    </div>
  );
};

export default Section;
