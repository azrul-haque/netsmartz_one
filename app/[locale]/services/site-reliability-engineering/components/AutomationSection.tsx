'use client';

import React from 'react';

const AutomationSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
              <svg className="w-48 h-48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" stroke="#fe7725" strokeWidth="4" fill="none"/>
                <path d="M100 40V100L140 120" stroke="#fe7725" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="100" cy="100" r="8" fill="#fe7725"/>
                <path d="M80 60L90 70M110 70L120 60M80 140L90 130M110 130L120 140" stroke="#22c55e" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Smart Automation & <span className="text-[#fe7725]">Continuous Improvement</span>
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Turning Incidents into Insights
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              We identify and eliminate toil through smart automation while leveraging blameless post-mortems to continuously refine your production environment and turn incidents into actionable insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationSection;
