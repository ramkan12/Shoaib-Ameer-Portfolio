import { Linkedin, Mail, ChevronDown, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const companyLogos = [
    { name: "Primacorp Ventures", logo: "PV" },
    { name: "IWG plc", logo: "IWG" },
    { name: "Delivery Squad", logo: "DS" },
    { name: "HF Markets", logo: "HF" },
    { name: "eToro", logo: "ET" },
    { name: "Best Buy", logo: "BB" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Strong Performance Line */}
            <div className="mb-8">
              <div className="inline-flex items-center space-x-4 px-6 py-3 rounded-full border" style={{ borderColor: '#0077FF', backgroundColor: 'rgba(0, 119, 255, 0.1)' }}>
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#0077FF' }}></div>
                <span className="text-3xl md:text-4xl font-bold" style={{ color: '#0077FF' }}>$200M+</span>
                <span className="text-lg" style={{ color: '#C0C0C0' }}>in Revenue Growth Delivered</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#0077FF' }}>
              Shoaib Ameer
            </h1>
            <p className="text-xl md:text-2xl mb-8" style={{ color: '#C0C0C0' }}>
              Sales Executive & Growth Strategist
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto" style={{ color: '#C0C0C0' }}>
              Seasoned sales executive with 14+ years of proven success driving revenue acceleration, 
              territory expansion, and high-performance team development across North America.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm">
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(0, 119, 255, 0.1)' }}>
                <MapPin size={16} style={{ color: '#0077FF' }} />
                <span style={{ color: '#C0C0C0' }}>Tampa, Florida</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(0, 119, 255, 0.1)' }}>
                <Phone size={16} style={{ color: '#0077FF' }} />
                <span style={{ color: '#C0C0C0' }}>813-330-5107</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => scrollToSection('achievements')}
                className="px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                style={{ backgroundColor: '#FF2E88', color: 'white' }}
              >
                View My Track Record
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 rounded-lg font-semibold transition-all hover:bg-opacity-10"
                style={{ borderColor: '#0077FF', color: '#0077FF', backgroundColor: 'transparent' }}
              >
                Let's Talk Growth
              </button>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="https://linkedin.com/in/shoaibameertpa" target="_blank" rel="noopener noreferrer" className="transition-colors transform hover:scale-110" style={{ color: '#C0C0C0' }}>
                <Linkedin size={24} />
              </a>
              <a href="mailto:s9ameer@gmail.com" className="transition-colors transform hover:scale-110" style={{ color: '#C0C0C0' }}>
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} style={{ color: '#C0C0C0' }} />
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="py-16" style={{ backgroundColor: 'rgba(0, 119, 255, 0.05)' }}>
        <div className="container mx-auto px-6">
          <h3 className="text-center mb-12 text-lg" style={{ color: '#C0C0C0' }}>Trusted by Leading Organizations</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companyLogos.map((company, index) => (
              <div key={index} className="flex items-center justify-center w-16 h-16 rounded-full border text-lg font-bold transition-all hover:scale-110" style={{ borderColor: '#0077FF', backgroundColor: 'rgba(0, 119, 255, 0.1)', color: '#0077FF' }}>
                {company.logo}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;