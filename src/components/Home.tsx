import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './Home.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <section id="home" className="animate__animated animate__fadeIn">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 animate__animated animate__fadeInLeft">
            <div className="hero-content">
              <h1 className="hero-title">
                CRAFTING SCALABLE<br />
                <span className="web">WEB</span>
                <span className="solutions-circled">SOLUTIONS</span>
              </h1>
              <p className="hero-desc">
                Showcasing clean code, powerful back-end systems, and user-focused web applications built with expertise in Ruby on Rails. Explore projects that deliver performance, security, and scalability.
              </p>
              <button className={"hero-btn"} onClick={() => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                Scroll For More <span className="arrow">↓</span>
              </button>
            </div>
          </div>
          <div className="col-md-6 animate__animated animate__fadeInRight">
            <div className="profile-art-container">
              <div className="profile-art-border">
                <img
                  src="/headshot.png"
                  alt="Daniyal Haider"
                  className="profile-art-image"
                />
                <div className="profile-badge">Software Developer</div>
                <div className="profile-socials">
                  <a href="mailto:daniyalhaider99@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                  </a>
                  <a href="https://www.linkedin.com/in/daniyal-haider-93b88b219/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
