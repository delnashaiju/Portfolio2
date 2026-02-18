import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/projects";
import Skills from "./pages/Skills";

import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <div id="home">
        <Home />
      </div>


      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      

      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
