import React from 'react';
import 'animate.css';

const Services: React.FC = () => (
  <section id="services" className="animate__animated animate__fadeIn">
    <div className="container">
      <h1 className="section-title text-center">Expertise and Solutions</h1>
      <div className="row service-row">
        <div className="col-md-6 service-item">
          <img src="/web_dev.jpg" alt="Web Development" className="service-image" />
          <h3>Web Development</h3>
          <p>
            Specializing in creating responsive, user-friendly web applications using modern frameworks and technologies.
            Whether it's a dynamic website or a complex web application, I ensure a seamless user experience across all devices.
          </p>
        </div>
        <div className="col-md-6 service-item">
          <img src="/software_dev.jpg" alt="Software Development" className="service-image" />
          <h3>Software Development</h3>
          <p>
            Providing end-to-end software development services, from requirements gathering to deployment.
            I develop robust, scalable, and efficient software solutions tailored to meet your business needs.
          </p>
        </div>
      </div>
      <div className="row service-row">
        <div className="col-md-6 service-item">
          <img src="/api_dev.jpg" alt="API Development" className="service-image" />
          <h3>API Development:</h3>
          <p>
            I specialize in developing robust and scalable APIs that serve as the backbone for your applications.
            Whether it's RESTful or GraphQL, I ensure seamless integration and high performance to meet your business needs.
          </p>
        </div>
        <div className="col-md-6 service-item">
          <img src="/project_management.jpg" alt="Project Management" className="service-image" />
          <h3>Project Management</h3>
          <p>
            With a strong background in project management, I help ensure that your projects are delivered on time and within budget.
            From planning to execution, I provide the structure and guidance needed to bring your vision to life.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
