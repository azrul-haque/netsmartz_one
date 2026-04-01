'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/Button';
import { FiPlay, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-40"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-blue-500/30">
              <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              AI-Powered Technology Company · Since 1999
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-gray-900">Build Smarter.</span>
              <span className="block text-gray-900">Scale Faster.</span>
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Lead with AI.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              Partner with Netsmartz — a global AI-first technology company trusted by{' '}
              <span className="font-semibold text-blue-600">2,000+ SaaS businesses</span> for over 25 years.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-lg shadow-large hover:shadow-glow transition-all duration-300 hover:scale-105"
                data-testid="hero-cta-start"
              >
                Start Your Journey
                <FiArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className="group px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg shadow-medium hover:shadow-large transition-all duration-300 border-2 border-gray-200 hover:border-blue-300"
                data-testid="hero-cta-watch"
              >
                <FiPlay className="inline-block mr-2 text-blue-600" />
                Watch Story
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">2,000+ Clients</div>
                  <div className="text-gray-500">Worldwide</div>
                </div>
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold text-gray-900">4.8</span>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                </div>
                <div className="text-gray-500">600+ Reviews</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image with Floating Cards */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-large">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Team collaboration"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
            </div>

            {/* Floating Card 1 - Top Left */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-large p-6 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                  AI
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Powered by</div>
                  <div className="font-bold text-gray-900">Advanced AI</div>
                </div>
              </div>
            </div>

            {/* Floating Card 2 - Bottom Right */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-large p-6 animate-float-delayed">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  98%
                </div>
                <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
                <div className="flex justify-center mt-2 text-yellow-400 text-sm">
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>

            {/* Floating Card 3 - Middle Right */}
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-large p-4 text-white animate-pulse-slow">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-xs opacity-90">Years</div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
