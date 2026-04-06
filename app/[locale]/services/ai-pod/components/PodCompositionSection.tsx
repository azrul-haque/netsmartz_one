'use client';

import React from 'react';
import { FiCode, FiDatabase, FiCpu, FiSettings, FiZap, FiShield } from 'react-icons/fi';

const PodCompositionSection: React.FC = () => {
  const components = [
    { icon: <FiCode className="text-4xl" />, title: 'AI/ML Engineers' },
    { icon: <FiDatabase className="text-4xl" />, title: 'Data Scientists' },
    { icon: <FiCpu className="text-4xl" />, title: 'Product-Specific Software Engineers' },
    { icon: <FiSettings className="text-4xl" />, title: 'MLOps & DevOps Specialists' },
    { icon: <FiZap className="text-4xl" />, title: 'AI Accelerators & Reusable Agents' },
    { icon: <FiShield className="text-4xl" />, title: 'Delivery Governance & QA Oversight' }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#fe7725]/10 text-[#fe7725] text-sm font-semibold mb-4 border border-[#fe7725]/30">
            What's Inside an AI Development Pod for SaaS?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A Complete AI Delivery Unit—<span className="text-[#fe7725]">Ready to Execute</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Each AI pod is a small and autonomous team, aligned to your roadmap and accountable for outcomes. Thus, you get execution power without adding any permanent headcount. A typical AI pod consists of:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {components.map((component, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              data-testid={`component-card-${index}`}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
                {component.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900">{component.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodCompositionSection;