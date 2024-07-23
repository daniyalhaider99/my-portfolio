import React from 'react';
import 'animate.css';

const Contact: React.FC = () => (
  <section id="contact" className="animate__animated animate__fadeInUp">
    <h2>Contact Me</h2>
    <form>
      <input type="text" name="name" placeholder="Your Name" />
      <input type="email" name="email" placeholder="Your Email" />
      <textarea name="message" placeholder="Your Message"></textarea>
      <button type="submit">Submit</button>
    </form>
  </section>
);

export default Contact;
