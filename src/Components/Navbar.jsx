import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id='navb'>
      {/* Hamburger Menu */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <pre>  ☰</pre>
      </button>

      {/* Dropdown Menu */}
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link></li>
        <li><Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
