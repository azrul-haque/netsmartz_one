'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Section } from '../ui/Section';

const AIStorySection: React.FC = () => {
  const t = useTranslations('aiStory');
  const tCommon = useTranslations('common');

  return (
    <section className="relative py-32 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#fe7725] rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: AI Neon Graphics */}
          <div className="relative">
            {/* Central AI Logo with Neon Effect */}
            <div className="relative w-full aspect-square flex items-center justify-center">
              {/* Outer Rings */}
              <div className="absolute inset-0 rounded-full border-4 border-[#fe7725] opacity-50 animate-pulse-glow"></div>
              <div className="absolute inset-4 rounded-full border-4 border-purple-500 opacity-50 animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute inset-8 rounded-full border-4 border-blue-500 opacity-50 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
              
              {/* Swirling Lines - Using CSS */}
              <svg className="absolute inset-0 w-full h-full animate-rotate-slow origin-center" viewBox="0 0 400 400" >
              
                <defs>
                  
                  <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fe7725" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#ff4500" stopOpacity="0.6"/>
                  </linearGradient>
                  <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.6"/>
                  </linearGradient>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.6"/>
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Swirl Paths */}
                <path
                  d="M 200 50 Q 300 100, 350 200 T 200 350"
                  fill="none"
                  stroke="url(#orangeGradient)"
                  strokeWidth="6"
                  filter="url(#glow)"
                  className="animate-float"
                />
                <path
                  d="M 50 200 Q 100 100, 200 50 T 350 200"
                  fill="none"
                  stroke="url(#purpleGradient)"
                  strokeWidth="6"
                  filter="url(#glow)"
                  className="animate-float"
                  style={{ animationDelay: '1s' }}
                />
                <path
                  d="M 200 350 Q 100 300, 50 200 T 200 50"
                  fill="none"
                  stroke="url(#blueGradient)"
                  strokeWidth="6"
                  filter="url(#glow)"
                  className="animate-float"
                  style={{ animationDelay: '2s' }}
                />
                
              </svg>

              {/* Center AI Text */}
              <div className="relative z-10">
                <div className="text-9xl font-bold">
                  <span className="bg-gradient-to-r from-[#fe7725] via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    AI
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Particles */}
            <div className="absolute top-10 right-10 w-3 h-3 bg-primary rounded-full animate-float blur-sm"></div>
            <div className="absolute bottom-20 left-10 w-2 h-2 bg-purple-500 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-20 w-4 h-4 bg-blue-500 rounded-full animate-float blur-sm" style={{ animationDelay: '0.5s' }}></div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              {t('title')}
              <br />
              <span className="text-[#fe7725]">{t('titleLine2')}</span>
            </h2>
            <p className="text-2xl text-white leading-relaxed">
              {t('tagline')}
            </p>
            <p className="text-lg text-white leading-relaxed">
              {t('description')}
            </p>
            
            {/* CTA Button */}
            <button className="px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white rounded-lg font-semibold text-lg hover:shadow-glow-lg transition-all duration-300 shadow-large hover:scale-105">
              {tCommon('learnMore')}
            </button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
              <div>
                <div className="text-3xl font-bold text-[#fe7725]">{t('stat1Number')}</div>
                <div className="text-sm text-gray-400">{t('stat1Label')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#fe7725]">{t('stat2Number')}</div>
                <div className="text-sm text-gray-400">{t('stat2Label')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#fe7725]">{t('stat3Number')}</div>
                <div className="text-sm text-gray-400">{t('stat3Label')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIStorySection;
