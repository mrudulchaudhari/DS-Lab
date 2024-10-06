import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>DS Lab Project</h1>
          </div>
          <button className="nav-toggle" onClick={toggleNav} aria-label="Toggle navigation">
            ☰
          </button>
          <nav className={`main-nav ${isNavOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#" onClick={toggleNav}>Home</a></li>
              <li><Link to="/about" onClick={toggleNav}>About</Link></li>        
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;