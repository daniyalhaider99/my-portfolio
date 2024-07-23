import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';
import '../styles.css';

const App: React.FC = () => (
  <div>
    <Header />
    <Home />
    <About />
    <Works />
    <Contact />
  </div>
);

export default App;
