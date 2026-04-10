'use client';

import React from 'react';
import { FiAlertCircle, FiTrendingDown, FiUsers, FiClock } from 'react-icons/fi';

const WhyLeadershipSection: React.FC = () => {
  const challenges = [
    {
      icon: <FiAlertCircle className="text-3xl text-[#fe7725]" />,
      title: "Misalignment between global headquarters and local teams",
    },
    {
      icon: <FiTrendingDown className="text-3xl text-[#fe7725]" />,
      title: "Inability to scale teams and operations effectively",
    },
    {
      icon: <FiUsers className="text-3xl text-[#fe7725]" />,
      title: "High attrition due to weak leadership structures",
    },
    {
      icon: <FiClock className="text-3xl text-[#fe7725]" />,
      title: "Delays in decision-making and operational inefficiencies",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Leadership is <span className="text-[#fe7725]">Critical to GCC Success</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Building a GCC is a strategic investment—but without the right leadership, execution often falls short.
          </p>
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
                <p className="text-gray-700 leading-relaxed pt-3">{challenge.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLeadershipSection;