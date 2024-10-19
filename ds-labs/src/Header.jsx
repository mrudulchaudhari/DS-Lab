import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>DS Lab Project</h1>
          </div>
          <nav className="main-nav">
            <ul>
              <li>
                {location.pathname === '/about' ? (
                  <Link to="/">Home</Link>
                ) : (
                  <span className="current-page">Home</span>
                )}
              </li>
              <li>
                {location.pathname === '/' ? (
                  <Link to="/about">About</Link>
                ) : (
                  <span className="current-page">About</span>
                )}
              </li>        
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;