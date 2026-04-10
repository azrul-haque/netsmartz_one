'use client';

import React from 'react';
import { FiAward, FiMapPin, FiUsers, FiSettings, FiBook } from 'react-icons/fi';

const WhyNetsmartzSection: React.FC = () => {
  const strengths = [
    {
      icon: <FiAward className="text-3xl" />,
      stat: "70+",
      title: "GCCs Globally",
      description: "Proven experience managing and scaling",
    },
    {
      icon: <FiMapPin className="text-3xl" />,
      title: "Strong Tier 2 Footprint",
      description: "Locations like Chandigarh and Mohali",
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: "Top-Tier Talent Access",
      description: "From emerging hubs across India",
    },
    {
      icon: <FiSettings className="text-3xl" />,
      title: "Enterprise Infrastructure",
      description: "Grade operational support",
    },
    {
      icon: <FiBook className="text-3xl" />,
      title: "Proven Playbooks",
      description: "For expansion, integration, and scaling",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why <span className="text-[#fe7725]">Netsmartz</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="md:col-span-3 grid md:grid-cols-3 gap-6">
            {strengths.slice(0, 3).map((strength, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="w-16 h-16 bg-[#fe7725]/20 rounded-xl flex items-center justify-center text-[#fe7725] mb-6 mx-auto">
                  {strength.icon}
                </div>
                {strength.stat && (
                  <div className="text-4xl font-bold text-[#fe7725] mb-2 text-center">{strength.stat}</div>
                )}
                <h3 className="text-lg font-bold text-white mb-2 text-center">{strength.title}</h3>
                <p className="text-gray-300 text-sm text-center">{strength.description}</p>
              </div>
            ))}
          </div>
          <div className="md:col-span-3 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {strengths.slice(3).map((strength, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="w-16 h-16 bg-[#fe7725]/20 rounded-xl flex items-center justify-center text-[#fe7725] mb-6 mx-auto">
                  {strength.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 text-center">{strength.title}</h3>
                <p className="text-gray-300 text-sm text-center">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNetsmartzSection;