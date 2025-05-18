import React from 'react';
import 'animate.css';
import './Services.css';

type Service = {
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Software Development",
    description: "Providing end-to-end software development services, from requirements gathering to deployment. I develop robust, scalable, and efficient software solutions tailored to meet your business needs.",
    image: "/software_dev.svg"
  },
  {
    title: "API Development",
    description: "I specialize in developing robust and scalable APIs that serve as the backbone for your applications. Whether it's RESTful or GraphQL, I ensure seamless integration and high performance to meet your business needs.",
    image: "/api_dev.svg"
  },
  {
    title: "Project Management",
    description: "With a strong background in project management, I help ensure that your projects are delivered on time and within budget. From planning to execution, I provide the structure and guidance needed to bring your vision to life.",
    image: "/project_management.svg"
  },
  {
    title: "Data Migration",
    description: "I specialize in developing robust and scalable APIs that serve as the backbone for your applications. Whether it's RESTful or GraphQL, I ensure seamless integration and high performance to meet your business needs.",
    image: "/data_migration.svg"
  },
];

const Services: React.FC = () => (
  <div className="container">
    <section id="services" className="animate__animated animate__fadeIn">
      <h1 className="section-title text-center">SERVICES</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-content">
              <div className="service-header">
                <img src={service.image} alt={service.title} className="service-image" />
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Services;
