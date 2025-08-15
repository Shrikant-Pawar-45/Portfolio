import React from "react";
import "../css/Footer.css";
import * as Icons from "react-bootstrap-icons";
import { FaUserTie } from "react-icons/fa";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-left">
        <span className="footer-copyright">
          &copy; {new Date().getFullYear()} Shrikant Pawar. All rights reserved.
        </span>
      </div>
      <div className="footer-center">
        
        <a href="#" className="footer-icon" title="Top" aria-label="Back to top" style={{borderColor: "var(--primary-color)"}}>
          {/* Up Arrow SVG */}
          <svg width="22" height="22" fill="var(--primary-color)" viewBox="0 0 24 24"><path d="M12 2l-10 10h6v10h8v-10h6z"/></svg>
        </a>
      </div>
      <div className="footer-right">
      <a href="https://github.com/Shrikant-Pawar-45" className="footer-icon" title="GitHub" target="_blank" rel="noopener noreferrer">
          {/* GitHub SVG */}
          <Icons.Github style={{color: "var(--git-hub-color)"}}/>
        </a>
        <a href="https://www.linkedin.com/in/shrikant-pawar-89200823b/" className="footer-icon" title="LinkedIn" target="_blank" rel="noopener noreferrer">
          {/* LinkedIn SVG */}
          <Icons.Linkedin style={{color: "var(--septenary-color)"}}/>
        </a>
        <a href="https://portfolioadmin-sage.vercel.app/"className="footer-icon" title="Admin" target="_blank" rel="noopener noreferrer">
        < FaUserTie style={{color: "var(--user-color)"}}/>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
