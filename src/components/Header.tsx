import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Header.css';
const Header: React.FC = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top futuristic-nav shadow-sm py-3">
        <div className="container">
          {/* Brand / Logo */}
          <Link className="navbar-brand fw-bold fs-3 text-glow" to="/">
            ⚡ Farzan
          </Link>

          {/* Mobile toggle */}
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

        {/* Nav Links */}
          <div
            className="collapse navbar-collapse justify-content-end text-end mobile-menu"
            id="navbarContent"
          >
            <ul className="navbar-nav align-items-lg-center gap-lg-4">
              <li className="nav-item">
                <NavLink to="/" end className="nav-link futuristic-link px-3 py-2">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/projects" className="nav-link futuristic-link px-3 py-2">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link futuristic-link px-3 py-2">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link futuristic-link px-3 py-2">
                  Contact
                </NavLink>
              </li>

              <li className="nav-item mt-2 mt-lg-0">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-futuristic px-4 py-2"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div style={{ height: "95px" }}></div>
    </header>
  );
};

export default Header;
