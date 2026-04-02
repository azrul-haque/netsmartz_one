'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { FiAward, FiGlobe, FiUsers, FiStar } from 'react-icons/fi';

const StatsSection: React.FC = () => {
  const t = useTranslations('stats');

  const stats = [
    { 
      number: '25+', 
      label: t('yearsExcellence'),
      gradient: 'from-primary to-orange-600',
      icon: FiAward
    },
    { 
      number: '2000+', 
      label: t('globalClients'),
      gradient: 'from-gray-800 to-black',
      icon: FiGlobe
    },
    { 
      number: '1500+', 
      label: t('aiEngineers'),
      gradient: 'from-primary-600 to-red-600',
      icon: FiUsers
    },
    { 
      number: '98%', 
      label: t('retentionRate'),
      gradient: 'from-yellow-600 to-primary',
      icon: FiStar
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group text-center"
                data-testid={`stat-${index}`}
              >
                {/* Card */}
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                  {/* Icon */}
                  <div className="text-4xl mb-4 flex justify-center">
                    <IconComponent className="text-[#fe7725]" size={48} />
                  </div>
                  
                  {/* Number */}
                  <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm md:text-base text-white font-medium">
                    {stat.label}
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-xl text-white font-medium">
            Trusted by leading enterprises worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;