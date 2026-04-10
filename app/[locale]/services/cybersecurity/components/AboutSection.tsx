'use client';

import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <svg className="w-48 h-48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 40L60 70V110C60 140 80 160 100 180C120 160 140 140 140 110V70L100 40Z" stroke="#fe7725" strokeWidth="6" fill="none"/>
                <path d="M80 100L90 110L120 80" stroke="#fe7725" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
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
