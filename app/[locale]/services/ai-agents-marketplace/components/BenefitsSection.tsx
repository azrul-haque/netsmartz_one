'use client';

import React from 'react';
import { FiZap, FiSettings, FiLock, FiAward } from 'react-icons/fi';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <FiZap className="text-3xl" />,
      title: "Instant access",
      description: "Deploy your first agent in less than 48 hours. No long discovery phases."
    },
    {
      icon: <FiSettings className="text-3xl" />,
      title: "Managed execution",
      description: "Integration, monitoring, and optimization handled entirely by Netsmartz."
    },
    {
      icon: <FiLock className="text-3xl" />,
      title: "Enterprise governance",
      description: "Built on SOC2, ISO 27001, CMMI Level 3. Data encryption, access controls, human-in-the-loop."
    },
    {
      icon: <FiAward className="text-3xl" />,
      title: "Full ownership",
      description: "No vendor lock-in. You own the code and IP. We build, you own."
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#fe7725]/10 text-[#fe7725] text-sm font-semibold mb-4 border border-[#fe7725]/30">
            What You'll Gain
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Speed, governance, <span className="text-[#fe7725]">ownership</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group"
              data-testid={`benefit-card-${index}`}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;