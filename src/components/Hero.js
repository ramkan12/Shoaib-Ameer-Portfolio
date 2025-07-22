import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Shoaib Ameer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I craft beautiful, functional web experiences that bring ideas to life. 
            Passionate about clean code, user experience, and cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all"
            >
              Get In Touch
            </button>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/shoaibameer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/shoaibameer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:shoaib@example.com" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;