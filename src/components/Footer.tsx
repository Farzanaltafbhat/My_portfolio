import React from "react";
import "./Footer.css";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="container-fluid text-center py-4">
        {/* Navigation Links */}
        <ul className="footer-links mb-3">
          <li><a href="/" className="footer-link">Home</a></li>
          <li><a href="/projects" className="footer-link">Projects</a></li>
          <li><a href="/about" className="footer-link">About</a></li>
          <li><a href="/contact" className="footer-link">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="social-icons mb-3">
          <a href="https://github.com/Farzanaltafbhat" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="www.linkedin.com/in/farzan-altaf-bhat-a6b358245" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
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
