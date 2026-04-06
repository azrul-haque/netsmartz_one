'use client';

import React from 'react';
import { FiDatabase, FiClock, FiLayers, FiTrendingDown } from 'react-icons/fi';

const ProblemsSection: React.FC = () => {
  const problems = [
    {
      icon: <FiDatabase className="text-3xl" />,
      title: 'Fragmented Data Pipelines',
      description: 'Data pipelines are fragmented, making integration slow and unreliable.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80'
    },
    {
      icon: <FiClock className="text-3xl" />,
      title: 'Delayed Reporting',
      description: 'Reporting delays lead to decisions based on outdated information.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80'
    },
    {
      icon: <FiLayers className="text-3xl" />,
      title: 'Tool Sprawl & Cost',
      description: 'Multiple tools create duplication, governance gaps, and rising costs.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80'
    },
    {
      icon: <FiTrendingDown className="text-3xl" />,
      title: 'Scalability Issues',
      description: 'As data volumes grow, existing architectures struggle to scale—impacting performance, visibility, and trust in insights.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80'
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Where Most Data Setups <span className="text-[#fe7725]">Fall Short</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Even mature organizations face recurring challenges:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              data-testid={`problem-${index}`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={problem.image}
                  alt={problem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white mb-4">
                  {problem.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-red-50 to-orange-50 border-l-4 border-red-500 rounded-xl p-8 max-w-3xl mx-auto text-center">
          <p className="text-2xl font-bold text-gray-900">
            Data exists, but it doesn't <span className="text-[#fe7725]">drive decisions</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;