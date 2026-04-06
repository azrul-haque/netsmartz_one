'use client';

import React from 'react';

const ProblemsSection: React.FC = () => {
  const problems = [
    {
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80',
      text: 'Critical data fragmented across operational, customer, financial, and product systems'
    },
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
      text: 'Low trust in dashboards, forecasts, and AI outputs'
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
      text: 'Analytics and AI projects stuck in "proof-of-concept" mode'
    },
    {
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80',
      text: 'Teams spending more time fixing data than generating insights'
    },
    {
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80',
      text: 'Governance and access controls added reactively, slowing execution'
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Real Problem <span className="text-[#fe7725]">Leaders Are Facing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Across industries, organizations are investing heavily in AI and analytics, but results stall once initiatives move beyond pilots.
          </p>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            Common challenges we repeatedly see include:
          </p>
        </div>

        {/* First row - 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {problems.slice(0, 3).map((problem, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              data-testid={`problem-${index}`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={problem.image}
                  alt={problem.text}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">{problem.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Second row - 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {problems.slice(3, 5).map((problem, index) => (
            <div
              key={index + 3}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              data-testid={`problem-${index + 3}`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={problem.image}
                  alt={problem.text}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">{problem.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-500 rounded-xl p-8 max-w-4xl mx-auto">
          <p className="text-xl font-bold text-gray-900 mb-2">Reality Check:</p>
          <p className="text-lg text-gray-700">
            You don't have an AI problem. You have a data reliability and control problem, and AI exposes it faster.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;