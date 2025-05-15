import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const Home: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showCursor, setShowCursor] = useState(true);

  const texts = [
    'Full Stack Developer',
    'Prompt Engineer',
    'DevOps Engineer'
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

  // Add cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="animate__animated animate__fadeIn">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="big-text">Hello, I'm Daniyal Haider</h1>
          <h3>A Passionate </h3>
          <span className="animated-text">
            {displayText}
            <span className="cursor" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </span>
        </div>
        <div className="col-md-6 animate__animated animate__fadeInRight">
          <img
            src="/headshot.png"
            alt="Daniyal Haider"
            className="img-fluid rounded"
            style={{ height: '600px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
