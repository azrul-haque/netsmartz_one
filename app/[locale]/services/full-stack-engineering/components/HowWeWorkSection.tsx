'use client';

import React from 'react';
import { FiUsers, FiTarget, FiZap, FiRefreshCw } from 'react-icons/fi';

const HowWeWorkSection: React.FC = () => {
  const workPoints = [
    {
      icon: FiUsers,
      title: "Cross-Functional Teams, Not Silos",
      description: "Frontend, backend, and cloud engineers work as one unit—not separate tracks."
    },
    {
      icon: FiTarget,
      title: "Product-Aligned Execution",
      description: "We don't just follow tickets—we align engineering with product goals and outcomes."
    },
    {
      icon: FiZap,
      title: "Speed Without Chaos",
      description: "Agile delivery with structure, so you move fast without compromising stability."
    },
    {
      icon: FiRefreshCw,
      title: "Built for Change",
      description: "Your product is designed to evolve; not rebuilt every time requirements shift."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800" id="how-we-work">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            How We Work <span className="text-[#fe7725]">(And Why It's Different)</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {workPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#fe7725] rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-[#fe7725] font-bold text-xl">{index + 1}.</span>
                      <h3 className="text-xl font-bold text-white">{point.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
