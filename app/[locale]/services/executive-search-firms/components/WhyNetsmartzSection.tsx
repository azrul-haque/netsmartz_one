'use client';

import React from 'react';
import { FiAward, FiUsers, FiTarget, FiTrendingUp } from 'react-icons/fi';

const WhyNetsmartzSection: React.FC = () => {
  const reasons = [
    {
      icon: <FiAward className="text-3xl" />,
      stat: "70+",
      title: "GCCs Managed",
      description: "Experience managing and scaling GCCs globally",
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: "Deep Understanding",
      description: "Of GCC structures, roles, and leadership needs",
    },
    {
      icon: <FiTarget className="text-3xl" />,
      title: "Strong Network",
      description: "Access to experienced leadership talent",
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: "Proven Ability",
      description: "To align hiring with long-term GCC success",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why <span className="text-[#fe7725]">Netsmartz</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-[#fe7725]/10 rounded-xl flex items-center justify-center text-[#fe7725] mb-6 mx-auto">
                {reason.icon}
              </div>
              {reason.stat && (
                <div className="text-4xl font-bold text-[#fe7725] mb-2 text-center">{reason.stat}</div>
              )}
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{reason.title}</h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNetsmartzSection;