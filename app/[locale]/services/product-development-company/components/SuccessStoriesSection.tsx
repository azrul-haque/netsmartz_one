'use client';

import React from 'react';

const SuccessStoriesSection: React.FC = () => {
  const stories = [
    {
      image: "https://netsmartz.com/wp-content/uploads/2022/10/haulerhero-thumb-1.jpg",
      location: "Hauler Hero / California, USA",
      title: "Building a Team of Developers to deliver and scale an ERP for Hauler Hero",
      link: "#"
    },
    {
      image: "https://netsmartz.com/wp-content/uploads/2022/11/farming-manufacturer.jpg",
      location: "Farming Manufacturer / North America & APAC",
      title: "A Leading Farm Machinery Manufacturer Builds an External Development Team with Netsmartz to Streamline Product Development with Unmatched Efficiency and Seamless Integration",
      link: "#"
    },
    {
      image: "https://netsmartz.com/wp-content/uploads/2022/11/Photo-Advertising-Company.jpg",
      location: "Photo Advertising Firm / Rochester, New York",
      title: "Netsmartz Builds Software Products from Scratch for Rochester-based Firm",
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-[#fe7725] font-semibold text-sm uppercase tracking-wider mb-2">2100+ SATISFIED CLIENTS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Learn how organizations are redefining business norms with our cutting-edge Cloud and IT infrastructure services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-[#fe7725] font-semibold mb-2">{story.location}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-3">{story.title}</h3>
                <a
                  href={story.link}
                  className="inline-flex items-center text-[#fe7725] font-semibold hover:text-orange-600 transition-colors"
                >
                  Read Success Story
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View all Success Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
