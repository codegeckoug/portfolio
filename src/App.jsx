import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CV from "./components/CV";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects />
              <Skills />
              <About />
              <Contact />
            </>
          }
        />
        {/* CV Page */}
        <Route path="/cv" element={<CV />} />
      </Routes>
    </Router>
  );
}

export default App;
