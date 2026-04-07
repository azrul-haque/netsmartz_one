'use client';

import React from 'react';
import { FiSearch, FiSettings, FiGitMerge, FiTrendingUp } from 'react-icons/fi';

const ExpansionProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <FiSearch className="text-4xl text-white" />,
      title: "Assess & Identify Expansion Strategy",
      description: "Evaluate your current GCC setup, growth plans, and expansion requirements.",
    },
    {
      icon: <FiSettings className="text-4xl text-white" />,
      title: "Set Up Tier 2 Operations",
      description: "Establish infrastructure, hiring pipelines, and operational frameworks in Tier 2 locations.",
    },
    {
      icon: <FiGitMerge className="text-4xl text-white" />,
      title: "Integrate with Existing GCC",
      description: "Ensure seamless collaboration, governance, and alignment between Tier 1 and Tier 2 centers.",
    },
    {
      icon: <FiTrendingUp className="text-4xl text-white" />,
      title: "Scale with Stability",
      description: "Expand teams and capabilities while maintaining performance, quality, and cost efficiency.",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How <span className="text-[#fe7725]">Expansion into Tier 2</span> Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all hover:scale-105"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#fe7725] to-orange-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">{step.title}</h3>
              <p className="text-gray-300 text-center text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpansionProcessSection;