import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'animate.css';
import '../styles.css';

const App: React.FC = () => (
  <div>
    <Header />
    <Home />
    <About />
    <Services />
    <Works />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
);

export default App;
