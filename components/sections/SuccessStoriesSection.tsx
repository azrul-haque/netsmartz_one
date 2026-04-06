'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

const SuccessStoriesSection: React.FC = () => {
  const t = useTranslations('successStories');
  const tCommon = useTranslations('common');

  const successStories = [
    {
      id: '1',
      title: t('story1Title'),
      category: t('story1Category'),
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
      excerpt: t('story1Excerpt')
    },
    {
      id: '2',
      title: t('story2Title'),
      category: t('story2Category'),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      excerpt: t('story2Excerpt')
    },
    {
      id: '3',
      title: t('story3Title'),
      category: t('story3Category'),
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
      excerpt: t('story3Excerpt')
    },
    {
      id: '4',
      title: t('story4Title'),
      category: t('story4Category'),
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
      excerpt: t('story4Excerpt')
    },
    {
      id: '5',
      title: t('story5Title'),
      category: t('story5Category'),
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      excerpt: t('story5Excerpt')
    },
    {
      id: '6',
      title: t('story6Title'),
      category: t('story6Category'),
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80',
      excerpt: t('story6Excerpt')
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-orange-50 via-white to-rose-50 overflow-hidden relative">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#fe7725] to-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-[#fe7725]">{t('title')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="group bg-white/60 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-white/50 relative"
              data-testid={`success-story-${story.id}`}
            >
              {/* Orange Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#fe7725]/10 via-orange-500/5 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-100 to-rose-100">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#fe7725]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {story.category && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#fe7725] to-orange-500 text-white backdrop-blur-sm rounded-full text-sm font-semibold shadow-lg">
                      {story.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#fe7725] transition-colors">
                  {story.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {story.excerpt}
                </p>

                <div className="flex items-center text-[#fe7725] font-semibold text-sm group-hover:gap-2 transition-all">
                  {tCommon('readMore')}
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
