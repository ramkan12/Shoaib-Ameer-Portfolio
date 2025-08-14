import { TrendingUp, Users, Target, Award } from 'lucide-react';

const Achievements = () => {
  const keyMetrics = [
    { icon: TrendingUp, label: "Revenue Growth", value: "30%+", description: "Enrollment Conversion Growth" },
    { icon: Target, label: "Locations Launched", value: "25+", description: "Franchise Centers" },
    { icon: Users, label: "Partnerships", value: "2000+", description: "B2B Deals Signed" },
    { icon: Award, label: "Team Leadership", value: "150+", description: "Members Hired & Led" }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Key Achievements
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl text-center hover:transform hover:scale-105 transition-all">
              <metric.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-lg font-semibold text-blue-400 mb-2">{metric.label}</div>
              <div className="text-sm text-gray-400">{metric.description}</div>
            </div>
          ))}
        </div>
        
        {/* Additional Metrics */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">45%</div>
            <div className="text-sm text-gray-400">Tour-to-Close Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">50%</div>
            <div className="text-sm text-gray-400">CRM Visibility Improvement</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">120%+</div>
            <div className="text-sm text-gray-400">Revenue Target Attainment</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">28%</div>
            <div className="text-sm text-gray-400">Broker-Led Deal Growth</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;