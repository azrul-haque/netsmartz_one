'use client';

import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import Link from 'next/link';

const PackagesSection: React.FC = () => {
  const packages = [
    {
      name: 'Foundation',
      description: 'Best for the first AI initiative, MVP validation, production-ready AI features',
      features: [
        'Dedicated AI/ML engineers',
        'Production-first approach',
        'Basic integration support',
        'Monthly performance reports',
        'Standard governance controls'
      ]
    },
    {
      name: 'Scale',
      description: 'Best for multiple AI projects, Full-stack AI integration & measurable ROI',
      features: [
        'Extended AI pod team',
        'Multi-feature delivery',
        'Advanced integration',
        'ROI tracking & analytics',
        'Enhanced governance & compliance'
      ],
      highlighted: true
    },
    {
      name: 'Enterprise',
      description: 'Best for company-wide AI transformation, Program-level AI governance & innovation pipeline',
      features: [
        'Full-scale AI delivery unit',
        'Enterprise-wide AI strategy',
        'Custom integration frameworks',
        'Dedicated program management',
        'Complete governance suite'
      ]
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#fe7725]/10 text-[#fe7725] text-sm font-semibold mb-4 border border-[#fe7725]/30">
            Choose Your Preferred AI Pod Package
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Designed for <span className="text-[#fe7725]">SaaS Growth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each AI pod operates as a self-contained execution unit, accountable for outcomes—not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white border rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                pkg.highlighted
                  ? 'border-[#fe7725] shadow-xl ring-4 ring-[#fe7725]/20'
                  : 'border-gray-200 hover:shadow-xl'
              }`}
              data-testid={`package-card-${index}`}
            >
              {pkg.highlighted && (
                <div className="inline-flex px-3 py-1 bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white text-xs font-semibold rounded-full mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{pkg.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{pkg.description}</p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <FiCheckCircle className="text-[#fe7725] text-xl flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className={`block text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  pkg.highlighted
                    ? 'bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white hover:shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;