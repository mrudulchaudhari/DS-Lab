import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><Link to="/about">About Us</Link></li>
              
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>chaudharimg@rknec.edu</p>
            <p>sinhahv@rknec.edu</p>
            <p>sardaks@rknec.edu</p>
            <p>baitalwarhj@rknec.edu</p>
            <p>shiledaraa@rknec.edu</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;