import React from "react";
import { Carousel } from "react-bootstrap";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "M-QASK",
      description: "MATLAB simulation of M-QASK modulation schemes with BER performance evaluation.",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/79/ASK_Modulation.png",
      link: "https://github.com/Farzanaltafbhat/Communication_system_Matlab",
    },
    {
      title: "L-PSK Modulation",
      description: "MATLAB implementation of L-PSK modulation with constellation diagrams and BER comparison.",
      img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/PSK_Constellations.svg",
      link: "https://github.com/Farzanaltafbhat/Communication_system_Matlab",
    },
    {
      title: "RFID System Design",
      description: "RFID reader-tag simulation and system analysis including link budget in MATLAB.",
      img: "https://www.researchgate.net/publication/325781971/figure/fig1/AS:635767873126402@1528967648089/Basic-RFID-system.png",
      link: "https://github.com/Farzanaltafbhat/Communication_system_Matlab",
    },
    {
      title: "Planar Patch Antenna",
      description: "CST Microwave Studio simulation of microstrip patch antenna with parametric optimization.",
      img: "https://www.researchgate.net/publication/328050626/figure/fig1/AS:678430176538624@1538595227986/Microstrip-patch-antenna.png",
      link: "https://github.com/Farzanaltafbhat/Planar-Patch-Antenna",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="text-glow text-center mb-4">🚀 My Projects</h2>
      <Carousel variant="dark" interval={5000} className="projects-carousel">
        {projects.map((project, index) => (
          <Carousel.Item key={index}>
            <div className="project-slide glass-card p-4">
              <img
                className="project-img"
                src={project.img}
                alt={project.title}
              />
              <h3 className="mt-3 text-glow">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-futuristic mt-2"
              >
                <FaGithub className="me-2" /> View on GitHub
              </a>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Projects;
