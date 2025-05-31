import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './Testimonials.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const [_currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovered, _setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; // Don't run the interval if hovered

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section id="testimonials">
      <h1 className="section-title text-center mt-5">WHAT PEOPLE SAY</h1>
      <div className="testimonials-slider-container">
        <Slider {...settings}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-card-body" style={{ textAlign: 'left' }}>
                <span className="testimonial-name">{testimonial.name}</span>
                <p className="testimonial-card-text mt-2">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
