'use client';

import React from 'react';
import { FiAward, FiCpu, FiUsers, FiGlobe, FiTarget } from 'react-icons/fi';

const WhyNetsmartzSection: React.FC = () => {
  const reasons = [
    { icon: <FiAward className="text-2xl" />, text: '26+ years of enterprise delivery experience' },
    { icon: <FiCpu className="text-2xl" />, text: 'Deep engineering expertise across data, analytics, and AI' },
    { icon: <FiUsers className="text-2xl" />, text: '1,500+ global engineers' },
    { icon: <FiGlobe className="text-2xl" />, text: 'Offshore execution with onshore accountability' },
    { icon: <FiTarget className="text-2xl" />, text: 'Outcome-driven delivery, not staff augmentation' }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="text-[#fe7725]">Netsmartz?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              data-testid={`reason-${index}`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                {reason.icon}
              </div>
              <span className="text-gray-700 font-medium">{reason.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNetsmartzSection;
