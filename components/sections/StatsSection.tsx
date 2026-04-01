'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

const StatsSection: React.FC = () => {
  const t = useTranslations('stats');

  const stats = [
    { 
      number: '25+', 
      label: t('yearsExcellence'),
      gradient: 'from-blue-600 to-cyan-600',
      icon: '🏆'
    },
    { 
      number: '2000+', 
      label: t('globalClients'),
      gradient: 'from-purple-600 to-pink-600',
      icon: '🌍'
    },
    { 
      number: '1500+', 
      label: t('aiEngineers'),
      gradient: 'from-orange-600 to-red-600',
      icon: '👥'
    },
    { 
      number: '98%', 
      label: t('retentionRate'),
      gradient: 'from-green-600 to-emerald-600',
      icon: '⭐'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center"
              data-testid={`stat-${index}`}
            >
              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                {/* Icon */}
                <div className="text-4xl mb-4">{stat.icon}</div>
                
                {/* Number */}
                <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-sm md:text-base text-gray-200 font-medium">
                  {stat.label}
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 font-medium">
            Trusted by leading enterprises worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
