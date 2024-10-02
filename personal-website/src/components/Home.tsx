import React from "react";
import BouncingBall from "./BouncingBall";

const Home: React.FC = () => {
  return (
    <div className="home">
      <BouncingBall />
      <div className="content">
        {/* Your existing content here */}
        <header className="hero">
          <h1>Varun Palleti</h1>
          <p>Software Developer | Problem Solver | Tech Enthusiast</p>
        </header>

        {/* ... rest of your content ... */}
        <section className="about">
          <h2>About Me</h2>
          <p>
            Hello! I'm Varun, a passionate software developer with a keen
            interest in creating innovative solutions. With a strong foundation
            in web technologies and a love for clean, efficient code, I strive
            to build applications that make a difference.
          </p>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>JavaScript / TypeScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>HTML / CSS</li>
            <li>Python</li>
            <li>Git</li>
          </ul>
        </section>

        <section className="projects">
          <h2>Featured Projects</h2>
          <div className="project-list">
            <div className="project">
              <h3>Project 1</h3>
              <p>A brief description of your project goes here.</p>
            </div>
            <div className="project">
              <h3>Project 2</h3>
              <p>A brief description of your project goes here.</p>
            </div>
          </div>
        </section>

        <section className="contact">
          <h2>Get in Touch</h2>
          <p>
            Interested in collaborating or have a question? Feel free to reach
            out!
          </p>
          <a href="mailto:your.email@example.com" className="cta-button">
            Contact Me
          </a>
        </section>
      </div>
    </div>
  );
};

export default Home;
