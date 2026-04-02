'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

interface SuccessStory {
  id: string;
  title: string;
  slug: string;
  category: string | null;
  image: string;
  excerpt: string | null;
}

interface SuccessStoriesSectionProps {
  stories: SuccessStory[];
}

const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = ({ stories }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            success stories
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how we've harnessed the disruptive power of cutting-edge AI to tackle daunting 
            business challenges and deliver remarkable outcomes.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Link
              key={story.id}
              href={`/success-stories/${story.slug}`}
              className="group bg-white rounded-xl overflow-hidden shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1"
              data-testid={`success-story-${story.slug}`}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {story.category && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900">
                      {story.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#fe7725] transition-colors">
                  {story.title}
                </h3>
                
                {story.excerpt && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {story.excerpt}
                  </p>
                )}

                <div className="flex items-center text-[#fe7725] font-semibold text-sm group-hover:gap-2 transition-all">
                  Read More
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        {stories.length >= 6 && (
          <div className="text-center mt-12">
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white rounded-lg font-semibold text-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
            >
              View All Success Stories
              <FiArrowRight />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
