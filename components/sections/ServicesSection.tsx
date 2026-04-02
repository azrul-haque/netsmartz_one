'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Section } from '../ui/Section';
import { FiCpu, FiCloud, FiShield, FiCheckCircle, FiServer, FiBarChart2, FiArrowRight } from 'react-icons/fi';

const ServicesSection: React.FC = () => {
  const t = useTranslations('services');

  const services = [
    {
      icon: <FiCpu className="text-4xl" />,
      title: t('aiDevelopment'),
      description: t('aiDescription'),
      gradient: 'from-primary to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100',
    },
    {
      icon: <FiCloud className="text-4xl" />,
      title: t('saasEngineering'),
      description: t('saasDescription'),
      gradient: 'from-gray-800 to-black',
      bgGradient: 'from-gray-50 to-gray-100',
    },
    {
      icon: <FiShield className="text-4xl" />,
      title: t('cybersecurity'),
      description: t('cybersecurityDescription'),
      gradient: 'from-primary to-red-600',
      bgGradient: 'from-red-50 to-orange-50',
    },
    {
      icon: <FiCheckCircle className="text-4xl" />,
      title: t('qaTesting'),
      description: t('qaDescription'),
      gradient: 'from-gray-700 to-gray-900',
      bgGradient: 'from-gray-50 to-gray-100',
    },
    {
      icon: <FiServer className="text-4xl" />,
      title: t('cloudDevOps'),
      description: t('cloudDescription'),
      gradient: 'from-primary-600 to-yellow-600',
      bgGradient: 'from-yellow-50 to-orange-50',
    },
    {
      icon: <FiBarChart2 className="text-4xl" />,
      title: t('dataAnalytics'),
      description: t('dataDescription'),
      gradient: 'from-black to-gray-800',
      bgGradient: 'from-gray-50 to-slate-100',
    },
  ];

  return (
    <Section id="services" className="bg-white">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
          Our Capabilities
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Comprehensive Technology Services
          <br />
          <span className="text-primary">
            Built for Scale
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your business with our cutting-edge technology solutions designed for enterprise excellence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
            data-testid={`service-card-${index}`}
          >
            {/* Gradient Background on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700">
                {service.description}
              </p>

              {/* Link */}
              <a
                href="#"
                className={`inline-flex items-center font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent hover:gap-2 transition-all duration-300`}
              >
                Explore Solution
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Corner Decoration */}
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-5 rounded-bl-full`}></div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      {/* <div className="mt-16 text-center">
        <p className="text-gray-600 mb-6">
          Need a custom solution for your business?
        </p>
        <button className="px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:bg-primary-600 text-white rounded-xl font-semibold shadow-large hover:shadow-glow transition-all duration-300 hover:scale-105">
          Schedule a Consultation
          <FiArrowRight className="inline-block ml-2" />
        </button>
      </div> */}
    </Section>
  );
};

export default ServicesSection;
