import Card from 'react-bootstrap/Card';
import React from 'react';
import 'animate.css';

const Works: React.FC = () => {
  const projects = [
    {
      name: 'Jarvis',
      description: '',
      imageUrl: '/jarvis.svg'
    },
    {
      name: 'Astria Learning',
      description: 'Description of ABC Corp project...',
      imageUrl: '/astria.svg'
    },
    {
      name: 'Elocker',
      description: 'Elocker is a locker management system with a web app in ROR and a hardware connection. Different Systems present as types of lockers.',
      imageUrl: '/elocker.svg'
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
          <Card className='project-card'>
            <Card.Img src={project.imageUrl} alt={project.name} className="project-image" />
              <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Works;
