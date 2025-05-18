import React from 'react';
import 'animate.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Works.css';

const Works: React.FC = () => {
  const projects = [
    {
      name: 'Elocker',
      description: 'A comprehensive locker management system with hardware integration. Features include real-time locker status monitoring, secure access control, and customizable locker configurations.',
      imageUrl: '/elocker.svg'
    },
    {
      name: 'HuntWallet',
      description: 'The first planning and organizing tool designed exclusively for hunters. From application to hunting season, and everything in between, HUNTwallet puts all your hunting needs in one place.',
      imageUrl: '/hunt_wallet.png'
    },
    {
      name: 'Astria Learning',
      description: 'An education suite from digital libraries to fully managed online courses, designed to meet the diverse needs of educational institutions of all sizes.',
      imageUrl: '/astria.svg'
    },
    {
      name: 'Jarvis',
      description: 'Product of Dubizzle Labs providing CRM strategies and solutions for other products like Zameen, OLX, Bayut and Dubizzle.',
      imageUrl: '/jarvis.svg'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="projects" className="animate__animated animate__fadeIn">
      <h1 className="section-title text-center">FEATURED PROJECTS</h1>
      <div className="projects-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <Slider {...settings}>
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
