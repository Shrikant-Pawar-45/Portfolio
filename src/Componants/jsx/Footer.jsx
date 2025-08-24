import React from 'react';
import '../css/Footer.css';
import { Github, Linkedin, PersonFill } from 'react-bootstrap-icons';

const Footer = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-bottom">
          <div className="footer-copy">&copy; {new Date().getFullYear()} Shrikant Pawar. All rights reserved.</div>
          <div className="footer-socials">
              <a href="https://github.com/Shrikant-Pawar-45" title="GitHub" target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/shrikant-pawar-89200823b/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
              <a href="https://portfolioadmin-sage.vercel.app/" title="Portfolio Admin" target="_blank" rel="noopener noreferrer">
                <PersonFill />
              </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
