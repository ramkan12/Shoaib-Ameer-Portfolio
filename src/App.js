import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-gray-700">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Shoaib Ameer. Built with React and love.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;