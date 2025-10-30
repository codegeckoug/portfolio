import React, { useEffect } from "react";
import "../App.css";
import image1 from "../assets/images/WhatsApp Image .jpg";
import jsPDF from "jspdf";

function Hero() {
  useEffect(() => {
    // Create a global background animation canvas
    const canvas = document.createElement("canvas");
    canvas.id = "particle-canvas";
    document.body.prepend(canvas); // Put it behind everything

    const ctx = canvas.getContext("2d");
    const particles = [];
    const numParticles = 100;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < numParticles; i++) particles.push(new Particle());

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.remove();
    };
  }, []);

  // ------------------- DOWNLOAD CV FUNCTION -------------------
  const downloadCV = () => {
    const doc = new jsPDF();

    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.setTextColor("#7a6eff");
    doc.text("Ugochi John", 20, 30);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(16);
    doc.setTextColor("#333333");
    doc.text("Frontend Developer", 20, 40);

    doc.setDrawColor("#7a6eff");
    doc.setLineWidth(1);
    doc.line(20, 45, 190, 45);

    // Contact
    doc.setFontSize(12);
    doc.text("Email: johnugochi596@gmail.com", 20, 55);
    doc.text("Phone: +2349067790938", 20, 62);
    doc.text("Location: Aba, Abia State, Nigeria", 20, 69);

    doc.text("GitHub: https://github.com/codegeckoug", 20, 83);
    doc.text(
      "Twitter: https://x.com/ugochiieth?t=I-Hi6UxlS7rDgfrgwskGHA&s=09",
      20,
      90
    );

    // Professional Summary
    doc.setFont("helvetica", "bold");
    doc.setTextColor("#7a6eff");
    doc.text("Professional Summary", 20, 102);

    doc.setFont("helvetica", "normal");
    doc.setTextColor("#333333");
    doc.text(
      "Creative and detail-oriented Frontend Developer with strong expertise in building responsive, modern web applications. " +
        "Experienced in React, JavaScript, CSS, and modern frontend tooling. " +
        "Passionate about delivering clean, user-friendly interfaces, optimizing performance, and continuously learning new technologies. " +
        "Able to collaborate with designers and backend developers to implement complete web solutions.",
      20,
      108,
      { maxWidth: 170 }
    );

    // Technical Skills
    doc.setFont("helvetica", "bold");
    doc.setTextColor("#7a6eff");
    doc.text("Technical Skills", 20, 135);

    doc.setFont("helvetica", "normal");
    doc.setTextColor("#333333");
    doc.text(
      "• HTML5, CSS3, JavaScript ES6+\n" +
        "• React.js, Redux, React Router\n" +
        "• Responsive & Mobile-first Design\n" +
        "• Git, GitHub, Version Control\n" +
        "• REST APIs, GraphQL integration\n" +
        "• Figma, UI/UX Basics, CSS Animations",
      20,
      141,
      { lineHeightFactor: 1.2, maxWidth: 170 }
    );

    // Education & Certifications
    doc.setFont("helvetica", "bold");
    doc.setTextColor("#7a6eff");
    doc.text("Education & Certifications", 20, 180);

    doc.setFont("helvetica", "normal");
    doc.setTextColor("#333333");
    doc.text("Shefi.org - Student, Web Development", 20, 186);
    doc.text(
      "Self-taught Web Developer, continuously learning advanced frontend technologies",
      20,
      192,
      { maxWidth: 170 }
    );
    doc.text("Certifications:", 20, 200);
    doc.text("• Frontend Web Developer (Shefi.org)", 25, 206);
    doc.text("• Responsive Web Design (FreeCodeCamp)", 25, 212);

    // Projects
    doc.setFont("helvetica", "bold");
    doc.setTextColor("#7a6eff");
    doc.text("Featured Projects", 20, 225);

    doc.setFont("helvetica", "normal");
    doc.setTextColor("#333333");
    doc.text(
      "1. DAOBase Clone – React-based clone of daobase.ai with dynamic proposals & ecosystem pages.\n" +
        "2. Sphone Clone – Fully responsive e-commerce phone store web app.\n" +
        "3. IP Tracker – Real-time IP & location tracker, Frontend Mentor project.\n" +
        "4. Social Links Profile – Built with HTML & CSS Grid, responsive layout.",
      20,
      231,
      { lineHeightFactor: 1.2, maxWidth: 170 }
    );

    // Footer
    doc.setFontSize(10);
    doc.setTextColor("#999999");
    doc.text("Generated from my portfolio - Ugochi John", 20, 280);

    doc.save("Ugochi_John_CV.pdf");
  };

  return (
    <section id="hero" className="hero fade-in">
      <img src={image1} alt="Ugochi John" className="hero-image" />
      <h1>
        Hi, I'm <span>Ugochi John</span>
      </h1>
      <h2>Frontend Developer</h2>
      <p>
        I craft responsive, elegant, and interactive web experiences with React,
        JavaScript, and CSS.
      </p>
      <a href="#projects" className="btn">
        Explore My Work
      </a>
      <button className="btn cv-btn" onClick={downloadCV}>
        Download CV
      </button>
    </section>
  );
}

export default Hero;
