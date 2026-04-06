'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
            Turn Fragmented Data into <span className="text-[#fe7725]">Real-Time Business Intelligence</span> with Microsoft Fabric
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Most organizations aren't struggling with a lack of data—but with too many disconnected systems, delayed insights, and inconsistent reporting.
          </p>

          <p className="text-xl text-white font-semibold mb-10">
            We help organizations unify data ecosystems using Microsoft Fabric—bringing together data engineering, data integration, and analytics into a single, scalable platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-lg shadow-large hover:shadow-glow transition-all duration-300 hover:scale-105"
              data-testid="talk-expert-btn"
            >
              Talk to a Microsoft Fabric Expert
            </Link>
          </div>

          {/* Microsoft Partner Logo */}
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
              <img
                src="/microsoft-partner-logo.webp"
                alt="Microsoft Solutions Partner"
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;