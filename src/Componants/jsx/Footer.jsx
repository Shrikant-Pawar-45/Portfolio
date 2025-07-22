import React from "react";
import "../css/Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-left">
        <span className="footer-copyright">
          &copy; {new Date().getFullYear()} Shrikant Pawar. All rights reserved.
        </span>
      </div>
      <div className="footer-center">
        <a href="https://github.com/Shrikant-Pawar-45" className="footer-icon" title="GitHub" target="_blank" rel="noopener noreferrer">
          {/* GitHub SVG */}
          <svg width="22" height="22" fill="var(--text-color)" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.45 24 17.12 24 12.02 24 5.74 18.77.5 12 .5z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/shrikant-pawar-89200823b/" className="footer-icon" title="LinkedIn" target="_blank" rel="noopener noreferrer">
          {/* LinkedIn SVG */}
          <svg width="22" height="22" fill="var(--septenary-color)" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
        </a>
        <a href="#" className="footer-icon" title="Top" aria-label="Back to top">
          {/* Up Arrow SVG */}
          <svg width="22" height="22" fill="var(--primary-color)" viewBox="0 0 24 24"><path d="M12 2l-10 10h6v10h8v-10h6z"/></svg>
        </a>
      </div>
      <div className="footer-right">
      <span className="footer-made">
  Made with 
  <span className="footer-heart-glow">
    <svg
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 25"
      fill="none"
      stroke="var(--primary-color)"
      strokeWidth="2.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ verticalAlign: "-0.15em", marginRight: "0.2em", marginLeft: "0.2em" }}
    >
      <path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 7 3.5 12 7C17 3.5 20 5.5 20 8.5C20 13.5 12 21 12 21Z"/>
    </svg>
  </span>
   by Shrikant Pawar
</span>
      </div>
    </div>
  </footer>
);

export default Footer;
