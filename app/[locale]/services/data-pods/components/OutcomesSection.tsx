'use client';

import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const OutcomesSection: React.FC = () => {
  const outcomes = [
    'A production-ready data architecture blueprint',
    'Governed, documented, and auditable data pipelines',
    'Three AI or advanced analytics use cases running in production',
    'ROI models tied to measurable business outcomes',
    'Dashboards showing before-and-after impact'
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Data Pod Outcomes"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What You Own <span className="text-[#fe7725]">After 90 Days</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              At the end of a Data Pod engagement, you own:
            </p>

            <ul className="space-y-4">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-500 text-2xl flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomesSection;