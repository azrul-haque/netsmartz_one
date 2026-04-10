'use client';

import React from 'react';

const benefits = [
  {
    title: 'Code Integration & Delivery',
    description: 'Reduce lead times to deliver new features and enhancements to end users.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M20 32L26 38L20 44" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 44H44" stroke="#fe7725" strokeWidth="2" strokeLinecap="round"/>
        <rect x="14" y="18" width="36" height="32" rx="2" stroke="#fe7725" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Enhancing Collaboration',
    description: 'Teams can collaborate more effectively between development and operations through automating streamlined application deployment processes.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <circle cx="24" cy="24" r="6" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <circle cx="40" cy="24" r="6" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M18 48C18 42 21 38 24 38C27 38 30 42 30 48" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M34 48C34 42 37 38 40 38C43 38 46 42 46 48" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Production Excellence',
    description: 'Robust testing mechanisms, ensuring that only high-quality, thoroughly validated code reaches production environments.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M32 14L18 22V34C18 42 24 48 32 54C40 48 46 42 46 34V22L32 14Z" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M26 32L30 36L38 28" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Efficiency',
    description: 'Eliminate manual, error-prone tasks, freeing teams to focus on more value-added activities to boost overall productivity.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <circle cx="32" cy="32" r="14" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M32 20V32L40 36" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 16L22 18M40 16L42 18M16 24L18 22M48 24L46 22" stroke="#fe7725" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Core Benefits of Our <span className="text-[#fe7725]">CI/CD Optimization Services</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Our solutions are tailored to meet your specific needs, ensuring optimal performance, efficiency, and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4 sm:mb-6">{benefit.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Optimizing with Netsmartz Today!
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
