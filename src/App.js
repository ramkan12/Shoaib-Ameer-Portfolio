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
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Achievements />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-gray-700">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Shoaib Ameer. Driving growth through strategic sales leadership.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;