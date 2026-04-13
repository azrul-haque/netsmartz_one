'use client';

import React from 'react';

const features = [
  {
    title: '24x7 Monitoring & Incident Response',
    description: 'Immediate, round-the-clock support to address and resolve issues as they arise.',
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
    title: 'System Patching',
    description: 'Comprehensive analysis and timely patches to fix vulnerabilities and prevent breaches.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <rect x="16" y="20" width="32" height="24" rx="2" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M24 28L28 32L36 24" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Infrastructure Management',
    description: 'Swift actions to detect, isolate, and neutralize threats, ensuring system security.',
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
    title: 'Security & Compliance',
    description: 'Detailed reports with actionable insights to maintain security and meet regulatory requirements.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M32 14L18 20V30C18 40 24 48 32 54C40 48 46 40 46 30V20L32 14Z" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M26 30L30 34L38 26" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Performance Optimization',
    description: 'Continuous monitoring and fine-tuning to enhance system performance and efficiency.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M20 40L28 32L36 36L44 28" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M40 28H44V32" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Scaling & Capacity Planning',
    description: 'Proactive planning and adjustments to ensure your infrastructure can scale seamlessly with demand.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M32 14V50M20 32L32 20L44 32" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="32" cy="32" r="8" stroke="#fe7725" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Backup & Disaster Recovery',
    description: 'Reliable backup systems and disaster recovery plans to minimize downtime and data loss.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M20 36C16 36 14 34 14 30C14 26 16 24 20 24C20 20 22 16 28 16C34 16 36 20 36 24C40 24 42 26 42 30C42 34 40 36 36 36" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M28 36V48M24 44L28 48L32 44" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Service Health Monitoring',
    description: 'Constant monitoring to ensure the health and reliability of your services.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M20 32L26 38L32 28L38 34L44 26" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="32" cy="32" r="18" stroke="#fe7725" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Patch Management & Updates',
    description: 'Routine updates and patches to maintain system security and performance.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <rect x="18" y="18" width="28" height="28" rx="2" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M28 28H36M28 32H36M28 36H32" stroke="#fe7725" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'User & Access Management',
    description: 'Efficient management of user access and permissions to ensure security and compliance.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <circle cx="32" cy="24" r="6" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M20 44C20 38 25 34 32 34C39 34 44 38 44 44" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M38 24L42 28L48 22" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Quick Response Time',
    description: 'Fast, responsive support to minimize downtime and keep your operations running smoothly.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M32 16L20 28L32 40L44 28L32 16Z" stroke="#fe7725" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        <path d="M32 24V32" stroke="#fe7725" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const KeyFeaturesSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            <span className="text-[#fe7725]">Key Features</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            24/7 support, proactive security, and performance optimization to ensure seamless operations and rapid issue resolution.
          </p>
        </div>

        {/* First row: 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4 sm:mb-6">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second row: 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {features.slice(3, 6).map((feature, index) => (
            <div
              key={index + 3}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4 sm:mb-6">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Third row: 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {features.slice(6, 9).map((feature, index) => (
            <div
              key={index + 6}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4 sm:mb-6">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Fourth row: 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {features.slice(9, 11).map((feature, index) => (
            <div
              key={index + 9}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4 sm:mb-6">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Immediate Assistance
          </a>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
