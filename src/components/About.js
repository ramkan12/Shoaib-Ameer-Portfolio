const About = () => {
    return (
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold">
                  SA
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate full-stack developer with over 3 years of experience creating 
                  digital solutions that make a difference. My journey in tech started with curiosity 
                  and has evolved into a love for crafting efficient, beautiful, and user-centered applications.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in React, Node.js, and modern web technologies. When I'm not coding, 
                  you'll find me exploring new frameworks, contributing to open source, or sharing 
                  knowledge with the developer community.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {['React', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'].map((skill) => (
                    <div key={skill} className="bg-gray-700 rounded-lg px-4 py-2 text-center hover:bg-gray-600 transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;