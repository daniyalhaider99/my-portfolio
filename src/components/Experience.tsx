import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';


type WorkExperience = {
  company: string;
  position: string;
  duration: string;
  description: string;
};

const experiences: WorkExperience[] = [
  {
    company: 'Upwork',
    position: 'Freelancer',
    duration: 'November 2024 - Present',
    description: ''
  },
  {
    company: 'Dubizzle Labs',
    position: 'Software Engineer',
    duration: 'August 2024 - November 2024',
    description: 'As a Software Engineer, I significantly contributed to backend development, optimized data migration scripts for Zameen CRM to reduce runtime, and efficiently implemented new client requests with agility.'
  },
  {
    company: 'DevnTech',
    position: 'Software Engineer',
    duration: 'July 2023 - July 2024',
    description: 'As a Software Engineer, I implemented new client requests with agility, contributed significantly to backend development, designed REST APIs for client mobile apps, made strategic technical decisions for new features, improved code quality through diligent practices, and conducted technical interviews.'
  },
  {
    company: 'DevnTech',
    position: 'Associate Software Engineer',
    duration: 'July 2022 - July 2023',
    description: "As an Associate Software Engineer, I developed efficient, testable code, executed the full SDLC, created documentation for requirements and solutions, ensured quality assurance, maintained and upgraded systems, deployed programs, incorporated user feedback, and ensured compliance with project plans and industry standards."
  }
];

const Experience: React.FC = () => (
  <section id="experiences" className="animate__animated animate__fadeIn">
    <div className="container">
      <h1 className="section-title text-center mb-5">Work Experiences</h1>
      <div className="row service-row">
        {experiences.map((exp, index) => (
          <div key={index} className="col-md-6 mb-4 service-item">
            <h3 className="mb-1">{exp.company}</h3>
            <h5>{exp.position}</h5>
            <p>{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;