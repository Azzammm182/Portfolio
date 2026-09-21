// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

// Terima props language dan setLanguage
const Navbar = ({ language, setLanguage }) => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'AI', path: '/ai' },
    { name: 'Projects', path: '/projects' },
    // Menu 'Contact' sudah dihapus dari sini
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <span className="logo-blue">AZ</span>AM
        </Link>

        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className={location.pathname === link.path ? 'nav-link active' : 'nav-link'}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Switcher yang berfungsi */}
        <div className="lang-switch">
          <button 
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button 
            className={`lang-btn ${language === 'id' ? 'active' : ''}`}
            onClick={() => setLanguage('id')}
          >
            ID
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;