'use client';

import React from 'react';

const assurances = [
  'Minimal downtime during transition',
  'Preservation of critical workloads and data',
  'Phased modernization aligned to business priorities',
  'Continuous monitoring and optimization',
];

const AssuranceSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Modernization Without the <span className="text-[#fe7725]">Risk of Disruption</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Infrastructure modernization often fails because it disrupts business operations. Our approach ensures:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {assurances.map((assurance, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gradient-to-r from-orange-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <svg className="w-8 h-8 text-[#fe7725]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-base sm:text-lg text-gray-700 font-medium">{assurance}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssuranceSection;
