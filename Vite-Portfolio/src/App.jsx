import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import './App.css'

export default function App() {
  return (
    <div>
      <Header />
      {/* <About /> */}
      <Projects />
      <WorkExperience />
      <Skills />
      <Contact />
    </div>
  );
}