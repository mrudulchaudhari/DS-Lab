import React, { useState } from 'react';

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
              <li><a href="#" onClick={toggleNav}>Algorithms</a></li>
              <li><a href="#" onClick={toggleNav}>Data Structures</a></li>
              <li><a href="#" onClick={toggleNav}>About</a></li>
              <li><a href="#" onClick={toggleNav}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;