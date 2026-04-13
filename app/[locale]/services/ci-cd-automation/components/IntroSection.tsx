'use client';

import React from 'react';

const IntroSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/services/ci-cd-automation/intro-section.jpg"
                alt="CI/CD Pipeline Development"
                className="w-full h-full object-cover"
              />
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
