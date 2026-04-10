'use client';

import React from 'react';
import { FiDatabase, FiZap, FiLayers, FiGitBranch, FiShield } from 'react-icons/fi';

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      icon: <FiDatabase className="text-3xl" />,
      title: 'Scalable Data Lakes',
      description: 'Centralize structured and unstructured data in a flexible, cost-effective environment designed for high-volume ingestion and long-term storage.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80'
    },
    {
      icon: <FiZap className="text-3xl" />,
      title: 'High-Performance Data Warehouses',
      description: 'Enable fast, reliable querying and analytics with optimized data models and architectures.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
    },
    {
      icon: <FiLayers className="text-3xl" />,
      title: 'Unified Data Architecture',
      description: 'Bridge lakes and warehouses into a cohesive ecosystem—eliminating silos and enabling seamless data flow.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80'
    },
    {
      icon: <FiGitBranch className="text-3xl" />,
      title: 'Optimized Data Pipelines',
      description: 'Design efficient, reliable pipelines that ensure data is always accurate, consistent, and up to date.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80'
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: 'Governance & Data Quality',
      description: 'Implement controls to ensure data integrity, security, and compliance across your entire data landscape.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80'
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Modern Data Lakes & Warehouses: <span className="text-[#fe7725]">Built for Scale and Flexibility</span>
          </h2>
        </div>

        {/* First row - 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {solutions.slice(0, 3).map((solution, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              data-testid={`solution-${index}`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-xl flex items-center justify-center text-white mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Second row - 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {solutions.slice(3, 5).map((solution, index) => (
            <div
              key={index + 3}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              data-testid={`solution-${index + 3}`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-xl flex items-center justify-center text-white mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;