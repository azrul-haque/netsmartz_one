'use client';

import React from 'react';

const ProductStagesSection: React.FC = () => {
  const stages = [
    {
      stage: "Your Stage",
      title: "MVP/POC Development",
      description: "From product Ideation to POC and MVP Development, Scale your Project from Scratch",
      engagement: "Hire Elastic Team",
      engagementDesc: "Get your own Cloud team for Remote Infrastructure Monitoring and Management",
    },
    {
      stage: "Your Stage",
      title: "Full-cycle Development",
      description: "Platform / Architecture Review, Development, Design and Iteration for Software Project",
      engagement: "Outsource Product Dev",
      engagementDesc: "Trust Netsmartz as your outsourced technology partner",
    },
    {
      stage: "Your Stage",
      title: "Support for Products",
      description: "Support, Maintenance & Comprehensive Testing and Audits of your Software or Product",
      engagement: "Hire Developers (FTE)",
      engagementDesc: "Gain access to 1500+ resources for development support",
    },
  ];

  return (
    <section id="stages" className="py-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Your Product - <span className="text-[#fe7725]">Your Choice</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Push the boundaries of innovation with our valuable support at every stage of your product development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stages.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="text-sm text-[#fe7725] font-semibold mb-3">{item.stage}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300 mb-6 text-sm">{item.description}</p>
              
              <div className="border-t border-white/10 pt-6">
                <div className="text-sm text-[#fe7725] font-semibold mb-2">Engagement Model</div>
                <h4 className="text-lg font-bold text-white mb-2">{item.engagement}</h4>
                <p className="text-gray-400 text-sm">{item.engagementDesc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-300 mb-6">
            Over 100+ global companies leverage our pool of certified professionals for outsourcing projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#fe7725] hover:bg-[#e56815] text-white rounded-lg font-semibold transition-colors"
            >
              Work With Us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/20 transition-all"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductStagesSection;