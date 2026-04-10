'use client';

import React from 'react';

const targets = [
  'Running on legacy or fragmented infrastructure',
  'Planning cloud migration or hybrid cloud adoption',
  'Facing performance, scalability, or downtime issues',
  'Needing stronger security and compliance controls',
  'Scaling digital products or enterprise systems',
];

const TargetSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Built for Organizations Ready to <span className="text-[#fe7725]">Scale Securely</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {targets.map((target, index) => (
            <div
              key={index}
              className="flex items-start gap-4 mb-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-[#fe7725] flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>
              <p className="text-base sm:text-lg text-gray-700">{target}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
