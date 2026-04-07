'use client';

import React from 'react';
import { FiMapPin, FiCode, FiRefreshCw, FiTool } from 'react-icons/fi';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FiMapPin className="text-4xl text-[#fe7725]" />,
      title: "Developing Product Roadmap",
      description: "Outline the vision, direction, priorities, and milestones to set a success strategy for full-scale product development.",
    },
    {
      icon: <FiCode className="text-4xl text-[#fe7725]" />,
      title: "Product & Platform Engineering",
      description: "Integrate human insight with technology to innovate, design, and develop a robust software product that brings business value.",
    },
    {
      icon: <FiRefreshCw className="text-4xl text-[#fe7725]" />,
      title: "Product Modernization",
      description: "Leverage innovation-focused solutions crafted to facilitate faster time to market, unleash competitive advantage, and augment customer experience.",
    },
    {
      icon: <FiTool className="text-4xl text-[#fe7725]" />,
      title: "Product Support & Maintenance",
      description: "Repurpose, modify, and update product to map customer requirements, improve experience and maintain seamless bug-free performance.",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Full-cycle <span className="text-[#fe7725]">Digital Product Development</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Design, Develop, Launch, and Iterate your SaaS Product
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all border border-gray-100 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-[#fe7725]/10 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;