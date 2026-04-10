'use client';

import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const SolutionSection: React.FC = () => {
  const features = [
    'Stabilize data pipelines across core systems',
    'Enforce data quality, lineage, access control, and governance by design',
    'Deliver production-ready analytics and AI use cases (not prototypes)',
    'Tie every outcome to measurable business impact'
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Solution: <span className="text-[#fe7725]">Data Pods</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Data Pods are 90-day, outcome-driven delivery units designed to fix data foundations before scaling AI and advanced analytics. They are built for organizations that need clarity, control, and results, not open-ended data programs.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">What Data Pods Do:</h3>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FiCheckCircle className="text-[#fe7725] text-2xl flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-[#fe7725] rounded-xl p-6">
              <p className="text-2xl font-bold text-gray-900">
                Delivered in <span className="text-[#fe7725]">90 days</span> - not 12 months.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Data Pods Solution"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;