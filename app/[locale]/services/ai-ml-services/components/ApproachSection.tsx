'use client';

import React from 'react';
import { FiCompass, FiDatabase, FiCpu, FiCloud, FiRefreshCw } from 'react-icons/fi';

const ApproachSection: React.FC = () => {
  const approaches = [
    {
      icon: <FiCompass className="text-3xl" />,
      title: 'AI Readiness & Strategy',
      description: 'Define where AI fits into your business and prioritize high-impact opportunities.'
    },
    {
      icon: <FiDatabase className="text-3xl" />,
      title: 'Data Preparation & Engineering',
      description: 'Ensure your data is clean, structured, and ready to power AI models.'
    },
    {
      icon: <FiCpu className="text-3xl" />,
      title: 'Model Development & Training',
      description: 'Build, test, and refine machine learning models tailored to your use cases.'
    },
    {
      icon: <FiCloud className="text-3xl" />,
      title: 'Deployment & Integration',
      description: 'Embed AI into your systems, workflows, and decision-making processes.'
    },
    {
      icon: <FiRefreshCw className="text-3xl" />,
      title: 'Continuous Optimization & Scale',
      description: 'Monitor, improve, and expand AI capabilities as your business evolves.'
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Approach to <span className="text-[#fe7725]">AI/ML Implementation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              data-testid={`approach-${index}`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-xl flex items-center justify-center text-white mb-6">
                {approach.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{approach.title}</h3>
              <p className="text-gray-300 leading-relaxed">{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;