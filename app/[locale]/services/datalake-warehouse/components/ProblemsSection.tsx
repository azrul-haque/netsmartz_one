'use client';

import React from 'react';
import { FiCopy, FiLayers, FiTool, FiClock, FiTrendingUp } from 'react-icons/fi';

const ProblemsSection: React.FC = () => {
  const problems = [
    {
      icon: <FiCopy className="text-2xl" />,
      text: 'Data duplication across systems creates inconsistencies and erodes trust'
    },
    {
      icon: <FiLayers className="text-2xl" />,
      text: 'Rigid architectures make it difficult to scale or adapt to new data sources'
    },
    {
      icon: <FiTool className="text-2xl" />,
      text: 'Complex pipelines increase maintenance effort and slow down engineering teams'
    },
    {
      icon: <FiClock className="text-2xl" />,
      text: 'Poor performance leads to delayed analytics and slower decision-making'
    },
    {
      icon: <FiTrendingUp className="text-2xl" />,
      text: 'Rising infrastructure and storage costs without proportional value'
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-red-50 via-orange-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Where Traditional Data Architectures <span className="text-[#fe7725]">Break Down</span>
          </h2>
        </div>

        {/* First row - 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {problems.slice(0, 3).map((problem, index) => (
            <div
              key={index}
              className="bg-white border border-red-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              data-testid={`problem-${index}`}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0">
                  {problem.icon}
                </div>
                <p className="text-gray-700 leading-relaxed">{problem.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Second row - 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.slice(3, 5).map((problem, index) => (
            <div
              key={index + 3}
              className="bg-white border border-red-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              data-testid={`problem-${index + 3}`}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0">
                  {problem.icon}
                </div>
                <p className="text-gray-700 leading-relaxed">{problem.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;