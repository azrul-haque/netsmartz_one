'use client';

import React from 'react';

const solutions = [
  {
    title: 'Cloud-Ready Infrastructure',
    description: 'Transition from legacy systems to cloud or hybrid environments designed for scalability, flexibility, and performance.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M20 36C16 36 14 34 14 30C14 26 16 24 20 24C20 20 22 16 28 16C34 16 36 20 36 24C40 24 42 26 42 30C42 34 40 36 36 36" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M28 36V48M24 44L28 48L32 44" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Infrastructure as Code (IaC)',
    description: 'Automate provisioning and management of infrastructure for consistency, speed, and reduced human error.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <rect x="16" y="20" width="32" height="24" rx="2" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M24 28L28 32L24 36" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 36H40" stroke="#fe7725" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'DevOps & Automation',
    description: 'Streamline deployments and operations with CI/CD pipelines and automated workflows.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <circle cx="32" cy="32" r="14" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M32 20V32L40 36" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="32" cy="32" r="3" fill="#fe7725"/>
      </svg>
    ),
  },
  {
    title: 'Secure Infrastructure by Design',
    description: 'Embed security across infrastructure layers with proactive monitoring, access control, and compliance frameworks.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M32 14L18 20V30C18 40 24 48 32 54C40 48 46 40 46 30V20L32 14Z" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M26 30L30 34L38 26" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'High Availability & Resilience',
    description: 'Design systems that ensure uptime, fault tolerance, and business continuity; even under high demand or failure scenarios.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M32 14V50M20 32L32 20L44 32" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="32" cy="32" r="8" stroke="#fe7725" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
];

const SolutionsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Infrastructure Built for a <span className="text-[#fe7725]">Cloud-First, Secure Future</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Modern infrastructure is not just about migration, it's about transformation. We help you build:
          </p>
        </div>

        {/* First row: 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {solutions.slice(0, 3).map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4 sm:mb-6">{solution.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {solution.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second row: 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {solutions.slice(3, 5).map((solution, index) => (
            <div
              key={index + 3}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4 sm:mb-6">{solution.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {solution.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
