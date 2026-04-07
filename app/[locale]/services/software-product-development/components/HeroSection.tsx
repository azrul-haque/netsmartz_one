'use client';

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-10 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1582138825658-fb952c08b282?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwcHJvZ3JhbW1pbmclMjBjb2RlJTIwd29ya3NwYWNlfGVufDB8fHx8MTc3NTU0Nzc5MHww&ixlib=rb-4.1.0&q=85"
          alt="Software Development"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#fe7725] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-semibold mb-6 border border-white/20">
            SaaS Product Development
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            End-to-End <span className="text-[#fe7725]">Product Development Services</span> with Agile Teams
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            Build, scale, and ship your idea to the market with our expert development teams
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Build Your Team
            </a>
            <a
              href="#stages"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold text-lg border border-white/20 transition-all duration-300"
            >
              Our Engagement Model
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;