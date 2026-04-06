'use client';

import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const SolutionSection: React.FC = () => {
  const features = [
    { title: 'Unified Data Architecture', description: 'Bring together data lakes, warehouses, and real-time streams into a single ecosystem.' },
    { title: 'End-to-End Data Integration', description: 'Seamlessly connect disparate systems without complex, brittle pipelines.' },
    { title: 'Real-Time Analytics & Reporting', description: 'Move from delayed dashboards to live, decision-ready insights.' },
    { title: 'Power BI Native Integration', description: 'Enable business users with intuitive, governed, and scalable reporting.' },
    { title: 'Built-In Governance & Security', description: 'Ensure compliance, consistency, and control across all data assets.' }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Microsoft Fabric Enables <span className="text-[#fe7725]">(When Implemented Right)</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Microsoft Fabric is not just another analytics tool—it's a unified data platform. Unlocking its full potential means:
          </p>
        </div>

        {/* First row - 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              data-testid={`feature-${index}`}
            >
              <div className="flex items-start gap-3 mb-3">
                <FiCheckCircle className="text-[#fe7725] text-2xl flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed ml-9">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Second row - 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.slice(3, 5).map((feature, index) => (
            <div
              key={index + 3}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              data-testid={`feature-${index + 3}`}
            >
              <div className="flex items-start gap-3 mb-3">
                <FiCheckCircle className="text-[#fe7725] text-2xl flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed ml-9">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;