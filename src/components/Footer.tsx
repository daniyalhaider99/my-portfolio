import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
            <span style={{ color: 'white' }}>DANIYAL</span>
            <span style={{ color: '#0d6efd' }}> HAIDER</span>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <p className="mb-0 d-inline-block me-2">All Rights Reserved</p>
            <span>&copy; {currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
