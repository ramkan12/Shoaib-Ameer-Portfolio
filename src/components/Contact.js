import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a 
              href="mailto:shoaib@example.com"
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors block hover:transform hover:scale-105"
            >
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-400">shoaib@example.com</p>
            </a>
            <a 
              href="https://www.linkedin.com/in/shoaibameertpa/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors block hover:transform hover:scale-105"
            >
              <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">linkedin.com/in/shoaibameer</p>
            </a>
            <a 
              href="https://github.com/shoaibameer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors block hover:transform hover:scale-105"
            >
              <Github className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">github.com/shoaibameer</p>
            </a>
          </div>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;