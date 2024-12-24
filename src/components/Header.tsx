import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const navItems = [
  { href: "#about", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Reviews" },
];

const Header: React.FC = () => (
  <Navbar expand="lg" className="bg-dark">
    <Container>
      <Navbar.Brand href="#home">Daniyal Haider</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {navItems.map((item, index) => (
            <Nav.Link key={index} href={item.href}>{item.label}</Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

);

export default Header;
