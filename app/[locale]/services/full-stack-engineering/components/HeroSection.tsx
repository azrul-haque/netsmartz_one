'use client';

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-10 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/services/full-stack-engineering/hero-workspace.jpg"
          alt="Full Stack Engineering"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#fe7725] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-semibold mb-6 border border-white/20">
            Full-Stack Engineering
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Build, Scale, and Evolve Your Products with <span className="text-[#fe7725]">Full-Stack Engineering</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            When engineering falls behind, product growth slows; features take longer, systems struggle to scale, and complexity increases. Our full-stack engineering brings every layer together to build fast, scale reliably, and keep your product moving forward.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Build Your Product End-to-End
            </a>
            <a
              href="#how-we-work"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border border-white/20 transition-all duration-300"
            >
              See How We Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
