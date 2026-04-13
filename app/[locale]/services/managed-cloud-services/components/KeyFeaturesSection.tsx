'use client';

import React from 'react';

const features = [
  {
    title: 'Security Compliance',
    description: 'At Netsmartz, we prioritize cloud security by implementing top-tier practices, including encryption, access controls, and monitoring, ensuring your data and applications are safeguarded and compliant with industry standards.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M32 14L18 20V28C18 38 24 45 32 50C40 45 46 38 46 28V20L32 14Z" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M27 30L30 33L37 26" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Certified Resource Hiring',
    description: 'Leverage the expertise of our certified cloud engineers to optimize, manage, and maintain your cloud infrastructure, ensuring seamless operations, efficient resource use, and top-tier performance.',
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
    title: 'Cost-optimized workloads',
    description: 'Our cloud management services optimize costs by analyzing workloads and resource usage to recommend efficient, cost-effective solutions—maximizing your cloud investment without sacrificing performance.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M32 16V48M24 40L32 48L40 40" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="32" cy="24" r="6" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M28 24H36" stroke="#fe7725" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Automation and Capacity Planning',
    description: 'At the heart of our cloud management is efficiency—using automation to streamline tasks, accelerate deployments, and ensure scalability while minimizing costs and meeting future resource needs.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <rect x="16" y="26" width="32" height="20" rx="2" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M24 26V22C24 20 26 18 28 18H36C38 18 40 20 40 22V26" stroke="#fe7725" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="36" r="2" fill="#fe7725"/>
        <circle cx="32" cy="36" r="2" fill="#fe7725"/>
        <circle cx="40" cy="36" r="2" fill="#fe7725"/>
      </svg>
    ),
  },
];

const KeyFeaturesSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            Key Features of <span className="text-[#fe7725]">Managed Cloud Services</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            These key features of Managed Cloud Services ensure optimal performance, security, and seamless scalability for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
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

        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
            Unlock the Power of Cloud with our Managed Services
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Call for a Consultation Today!
          </a>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;