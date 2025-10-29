import React from "react";
import "../App.css";

function Projects() {
  const projectData = [
    {
      title: "DAOBase Clone",
      desc: "A React-based clone of daobase.ai with dynamic proposal and ecosystem pages.",
      link: "https://daobase-clone-updated.vercel.app/", // 🌐 replace with your project link
    },
    {
      title: "Sphone Clone",
      desc: "A modern mobile-focused website clone built with React, featuring sleek animations and responsive design.",
      link: "https://sophon-clone.vercel.app/", // replace with real link
    },
    {
      title: "IP Tracker App",
      desc: "A React app that tracks IP addresses and displays location details using the GeoIP API and an interactive map. Built as a Frontend Mentor challenge.",
      link: "https://ip-tracker-six-phi.vercel.app/", // replace with actual link
    },
    {
      title: "Social Links Profile",
      desc: "A clean personal profile card built with HTML and CSS Grid, featuring social media links and responsive design.",
      link: "https://codegeckoug.github.io/Social-links-profile/",
    },
    {
      title: "Landing Page Clone",
      desc: "A responsive landing page clone built with HTML and CSS, featuring modern design elements and smooth scrolling.",
      link: "https://codegeckoug.github.io/NFT-Site-Landing-Page/",
    },
    {
      title: "Equilibrium collection",
      desc: "A simple Ethereum symbol  profile created using only HTML and tailwindcss",
      link: "https://crypto-tailwind-snowy.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="projects fade-in">
      <h2>Featured Projects</h2>
      <div className="project-list">
        {projectData.map((p, i) => (
          <div className="project" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
