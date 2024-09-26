import React, { useState } from 'react';
import Section from './Section';
import './styles/DragAndDrop.css';

const DragAndDrop = () => {
  const [sections, setSections] = useState(['Introduction', 'Projects', 'Contact']);

  const handleDrop = (section) => {
    setSections((prevSections) => [...prevSections, section]);
  };

  return (
    <div className="drag-drop">
      <h2>Drag & Drop Components</h2>
      <div className="drop-zone">
        {sections.map((section, index) => (
          <Section key={index} title={section} />
        ))}
      </div>
      <div className="draggable-components">
        <div onClick={() => handleDrop('Image Section')}>Image Section</div>
        <div onClick={() => handleDrop('Text Section')}>Text Section</div>
      </div>
    </div>
  );
};

export default DragAndDrop;

