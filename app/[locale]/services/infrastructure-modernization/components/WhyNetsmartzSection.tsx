'use client';

import React from 'react';

const reasons = [
  {
    title: '26+ years of enterprise experience',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <path d="M24 14L18 20L24 26L30 20L24 14Z" fill="#fe7725"/>
        <path d="M24 22L18 28L24 34L30 28L24 22Z" fill="#ff9555"/>
      </svg>
    ),
  },
  {
    title: 'Cloud, DevOps, and cybersecurity expertise in one ecosystem',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <path d="M24 12L14 16V22C14 28.5 18 34 24 38C30 34 34 28.5 34 22V16L24 12Z" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M20 22L22.5 24.5L28 19" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Experience across enterprise, SaaS, and regulated industries',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <rect x="12" y="14" width="24" height="20" rx="2" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M18 20H22M18 24H22M18 28H22M26 20H30M26 24H30M26 28H30" stroke="#fe7725" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Strong focus on resilience, compliance, and performance',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <path d="M16 28L22 22L28 26L34 20" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30 20H34V24" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const WhyNetsmartzSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Why <span className="text-[#fe7725]">Netsmartz</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex items-start gap-4"
            >
              <div className="flex-shrink-0">{reason.icon}</div>
              <div>
                <p className="text-base sm:text-lg font-semibold text-gray-900">{reason.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Infrastructure Modernization Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyNetsmartzSection;
