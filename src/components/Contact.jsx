import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaTelegram } from "react-icons/fa";
import "../App.css";

function Contact() {
  return (
    <section id="contact" className="contact fade-in">
      <h2>Get In Touch</h2>
      <p>
        I'm open to collaborations, freelance work, or full-time opportunities.
      </p>
      <a href="mailto:johnugochi596@gmail.com" className="btn">
        Contact Me
      </a>

      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/john-ugochi-63958136a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/ugochiieth?t=I-Hi6UxlS7rDgfrgwskGHA&s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://github.com/codegeckoug"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="http://t.me/codegecko"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram />
        </a>
      </div>
    </section>
  );
}

export default Contact;
