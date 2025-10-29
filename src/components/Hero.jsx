import React, { useEffect } from "react";
import "../App.css";
import image1 from "../assets/images/WhatsApp Image .jpg";

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
    </section>
  );
}

export default Hero;
