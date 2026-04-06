'use client';

import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      stat: "70%",
      title: "70% of AI proofs-of-concept never reach production",
      description: "They stuck in the lab and unable to scale.",
      icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80"
    },
    {
      stat: "Months",
      title: "Integration complexity paralyzes teams",
      description: "Thus, connecting AI to CRM, ERP, and workflows takes months.",
      icon: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80"
    },
    {
      stat: "$180K+",
      title: "The talent gap is widening",
      description: "Hiring a senior AI engineer costs $180K+ with a 6-month ramp-up.",
      icon: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-semibold mb-4 border border-red-200">
            The Hard Truth About AI Execution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Vision without execution is just <span className="text-red-600">hallucination</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Business leaders know AI can transform operations. But the gap between ambition and reality is where most initiatives fail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
              data-testid={`problem-card-${index}`}
            >
              <div className="w-full h-48 rounded-xl overflow-hidden mb-6">
                <img
                  src={problem.icon}
                  alt={problem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-4xl font-bold text-[#fe7725] mb-4">{problem.stat}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;