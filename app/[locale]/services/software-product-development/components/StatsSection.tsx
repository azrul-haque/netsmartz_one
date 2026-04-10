'use client';

import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    { number: "6", label: "In-House Products" },
    { number: "1500+", label: "Agile Developers" },
    { number: "150+", label: "Delivered Products" },
    { number: "26+", label: "Years of Experience" },
    { number: "71", label: "NPS Score" },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-[#fe7725] to-orange-600 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simplify SaaS Product Development
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            With Skilled Developers, Streamlined Delivery and CMMi Standard Methodologies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all"
            >
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;