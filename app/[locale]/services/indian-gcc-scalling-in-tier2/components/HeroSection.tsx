'use client';

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-10 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1774542207919-9a81c6f1192b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGV4cGFuc2lvbiUyMGdyb3d0aCUyMGNpdHklMjBza3lsaW5lfGVufDB8fHx8MTc3NTU0NjQxMHww&ixlib=rb-4.1.0&q=85"
          alt="City Skyline"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#fe7725] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-semibold mb-6 border border-white/20">
            GCC Expansion to Tier 2 Cities
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Scale Your Existing GCC in India—<span className="text-[#fe7725]">Smarter, Faster, and More Cost-Efficiently</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Many organizations have already established GCCs in Tier 1 cities. But as these locations become saturated, scaling further brings new challenges—rising costs, talent competition, and operational inefficiencies. Expanding into Tier 2 locations offers a smarter path forward.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Explore Tier 2 Expansion
            <FiArrowRight className="text-xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;