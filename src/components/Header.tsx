import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact", isContact: true },
];

const Header: React.FC = () => (
  <Navbar expand="lg">
    <Container>
      <Navbar.Brand href="#home" className="me-auto">
        <span style={{ color: 'white' }}>DANIYAL</span>
        <span style={{ color: '#0d6efd' }}> HAIDER</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          {navItems.map((item, index) => (
            <Nav.Link
              key={index}
              href={item.href}
              className={item.isContact ? 'bg-primary text-white rounded-pill px-3 mx-2' : ''}
            >
              {item.label}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
