'use client';

import React from 'react';
import { FiCpu, FiMessageSquare, FiEye, FiTrendingUp, FiZap } from 'react-icons/fi';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FiCpu className="text-3xl" />,
      title: 'Machine Learning Solutions',
      description: 'Develop predictive models that enable forecasting, anomaly detection, and data-driven decision-making.'
    },
    {
      icon: <FiMessageSquare className="text-3xl" />,
      title: 'Natural Language Processing (NLP)',
      description: 'Build intelligent systems that understand, process, and respond to human language—powering chatbots, automation, and insights.'
    },
    {
      icon: <FiEye className="text-3xl" />,
      title: 'Computer Vision',
      description: 'Enable systems to interpret visual data for use cases like object detection, facial recognition, and image analysis.'
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: 'Predictive & Advanced Analytics',
      description: 'Transform historical and real-time data into actionable insights that drive proactive decision-making.'
    },
    {
      icon: <FiZap className="text-3xl" />,
      title: 'Intelligent Automation',
      description: 'Automate repetitive workflows and processes using AI-driven systems to improve efficiency and reduce manual effort.'
    }
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* First row - 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              data-testid={`service-${index}`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* Second row - 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.slice(3, 5).map((service, index) => (
            <div
              key={index + 3}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              data-testid={`service-${index + 3}`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
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