'use client';

import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const TargetAudienceSection: React.FC = () => {
  const scenarios = [
    "Already operate a GCC in India and want to expand capacity",
    "Are facing rising costs and hiring challenges in Tier 1 cities",
    "Need to scale teams across engineering, operations, or support",
    "Want to diversify locations for risk mitigation",
    "Are looking for long-term cost and talent optimization",
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzc1NTQ2NDIwfDA&ixlib=rb-4.1.0&q=85"
              alt="Diverse Team Collaboration"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Designed for GCCs <span className="text-[#fe7725]">Ready to Scale</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              This model is ideal for organizations that:
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

export default TargetAudienceSection;