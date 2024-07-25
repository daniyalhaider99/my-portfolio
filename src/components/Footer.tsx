import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer: React.FC = () => (
  <footer className="d-flex justify-content-between align-items-center p-3">
    <p className="m-2">&copy; Daniyal Haider</p>
    <div className="m-2 d-flex align-items-center">
      <p className="mb-0">Follow Me </p>
      <br/>
      <a href="https://www.linkedin.com/in/daniyal-haider-93b88b219/" target="_blank" rel="noopener noreferrer" className="btn btn-link p-0">
        <FaLinkedinIn className='ml-2'/>
      </a>
    </div>
  </footer>
);

export default Footer;
