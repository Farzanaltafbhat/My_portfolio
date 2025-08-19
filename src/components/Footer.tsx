import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="container-fluid text-center py-4">
        {/* Navigation Links */}
        <ul className="footer-links mb-3">
          <li><Link to="/" className="footer-link">Home</Link></li>
<li><Link to="/projects" className="footer-link">Projects</Link></li>
<li><Link to="/about" className="footer-link">About</Link></li>
<li><Link to="/contact" className="footer-link">Contact</Link></li>
        </ul>

        {/* Social Icons */}
        <div className="social-icons mb-3">
          <a href="https://github.com/Farzanaltafbhat" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/farzan-altaf-bhat-a6b358245" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://wa.me/+917780820718" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>

        {/* Copyright */}
        <p className="footer-copy mb-0">
          © {new Date().getFullYear()} <span className="text-glow">Farzan Altaf Bhat</span>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
