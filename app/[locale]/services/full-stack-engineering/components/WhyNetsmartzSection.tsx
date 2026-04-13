'use client';

import React from 'react';
import { FiAward, FiUsers, FiTrendingUp, FiCpu } from 'react-icons/fi';

const WhyNetsmartzSection: React.FC = () => {
  const reasons = [
    {
      icon: FiAward,
      text: "26+ years of building and scaling software products"
    },
    {
      icon: FiUsers,
      text: "1,500+ engineers across technologies and platforms"
    },
    {
      icon: FiTrendingUp,
      text: "Experience across SaaS, enterprise, and digital ecosystems"
    },
    {
      icon: FiCpu,
      text: "AI-first approach to accelerate development and innovation"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#fe7725] to-orange-600">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Netsmartz
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#fe7725]" />
                </div>
                <p className="text-white text-lg font-medium pt-2">{reason.text}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-[#fe7725] rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started with Netsmartz
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyNetsmartzSection;
