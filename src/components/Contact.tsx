import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  useEffect(() => {
    console.log('Component mounted - Initializing EmailJS');
    emailjs.init('eMVRmKvfCgo8q8BBS');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission started');

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      if (!form.current) {
        console.log('Form reference is null');
        return;
      }

      console.log('Form data:', {
        name: form.current.user_name.value,
        email: form.current.user_email.value,
        subject: form.current.subject.value,
        message: form.current.message.value
      });

      console.log('Attempting to send email...');
      const result = await emailjs.sendForm(
        'service_8tdjw47',
        'template_ypk827p',
        form.current,
        'eMVRmKvfCgo8q8BBS'
      );
      console.log('EmailJS Result:', result);

      if (result.status === 200) {
        console.log('Email sent successfully');
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        form.current.reset();
      } else {
        console.log('Email sending failed:', result);
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      console.log('Form submission completed');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <section id="contact" className="animate__animated animate__fadeIn py-5">
        <div className="container">
          <h1 className="section-title text-center mb-5">Open For New Project</h1>
          <h1 className="section-title text-center mb-5" style={{ color: 'dodgerblue' }}>LET'S CONNECT</h1>
          <div className="row justify-content-center">
            <div className="col-md-8">
              {submitStatus.type && (
                <div className={`alert alert-${submitStatus.type === 'success' ? 'success' : 'danger'} mb-4`}>
                  {submitStatus.message}
                </div>
              )}
              <form ref={form} onSubmit={handleSubmit} className="contact-form">
                <div className="mb-4">
                  <label htmlFor="name" className="form-label text-start d-block">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="user_name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label text-start d-block">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="user_email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="form-label text-start d-block">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label text-start d-block">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows={5}
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary px-5 py-2 w-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
