'use client';

import React from 'react';
import { FiSearch, FiPlay, FiTrendingUp, FiRefreshCw } from 'react-icons/fi';

const EngagementFlowSection: React.FC = () => {
  const steps = [
    {
      icon: <FiSearch className="text-3xl" />,
      number: '01',
      title: 'Discovery & Scoping',
      description: 'Assess readiness, define use cases, and set measurable success criteria.'
    },
    {
      icon: <FiPlay className="text-3xl" />,
      number: '02',
      title: 'Pod Formation & Kickoff',
      description: 'Assemble the right team, align on delivery timelines, and integrate with your stack.'
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      number: '03',
      title: 'Build & Iterate',
      description: 'Develop, test, and refine AI features with continuous feedback loops.'
    },
    {
      icon: <FiRefreshCw className="text-3xl" />,
      number: '04',
      title: 'Deploy & Optimize',
      description: 'Launch to production, monitor performance, and scale with confidence.'
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#fe7725]/10 text-[#fe7725] text-sm font-semibold mb-4 border border-[#fe7725]/30">
            How the AI Pod Engagement Works?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A Clear, Proven <span className="text-[#fe7725]">Execution Flow</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              data-testid={`flow-step-${index}`}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#fe7725] to-[#ff9555] opacity-30 z-0"></div>
              )}
              
              <div className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 z-10">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#fe7725]/10 to-[#ff9555]/10 rounded-xl flex items-center justify-center text-[#fe7725] mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementFlowSection;