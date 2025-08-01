import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css'

export default function App() {
  return (
    <div>
      <Header />
      {/* <About /> */}
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}