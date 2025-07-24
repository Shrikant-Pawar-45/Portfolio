import React, { useEffect, useState } from "react";
import * as Icon from "react-bootstrap-icons";
import "./../css/Header.css";

const getSystemTheme = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "light"
  );

  // Animation trigger function
  function triggerThemeTransition(newTheme) {
    const overlay = document.querySelector('.theme-transition-overlay');
    if (!overlay) return;
    overlay.style.setProperty('--theme-transition-color',
      newTheme === "dark" ? "#181818" : "#fff"
    );
    overlay.classList.add('active');
    setTimeout(() => {
      overlay.classList.remove('active');
    }, 600); // match the CSS transition duration
  }

  // Theme change handler
  const handleThemeChange = (newTheme) => {
    triggerThemeTransition(newTheme);
    setTimeout(() => {
      setTheme(newTheme);
    }, 500); // 2s matches your CSS transition duration
  };

  useEffect(() => {
    let appliedTheme = theme;
    if (theme === "system") {
      appliedTheme = getSystemTheme();
    }
    if (appliedTheme === "dark") {
      document.body.classList.add("Dark-theme");
      document.body.classList.remove("Light-theme");
    } else {
      document.body.classList.remove("Dark-theme");
      document.body.classList.add("Light-theme");
    }
    localStorage.setItem("theme", theme);

    if (theme === "system") {
      const listener = (e) => {
        if (e.matches) {
          document.body.classList.add("Dark-theme");
          document.body.classList.remove("Light-theme");
        } else {
          document.body.classList.remove("Dark-theme");
          document.body.classList.add("Light-theme");
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
        <li onClick={() => handleThemeChange("light")}>Light</li>
        <li onClick={() => handleThemeChange("dark")}>Dark</li>
        <li onClick={() => handleThemeChange("system")}>System</li>
      </ul>
    </li>
  );
};

const Header = () => {
  const [isBlur, setIsBlur] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsBlur(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on navigation (optional)
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={isBlur ? "header-blur" : "header-transparent"}>
      <div className="header-row">
        <div className="header-left">
          <span className="header-logo" id="home">{'<'} <a href="#" style={{textDecoration: 'none', color: 'var(--black-white-color)'}}>
            <label style={{color: 'var(--black-white-color)', fontSize: '1.5rem', fontWeight: 'bold'}}>
              Shrikant </label></a>{'/>'}</span>
        </div>
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24">
            <rect y="4" width="24" height="3" rx="1.5" fill="var(--hamburger-color)" />
            <rect y="10.5" width="24" height="3" rx="1.5" fill="var(--hamburger-color)" />
            <rect y="17" width="24" height="3" rx="1.5" fill="var(--hamburger-color)" />
          </svg>
        </button>
        <div className="themehide"><ThemeToggle /></div>
      </div>
      <nav className={menuOpen ? "mobile-menu-open" : ""}>
        <ul>
          <li><a href="#About" onClick={handleNavClick}>About</a></li>
          <li><a href="#Projects" onClick={handleNavClick}>Projects</a></li>
          <li><a href="#Internships" onClick={handleNavClick}>Internships</a></li>
          <li><a href="#Education" onClick={handleNavClick}>Education</a></li>
          <li><a href="#Certifications" onClick={handleNavClick}>Certifications</a></li>
          <li><a href="#Contact" onClick={handleNavClick}>Contact</a></li>
          
          
        </ul>    
      </nav>
      <li className="themehide-x"><ThemeToggle /></li>
    </header>
  );
};
export default Header;
