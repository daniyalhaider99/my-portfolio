import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { Carousel } from 'react-bootstrap';

type WorkExperience = {
  company: string;
  position: string;
  duration: string;
  description: string;
  image: string;
};

const experiences: WorkExperience[] = [
  {
    company: 'Upwork',
    position: 'Freelancer',
    duration: 'November 2024 - Present',
    description: '',
    image: "/upwork.svg"
  },
  {
    company: 'Dubizzle Labs',
    position: 'Software Engineer',
    duration: 'August 2024 - November 2024',
    description: 'As a Software Engineer, I significantly contributed to backend development, optimized data migration scripts for Zameen CRM to reduce runtime, and efficiently implemented new client requests with agility.',
    image: "/dubizzle_logo.svg"
  },
  {
    company: 'DevnTech',
    position: 'Software Engineer',
    duration: 'July 2023 - July 2024',
    description: 'As a Software Engineer, I implemented new client requests with agility, contributed significantly to backend development, designed REST APIs for client mobile apps, made strategic technical decisions for new features, improved code quality through diligent practices, and conducted technical interviews.',
    image: "/logo_dnt.svg"
  },
  {
    company: 'DevnTech',
    position: 'Associate Software Engineer',
    duration: 'July 2022 - July 2023',
    description: "As an Associate Software Engineer, I developed efficient, testable code, executed the full SDLC, created documentation for requirements and solutions, ensured quality assurance, maintained and upgraded systems, deployed programs, incorporated user feedback, and ensured compliance with project plans and industry standards.",
    image: "/logo_dnt.svg"
  }
];

const Experience: React.FC = () => (
  <section id="experiences" className="animate__animated animate__fadeIn">
    <div className="container">
      <h1 className="section-title text-center mb-5">Work Experiences</h1>
      <Carousel>
        {experiences.map((exp, index) => (
          <Carousel.Item key={index}>
            <div className="text-center">
              <img src={exp.image} alt={exp.company} className="experience-image" />
              <h5>{exp.position}</h5>
              <p>{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  </section>
);

export default Experience;