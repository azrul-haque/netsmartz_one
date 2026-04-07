'use client';

import React from 'react';
import { FiTrendingUp, FiUsers, FiAlertTriangle, FiLayers } from 'react-icons/fi';

const Tier1ChallengesSection: React.FC = () => {
  const challenges = [
    {
      icon: <FiTrendingUp className="text-3xl text-[#fe7725]" />,
      title: "Rising operational and real estate costs",
    },
    {
      icon: <FiUsers className="text-3xl text-[#fe7725]" />,
      title: "Increasing competition for skilled talent",
    },
    {
      icon: <FiAlertTriangle className="text-3xl text-[#fe7725]" />,
      title: "Higher attrition rates and hiring challenges",
    },
    {
      icon: <FiLayers className="text-3xl text-[#fe7725]" />,
      title: "Infrastructure and scalability constraints",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why <span className="text-[#fe7725]">Tier 1 Expansion</span> is Becoming Inefficient
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#fe7725]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  {challenge.icon}
                </div>
                <p className="text-gray-700 leading-relaxed pt-3 text-lg">{challenge.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tier1ChallengesSection;