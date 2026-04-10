'use client';

import React from 'react';

const approaches = [
  {
    title: 'Infrastructure Assessment & Strategy',
    description: 'Evaluate your current environment, identify gaps, and define a modernization roadmap aligned with your business goals.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <rect x="16" y="20" width="32" height="24" rx="2" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M24 28L28 32L36 24" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Migration & Transformation',
    description: 'Move workloads to cloud or hybrid environments using the right approach—rehosting, re-platforming, or re-architecting.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M16 32H48M40 24L48 32L40 40" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="32" r="4" stroke="#fe7725" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Automation & Optimization',
    description: 'Implement Infrastructure as Code, monitoring, and automation to improve efficiency and reduce operational overhead.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <rect x="16" y="24" width="32" height="20" rx="2" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <circle cx="24" cy="34" r="2" fill="#fe7725"/>
        <circle cx="32" cy="34" r="2" fill="#fe7725"/>
        <circle cx="40" cy="34" r="2" fill="#fe7725"/>
      </svg>
    ),
  },
  {
    title: 'Security & Compliance Integration',
    description: 'Ensure infrastructure is secure, compliant, and continuously monitored against evolving threats.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M32 14L18 20V30C18 40 24 48 32 54C40 48 46 40 46 30V20L32 14Z" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <circle cx="32" cy="32" r="6" stroke="#fe7725" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Continuous Improvement & Scale',
    description: 'Evolve your infrastructure to support new technologies, applications, and business growth.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M20 40L28 32L36 36L44 28" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 28H44V32" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const ApproachSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Our Approach to <span className="text-[#fe7725]">Infrastructure Modernization</span>
          </h2>
        </div>

        {/* First row: 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {approaches.slice(0, 3).map((approach, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4 sm:mb-6">{approach.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {approach.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second row: 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {approaches.slice(3, 5).map((approach, index) => (
            <div
              key={index + 3}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4 sm:mb-6">{approach.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {approach.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
