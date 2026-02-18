import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "SmartPrenatal – AI Abnormal Pregnancy Detection",
    description:
      "AI-powered prenatal diagnostic system that detects abnormal fetal conditions from ultrasound images using deep learning and anomaly detection techniques.",
    tags: ["Deep Learning", "Computer Vision", "Medical AI"],
    status: "Completed"
  },
  {
    title: "Federated Learning Paralysis Detection",
    description:
      "Privacy-preserving medical AI model using Federated Learning to classify paralysis conditions without sharing sensitive patient data across hospitals.",
    tags: ["Federated Learning", "Healthcare AI", "Privacy ML"],
    status: "In Developement"
  },
  {
    title: "Scrap Management System",
    description:
      "Full-stack MERN web platform for managing scrap collection, inventory tracking, and connecting recyclers with sellers.",
    tags: ["MERN", "Full Stack", "Deployment"],
    status: "Completed"
  }
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h1 className="section-title">Featured Projects</h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-status">
              {project.status}
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            

          </div>
        ))}
      </div>
    </section>
  );
}
