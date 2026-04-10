'use client';

import React from 'react';

const benefits = [
  {
    title: 'Quick Roadblock Elimination',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <path d="M14 24L20 30L34 16" stroke="#fe7725" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: '25 Years of IT Excellence',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <path d="M24 14L18 20L24 26L30 20L24 14Z" fill="#fe7725"/>
        <path d="M24 22L18 28L24 34L30 28L24 22Z" fill="#ff9555"/>
      </svg>
    ),
  },
  {
    title: 'Trusted by Fortune 500 Companies',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <path d="M24 12L16 18V28C16 32 20 36 24 40C28 36 32 32 32 28V18L24 12Z" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M20 24L23 27L28 22" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Accomplished, Skilled Team',
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
    title: 'Prompt, Reliable Challenge Response',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <path d="M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M24 18V24L28 26" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Maximized ROI with Strategic Solutions',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <path d="M16 28L22 22L28 26L34 20" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30 20H34V24" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Flawless Execution, No Delays',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <rect x="14" y="18" width="20" height="16" rx="2" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M20 18V14" stroke="#fe7725" strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 18V14" stroke="#fe7725" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="26" r="1.5" fill="#fe7725"/>
      </svg>
    ),
  },
  {
    title: 'Dynamic Team Collaboration',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <circle cx="18" cy="20" r="3" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <circle cx="30" cy="20" r="3" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M14 32C14 28 16 26 18 26C20 26 22 28 22 32" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M26 32C26 28 28 26 30 26C32 26 34 28 34 32" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" fill="none"/>
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
            We are in a fast-paced world where times have changed. Organizations can no longer afford to have separate processes and work in isolation to achieve excellence. Reduce your growing backlog of IT projects and raise your software development to the next level.
          </p>
        </div>

        {/* First row: 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {benefits.slice(0, 3).map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Second row: 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {benefits.slice(3, 6).map((benefit, index) => (
            <div
              key={index + 3}
              className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Third row: 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {benefits.slice(6, 8).map((benefit, index) => (
            <div
              key={index + 6}
              className="bg-white rounded-xl p-6 sm:p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                {benefit.title}
              </h3>
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
