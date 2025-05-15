import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { Carousel } from 'react-bootstrap';
import './Experience.css';

type WorkExperience = {
  company: string;
  duration: string;
  description: string;
  image: string;
};

const experiences: WorkExperience[] = [
  {
    company: 'Infinikorn',
    duration: 'February 2025 - Present',
    description: 'As a Software Engineer, I integrated Portkey prompts into the application to enhance user features and functionality. Gained extensive experience working with Large Language Models (LLMs) and their implementation in production environments. Developed and optimized AI-powered features, collaborated with cross-functional teams to implement natural language processing solutions, and contributed to the continuous improvement of AI integration workflows.',
    image: "/infinikorn.svg"
  },
  {
    company: 'Dubizzle Labs',
    duration: 'August 2024 - November 2024',
    description: 'As a Software Engineer, I significantly contributed to backend development, optimized data migration scripts for Zameen CRM to reduce runtime, and efficiently implemented new client requests with agility.',
    image: "/dubizzle_logo.svg"
  },
  {
    company: 'DevnTech',
    duration: 'July 2022 - July 2024',
    description: 'As a Software Engineer, I implemented new client requests with agility, contributed significantly to backend development, designed REST APIs for client mobile apps, made strategic technical decisions for new features, improved code quality through diligent practices, conducted technical interviews, developed efficient and testable code, executed the full SDLC, created documentation for requirements and solutions, ensured quality assurance, maintained and upgraded systems, deployed programs, incorporated user feedback, and ensured compliance with project plans and industry standards.',
    image: "/dnt_logo.svg"
  }
];

const Experience: React.FC = () => (
  <section id="experiences" className="animate__animated animate__fadeIn py-5">
    <div className="container">
      <h1 className="section-title text-center mb-5">Work Experiences</h1>
      <Carousel
        indicators={true}
        controls={true}
        interval={5000}
        className="experience-carousel"
      >
        {experiences.map((exp, index) => (
          <Carousel.Item key={index}>
            <div className="flip-card-container">
              <div className="flip-card">
                <div className="flip-card-front">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="company-logo"
                  />
                  <div className="duration-badge">
                    {exp.duration}
                  </div>
                </div>
                <div className="flip-card-back">
                  <h3 className="company-name">{exp.company}</h3>
                  <div className="experience-description">
                    {exp.description}
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  </section>
);

export default Experience;