import React, { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons"
import "./../css/Header.css";

const Header = () => {
  const [isBlur, setIsBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsBlur(true);
      } else {
        setIsBlur(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isBlur ? "header-blur" : "header-transparent"}>
      <div className="header-left">
        <span className="header-logo" id="home">{'<'}</span>
        <a href="/" style={{textDecoration: 'none', color: 'white'}}><label style={{color: 'white', fontSize: '1.5rem', fontWeight: 'bold'}}>Shrikant</label></a>
        <span className="header-logo">{'/>'}</span>
      </div>
      <nav>
        <ul>
          <li><a href="#About">About</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#Internships">Internships</a></li>
          <li><a href="#Education">Education</a></li>
          <li><a href="#Certifications">Certifications</a></li>
          <li><a href="#Contact">Contact</a></li>
          
        </ul>
        
      </nav>
      <li className="theme-dropdown">
            <span className="theme-toggle" title="Toggle dark mode"><Icon.SunFill /></span>
            <ul className="theme-menu">
              <li>Light</li>
              <li>Dark</li>
              <li>System</li>
            </ul>
          </li>
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {/* SVG Hamburger */}
        <svg width="28" height="28" viewBox="0 0 24 24">
          <rect y="4" width="24" height="3" rx="1.5" />
          <rect y="10.5" width="24" height="3" rx="1.5" />
          <rect y="17" width="24" height="3" rx="1.5" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
