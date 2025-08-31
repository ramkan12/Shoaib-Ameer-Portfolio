const About = () => {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: 'rgba(0, 119, 255, 0.02)' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#0077FF' }}>
            Executive Summary
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 shadow-lg" style={{ borderColor: '#0077FF' }}>
                <img 
                  src="/shoaib-profile.jpg" 
                  alt="Shoaib Ameer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: '#C0C0C0' }}>
                Seasoned sales executive and growth strategist with over 14 years of proven success 
                driving revenue acceleration, territory expansion, and high-performance team development 
                across North America.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#C0C0C0' }}>
                Deep experience spanning EdTech, flexible workspace, commercial real estate, and food tech. 
                Known for turning GTM strategy into execution—delivering consistent, measurable outcomes 
                in highly competitive markets.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#C0C0C0' }}>
                Led national and regional sales organizations, managed full P&L responsibilities, 
                and launched franchise and B2B growth channels from the ground up.
              </p>
            </div>
          </div>
          
          {/* Core Competencies */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8" style={{ color: '#0077FF' }}>Core Competencies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Strategic Sales Leadership',
                'GTM Execution',
                'Revenue Growth & P&L',
                'CRM Optimization',
                'Team Development',
                'Franchise Sales',
                'Real Estate Sales',
                'Partner Enablement',
                'Data-Driven Strategy',
                'Stakeholder Alignment',
                'Pipeline Management',
                'Territory Buildout'
              ].map((skill) => (
                <div key={skill} className="rounded-lg px-4 py-3 text-center transition-colors text-sm border" style={{ backgroundColor: 'rgba(0, 119, 255, 0.1)', borderColor: 'rgba(0, 119, 255, 0.2)', color: '#C0C0C0' }}>
                  {skill}
                </div>
              ))}
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;