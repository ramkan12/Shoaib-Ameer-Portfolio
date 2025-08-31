import { Mail, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#0077FF' }}>
            Let's Drive Growth Together
          </h2>
          <p className="text-xl mb-12" style={{ color: '#C0C0C0' }}>
            Ready to accelerate revenue and build high-performance teams? Let's discuss your growth strategy.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a 
              href="mailto:s9ameer@gmail.com"
              className="p-6 rounded-xl transition-all block transform hover:scale-105 border"
              style={{ backgroundColor: 'rgba(0, 119, 255, 0.05)', borderColor: 'rgba(0, 119, 255, 0.1)' }}
            >
              <Mail className="w-8 h-8 mx-auto mb-4" style={{ color: '#0077FF' }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#0077FF' }}>Email</h3>
              <p style={{ color: '#C0C0C0' }}>s9ameer@gmail.com</p>
            </a>
            <a 
              href="https://linkedin.com/in/shoaibameertpa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 rounded-xl transition-all block transform hover:scale-105 border"
              style={{ backgroundColor: 'rgba(0, 119, 255, 0.05)', borderColor: 'rgba(0, 119, 255, 0.1)' }}
            >
              <Linkedin className="w-8 h-8 mx-auto mb-4" style={{ color: '#0077FF' }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#0077FF' }}>LinkedIn</h3>
              <p style={{ color: '#C0C0C0' }}>linkedin.com/in/shoaibameertpa</p>
            </a>
            <a 
              href="tel:813-330-5107"
              className="p-6 rounded-xl transition-all block transform hover:scale-105 border"
              style={{ backgroundColor: 'rgba(0, 119, 255, 0.05)', borderColor: 'rgba(0, 119, 255, 0.1)' }}
            >
              <Phone className="w-8 h-8 mx-auto mb-4" style={{ color: '#0077FF' }} />
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#0077FF' }}>Phone</h3>
              <p style={{ color: '#C0C0C0' }}>813-330-5107</p>
            </a>
          </div>
          
          {/* Education */}
          <div className="rounded-xl p-8 mb-8 border" style={{ backgroundColor: 'rgba(0, 119, 255, 0.02)', borderColor: 'rgba(0, 119, 255, 0.1)' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#0077FF' }}>Education & Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold" style={{ color: '#C0C0C0' }}>BBA - Business Administration</p>
                <p style={{ color: '#C0C0C0' }}>Athabasca University (2015)</p>
              </div>
              <div>
                <p className="font-semibold" style={{ color: '#C0C0C0' }}>Certificate - Financial Trading</p>
                <p style={{ color: '#C0C0C0' }}>University of Toronto (2020)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;