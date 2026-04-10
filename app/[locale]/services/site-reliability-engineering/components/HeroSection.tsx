'use client';

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/services/site-reliability-engineering/hero-bg.jpg"
          alt="Site Reliability Engineering"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#fe7725] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Maximize Stability and Efficiency with <span className="text-[#fe7725]">Expert SRE Consulting</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
            Enhanced system stability, streamlined operations, and relentless support for your growth with our SRE consulting services.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Our Experts
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
