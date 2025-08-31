// src/App.js
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#0A192F' }}>
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-5" style={{ background: 'linear-gradient(45deg, #0077FF, transparent)' }}></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 rounded-full opacity-5" style={{ background: 'linear-gradient(-45deg, #0077FF, transparent)' }}></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-32 opacity-10" style={{ backgroundColor: '#0077FF', transform: 'rotate(45deg)' }}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-24 opacity-10" style={{ backgroundColor: '#0077FF', transform: 'rotate(-30deg)' }}></div>
      </div>

      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Achievements />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t" style={{ borderColor: 'rgba(0, 119, 255, 0.2)' }}>
        <div className="container mx-auto px-6 text-center">
          <p style={{ color: '#C0C0C0' }}>
            © 2025 Shoaib Ameer. Driving growth through strategic sales leadership.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;