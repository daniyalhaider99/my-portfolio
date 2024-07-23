import React from 'react';

const Contact: React.FC = () => (
  <section id="contact" className="animate__animated animate__fadeIn">
    <h2>Contact Me</h2>
    <form>
      <input type="text" name="name" placeholder="Your Name" />
      <input type="email" name="email" placeholder="Your Email" />
      <textarea name="message" placeholder="Your Message" />
      <button type="submit">Submit</button>
    </form>
  </section>
);

export default Contact;
