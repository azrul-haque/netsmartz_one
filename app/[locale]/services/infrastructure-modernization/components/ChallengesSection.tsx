'use client';

import React from 'react';

const challenges = [
  'Aging systems limit scalability and slow down innovation',
  'High maintenance costs with diminishing returns',
  'Lack of flexibility to support cloud and modern applications',
  'Increased security vulnerabilities and compliance risks',
  'Poor visibility and control across infrastructure environments',
];

const ChallengesSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Where Legacy Infrastructure <span className="text-[#fe7725]">Holds You Back</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="flex items-start gap-4 mb-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-[#fe7725]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-base sm:text-lg text-gray-700">{challenge}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
