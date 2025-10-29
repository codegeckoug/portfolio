import React from "react";
import "../App.css";

function Skills() {
  const skills = [
    "React",
    "JavaScript (ES6+)",
    "HTML / CSS",
    "Responsive Design",
    "API Integration",
    "Git / GitHub",
    "Tailwind CSS",
  ];

  return (
    <section id="skills" className="skills fade-in">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <div key={i} className="skill-item">
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
