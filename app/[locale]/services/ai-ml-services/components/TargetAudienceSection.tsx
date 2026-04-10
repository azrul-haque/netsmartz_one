'use client';

import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const TargetAudienceSection: React.FC = () => {
  const audience = [
    'Exploring AI but struggling to move beyond experimentation',
    'Looking to automate processes and reduce manual effort',
    'Wanting to improve decision-making with predictive insights',
    'Scaling operations and need intelligent systems',
    'Investing in AI but not seeing measurable ROI'
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-orange-50 via-white to-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for Organizations Moving <span className="text-[#fe7725]">Beyond AI Pilots</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
          <ul className="space-y-4">
            {audience.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <FiCheckCircle className="text-[#fe7725] text-2xl flex-shrink-0 mt-0.5" />
                <span className="text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;