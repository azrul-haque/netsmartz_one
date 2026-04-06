'use client';

import React from 'react';
import { FiSearch, FiSettings, FiDatabase, FiBarChart2, FiRefreshCw } from 'react-icons/fi';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FiSearch className="text-3xl" />,
      title: 'Assessment & Roadmap',
      description: 'We evaluate your current data landscape and define a clear path to unify and modernize it using Microsoft Fabric.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80'
    },
    {
      icon: <FiSettings className="text-3xl" />,
      title: 'Architecture & Implementation',
      description: 'Design and deploy a scalable data foundation tailored to your business, integrating all critical data sources.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80'
    },
    {
      icon: <FiDatabase className="text-3xl" />,
      title: 'Data Integration & Optimization',
      description: 'Streamline pipelines to ensure consistent, accurate, and high-performance data flow across systems.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
    },
    {
      icon: <FiBarChart2 className="text-3xl" />,
      title: 'Analytics & Reporting Enablement',
      description: 'Build intuitive dashboards and reporting layers that empower business teams with real-time insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80'
    },
    {
      icon: <FiRefreshCw className="text-3xl" />,
      title: 'Ongoing Optimization & Scale',
      description: 'Continuously refine your data ecosystem to improve performance, governance, and cost efficiency.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80'
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Help You <span className="text-[#fe7725]">Implement Microsoft Fabric</span>
          </h2>
        </div>

        {/* First row - 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              data-testid={`service-${index}`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-xl flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Second row - 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.slice(3, 5).map((service, index) => (
            <div
              key={index + 3}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              data-testid={`service-${index + 3}`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-xl flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;