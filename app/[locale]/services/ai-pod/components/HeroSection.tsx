'use client';

import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold mb-6 border border-white/20">
            Dedicated AI Pods for SaaS Development
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Launch Production-Ready AI Features <br />
            <span className="text-[#fe7725]">Without Hiring or Overspending</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            Netsmartz introduces scalable AI pods that help SaaS companies deliver enterprise-ready AI features in weeks, not quarters—without increasing headcount or taking on delivery risk.
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-lg shadow-large hover:shadow-glow transition-all duration-300 hover:scale-105"
            data-testid="book-assessment-btn"
          >
            Book an AI Risk & ROI Assessment
          </Link>
        </div>

        {/* Three Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
            <FiCheckCircle className="text-[#fe7725] text-2xl flex-shrink-0" />
            <span className="text-white font-medium">No consulting fluff</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
            <FiCheckCircle className="text-[#fe7725] text-2xl flex-shrink-0" />
            <span className="text-white font-medium">No platform bias</span>
          </div>
          <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
            <FiCheckCircle className="text-[#fe7725] text-2xl flex-shrink-0" />
            <span className="text-white font-medium">No hidden costs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;