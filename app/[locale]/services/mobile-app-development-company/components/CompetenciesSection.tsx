'use client';

import React from 'react';

const CompetenciesSection: React.FC = () => {
  const competencies = [
    {
      title: "Ensured Maintenance and Support",
      description: "Developers at Netsmartz work skillfully to perform functional performance and accessibility testing, and also ensure compliance, security, and app evolution",
      image: "/images/services/mobile-app-development-company/mobile-design.jpg"
    },
    {
      title: "Research Primed Development",
      description: "Leverage thorough industry and market research to hash out a powerful mobile experience tailored to your target audience and your market pitch and orientation",
      image: "/images/services/mobile-app-development-company/ios-development.jpg"
    },
    {
      title: "Deep Understanding of Technology",
      description: "Dedicated project managers ensuring a high-quality end product through their targeted industry expertise that enables you to evolve and iterate your application",
      image: "/images/services/mobile-app-development-company/android-development.jpg"
    },
    {
      title: "Faster Time to Market",
      description: "Craft a prototype, build an MVP, and rollout your mobile app to a beta audience to test the viability and feasibility of your mobile app in record timeframes",
      image: "/images/services/mobile-app-development-company/cross-platform.jpg"
    },
    {
      title: "Multi-platform Functionality",
      description: "Ensure compatibility and seamless utility across platforms like iOS or Android, and devices like wearables, mobiles, and TV by crafting native or hybrid apps",
      image: "/images/services/mobile-app-development-company/hero-mobile-dev.jpg"
    },
    {
      title: "End to End Development",
      description: "Full cycle of application design, integration, and management services across all platforms to create delightful user experiences through feature-rich apps",
      image: "/images/services/mobile-app-development-company/mobile-design.jpg"
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
            Build superior apps that engage, intrigue, and entice through a seamless user experiences across all modern platforms and mobile devices
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
                  src={competency.image} 
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
                  src={competency.image} 
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