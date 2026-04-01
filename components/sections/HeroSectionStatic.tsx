'use client';

import React from 'react';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center pt-20 pb-20 px-6 overflow-hidden" 
      style={{ background: 'linear-gradient(135deg, rgba(254,119,37,0.05) 0%, rgba(255,149,85,0.02) 50%, transparent 100%)' }}
    >
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#fe7725] rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#ff9555] rounded-full filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-200 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#fe7725] rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-[#fe7725]">AI-Powered Technology Company · Since 1999</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight text-gray-900 mb-6">
              Build Smarter. Scale Faster.{' '}
              <span className="bg-gradient-to-r from-[#fe7725] to-[#ff9555] bg-clip-text text-transparent">
                Lead with AI.
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Partner with Netsmartz — a global AI-first technology company trusted by{' '}
              <strong className="text-gray-900">2,000+ SaaS businesses</strong> for over 25 years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white rounded-lg font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Start Your Journey
                <FiArrowRight />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 rounded-lg font-semibold text-lg hover:border-[#fe7725] hover:text-[#fe7725] transition-all duration-300">
                <FiPlay />
                Watch Story
              </button>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
              alt="Team collaboration"
              width={800}
              height={600}
              className="rounded-3xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;