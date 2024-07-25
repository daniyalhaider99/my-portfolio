import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#works", label: "Works" },
  { href: "#testimonials", label: "Endorsements" },
];

const Header: React.FC = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link" href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
