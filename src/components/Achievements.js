import { TrendingUp, Users, Target, Award } from 'lucide-react';

const Achievements = () => {
  const keyMetrics = [
    { icon: TrendingUp, label: "Revenue Growth", value: "30%+", description: "Enrollment Conversion Growth" },
    { icon: Target, label: "Locations Launched", value: "25+", description: "Franchise Centers" },
    { icon: Users, label: "Partnerships", value: "2000+", description: "B2B Deals Signed" },
    { icon: Award, label: "Team Leadership", value: "150+", description: "Members Hired & Led" }
  ];

  return (
    <section id="achievements" className="py-20" style={{ backgroundColor: 'rgba(0, 119, 255, 0.02)' }}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#0077FF' }}>
          Track Record
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="p-8 rounded-xl text-center transition-all transform hover:scale-105 border" style={{ backgroundColor: 'rgba(0, 119, 255, 0.05)', borderColor: 'rgba(0, 119, 255, 0.1)' }}>
              <metric.icon className="w-12 h-12 mx-auto mb-4" style={{ color: '#0077FF' }} />
              <div className="text-3xl font-bold mb-2" style={{ color: '#0077FF' }}>{metric.value}</div>
              <div className="text-lg font-semibold mb-2" style={{ color: '#C0C0C0' }}>{metric.label}</div>
              <div className="text-sm" style={{ color: '#C0C0C0' }}>{metric.description}</div>
            </div>
          ))}
        </div>
        
        {/* Additional Metrics */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold" style={{ color: '#FF2E88' }}>45%</div>
            <div className="text-sm" style={{ color: '#C0C0C0' }}>Tour-to-Close Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold" style={{ color: '#FF2E88' }}>50%</div>
            <div className="text-sm" style={{ color: '#C0C0C0' }}>CRM Visibility Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold" style={{ color: '#FF2E88' }}>120%+</div>
            <div className="text-sm" style={{ color: '#C0C0C0' }}>Revenue Target Attainment</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold" style={{ color: '#FF2E88' }}>28%</div>
            <div className="text-sm" style={{ color: '#C0C0C0' }}>Broker-Led Deal Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;