'use client';

import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const TargetAudienceSection: React.FC = () => {
  const useCases = [
    'Struggling with siloed data across multiple systems',
    'Experiencing delays in reporting and decision-making',
    'Scaling rapidly and need a future-ready data foundation',
    'Looking to unify data engineering, analytics, and governance',
    'Investing in AI and need clean, reliable, and accessible data'
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for Organizations That Need More Than <span className="text-[#fe7725]">Just Dashboards</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            This is not for companies looking to "add another BI tool." Microsoft Fabric is ideal if you are:
          </p>
        </div>

        {/* First row - 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {useCases.slice(0, 3).map((useCase, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              data-testid={`usecase-${index}`}
            >
              <div className="flex items-start gap-3">
                <FiCheckCircle className="text-[#fe7725] text-2xl flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed font-medium">{useCase}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Second row - 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {useCases.slice(3, 5).map((useCase, index) => (
            <div
              key={index + 3}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              data-testid={`usecase-${index + 3}`}
            >
              <div className="flex items-start gap-3">
                <FiCheckCircle className="text-[#fe7725] text-2xl flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 leading-relaxed font-medium">{useCase}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;