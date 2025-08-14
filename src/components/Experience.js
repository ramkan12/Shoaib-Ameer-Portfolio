const Experience = () => {
  const experiences = [
    {
      title: "Associate Vice President, Sales",
      company: "Primacorp Ventures",
      period: "Feb 2024 - Present",
      description: "Leading national admissions and recruitment operations across 20+ campuses in Canada and the U.S. Delivered 30% YoY increase in enrollment conversion through pipeline optimization.",
      achievements: ["30% YoY enrollment growth", "Improved conversion from 12% to 18%", "25% reduction in acquisition costs"],
      tech: ["Salesforce", "Pipeline Management", "CRM Optimization"]
    },
    {
      title: "Director of Partnerships (Franchise Sales)",
      company: "IWG plc",
      period: "Nov 2022 - Feb 2024",
      description: "Led franchise growth strategy across North America. Closed multi-million-dollar deals, driving 20% YoY network growth and launched 25+ new coworking centers.",
      achievements: ["20% YoY network growth", "25+ new centers launched", "30-day reduction in time-to-launch"],
      tech: ["Franchise Development", "P&L Management", "Strategic Partnerships"]
    },
    {
      title: "Regional Sales Director",
      company: "Delivery Squad",
      period: "Feb 2015 - Mar 2020",
      description: "Built regional sales infrastructure for food-tech delivery platform. Signed 2000+ restaurant partnerships and led team of 100+ across sales, marketing, and operations.",
      achievements: ["2000+ partnerships signed", "100+ team members led", "GTM strategy implementation"],
      tech: ["Team Leadership", "Partnership Development", "Food Tech"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-1">{exp.title}</h3>
                  <p className="text-lg text-gray-300">{exp.company}</p>
                </div>
                <div className="text-gray-400 mt-2 md:mt-0">
                  {exp.period}
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-gray-400 text-sm">{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
          
          {/* Public Leadership */}
          <div className="bg-gradient-to-r from-purple-800/20 to-blue-800/20 rounded-xl p-8 border border-purple-500/30">
            <h3 className="text-xl font-bold text-purple-400 mb-2">Public Leadership</h3>
            <p className="text-lg text-gray-300 mb-2">Candidate for School Board Trustee</p>
            <p className="text-gray-400 mb-4">Peel District School Board (Mississauga, Ontario) - 2012</p>
            <p className="text-gray-300 leading-relaxed">
              Launched a strategically organized grassroots campaign for public office in one of Canada's 
              largest school boards. Secured strong runner-up finish advocating for educational equity, 
              inclusive curricula, and community engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;