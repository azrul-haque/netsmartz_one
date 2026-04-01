'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { FiUsers, FiZap, FiHeadphones, FiAward } from 'react-icons/fi';

const WhyUsSection: React.FC = () => {
  const t = useTranslations('whyUs');

  const benefits = [
    {
      icon: <FiUsers className="text-4xl" />,
      title: t('skilled'),
      description: t('skilledDesc'),
    },
    {
      icon: <FiZap className="text-4xl" />,
      title: t('faster'),
      description: t('fasterDesc'),
    },
    {
      icon: <FiHeadphones className="text-4xl" />,
      title: t('support'),
      description: t('supportDesc'),
    },
    {
      icon: <FiAward className="text-4xl" />,
      title: t('security'),
      description: t('securityDesc'),
    },
  ];

  return (
    <Section background="gray" id="why-us">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {t('title')}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {benefits.map((benefit, index) => (
          <Card
            key={index}
            className="flex items-start space-x-4 rtl:space-x-reverse"
            data-testid={`benefit-card-${index}`}
          >
            <div className="text-primary-600 flex-shrink-0">{benefit.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Additional Stats Row */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
          <div className="text-sm text-gray-600">Years Excellence</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">2000+</div>
          <div className="text-sm text-gray-600">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
          <div className="text-sm text-gray-600">Global Locations</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary-600 mb-2">4.8★</div>
          <div className="text-sm text-gray-600">Client Rating</div>
        </div>
      </div>
    </Section>
  );
};

export default WhyUsSection;
