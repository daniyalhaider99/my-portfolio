import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const testimonials = [
  { name: 'Ibtehaj Nasar', text: 'Daniyal consistently demonstrated a strong technical proficiency and an impressive attention to detail. He is a dedicated team player who adapts swiftly to new challenges and always brings a positive attitude to the workplace. His friendly and approachable personality, combined with his willingness to go above and beyond to assist colleagues, makes him an invaluable asset to any team. Daniyal is truly someone you can rely on.' },
  { name: 'Saeed Iqbal', text: "Daniyal approaches tasks with seriousness and delivers results promptly. During his Final Year Project, he exhibited a high level of dedication and commitment, ensuring that all project milestones were met on time and to an exemplary standard. His remarkable ability to handle difficult problems with effectiveness stands out. Daniyal's talent for breaking down complex issues into manageable parts, combined with his sharp analytical mind, enables him to develop creative solutions quickly and efficiently." },
  { name: 'Muhammad Uzair', text: 'Daniyal has strong technical skills and is a quick learner who can easily grasp new concepts and technologies. While working together, he proved to be a valuable team member, always delivering high quality work on time. His problem solving abilities and dedication to continuous improvement make him an asset to any development team.' },
  { name: 'Malik Arslan', text: "An outstanding Rails developer with some knowledge of React, his dedication and innovative thinking have significantly contributed to our projects' success" },
  { name: 'Huzaifa Tahir', text: "I had the privilege of working alongside Daniyal, who serves as a senior resource in our company. Daniyal consistently demonstrates exceptional problem-solving skills, tackling complex challenges with innovative and effective solutions.his deep technical expertise, combined with a collaborative and approachable attitude, makes him an invaluable team member and mentor. His leadership and guidance have significantly contributed to the success of various projects, and his ability to navigate and resolve critical issues under pressure is truly commendable.i highly recommend daniyal as an outstanding resource who excels in both technical proficiency and team leadership. any organization would benefit greatly from his skills and experience." },
  { name: 'Hamza Jalil', text: "I had the pleasure of working with Daniyal, an incredibly skilled and dependable developer. They have a strong ability to design and implement scalable systems, write clean, efficient code, and troubleshoot complex issues. Daniyal is also highly collaborative, always willing to support the team and share knowledge. I would gladly recommend them to any team looking for a top-notch engineer." },
  { name: 'Hamza Arshad', text: "I had the pleasure of working with Daniyal at Dubizzle Labs, and he is an exceptional software engineer. His technical expertise and problem-solving skills are top-notch, consistently delivering high-quality solutions. Daniyal is also a fantastic team player, always willing to collaborate and share knowledge. His ability to handle complex challenges with ease makes him a valuable asset to any team. I highly recommend Daniyal for any software engineering role." },
  { name: 'Asad Ullah', text: "I had the pleasure of working with Daniyal Haider and was consistently impressed by his dedication, creativity, and problem-solving skills. He is a dedicated and creative professional with strong problem-solving skills. His strategic mindset and collaborative spirit make him a valuable asset to any team." },
  { name: 'Muhammad Yousaf Khan', text: "I have worked with Daniyal on multiple projects. He's an excellent resource whose adapts quickly whether it's a bug at the backend or a frontend fluctuation, third party API integrations, new feature you name it. A for sure to have on your team." },
  { name: 'Murtaza Zaidi', text: "I have had the pleasure of working with Daniyal, and I can confidently say that he is a dedicated and hardworking individual. His attention to detail and problem-solving skills have consistently impressed me. Daniyal is always willing to go the extra mile to ensure the success of any project. He is a team player who brings both enthusiasm and professionalism to every task. I highly recommend him for any opportunity he pursues!" },
  { name: 'Hamza Naveed', text: "Daniyal is a great tech guy with strong communication skills. He had a habit of being punctual at work and an excellent team person. He has excellent skillset in Ruby on Rails and other JS frameworks as well and he loves to take on challanges on his own and an excellent self learner. I would strongly recommend him." }
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
