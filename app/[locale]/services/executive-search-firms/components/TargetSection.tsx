'use client';

import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const TargetSection: React.FC = () => {
  const scenarios = [
    "Setting up a new GCC and need strong leadership from the start",
    "Expanding existing GCC operations and need experienced leaders",
    "Facing challenges in aligning global strategy with local execution",
    "Looking to strengthen leadership for long-term scalability",
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1745970649957-b4b1f7fde4ea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHwyfHxleGVjdXRpdmUlMjBidXNpbmVzcyUyMGxlYWRlcnNoaXAlMjB0ZWFtJTIwbWVldGluZ3xlbnwwfHx8fDE3NzU1NDQ2NjJ8MA&ixlib=rb-4.1.0&q=85"
              alt="Modern Conference Room"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Built for Organizations <span className="text-[#fe7725]">Establishing or Scaling GCCs</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our executive search service is designed for organizations that are:
            </p>

            <div className="space-y-4">
              {scenarios.map((scenario, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#fe7725]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FiCheckCircle className="text-[#fe7725] text-sm" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{scenario}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;