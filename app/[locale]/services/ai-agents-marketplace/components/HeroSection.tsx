'use client';

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
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
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold mb-6 border border-white/20">
              AI Agents Marketplace by Netsmartz
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Deploy AI agents that deliver ROI in <span className="text-[#fe7725]">48 hours</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              A curated marketplace of production-ready AI agents designed to automate business workflows across sales, support, finance, operations, and more.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-[#fe7725] mb-1">30+</div>
                <div className="text-sm text-gray-400">AI Agents</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-[#fe7725] mb-1">15+</div>
                <div className="text-sm text-gray-400">Industries Served</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-[#fe7725] mb-1">99.9%</div>
                <div className="text-sm text-gray-400">Platform Uptime</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-[#fe7725] mb-1">24/7</div>
                <div className="text-sm text-gray-400">Expert Support</div>
              </div>
            </div>

            <Link
              href="#agents"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-lg shadow-large hover:shadow-glow transition-all duration-300 hover:scale-105"
              data-testid="explore-agents-btn"
            >
              Explore AI Agents
              <FiArrowRight className="text-xl" />
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                alt="AI Agents Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;