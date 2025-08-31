import { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, MessageSquare, Award } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'experience', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'py-4' : 'py-6'
    }`} style={{ backgroundColor: isScrolled ? 'rgba(10, 25, 47, 0.95)' : 'transparent', backdropFilter: 'blur(10px)' }}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold" style={{ color: '#0077FF' }}>
          Shoaib Ameer
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {[
            { id: 'home', label: 'Home', icon: User },
            { id: 'about', label: 'About', icon: User },
            { id: 'experience', label: 'Experience', icon: Briefcase },
            { id: 'achievements', label: 'Track Record', icon: Award },
            { id: 'contact', label: 'Contact', icon: MessageSquare }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                activeSection === id 
                  ? 'text-white' 
                  : 'hover:text-white'
              }`}
              style={{ 
                color: activeSection === id ? '#0077FF' : '#C0C0C0',
                backgroundColor: activeSection === id ? 'rgba(0, 119, 255, 0.1)' : 'transparent'
              }}
            >
              <Icon size={16} />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ color: '#C0C0C0' }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t" style={{ backgroundColor: 'rgba(10, 25, 47, 0.95)', borderColor: 'rgba(0, 119, 255, 0.2)' }}>
          <div className="container mx-auto px-6 py-4 space-y-3">
            {['home', 'about', 'experience', 'achievements', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-3 py-2 rounded hover:bg-opacity-20 transition-colors capitalize"
                style={{ color: '#C0C0C0' }}
              >
                {section === 'achievements' ? 'Track Record' : section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;