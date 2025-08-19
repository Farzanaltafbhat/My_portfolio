import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="container py-5">
        <h2 className="text-center text-glow mb-5">👨‍🚀 About Me</h2>

        {/* About Me */}
        <div className="glass-card p-4 mb-5">
          <h3 className="section-title text-glow">💡 Who Am I?</h3>
          <p className="about-text">
            I’m <span className="fw-bold">Farzan Altaf Bhat</span>, currently
            enrolled in <strong>M.Sc. Telecommunications Engineering</strong> at
            the University of Bologna. I love challenges and am passionate about
            problem-solving, cybersecurity, and web development. I enjoy
            creating innovative solutions to serve people where design meets
            technology.
          </p>
        </div>

        {/* Education */}
        <div className="glass-card p-4 mb-5">
          <h3 className="section-title text-glow">🎓 Education</h3>
          <ul className="timeline">
            <li>
              <h5>B.Tech Electronics & Communication Engineering</h5>
              <p>
                University of Kashmir —{" "}
                <span className="highlight">2018–2023</span>
              </p>
            </li>
            <li>
              <h5>M.Sc. Telecommunications Engineering</h5>
              <p>
                University of Bologna —{" "}
                <span className="highlight">2024–Present</span>
              </p>
            </li>
          </ul>
        </div>

        {/* Work Experience */}
        <div className="glass-card p-4 mb-5">
          <h3 className="section-title text-glow">💼 Work Experience</h3>
          <ul className="timeline">
            <li>
              <h5>Web Developer</h5>
              <p>
                Northscape, Srinagar —{" "}
                <span className="highlight">Jan 2022 – Apr 2024</span>
              </p>
              <p className="about-text">
                Worked on website design, led frontend development, and
                integrated APIs.
              </p>
            </li>
            <li>
              <h5>Embedded Systems Programmer</h5>
              <p>
                Kashovatics, Srinagar —{" "}
                <span className="highlight">Jan 2020 – Jun 2020</span>
              </p>
              <p className="about-text">
                Designed embedded system projects, programmed microcontrollers,
                and performed debugging.
              </p>
            </li>
            <li>
              <h5>Cyber Security Analyst</h5>
              <p>
                The CyberHost, New Delhi —{" "}
                <span className="highlight">Aug 2023 – Sep 2023</span>
              </p>
              <p className="about-text">
                Performed Android application penetration testing and security
                analysis.
              </p>
            </li>
          </ul>
        </div>

        {/* Publications */}
        <div className="glass-card p-4 mb-5">
          <h3 className="section-title text-glow">📑 Publications</h3>
          <ul className="timeline">
            <li>
              <h5>Early Detection of PCOS in Women using AI</h5>
              <p>
                International Journal of Latest Trends in Engineering &
                Technology — <span className="highlight">2023</span>
              </p>
              <a
                href="https://www.ijltet.org/pdfviewer.php?id=986&j_id=5104"
                target="_blank"
                rel="noreferrer"
              >
                View Publication
              </a>
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div className="glass-card p-4 mb-5">
          <h3 className="section-title text-glow">🛠 Skills</h3>
          <div className="skills-grid">
            <span className="skill-badge">Python (Basic)</span>
            <span className="skill-badge">MATLAB</span>
            <span className="skill-badge">CST Antenna Design</span>
            <span className="skill-badge">Cisco Packet Tracer</span>
            <span className="skill-badge">Wireshark</span>
            <span className="skill-badge">TCPdump</span>
            <span className="skill-badge">React.js</span>
            <span className="skill-badge">Node.js / Express.js</span>
            <span className="skill-badge">MongoDB / Compass</span>
            <span className="skill-badge">Git & Linux</span>
            <span className="skill-badge">Flutter (Intermediate)</span>
            <span className="skill-badge">Cybersecurity (BurpSuite, MITM)</span>
            <span className="skill-badge">AI/ML (Pandas, NumPy, SVM, GD)</span>
          </div>
        </div>

        {/* Activities */}
        <div className="glass-card p-4 mb-5">
          <h3 className="section-title text-glow">🌍 Activities</h3>
          <ul className="timeline">
            <li>
              <h5>Taking Parkour to Isolated Villages</h5>
              <p>
                Kashmir, India —{" "}
                <span className="highlight">June 2023</span>
              </p>
              <p className="about-text">
                Organized a social event introducing Parkour & Freerunning to
                children in remote villages for fitness and motivation.
              </p>
              <a
                href="https://www.instagram.com/reel/CtzojpeAGDI/?igsh=N2N5cDV2azg2NmQ3"
                target="_blank"
                rel="noreferrer"
              >
                View Event
              </a>
            </li>
          </ul>
        </div>

        {/* Hobbies */}
        <div className="glass-card p-4">
          <h3 className="section-title text-glow">🎸 Hobbies & Interests</h3>
          <p className="about-text">
            Guitar 🎸 | Parkour 🤸 | Boxing 🥊 | Coding 💻 | Learning 📚
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
