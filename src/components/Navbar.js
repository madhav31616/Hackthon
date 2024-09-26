import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Portfolio Builder</h1>
      <ul>
        <li><Link to="/">Templates</Link></li>
        <li><Link to="/drag-and-drop">Drag & Drop</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
