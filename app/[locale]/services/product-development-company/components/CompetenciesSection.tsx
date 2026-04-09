'use client';

import React from 'react';

const CompetenciesSection: React.FC = () => {
  const competencies = [
    {
      icon: "/images/services/product-development-company/prototyping.jpg",
      title: "Proven, Industry-leading and Innovative Methods",
      description: "Providing world-class services, we help enhance product experience, reimagine functionality, and enhance feasibility by bringing industry-leading practices, technologies, and skills"
    },
    {
      icon: "/images/services/product-development-company/testing.jpg",
      title: "Focus on QA Standards, Systems, and Processes",
      description: "With standardized QA practices, systems, and processes we ensure the delivery of a bug-free, seamless, and sublime customer experience through our apps, products, and software projects"
    },
    {
      icon: "/images/services/product-development-company/development.jpg",
      title: "Take Product Development Decisions with Confidence",
      description: "Leverage data-driven customer feedback to prime your software for streamlined development right from optimization & iterations to prototyping, MVP building, and software release"
    },
    {
      icon: "/images/services/product-development-company/support.jpg",
      title: "Thrive with Defined Development Research",
      description: "Bring fast and iterative product development research to power a faster time to market, better feature and functionality rollout, and seamless growth along with an enhanced customer experience"
    },
    {
      icon: "/images/services/product-development-company/hero-team.jpg",
      title: "Bring Shared Technical Product Ownership",
      description: "Free your time to design your product strategy as our development team takes complete ownership of the code cycle and product growth while collaborating with you to ensure structured and agile progress"
    },
    {
      icon: "/images/services/product-development-company/development.jpg",
      title: "Leverage Lean, Agile, and Consistent Growth",
      description: "Ensure value addition to grow the product and its functionality with each phase and code input – eliminating anything that slows growth, thus facilitating quicker feedback loops and time to market"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-[#fe7725] font-semibold text-sm uppercase tracking-wider mb-2">Why Netsmartz</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Competencies
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Accelerate sprint velocity, enhance engineering capacity, and optimize business operations from concept-to-code and development-to-deployment.
          </p>
        </div>

        {/* First row: 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {competencies.slice(0, 3).map((competency, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={competency.icon} 
                  alt={competency.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{competency.title}</h3>
              <p className="text-gray-700 leading-relaxed">{competency.description}</p>
            </div>
          ))}
        </div>

        {/* Second row: 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competencies.slice(3, 6).map((competency, index) => (
            <div
              key={index + 3}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all group"
            >
              <div className="w-16 h-16 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={competency.icon} 
                  alt={competency.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{competency.title}</h3>
              <p className="text-gray-700 leading-relaxed">{competency.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetenciesSection;
