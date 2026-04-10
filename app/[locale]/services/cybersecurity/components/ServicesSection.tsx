'use client';

import React from 'react';

const services = [
  {
    title: 'Cloud Security',
    description: 'Protect your data with advanced cloud security solutions, ensuring integrity and confidentiality.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M20 36C16 36 14 34 14 30C14 26 16 24 20 24C20 20 22 16 28 16C34 16 36 20 36 24C40 24 42 26 42 30C42 34 40 36 36 36" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M32 24L18 38M32 38L18 24" stroke="#fe7725" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Vulnerability Assessment & Penetration Testing',
    description: 'Proactively identify and fix system vulnerabilities before they can be exploited.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <circle cx="32" cy="32" r="16" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <circle cx="32" cy="32" r="10" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <circle cx="32" cy="32" r="3" fill="#fe7725"/>
      </svg>
    ),
  },
  {
    title: 'Threat Response Unit (TRU)',
    description: 'Proactively safeguard your business with our expert Threat Response Unit - swift, tailored, and always ready to neutralize potential risks.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M32 14L18 20V30C18 40 24 48 32 54C40 48 46 40 46 30V20L32 14Z" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M26 30L30 34L38 26" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Incident Response',
    description: 'Contain and neutralize threats immediately to minimize damage and secure systems.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M32 16L22 26L32 36L42 26L32 16Z" stroke="#fe7725" strokeWidth="2" strokeLinejoin="round" fill="none"/>
        <path d="M32 24V32" stroke="#fe7725" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="32" cy="38" r="2" fill="#fe7725"/>
      </svg>
    ),
  },
  {
    title: 'Customized Add-on Services',
    description: 'Tailor security solutions to fit your organization&apos;s specific needs.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <rect x="16" y="20" width="32" height="24" rx="2" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <circle cx="24" cy="32" r="2" fill="#fe7725"/>
        <circle cx="32" cy="32" r="2" fill="#fe7725"/>
        <circle cx="40" cy="32" r="2" fill="#fe7725"/>
      </svg>
    ),
  },
  {
    title: 'Managed Detection & Response',
    description: 'Around-the-clock monitoring to detect and respond to threats in real-time.',
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
    title: 'Disaster Recovery',
    description: 'Ensure business continuity with tailored disaster recovery solutions that protect your data and minimize downtime.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M20 36C16 36 14 34 14 30C14 26 16 24 20 24C20 20 22 16 28 16C34 16 36 20 36 24C40 24 42 26 42 30C42 34 40 36 36 36" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M28 36V48M24 44L28 48L32 44" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Compliance & Risk Management',
    description: 'Stay ahead of risks, protect your reputation, and focus on growth with our tailored, expert-driven approach.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <rect x="16" y="20" width="32" height="24" rx="2" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M24 28L28 32L36 24" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Netsmartz offers Speed, Expertise, <span className="text-[#fe7725]">End-to-End Coverage</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            From real-time threat detection to incident response, we provide a full suite of services to safeguard your digital assets.
          </p>
        </div>

        {/* First row: 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4 sm:mb-6">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Second row: 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {services.slice(3, 6).map((service, index) => (
            <div
              key={index + 3}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4 sm:mb-6">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Third row: 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {services.slice(6, 8).map((service, index) => (
            <div
              key={index + 6}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="mb-4 sm:mb-6">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
