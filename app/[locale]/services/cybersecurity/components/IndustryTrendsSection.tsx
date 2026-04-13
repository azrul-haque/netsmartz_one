'use client';

import React from 'react';

const trends = [
  'In 2025, more than 80% of CIOs plan to make investments in foundational capabilities, including: cybersecurity, GenAI, business intelligence and data analytics, and integration technologies like APIs.',
  '$20 Trillion - Projected cost of global cybercrimes by 2026.',
  '90% of companies could face cyber threats by 2026',
  'Especially if proactive cybersecurity measures are not substantially adopted. The sophistication and accessibility of attack methods, such as those powered by AI, make it probable that organizations across various sectors will see a surge in attempted breaches within the next few years as cyber threat actors adapt and scale their strategies',
];

const IndustryTrendsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Industry Trends <span className="text-[#fe7725]">Facts</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {trends.map((trend, index) => (
            <div
              key={index}
              className="flex items-start gap-4 mb-4 bg-gradient-to-r from-orange-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-[#fe7725] flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{trend}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryTrendsSection;
