import React, { useState } from "react";
import "./Skills.css";

const techStack = [
  { name: "React", target: "frontend" },
  { name: "Node.js", target: "backend" },
  { name: "MongoDB", target: "database" },
  { name: "TensorFlow", target: "ai" },
  { name: "Python", target: "ai" }
];

export default function Skills() {
  const [placed, setPlaced] = useState({});
  const [completed, setCompleted] = useState(false);

  const handleDrop = (e, zone) => {
    const tech = e.dataTransfer.getData("tech");
    const correct = techStack.find(t => t.name === tech);

    if (correct.target === zone) {
      const updated = { ...placed, [tech]: zone };
      setPlaced(updated);

      if (Object.keys(updated).length === techStack.length) {
        setCompleted(true);
      }
    } else {
      e.target.classList.add("shake");
      setTimeout(() => {
        e.target.classList.remove("shake");
      }, 500);
    }
  };

  const allowDrop = (e) => e.preventDefault();

  const handleDrag = (e, tech) => {
    e.dataTransfer.setData("tech", tech);
  };

  return (
    <section className="architecture-section">
      <h1>Build My AI System</h1>
      <p>Drag the technologies into the correct architecture layer to see my skills.</p>

      <div className="architecture-grid">
        {["frontend", "backend", "database", "ai"].map(zone => (
          <div
            key={zone}
            className={`drop-zone ${zone}`}
            onDrop={(e) => handleDrop(e, zone)}
            onDragOver={allowDrop}
          >
            <h3>{zone.toUpperCase()}</h3>
            {Object.entries(placed)
              .filter(([_, z]) => z === zone)
              .map(([tech]) => (
                <div key={tech} className="placed-tech">
                  {tech}
                </div>
              ))}
          </div>
        ))}
      </div>

      <div className="tech-pool">
        {techStack.map((tech) =>
          !placed[tech.name] && (
            <div
              key={tech.name}
              className="tech-card"
              draggable
              onDragStart={(e) => handleDrag(e, tech.name)}
            >
              {tech.name}
            </div>
          )
        )}
      </div>

      {completed && (
        <div className="success">
          🚀 AI System Successfully Deployed
        </div>
      )}
    </section>
  );
}
