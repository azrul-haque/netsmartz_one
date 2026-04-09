'use client';

import React from 'react';

const ArsenalSection: React.FC = () => {
  const tools = [
    {
      title: "Adobe Experience Manager",
      description: "AEM is a content management system that is preferred by digital commerce brands, being used to build websites, mobile apps, and forms - everything needed for building brand loyalty and driving demand."
    },
    {
      title: "Adobe Target",
      description: "Being an industry-leading choice for targeting and personalization, it is the best tool out there for rules-based testing for creating and launching marketing offers that are highly personalized."
    },
    {
      title: "Journey Orchestration",
      description: "This is a service built upon Adobe Experience Platform for allowing real-time orchestration powered by contextual data from recent events - the ultimate tool for personalizing digital experiences at scale."
    },
    {
      title: "Digital Asset Management",
      description: "The DAM platform offers a central hub for organizing, storing, and retrieving rich media that connects to your other enterprise software solutions, ensuring a consistent experience across the customer journey."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-[#fe7725] font-semibold text-sm uppercase tracking-wider mb-2">The envision magic</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Arsenal for Crafting Experiences
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            In order to craft experiences that win, we are always striving to stay ahead of the curve and keep our arsenal packed with nothing but only the best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{tool.title}</h3>
              <p className="text-gray-300 leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArsenalSection;