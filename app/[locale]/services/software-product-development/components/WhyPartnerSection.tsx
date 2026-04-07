'use client';

import React from 'react';
import { FiPackage, FiTrendingUp, FiAward, FiUsers, FiDollarSign, FiZap } from 'react-icons/fi';

const WhyPartnerSection: React.FC = () => {
  const reasons = [
    {
      icon: <FiPackage className="text-3xl" />,
      title: "Product Dev @ Core",
      description: "Full-Cycle Product Dev to launch your Product to the market",
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: "Ability to Scale with need",
      description: "Scalable and On-demand IT Teams - saving 60% in costs for our clients.",
    },
    {
      icon: <FiAward className="text-3xl" />,
      title: "Engineering Excellence",
      description: "Pre-Vetted, Experienced Developers who operate as Autonomous Experts",
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: "Hybrid Team",
      description: "Fast-tracked development with nearshore, offshore, and remote team options.",
    },
    {
      icon: <FiDollarSign className="text-3xl" />,
      title: "Lower TCO",
      description: "Improved ROI, agility, and key performance metrics across the Dev cycle",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Stop Worrying about <span className="text-[#fe7725]">Resources, Hiring, and Processes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Focus on Development & Growth. No really, we've got this covered!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="md:col-span-3 grid md:grid-cols-3 gap-6">
            {reasons.slice(0, 3).map((reason, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#fe7725]/10 rounded-xl flex items-center justify-center text-[#fe7725] mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
          <div className="md:col-span-3 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {reasons.slice(3).map((reason, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#fe7725]/5 to-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-[#fe7725]/20"
              >
                <div className="w-14 h-14 bg-[#fe7725]/10 rounded-xl flex items-center justify-center text-[#fe7725] mb-6">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8">
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Engineering, Prototyping, Development & Maintenance. Netsmartz acts as a launch-pad, building seamless, cutting-edge products.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-[#fe7725] hover:bg-[#e56815] text-white rounded-lg font-semibold transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;