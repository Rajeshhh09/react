// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} AD's Cake Shop. All rights reserved.</p>
        <div style={{ marginTop: '10px' }}>
          <a href="#" style={{ color: 'white', margin: '0 10px' }}><FaFacebook /></a>
          <a href="#" style={{ color: 'white', margin: '0 10px' }}><FaInstagram /></a>
          <a href="#" style={{ color: 'white', margin: '0 10px' }}><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;