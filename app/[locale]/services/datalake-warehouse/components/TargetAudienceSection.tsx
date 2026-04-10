'use client';

import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const TargetAudienceSection: React.FC = () => {
  const useCases = [
    'Managing large volumes of structured and unstructured data',
    'Struggling with slow or unreliable reporting',
    'Dealing with siloed data across multiple systems',
    'Planning to implement advanced analytics or AI',
    'Outgrowing your current data infrastructure'
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for Organizations <span className="text-[#fe7725]">Scaling Their Data Operations</span>
          </h2>
        </div>

        {/* First row - 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {useCases.slice(0, 3).map((useCase, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
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
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
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