'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/Button';
import { FiPlay } from 'react-icons/fi';

const HeroSection: React.FC = () => {
  const t = useTranslations('hero');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-300 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              {t('subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="hero-cta-start"
              >
                {t('cta1')}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {}}
                data-testid="hero-cta-watch"
              >
                <FiPlay className="mr-2 rtl:mr-0 rtl:ml-2" />
                {t('cta2')}
              </Button>
            </div>
          </div>

          {/* Right Content - Image/Illustration */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            {/* Floating Cards */}
            <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-xl p-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                  AI
                </div>
                <div>
                  <div className="text-xs text-gray-500">Powered by</div>
                  <div className="font-semibold text-gray-900">Advanced AI</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
              <div className="text-3xl font-bold text-primary-600">98%</div>
              <div className="text-xs text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
