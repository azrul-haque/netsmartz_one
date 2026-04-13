'use client';

import React from 'react';

const services = [
  {
    title: 'CI/CD Optimization',
    description: 'Accelerate delivery with optimized CI/CD pipelines, ensuring faster, consistent, and automated software development.',
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
    title: 'Site Reliability Engineering',
    description: 'Ensure reliable systems with SRE services, focusing on automation, monitoring, and continuous improvement.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <circle cx="32" cy="32" r="14" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M32 18V32L40 36" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="32" cy="32" r="3" fill="#fe7725"/>
      </svg>
    ),
  },
  {
    title: 'DevOps Strategy Assessment',
    description: 'Unlock DevOps potential with tailored assessments, addressing gaps, optimizing workflows, and boosting efficiency.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <rect x="16" y="22" width="32" height="20" rx="2" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M24 30L28 34L36 26" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'DevSecOps',
    description: 'DevSecOps services with Zero Trust, micro-segmentation, and endpoint security for comprehensive risk reduction.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M32 14L18 20V30C18 40 24 48 32 54C40 48 46 40 46 30V20L32 14Z" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M26 30L30 34L38 26" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Cloud Strategy & Optimization',
    description: 'Maximize cloud performance with strategy, optimization, and migration for scalability, efficiency, and security.',
    icon: (
      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="12" fill="#FEF3E7"/>
        <path d="M20 36C16 36 14 34 14 30C14 26 16 24 20 24C20 20 22 16 28 16C34 16 36 20 36 24C40 24 42 26 42 30C42 34 40 36 36 36" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M28 36V48M24 44L28 48L32 44" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
            Managed <span className="text-[#fe7725]">DevOps and DevSecOps Services</span> Redefined by Netsmartz!
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Achieve Faster Delivery, Robust Security and Seamless Scalability with our Expert-Driven DevOps Solutions.
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

        {/* Second row: 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {services.slice(3, 5).map((service, index) => (
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

        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <p className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
            Ready to Transform Your Development Process? Get Started with Netsmartz DevOps Solutions Today!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
