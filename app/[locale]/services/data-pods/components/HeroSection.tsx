'use client';

import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#fe7725] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Fix Your Data Foundation. <br />
            <span className="text-[#fe7725]">Unlock AI ROI in 90 Days</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Most AI initiatives don't fail because of models, tools, or platforms. They fail because data pipelines, quality, and governance are not production-ready. Data Pods stabilize your data foundation first, so AI and analytics can scale safely, predictably, and with measurable ROI.
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-lg shadow-large hover:shadow-glow transition-all duration-300 hover:scale-105"
            data-testid="book-readiness-call-btn"
          >
            Book a 20-Minute Data Readiness Call
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;