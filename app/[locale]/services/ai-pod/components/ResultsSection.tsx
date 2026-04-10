'use client';

import React from 'react';
import { FiTrendingUp } from 'react-icons/fi';

const ResultsSection: React.FC = () => {
  const stats = [
    { number: '150+', label: 'SaaS AI Features Shipped to Production' },
    { number: '3x', label: 'Faster Time-to-Market for AI Releases' },
    { number: '80%', label: 'Reduced AI-Related Production Escapes' },
    { number: '95%', label: 'Improved AI Search & Support Accuracy' }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-4 border border-green-200">
            <FiTrendingUp className="text-lg" />
            Real Results. Real Impact.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              data-testid={`stat-card-${index}`}
            >
              <div className="text-5xl font-bold text-[#fe7725] mb-3">{stat.number}</div>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Trusted By</h3>
          <p className="text-sm text-gray-500 max-w-4xl mx-auto">
            *All trademarks, logos and brand names are the property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, trademarks and brands does not imply endorsement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;