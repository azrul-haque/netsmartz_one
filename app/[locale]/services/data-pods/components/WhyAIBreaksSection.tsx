'use client';

import React from 'react';
import { FiAlertTriangle, FiEyeOff, FiTrendingUp } from 'react-icons/fi';

const WhyAIBreaksSection: React.FC = () => {
  const reasons = [
    {
      icon: <FiAlertTriangle className="text-3xl" />,
      text: 'Leaders hesitate to act on insights they don\'t fully trust'
    },
    {
      icon: <FiEyeOff className="text-3xl" />,
      text: 'AI outputs become difficult to explain, govern, or audit'
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      text: 'Risk increases as AI moves closer to core business operations'
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why AI ROI <span className="text-[#fe7725]">Breaks at Scale</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
              data-testid={`reason-${index}`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                {reason.icon}
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{reason.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-center">
          <p className="text-xl text-white font-semibold">
            At this stage, AI stops being a technical initiative and becomes an <span className="text-[#fe7725]">executive risk decision</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyAIBreaksSection;