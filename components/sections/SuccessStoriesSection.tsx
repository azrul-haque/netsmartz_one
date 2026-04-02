'use client';

import React from 'react';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

// Static success stories data
const successStories = [
  {
    id: '1',
    title: "Strategic BOT Transformation for a Leading Australian Bank",
    category: "GCCs",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    excerpt: "Discover how we helped transform operations and deliver remarkable outcomes through cutting-edge AI solutions."
  },
  {
    id: '2',
    title: "Pioneering New Capabilities in a $6Bn PEO Firm's Operations",
    category: "GCCs",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    excerpt: "Revolutionizing HR operations through AI-powered automation and intelligent workforce management systems."
  },
  {
    id: '3',
    title: "AI-Driven Healthcare Transformation for Major Hospital Network",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    excerpt: "Implementing intelligent patient care systems that improve outcomes and reduce operational complexity."
  },
  {
    id: '4',
    title: "Cloud Migration Success for Global Manufacturing Leader",
    category: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    excerpt: "Seamless migration to cloud infrastructure enabling real-time operations and global collaboration."
  },
  {
    id: '5',
    title: "Digital Commerce Revolution for Leading Retail Chain",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    excerpt: "Building an omnichannel retail experience that drives engagement and boosts revenue."
  },
  {
    id: '6',
    title: "Cybersecurity Excellence for Financial Services Provider",
    category: "Financial Services",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
    excerpt: "Implementing enterprise-grade security solutions that protect against evolving cyber threats."
  }
];

const SuccessStoriesSection: React.FC = () => {
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
          {successStories.map((story) => (
            <div
              key={story.id}
              className="group bg-white rounded-xl overflow-hidden shadow-medium hover:shadow-large transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              data-testid={`success-story-${story.id}`}
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
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {story.excerpt}
                </p>

                <div className="flex items-center text-[#fe7725] font-semibold text-sm group-hover:gap-2 transition-all">
                  Read More
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note for Future */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 italic">
            * Success stories are currently static. Admin dashboard coming soon for dynamic management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
