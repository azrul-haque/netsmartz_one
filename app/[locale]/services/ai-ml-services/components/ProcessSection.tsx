'use client';

import React from 'react';
import { FiTarget, FiDatabase, FiCode, FiLayers, FiTrendingUp } from 'react-icons/fi';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <FiTarget className="text-3xl" />,
      number: '01',
      title: 'Identify High-Impact Use Cases',
      description: 'Focus on business-critical problems where AI can drive measurable outcomes, ensuring efforts are aligned with strategic priorities rather than isolated experiments.'
    },
    {
      icon: <FiDatabase className="text-3xl" />,
      number: '02',
      title: 'Prepare and Enrich Data',
      description: 'Clean, structure, and enhance data to improve model accuracy, reliability, and long-term performance across evolving datasets.'
    },
    {
      icon: <FiCode className="text-3xl" />,
      number: '03',
      title: 'Build and Validate Models',
      description: 'Develop machine learning models and rigorously test them against real-world scenarios to ensure they perform beyond controlled environments.'
    },
    {
      icon: <FiLayers className="text-3xl" />,
      number: '04',
      title: 'Integrate into Systems and Workflows',
      description: 'Embed AI into existing applications and processes so insights and automation become part of everyday decision-making.'
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      number: '05',
      title: 'Continuously Optimize and Scale',
      description: 'Monitor, refine, and expand AI capabilities across functions, adapting models to new data, use cases, and business needs over time.'
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How AI Moves from Pilot to <span className="text-[#fe7725]">Enterprise-Scale Impact</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              data-testid={`process-step-${index}`}
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {step.number}
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#fe7725]/10 to-[#ff9555]/10 rounded-xl flex items-center justify-center text-[#fe7725] mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;