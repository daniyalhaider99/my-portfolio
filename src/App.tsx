import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Works from './components/Works';
import Testimonials from './components/Testimonials';
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
    <Experience />
    <Skills />
    <Works />
    <Testimonials />
    <Footer />
  </div>
);

export default App;
