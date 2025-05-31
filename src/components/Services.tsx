import React from 'react';
import 'animate.css';
import './Services.css';
import { services } from '../data/services';

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
