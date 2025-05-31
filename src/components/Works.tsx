import React from 'react';
import 'animate.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Works.css';
import { projects, projectSettings } from '../data/projects';

const Works: React.FC = () => {
  return (
    <section id="projects" className="animate__animated animate__fadeIn">
      <h1 className="section-title text-center">FEATURED PROJECTS</h1>
      <div className="projects-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <Slider {...projectSettings}>
          {projects.map((project, index) => (
            <div key={index} className="project-slide" style={{ padding: '0 10px' }}>
              <div className="flip-card" style={{
                width: '100%',
                maxWidth: '300px',
                margin: '0 auto'
              }}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={project.imageUrl} alt={project.name} className="project-image" />
                  </div>
                  <div className="flip-card-back" style={{
                    flexDirection: 'column'
                  }}>
                    <h2 style={{
                      marginBottom: '1.5rem',
                      fontSize: '1.5rem',
                      fontWeight: 'bold'
                    }}>{project.name}</h2>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.5',
                      textAlign: 'left'
                    }}>{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Works;
