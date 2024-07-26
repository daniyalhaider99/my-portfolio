import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const testimonials = [
  { name: 'Ibtehaj Nasar', text: 'Daniyal consistently demonstrated a strong technical proficiency and an impressive attention to detail. He is a dedicated team player who adapts swiftly to new challenges and always brings a positive attitude to the workplace. His friendly and approachable personality, combined with his willingness to go above and beyond to assist colleagues, makes him an invaluable asset to any team. Daniyal is truly someone you can rely on.' },
  { name: 'Saeed Iqbal', text: "Daniyal approaches tasks with seriousness and delivers results promptly. During his Final Year Project, he exhibited a high level of dedication and commitment, ensuring that all project milestones were met on time and to an exemplary standard. His remarkable ability to handle difficult problems with effectiveness stands out. Daniyal's talent for breaking down complex issues into manageable parts, combined with his sharp analytical mind, enables him to develop creative solutions quickly and efficiently." },
  { name: 'Muhammad Uzair', text: 'Daniyal has strong technical skills and is a quick learner who can easily grasp new concepts and technologies. While working together, he proved to be a valuable team member, always delivering high quality work on time. His problem solving abilities and dedication to continuous improvement make him an asset to any development team.' },
  { name: 'Malik Arslan', text: "An outstanding Rails developer with some knowledge of React, his dedication and innovative thinking have significantly contributed to our projects' success" }
];

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; // Don't run the interval if hovered

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="testimonials">
      <h1 className="section-title text-center">Reviews & Endorsements</h1>
      <div className="position-relative testimonial-card-wrapper">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`card testimonial-card position-absolute animate__animated ${index === currentTestimonial ? 'animate__fadeIn' : 'd-none'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="card-body">
              <h5 className="card-title">{testimonial.name}</h5>
              <p className="card-text">{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
