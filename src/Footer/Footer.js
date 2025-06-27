import React, { useState, useEffect } from "react";
import "./Footer.css";
import profilePic from "../Assets/profile_img.jpg"; // Adjust if needed

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved);
    document.body.className = saved ? "dark-theme" : "light-theme";
  }, []);

  const toggleTheme = () => {
    const updated = !darkMode;
    setDarkMode(updated);
    localStorage.setItem("darkMode", updated);
    document.body.className = updated ? "dark-theme" : "light-theme";
  };

  return (
    <>
      <div className="theme-toggle-wrapper">
        <button
          className={`theme-toggle-btn ${darkMode ? "active" : ""}`}
          onClick={toggleTheme}
        >
         <span className="theme-icon">
            {darkMode ? "🌙" : "☀️"}
          </span>
        </button>
        <p className="toggle-label">Toggle Theme</p>
      </div>

      <footer className="footer-bar">
        <div className="footer-left">
          <img src={profilePic} alt="Profile" className="footer-img" />
          <span className="footer-name">Ankita Kumari</span>
        </div>
        <div className="footer-right">
          <span>© 2025 copyright all right reserved</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
