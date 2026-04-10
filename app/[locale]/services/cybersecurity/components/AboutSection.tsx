'use client';

import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/services/cybersecurity/about-section.jpg"
                alt="Cybersecurity Operations"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Professional Experts who deliver <span className="text-[#fe7725]">customized Cybersecurity solutions</span>
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Fast & Dependable. Elite Service.
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Every company is different. We embrace your unique environment and offer customized solutions with over 40 security tools in our toolbelt. We are your single-source solution from SOAR to compliance to Managed Cloud Security. With over 1,000 top-tier talent, we have the manpower to protect your business easily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
