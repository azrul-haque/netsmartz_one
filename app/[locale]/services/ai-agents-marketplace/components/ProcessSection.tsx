'use client';

import React from 'react';
import { FiSearch, FiPackage, FiLink, FiTrendingUp } from 'react-icons/fi';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <FiSearch className="text-3xl" />,
      title: "Identify high-impact workflows",
      description: "Start with our AI Adoption Scorecard to pinpoint exactly where AI will drive the fastest ROI for your business.",
      number: "01"
    },
    {
      icon: <FiPackage className="text-3xl" />,
      title: "Select and deploy agents",
      description: "Choose the agents you need from the marketplace. Deploy via API or no-code integration.",
      number: "02"
    },
    {
      icon: <FiLink className="text-3xl" />,
      title: "Integrate with your stack",
      description: "Our team handles the connection to your CRM, ERP, and data systems. No heavy lifting required.",
      number: "03"
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: "Measure and scale",
      description: "Track efficiency gains, cost savings, and ROI. Expect a 20–30% efficiency lift in targeted workflows.",
      number: "04"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#fe7725]/10 text-[#fe7725] text-sm font-semibold mb-4 border border-[#fe7725]/30">
            From Selection to Production in Under a Week
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Four steps to <span className="text-[#fe7725]">autonomous execution</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              data-testid={`process-step-${index}`}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-[#fe7725] to-[#ff9555] opacity-30 z-0"></div>
              )}
              
              <div className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 z-10">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-[#fe7725]/10 to-[#ff9555]/10 rounded-xl flex items-center justify-center text-[#fe7725] mb-6 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;