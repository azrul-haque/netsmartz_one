'use client';

import React from 'react';

const IntroSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <svg className="w-48 h-48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" stroke="#fe7725" strokeWidth="4" fill="none"/>
                <path d="M70 100L90 120L130 80" stroke="#fe7725" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="100" cy="100" r="60" stroke="#0078D4" strokeWidth="2" strokeDasharray="4 4" fill="none"/>
              </svg>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              CI/CD Optimization: <span className="text-[#fe7725]">Streamlined Automation for Faster, Reliable Deliveries</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Our CI/CD Optimization services enhance your development pipeline by automating processes, improving consistency, and accelerating release cycles, ensuring faster, more reliable software delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
