'use client';

import React from 'react';

const MVPScaleSection: React.FC = () => {
  const stages = [
    {
      stage: "0 → 1",
      title: "Build",
      description: "Launch fast, validate ideas, and get to market without overengineering",
      color: "from-blue-500 to-blue-600"
    },
    {
      stage: "1 → 10",
      title: "Scale",
      description: "Improve performance, stabilize systems, and support growing users",
      color: "from-[#fe7725] to-orange-600"
    },
    {
      stage: "10 → 100",
      title: "Optimize & Expand",
      description: "Refactor, enhance UX, and continuously deliver new capabilities",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-16 bg-white" id="stages">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            From MVP to Scale—We Stay Aligned
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Most teams can build. Few can evolve products without slowing down. We support your product across stages:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stages.map((item, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 text-white h-full hover:scale-105 transition-transform duration-300`}>
                <div className="text-5xl font-bold mb-4 opacity-90">{item.stage}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/90 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MVPScaleSection;
