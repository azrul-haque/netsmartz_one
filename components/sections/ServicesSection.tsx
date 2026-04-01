'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { FiCpu, FiCloud, FiShield, FiCheckCircle, FiServer, FiBarChart2 } from 'react-icons/fi';

const ServicesSection: React.FC = () => {
  const t = useTranslations('services');

  const services = [
    {
      icon: <FiCpu className="text-4xl text-primary-600" />,
      title: t('aiDevelopment'),
      description: t('aiDescription'),
    },
    {
      icon: <FiCloud className="text-4xl text-primary-600" />,
      title: t('saasEngineering'),
      description: t('saasDescription'),
    },
    {
      icon: <FiShield className="text-4xl text-primary-600" />,
      title: t('cybersecurity'),
      description: t('cybersecurityDescription'),
    },
    {
      icon: <FiCheckCircle className="text-4xl text-primary-600" />,
      title: t('qaTesting'),
      description: t('qaDescription'),
    },
    {
      icon: <FiServer className="text-4xl text-primary-600" />,
      title: t('cloudDevOps'),
      description: t('cloudDescription'),
    },
    {
      icon: <FiBarChart2 className="text-4xl text-primary-600" />,
      title: t('dataAnalytics'),
      description: t('dataDescription'),
    },
  ];

  return (
    <Section id="services">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Capabilities
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive Technology Services Built for Scale
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="text-center"
            data-testid={`service-card-${index}`}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <a
              href="#"
              className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
            >
              Explore
              <svg
                className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ServicesSection;
