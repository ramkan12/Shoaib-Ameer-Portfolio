import { Mail, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Drive Growth Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to accelerate revenue and build high-performance teams? Let's discuss your growth strategy.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a 
              href="mailto:s9ameer@gmail.com"
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors block hover:transform hover:scale-105"
            >
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400">s9ameer@gmail.com</p>
            </a>
            <a 
              href="https://linkedin.com/in/shoaibameertpa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors block hover:transform hover:scale-105"
            >
              <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">linkedin.com/in/shoaibameertpa</p>
            </a>
            <a 
              href="tel:813-330-5107"
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors block hover:transform hover:scale-105"
            >
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">813-330-5107</p>
            </a>
          </div>
          
          {/* Education */}
          <div className="bg-gray-800/50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold text-blue-400 mb-4">Education & Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold text-gray-200">BBA - Business Administration</p>
                <p className="text-gray-400">Athabasca University (2015)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-200">Certificate - Financial Trading</p>
                <p className="text-gray-400">University of Toronto (2020)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;