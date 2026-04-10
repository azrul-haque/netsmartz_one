'use client';

import React from 'react';

const reasons = [
  {
    title: 'Proactive Defense',
    description: 'Real-time threat detection to protect your business.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <path d="M24 12L14 16V22C14 28.5 18 34 24 38C30 34 34 28.5 34 22V16L24 12Z" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M20 22L22.5 24.5L28 19" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Expert Team',
    description: 'Top-tier cybersecurity experts specializing in SaaS & Enterprise security.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <circle cx="24" cy="18" r="4" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <circle cx="16" cy="22" r="3" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <circle cx="32" cy="22" r="3" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M14 34C14 30 18 28 24 28C30 28 34 30 34 34" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Rapid Response',
    description: 'Immediate action to contain and neutralize threats.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <path d="M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M24 18V24L28 26" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Why Choose <span className="text-[#fe7725]">Netsmartz?</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Experience trusted MSSP expertise to secure and streamline your business processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex justify-center mb-4">{reason.icon}</div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 sm:p-8 inline-block">
            <p className="text-lg sm:text-xl font-bold text-gray-900">
              Experiencing a breach? Call us now at{' '}
              <a
                href="tel:+18886618967"
                className="text-[#fe7725] hover:text-[#ff9555] transition-colors underline"
              >
                +1-888-661-8967
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
