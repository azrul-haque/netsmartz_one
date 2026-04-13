'use client';

import React from 'react';

const industries = [
  {
    name: 'Enterprise',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <rect x="12" y="14" width="24" height="20" rx="2" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M18 20H22M18 24H22M18 28H22M26 20H30M26 24H30M26 28H30" stroke="#fe7725" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Healthcare',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <path d="M24 12V36M12 24H36" stroke="#fe7725" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="10" stroke="#fe7725" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'Finance',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <circle cx="24" cy="24" r="10" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M24 18V24H30" stroke="#fe7725" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Retail',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <path d="M14 18L20 12L28 12L34 18V34H14V18Z" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M20 18V12M28 18V12" stroke="#fe7725" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Construction',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <path d="M14 34H34M18 34V22L24 16L30 22V34" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="20" y="26" width="8" height="8" stroke="#fe7725" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    name: 'Supply Chain',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <circle cx="16" cy="24" r="4" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <circle cx="32" cy="24" r="4" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M20 24H28" stroke="#fe7725" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Manufacturing',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <rect x="14" y="20" width="20" height="14" rx="2" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <circle cx="18" cy="27" r="2" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <circle cx="30" cy="27" r="2" stroke="#fe7725" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'Education',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <path d="M24 14L12 20L24 26L36 20L24 14Z" stroke="#fe7725" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        <path d="M12 26V32L24 38L36 32V26" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const IndustriesSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Industries <span className="text-[#fe7725]">We Serve</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver efficient, scalable DevOps solutions tailored for diverse industries, driving performance and innovation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex justify-center mb-3">{industry.icon}</div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
