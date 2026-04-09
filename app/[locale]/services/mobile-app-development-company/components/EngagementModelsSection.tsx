'use client';

import React from 'react';

const EngagementModelsSection: React.FC = () => {
  const models = [
    {
      title: "Outsource Project",
      description: "Your managed solutions partner with comprehensive solutions"
    },
    {
      title: "Extend your in-house Team",
      description: "Gain access to 1500+ skilled software developer"
    },
    {
      title: "Build your Dev team",
      description: "Customize multi-disciplinary teams, save an average 65% versus hiring locally"
    },
    {
      title: "Offshore Dev Center",
      description: "Offshore your development to any of our 10 Global campuses"
    }
  ];

  return (
    <section className="py-16 bg-white" id="engagement-models">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-[#fe7725] font-semibold text-sm uppercase tracking-wider mb-2">Engagement Models</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Your Team - Your Way
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Based on your requirements and size of the project, you can choose what you need from us. We have various engagement models to pick from.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-[#fe7725] transition-all group"
            >
              <div className="w-12 h-12 bg-[#fe7725] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{model.title}</h3>
              <p className="text-gray-700 leading-relaxed">{model.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Learn about our Engagement Models
          </a>
        </div>
      </div>
    </section>
  );
};

export default EngagementModelsSection;