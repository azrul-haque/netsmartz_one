'use client';

import React from 'react';
import { FiDollarSign, FiUsers, FiTrendingUp, FiShield, FiTarget } from 'react-icons/fi';

const BusinessBenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <FiDollarSign className="text-3xl" />,
      title: "Lower Operational Costs",
      description: "Without compromising quality",
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: "Access to New Talent Pools",
      description: "Reduced hiring pressure",
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: "Improved Scalability",
      description: "Operational efficiency",
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: "Reduced Dependency",
      description: "On saturated Tier 1 markets",
    },
    {
      icon: <FiTarget className="text-3xl" />,
      title: "Stronger Long-term Strategy",
      description: "For sustainable GCC growth",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What This Means for <span className="text-[#fe7725]">Your Business</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="md:col-span-3 grid md:grid-cols-3 gap-6">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#fe7725]/10 rounded-xl flex items-center justify-center text-[#fe7725] mb-6 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-sm text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="md:col-span-3 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {benefits.slice(3).map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#fe7725]/5 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-[#fe7725]/20"
              >
                <div className="w-16 h-16 bg-[#fe7725]/10 rounded-xl flex items-center justify-center text-[#fe7725] mb-6 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-sm text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefitsSection;