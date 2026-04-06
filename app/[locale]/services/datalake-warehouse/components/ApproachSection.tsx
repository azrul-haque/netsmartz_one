'use client';

import React from 'react';
import { FiCompass, FiSettings, FiGitBranch, FiZap, FiTrendingUp } from 'react-icons/fi';

const ApproachSection: React.FC = () => {
  const steps = [
    {
      icon: <FiCompass className="text-3xl" />,
      number: '01',
      title: 'Data Strategy & Assessment',
      description: 'We evaluate your current data landscape and define the right architecture based on your business goals.'
    },
    {
      icon: <FiSettings className="text-3xl" />,
      number: '02',
      title: 'Architecture Design & Implementation',
      description: 'Design and deploy scalable data lakes and warehouses tailored to your data volume, use cases, and growth plans.'
    },
    {
      icon: <FiGitBranch className="text-3xl" />,
      number: '03',
      title: 'Data Integration & Pipeline Engineering',
      description: 'Ensure seamless movement of data across systems with optimized, reliable pipelines.'
    },
    {
      icon: <FiZap className="text-3xl" />,
      number: '04',
      title: 'Performance Optimization',
      description: 'Continuously refine data models and queries to improve speed, efficiency, and cost.'
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      number: '05',
      title: 'Ongoing Scale & Evolution',
      description: 'Adapt your data architecture as your business grows and new use cases emerge.'
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
            Our Approach to Building <span className="text-[#fe7725]">Scalable Data Foundations</span>
          </h2>
        </div>

        {/* First row - 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {steps.slice(0, 3).map((step, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              data-testid={`step-${index}`}
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {step.number}
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#fe7725]/10 to-[#ff9555]/10 rounded-xl flex items-center justify-center text-[#fe7725] mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Second row - 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {steps.slice(3, 5).map((step, index) => (
            <div
              key={index + 3}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              data-testid={`step-${index + 3}`}
            >
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {step.number}
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#fe7725]/10 to-[#ff9555]/10 rounded-xl flex items-center justify-center text-[#fe7725] mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;