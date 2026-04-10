'use client';

import React from 'react';
import { FiFileText, FiSearch, FiCheckSquare, FiUserCheck } from 'react-icons/fi';

const ApproachSection: React.FC = () => {
  const steps = [
    {
      icon: <FiFileText className="text-4xl text-white" />,
      title: "Role Definition & Alignment",
      description: "Define leadership roles based on your GCC objectives, structure, and growth plans.",
    },
    {
      icon: <FiSearch className="text-4xl text-white" />,
      title: "Targeted Talent Mapping",
      description: "Identify candidates with proven experience in building, scaling, and managing GCC environments.",
    },
    {
      icon: <FiCheckSquare className="text-4xl text-white" />,
      title: "Deep Evaluation & Fitment",
      description: "Assess not just skills, but leadership capability, cultural alignment, and execution readiness.",
    },
    {
      icon: <FiUserCheck className="text-4xl text-white" />,
      title: "Seamless Hiring & Onboarding",
      description: "Ensure a smooth transition into leadership roles with alignment to your organization from day one.",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How We Approach <span className="text-[#fe7725]">GCC Executive Search</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Unlike traditional executive search firms, our approach is rooted in real GCC experience.
          </p>
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

export default ApproachSection;