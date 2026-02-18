import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-hero">

      {/* Floating Background Blobs */}
      <div className="about-blob about-blob-1"></div>
      <div className="about-blob about-blob-2"></div>

      <div className="about-content">
        <h1 className="fade-in delay-1">
          Designing <span>AI</span> & Web Experiences
        </h1>

        <p className="fade-in delay-2">
          I create intelligent applications that combine Artificial
          Intelligence and Full-Stack development to solve real-world
          problems with meaningful digital experiences.
        </p>

        <div className="about-buttons fade-in delay-3">
          <a
            href="/resume.pdf"
            download
            className="about-btn primary-btn"
          >
            Download Resume
          </a>

          <button className="about-btn secondary-btn">
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
