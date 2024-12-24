import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const Home: React.FC = () => {
  const [text, setText] = useState('Software Engineer');
  const texts = ['Software Engineer', 'Full Stack Developer', 'Freelancer'];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setText(texts[index]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="animate__animated animate__fadeIn">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="big-text">Hello, I'm Daniyal Haider</h1>
          <h3>A Passionate </h3>
          <p className="animated-text animate__animated animate__fadeIn">{text}</p>
        </div>
        <div className="col-md-6 animate__animated animate__fadeInRight">
          <img src="/image.jpg" alt="Daniyal Haider" className="img-fluid rounded" />
        </div>
      </div>
    </section>
  );
};

export default Home;
