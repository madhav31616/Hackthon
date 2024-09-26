import React from 'react';
import { Link } from 'react-router-dom';
import './styles/TemplateSelection.css'; // CSS for the template selection

const TemplateSelection = () => {
  return (
    <div className="template-selection">
      <h1>Select Your Template</h1>
      <div className="templates">
        <div className="template-card">
          <Link to="/template1">Template 1</Link>
        </div>
        <div className="template-card">
          <Link to="/template2">Template 2</Link>
        </div>
        <div className="template-card">
          <Link to="/template3">Template 3</Link>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelection;
