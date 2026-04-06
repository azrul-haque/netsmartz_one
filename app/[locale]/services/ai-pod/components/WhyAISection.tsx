'use client';

import React from 'react';
import { FiAlertTriangle, FiTrendingDown, FiUsers, FiTarget } from 'react-icons/fi';

const WhyAISection: React.FC = () => {
  const risks = [
    {
      icon: <FiUsers className="text-3xl" />,
      title: 'Slower Customer Adoption',
      description: 'Prospects increasingly favor AI-enabled SaaS products that deliver faster insights, automation, and smarter user experiences from day one.'
    },
    {
      icon: <FiTrendingDown className="text-3xl" />,
      title: 'Lower Expansion Revenue',
      description: 'Without AI-driven features, SaaS platforms struggle to unlock premium upgrades, advanced plans, and usage-based monetization opportunities.'
    },
    {
      icon: <FiAlertTriangle className="text-3xl" />,
      title: 'Higher Churn',
      description: 'Customers quickly switch to competitors offering AI-powered efficiency, accuracy, and intelligence as part of the core product experience.'
    },
    {
      icon: <FiTarget className="text-3xl" />,
      title: 'Weaker Differentiation',
      description: 'As AI becomes table stakes, SaaS products that delay adoption lose their ability to stand out in crowded and competitive markets.'
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-red-50 via-orange-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-semibold mb-4 border border-red-200">
            Why SaaS Leaders Can't Delay AI Anymore?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Delaying AI Is Now a <span className="text-red-600">Business Risk</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            AI is no longer a differentiator but a baseline expectation for modern SaaS. The winners are shipping it to production and turning intelligence into measurable business outcomes. SaaS products without embedded AI capabilities are already seeing:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {risks.map((risk, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              data-testid={`risk-card-${index}`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white mb-6">
                {risk.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{risk.title}</h3>
              <p className="text-gray-600 leading-relaxed">{risk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAISection;