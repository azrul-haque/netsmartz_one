'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FiZap, FiDroplet, FiTrash2, FiActivity, FiHeart, FiTruck, FiCheckCircle } from 'react-icons/fi';

const SustainabilitySection: React.FC = () => {
  const t = useTranslations('sustainability');
  const tCommon = useTranslations('common');
  const [activeCommitment, setActiveCommitment] = useState(0);

  const commitments = [
    {
      icon: <FiZap className="text-4xl" />,
      title: t('commitment1Title'),
      description: t('commitment1Desc'),
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: <FiDroplet className="text-4xl" />,
      title: t('commitment2Title'),
      description: t('commitment2Desc'),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <FiTrash2 className="text-4xl" />,
      title: t('commitment3Title'),
      description: t('commitment3Desc'),
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: <FiActivity className="text-4xl" />,
      title: t('commitment4Title'),
      description: t('commitment4Desc'),
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: <FiHeart className="text-4xl" />,
      title: t('commitment5Title'),
      description: t('commitment5Desc'),
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
    },
    {
      icon: <FiTruck className="text-4xl" />,
      title: t('commitment6Title'),
      description: t('commitment6Desc'),
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50',
    },
  ];

  const badges = [
    { label: t('badge1'), icon: '🏆' },
    { label: t('badge2'), icon: '⭐' },
    { label: t('badge3'), icon: '💚' },
    { label: t('badge4'), icon: '🔒' },
  ];

  const stats = [
    { number: t('stat1'), label: t('stat1Label'), icon: '🌳' },
    { number: t('stat2'), label: t('stat2Label'), icon: '☀️' },
    { number: t('stat3'), label: t('stat3Label'), icon: '✍️' },
    { number: t('stat4'), label: t('stat4Label'), icon: '💧' },
    { number: t('stat5'), label: t('stat5Label'), icon: '♻️' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden relative">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">{t('titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-md rounded-full shadow-lg border border-white/50 hover:scale-105 transition-transform duration-300"
              data-testid={`sustainability-badge-${index}`}
            >
              <span className="text-2xl">{badge.icon}</span>
              <span className="font-semibold text-gray-700 text-sm">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Purpose Section */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 mb-16 border border-white/50">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            {t('purposeTitle')}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
            {t('purposeDescription')}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              data-testid={`sustainability-stat-${index}`}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Commitments - Interactive Section */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Commitments
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Commitment Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {commitments.map((commitment, index) => (
                <div
                  key={index}
                  onClick={() => setActiveCommitment(index)}
                  className={`group cursor-pointer p-6 rounded-2xl transition-all duration-300 ${
                    activeCommitment === index
                      ? 'bg-white shadow-2xl scale-105 border-2 border-green-500'
                      : 'bg-white/70 backdrop-blur-md shadow-lg hover:shadow-xl border border-white/50'
                  }`}
                  data-testid={`commitment-card-${index}`}
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${commitment.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {commitment.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {commitment.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {commitment.description}
                  </p>
                  {activeCommitment === index && (
                    <div className="mt-3 flex items-center text-green-600 font-semibold text-sm">
                      <FiCheckCircle className="mr-2" />
                      Active
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right: Visual Representation */}
            <div className="relative">
              <div className={`w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${commitments[activeCommitment].bgColor}`}>
                {/* Animated Circle Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80">
                    {/* Outer Ring */}
                    <div className={`absolute inset-0 rounded-full border-8 border-gradient-to-r ${commitments[activeCommitment].color} opacity-30 animate-pulse-glow`}></div>
                    
                    {/* Middle Ring */}
                    <div className={`absolute inset-8 rounded-full border-8 bg-gradient-to-r ${commitments[activeCommitment].color} opacity-20 animate-pulse-glow`} style={{ animationDelay: '0.5s' }}></div>
                    
                    {/* Inner Circle */}
                    <div className={`absolute inset-16 rounded-full bg-gradient-to-br ${commitments[activeCommitment].color} flex items-center justify-center shadow-2xl`}>
                      <div className="text-white text-6xl transform hover:scale-110 transition-transform">
                        {commitments[activeCommitment].icon}
                      </div>
                    </div>
                    
                    {/* Rotating Border */}
                    <svg className="absolute inset-0 w-full h-full animate-rotate-slow" viewBox="0 0 400 400">
                      <circle
                        cx="200"
                        cy="200"
                        r="190"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="4"
                        strokeDasharray="20 10"
                        opacity="0.5"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#14b8a6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute top-20 right-20 w-4 h-4 bg-green-400 rounded-full animate-float blur-sm"></div>
                <div className="absolute bottom-32 left-20 w-3 h-3 bg-teal-400 rounded-full animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-32 w-5 h-5 bg-emerald-400 rounded-full animate-float blur-sm" style={{ animationDelay: '0.5s' }}></div>
              </div>

              {/* Current Commitment Info */}
              <div className="mt-6 text-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {commitments[activeCommitment].title}
                </h4>
                <p className="text-gray-600">
                  {commitments[activeCommitment].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Solar Panel Visual */}
        <div className="relative h-64 rounded-3xl overflow-hidden shadow-2xl mb-8">
          <Image
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80"
            alt="Solar Panels"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-teal-900/60 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl font-bold mb-4">10 MW</div>
              <div className="text-2xl">Solar Energy Powering Our Future</div>
            </div>
          </div>
        </div>

      </div>

      {/* Rotate Animation for SVG */}
      <style jsx>{`
        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SustainabilitySection;
