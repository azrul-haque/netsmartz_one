'use client';

import React from 'react';

const services = [
  {
    title: 'CI/CD Optimization',
    description: 'Streamline delivery with optimized CI/CD pipelines, enhancing automation, speed, and consistency.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <path d="M16 24L20 28L16 32" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 32H32" stroke="#fe7725" strokeWidth="2" strokeLinecap="round"/>
        <rect x="10" y="12" width="28" height="24" rx="2" stroke="#fe7725" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'DevOps Strategy Assessment',
    description: 'Assess and improve your DevOps strategy, identifying gaps and optimizing workflows for efficiency.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <rect x="12" y="16" width="24" height="16" rx="2" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M18 22L22 26L28 20" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'DevSecOps',
    description: 'Integrate Zero Trust, micro-segmentation, and endpoint security throughout your DevOps lifecycle.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <path d="M24 12L14 16V22C14 28.5 18 34 24 38C30 34 34 28.5 34 22V16L24 12Z" stroke="#fe7725" strokeWidth="2" fill="none"/>
        <path d="M20 22L22.5 24.5L28 19" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Cloud Strategy & Optimization',
    description: 'Optimize performance, scalability, and security with cloud strategy, migration, and integration.',
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#FEF3E7"/>
        <path d="M16 28C12 28 10 26 10 22C10 18 12 16 16 16C16 12 18 8 24 8C30 8 32 12 32 16C36 16 38 18 38 22C38 26 36 28 32 28" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M24 28V40M20 36L24 40L28 36" stroke="#fe7725" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const RelatedServicesSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            <span className="text-[#fe7725]">DevOps</span> Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#fe7725] transition-all duration-300 group"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#fe7725] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Microsoft Azure and AWS Proficiency */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8">
            Microsoft Azure and <span className="text-[#fe7725]">AWS Proficiency</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 px-8 py-6 rounded-xl">
              <svg className="w-32 h-32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 20L20 50H40L30 90L80 50H60L70 20H40Z" fill="#0078D4"/>
              </svg>
              <p className="text-lg font-semibold text-gray-900 mt-2">Microsoft Azure</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 px-8 py-6 rounded-xl">
              <svg className="w-32 h-32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 30L20 80H45L35 110L90 60H65L75 30H40Z" fill="#FF9900"/>
              </svg>
              <p className="text-lg font-semibold text-gray-900 mt-2">Amazon AWS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedServicesSection;
