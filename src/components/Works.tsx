import React from 'react';
import 'animate.css';

const Works: React.FC = () => {
  const projects = [
    {
      name: 'Jarvis',
      description: '',
      imageUrl: '/jarvis.jpg'
    },
    {
      name: 'Astria Learning',
      description: 'Description of ABC Corp project...',
      imageUrl: '/astria.png'
    },
    {
      name: 'Elocker',
      description: 'Elocker is a locker management system with a web app in ROR and a hardware connection. Different Systems present as types of lockers.',
      imageUrl: '/elocker.jpeg',
    },
    {
      name: 'HuntWallet',
      description: 'Description of Codeefly project...',
      imageUrl: '/hunt_wallet.png'
    },
    // {
    //   name: 'ModernUIWeb',
    //   description: 'Description of Codeefly project...',
    //   imageUrl: '/astria.png'
    // },
    {
      name: 'Manifestly',
      description: 'Description of Codeefly project...',
      imageUrl: '/manifestly.png'
    }
  ];

  return (
    <section id="projects" className="animate__animated animate__fadeIn">
      <h1 className="section-title text-center">Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.name} className="project-card" data-tip={project.description}>
            <img src={project.imageUrl} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
