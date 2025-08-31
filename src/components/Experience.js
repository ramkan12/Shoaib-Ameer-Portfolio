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
        <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#0077FF' }}>
          Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="rounded-xl p-8 border transition-all" style={{ backgroundColor: 'rgba(0, 119, 255, 0.05)', borderColor: 'rgba(0, 119, 255, 0.1)' }}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: '#0077FF' }}>{exp.title}</h3>
                  <p className="text-lg" style={{ color: '#C0C0C0' }}>{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0" style={{ color: '#C0C0C0' }}>
                  {exp.period}
                </div>
              </div>
              <p className="mb-4 leading-relaxed" style={{ color: '#C0C0C0' }}>{exp.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2" style={{ color: '#FF2E88' }}>Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-sm" style={{ color: '#C0C0C0' }}>{achievement}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: 'rgba(0, 119, 255, 0.2)', color: '#0077FF' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
          
          {/* Public Leadership */}
          <div className="rounded-xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(255, 46, 136, 0.1), rgba(0, 119, 255, 0.1))', borderColor: 'rgba(255, 46, 136, 0.3)' }}>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#FF2E88' }}>Public Leadership</h3>
            <p className="text-lg mb-2" style={{ color: '#C0C0C0' }}>Candidate for School Board Trustee</p>
            <p className="mb-4" style={{ color: '#C0C0C0' }}>Peel District School Board (Mississauga, Ontario) - 2012</p>
            <p className="leading-relaxed" style={{ color: '#C0C0C0' }}>
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