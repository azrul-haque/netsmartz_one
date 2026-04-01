'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Section } from '../ui/Section';

const StatsSection: React.FC = () => {
  const t = useTranslations('stats');

  const stats = [
    { number: '25+', label: t('yearsExcellence') },
    { number: '2000+', label: t('globalClients') },
    { number: '1500+', label: t('aiEngineers') },
    { number: '98%', label: t('retentionRate') },
  ];

  return (
    <Section background="gray" className="py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center animate-fade-up"
            style={{ animationDelay: `${index * 0.1}s` }}
            data-testid={`stat-${index}`}
          >
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
              {stat.number}
            </div>
            <div className="text-sm md:text-base text-gray-600 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default StatsSection;
