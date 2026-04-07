'use client';

import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-10 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1758518727707-b023e285b709?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBidXNpbmVzcyUyMGxlYWRlcnNoaXAlMjB0ZWFtJTIwbWVldGluZ3xlbnwwfHx8fDE3NzU1NDQ2NjJ8MA&ixlib=rb-4.1.0&q=85"
          alt="Executive Leadership"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#fe7725] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-semibold mb-6 border border-white/20">
            Executive Search for GCCs
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Build Your GCC with the <span className="text-[#fe7725]">Right Leadership</span> from Day One
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            While infrastructure, talent, and processes are critical, the success of a GCC ultimately depends on having the right leaders in place—those who can align global strategy with local execution, build high-performing teams, and scale operations effectively.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Build Your GCC
            <FiArrowRight className="text-xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;