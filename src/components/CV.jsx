import React from "react";
import "../App.css";
import jsPDF from "jspdf"; // We'll use this for PDF download

function CV() {
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Ugochi John", 20, 30);
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text("Frontend Developer", 20, 40);
    doc.setFontSize(12);
    doc.text("Email: johnugochi596@gmail.com", 20, 50);
    doc.text("Phone: +2349067790938", 20, 57);
    doc.text("Location: Aba, Abia State", 20, 64);
    doc.text("Professional Summary:", 20, 74);
    doc.text(
      "A passionate Frontend Developer specializing in creating responsive and interactive web applications using React, JavaScript, and modern CSS. Self-motivated and detail-oriented, I thrive on turning creative ideas into user-friendly digital experiences.",
      20,
      80,
      { maxWidth: 170 }
    );

    doc.text("Skills:", 20, 100);
    doc.text("HTML, CSS, JavaScript, React, Git, Responsive Design", 20, 106);

    doc.text("Experience / Projects:", 20, 120);
    doc.text("Student at Shefi.org", 20, 126);
    doc.text("Self-taught Web Developer", 20, 132);
    doc.text(
      "Featured Projects: DAOBase Clone, Sphone Clone, IP Tracker, Social Links Profile",
      20,
      138,
      { maxWidth: 170 }
    );

    doc.save("Ugochi_John_CV.pdf");
  };

  return (
    <section id="cv" className="cv fade-in">
      <h2>My CV</h2>
      <div className="cv-container">
        <div className="cv-card">
          <h3>Ugochi John</h3>
          <p className="role">Frontend Developer (Training)</p>
          <p>Email: johnugochi596@gmail.com</p>
          <p>Phone: +2349067790938</p>
          <p>Location: Aba, Abia State</p>
          <h4>Professional Summary</h4>
          <p>
            A passionate Frontend Developer specializing in creating responsive
            and interactive web applications using React, JavaScript, and modern
            CSS. Self-motivated and detail-oriented, I thrive on turning
            creative ideas into user-friendly digital experiences.
          </p>
          <h4>Skills</h4>
          <p>HTML, CSS, JavaScript, React, Git, Responsive Design</p>
          <h4>Experience / Projects</h4>
          <p>
            Student at Shefi.org <br />
            Self-taught Web Developer <br />
            Featured Projects: . Daobase clone : A React-based clone of
            daobase.ai with dynamic proposal and ecosystem pages. . Sphone Clone
            : A modern mobile-focused website clone built with React, featuring
            sleek animations and responsive design. . IP Tracker App : A React
            app that tracks IP addresses and displays location details using the
            GeoIP API and an interactive map. Built as a Frontend Mentor
            challenge. . Social Links Profile : A clean personal profile card
            built with HTML and CSS Grid, featuring social media links and
            responsive design. . Landing Page Clone : A responsive landing page
            clone built with HTML and CSS, featuring modern design elements and
            smooth scrolling. . Equilibrium collection : A simple Ethereum
            symbol profile created using only HTML and tailwindcss.
          </p>
          <p>
            ...and more projects available on my portfolio and github website.
          </p>

          <button className="btn" onClick={downloadPDF}>
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

export default CV;
