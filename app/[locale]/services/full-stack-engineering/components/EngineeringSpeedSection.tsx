'use client';

import React from 'react';
import { FiZap, FiTrendingUp, FiUnlock, FiTarget } from 'react-icons/fi';

const EngineeringSpeedSection: React.FC = () => {
  const benefits = [
    {
      icon: FiZap,
      text: "Features move from idea to production faster"
    },
    {
      icon: FiTrendingUp,
      text: "Systems scale without constant rework"
    },
    {
      icon: FiUnlock,
      text: "Teams don't get blocked by dependencies"
    },
    {
      icon: FiTarget,
      text: "Product and engineering stay aligned"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Engineering That Moves at Product Speed
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Full-stack engineering isn't about covering technologies; it's about eliminating friction across your product lifecycle. When done right:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all border border-gray-200"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-[#fe7725] rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-800 text-lg font-medium pt-2">{benefit.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngineeringSpeedSection;
