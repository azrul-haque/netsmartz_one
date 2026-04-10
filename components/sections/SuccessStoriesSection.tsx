'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const SuccessStoriesSection: React.FC = () => {
  const t = useTranslations('successStories');
  const tCommon = useTranslations('common');

  const successStories = [
    {
      id: '1',
      title: 'How a Fractional CTO Scaled AI Execution in Manufacturing Without Hiring',
      category: 'AI Pod - Advisory',
      location: 'Manufacturing / USA',
      image: '/images/case-studies/advisory-thumb.jpg',
      excerpt: 'Learn how a fractional CTO partnered with Netsmartz to move a manufacturing client from hiring paralysis to production-ready AI—using the AI Pod model.',
      link: '/success-stories/netsmartz-ai-pods-case-study-advisory'
    },
    {
      id: '2',
      title: 'How an IT Staffing Firm Closed 3 AI Pods in 60 Days with Netsmartz',
      category: 'AI Pod - Staffing',
      location: 'IT Staffing / Denver',
      image: '/images/case-studies/staffing-thumb.jpg',
      excerpt: 'Discover how a Denver IT staffing firm partnered with Netsmartz to deliver AI for their SaaS client—using a new model that turned a stalled project into three new revenue streams.',
      link: '/success-stories/netsmartz-ai-pods-case-study-staffing'
    }
  ];
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

        {/* Stories Grid - Only 2 stories centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {successStories.map((story) => (
            <Link
              key={story.id}
              href={story.link}
              className="group bg-white/60 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-white/50 relative block"
              data-testid={`success-story-${story.id}`}
            >
              {/* Orange Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#fe7725]/10 via-orange-500/5 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-orange-100 to-rose-100">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient Overlay on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#fe7725]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#fe7725] to-orange-500 text-white backdrop-blur-sm rounded-full text-sm font-semibold shadow-lg">
                    {story.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <p className="text-xs sm:text-sm text-[#fe7725] font-semibold mb-2">{story.location}</p>
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
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/success-story"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Case Studies
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
