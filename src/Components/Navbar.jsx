import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-bottom">
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          {/* Hamburger icon */}
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logo">LOGO</div>
        <nav className="nav-links">
          <a href="#shop">SHOP</a>
          <a href="#skills">SKILLS</a>
          <a href="#stories">STORIES</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT US</a>
        </nav>
        <div className="navbar-icons">
          <span className="icon">🔍</span> 
          <span className="icon">♥</span>  
          <span className="icon">👜</span>
        </div>
      </div>
      {/* Optional menu for mobile, appears on click */}
      <nav className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#home">HOME</a>
        <a href="#shop">SHOP</a>
        <a href="#home">SKILLS</a>
        <a href="#shop">STORIES</a>
        <a href="#home">ABOUT</a>
        <a href="#shop">CONTACT US</a>
      </nav>
    </header>
  );
};

export default Navbar;




