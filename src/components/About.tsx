import 'animate.css';
import React, { useEffect, useState, useMemo } from 'react';
import './About.css';

const About: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showCursor, setShowCursor] = useState(true);

  const texts = [
    'Full Stack Developer',
    'Prompt Engineer',
    'DevOps Engineer',
    'Problem Solver'
  ];

  useEffect(() => {
    const currentText = texts[textIndex];
    const shouldDelete = isDeleting;
    const currentLength = displayText.length;

    const handleTyping = () => {
      if (!shouldDelete && currentLength < currentText.length) {
        setDisplayText(currentText.slice(0, currentLength + 1));
        setTypingSpeed(150);
      } else if (shouldDelete && currentLength > 0) {
        setDisplayText(currentText.slice(0, currentLength - 1));
        setTypingSpeed(50);
      } else if (!shouldDelete && currentLength === currentText.length) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (shouldDelete && currentLength === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
        setTypingSpeed(1000);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, typingSpeed]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const getYearsOfExperience = () => {
    const start = new Date(2022, 6, 20);
    const now = new Date();
    let years = now.getFullYear() - start.getFullYear();
    return years;
  };

  const years = useMemo(getYearsOfExperience, []);

  return (
    <section id="about" className="animate__animated animate__fadeIn">
      <div className="row align-items-center">
        <div className="col-md-6 animate__animated animate__fadeInLeft" style={{ textAlign: 'left' }}>
          <h1 className="big-text">A Passionate</h1>
          <span className="animated-text">
            {displayText}
            <span className="cursor" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </span>
          <p className="mt-5">
            Since writing my first line of code, I have been passionate about creating innovative, user-centric software. I thrive on exploring new technologies, collaborating with talented teams, and building applications that combine functionality with thoughtful design. Whether through pair programming, code reviews, or creative brainstorming, I believe collaboration is essential to delivering exceptional results. Outside of coding, I recharge through photography, reading, and spending time in nature—activities that inspire my creativity and broaden my perspective.
          </p>
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <div className="stats-section">
            <div className="stat-block">
              <div className="stat-number">{years}+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-block">
              <div className="stat-number">5+</div>
              <div className="stat-label">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;