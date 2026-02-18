import React, { useEffect } from "react";
import "./Home.css";
import profile from "../assests/profile.jpg";

function Home() {

  useEffect(() => {
    const canvas = document.getElementById("neural-canvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let particles = [];
    const mouse = { x: null, y: null };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 2;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = "#00d4ff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < 90; i++) {
        particles.push(new Particle());
      }
    }

    function connect() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = dx * dx + dy * dy;

          if (distance < 10000) {
            ctx.strokeStyle = "rgba(0,212,255,0.08)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }

        if (mouse.x && mouse.y) {
          let dx = particles[a].x - mouse.x;
          let dy = particles[a].y - mouse.y;
          let distance = dx * dx + dy * dy;

          if (distance < 18000) {
            ctx.strokeStyle = "rgba(108,99,255,0.2)";
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connect();
      requestAnimationFrame(animate);
    }

    init();
    animate();

  }, []);

  const scrollProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">

      <canvas id="neural-canvas"></canvas>

      <div className="hero-text">
        <h1>
          Hi, I'm <span className="highlight">Delna</span>
        </h1>

        <h2 className="sub-head">
          AI Engineer & Intelligent Systems Builder
        </h2>

        <p>
          I design and deploy production ready AI systems and full-stack
          applications that solve real world problems from machine learning
          pipelines to scalable web architectures.
        </p>

        <div className="hero-buttons">
          <button className="hero-btn primary-btn" onClick={scrollProjects}>
            View Projects
          </button>

          <a
            href="/resume.pdf"
            download
            className="hero-btn secondary-btn"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Delna Profile" />
      </div>

    </section>
  );
}

export default Home;
