import React from "react";
import "./Home.css";  // import css file
import bitmoji from "../assets/bitmoji.gif"; // import bitmoji gif
import { Link } from "react-router-dom";
const Home: React.FC = () => {
  return (
    <section className="home-section d-flex align-items-center">
      <div className="container-fluid">
        <div className="row align-items-center">
          
          {/* Left: Bitmoji */}
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <div className="bitmoji-wrapper glass-card p-4 d-inline-block">
              <img
                src={bitmoji}
                alt="My Bitmoji"
                className="img-fluid bitmoji-img"
              />
            </div>
          </div>

          {/* Right: Introduction */}
          <div className="col-lg-6 text-center text-lg-start">
            <h1 className="display-5 fw-bold mb-3 text-glow">
              Hi, I’m Farzan 👋
            </h1>
            <p className="lead intro-text mb-4">
              A <span className="text-glow">Communication Engineer</span> passionate
              about Networking, Cybersecurity, and Web Development.  
              I love blending <span className="fw-semibold">design</span> and{" "}
              <span className="fw-semibold">technology</span> to create
              innovative solutions.
            </p>
         <Link to="/projects" className="btn btn-futuristic px-4 py-2">
  🚀 View My Projects
</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
