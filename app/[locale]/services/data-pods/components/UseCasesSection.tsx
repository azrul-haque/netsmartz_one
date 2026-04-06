'use client';

import React from 'react';
import { FiTrendingUp, FiDollarSign, FiUsers, FiActivity, FiCpu } from 'react-icons/fi';

const UseCasesSection: React.FC = () => {
  const useCases = [
    {
      icon: <FiTrendingUp className="text-3xl" />,
      text: 'Predictive analytics built on trusted, governed datasets'
    },
    {
      icon: <FiDollarSign className="text-3xl" />,
      text: 'Revenue, cost, or efficiency optimization using reconciled data'
    },
    {
      icon: <FiUsers className="text-3xl" />,
      text: 'Customer, user, or operational insights leaders actually trust'
    },
    {
      icon: <FiActivity className="text-3xl" />,
      text: 'Forecasting and decision intelligence grounded in consistent pipelines'
    },
    {
      icon: <FiCpu className="text-3xl" />,
      text: 'AI models that can move safely into production'
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Use Cases <span className="text-[#fe7725]">We Enable</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
            Once data foundations are reliable, organizations unlock AI and analytics use cases such as:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              data-testid={`usecase-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {useCase.icon}
                </div>
                <p className="text-gray-700 leading-relaxed">{useCase.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-center">
          <p className="text-2xl font-bold text-white">
            These are <span className="underline">production deployments</span>, not experiments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;