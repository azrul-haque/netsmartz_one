'use client';

import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const Tier2AdvantageSection: React.FC = () => {
  const advantages = [
    "Access to high-quality, untapped talent pools",
    "Significantly lower operational costs",
    "Improved talent retention and lower attrition",
    "Less saturated, more stable hiring environment",
    "Modern infrastructure and strong connectivity",
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              The <span className="text-[#fe7725]">Tier 2 Advantage</span>: Built for the Next Wave of GCC Growth
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tier 2 cities are no longer secondary options—they are strategic growth hubs.
            </p>

            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#fe7725]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FiCheckCircle className="text-[#fe7725] text-sm" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{advantage}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1768876041604-58dec7b0b10e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMGV4cGFuc2lvbiUyMGdyb3d0aCUyMGNpdHklMjBza3lsaW5lfGVufDB8fHx8MTc3NTU0NjQxMHww&ixlib=rb-4.1.0&q=85"
              alt="Modern City Growth"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tier2AdvantageSection;