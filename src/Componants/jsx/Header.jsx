import React, { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import "./../css/Header.css";

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    let appliedTheme = theme;
    if (theme === "system") {
      appliedTheme = getSystemTheme();
    }
    if (appliedTheme === "dark") {
      document.body.classList.add("Dark-theme");
    } else {
      document.body.classList.remove("Dark-theme");
    }
    if (appliedTheme === "light") {
      document.body.classList.add("Light-theme");
    } else {
      document.body.classList.remove("Light-theme");
    }
    localStorage.setItem("theme", theme);

    // Listen for system theme changes if 'system' is selected
    if (theme === "system") {
      const listener = (e) => {
        if (e.matches) {
          document.body.classList.add("Dark-theme");
        } else {
          document.body.classList.remove("Dark-theme");
        }
      };
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", listener);
      return () =>
        window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", listener);
    }
  }, [theme]);

  return (
    <li className="theme-dropdown">
      <span className="theme-toggle" title="Toggle dark mode">
        {theme === "dark" || (theme === "system" && getSystemTheme() === "dark") ? <Icon.SunFill /> : <Icon.MoonFill />}
      </span>
      <ul className="theme-menu">
        <li onClick={() => setTheme("light")}>Light</li>
        <li onClick={() => setTheme("dark")}>Dark</li>
        <li onClick={() => setTheme("system")}>System</li>
      </ul>
    </li>
  );
};

const Header = () => {
  const [isBlur, setIsBlur] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsBlur(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={isBlur ? "header-blur" : "header-transparent"}>
      <div className="header-left">
        <span className="header-logo" id="home">{'<'} <a href="#" style={{textDecoration: 'none', color: 'var(--black-white-color)'}}>
          <label style={{color: 'var(--black-white-color)', fontSize: '1.5rem', fontWeight: 'bold'}}>
            Shrikant </label></a>{'/>'}</span>
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
      <ThemeToggle />
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
