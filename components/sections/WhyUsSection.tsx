'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Section } from '../ui/Section';
import { FiUsers, FiZap, FiHeadphones, FiAward } from 'react-icons/fi';

const WhyUsSection: React.FC = () => {
  const t = useTranslations('whyUs');

  const benefits = [
    {
      icon: <FiUsers className="text-4xl" />,
      title: t('skilled'),
      description: t('skilledDesc'),
      gradient: 'from-primary to-orange-600',
    },
    {
      icon: <FiZap className="text-4xl" />,
      title: t('faster'),
      description: t('fasterDesc'),
      gradient: 'from-gray-800 to-black',
    },
    {
      icon: <FiHeadphones className="text-4xl" />,
      title: t('support'),
      description: t('supportDesc'),
      gradient: 'from-primary-600 to-red-600',
    },
    {
      icon: <FiAward className="text-4xl" />,
      title: t('security'),
      description: t('securityDesc'),
      gradient: 'from-yellow-600 to-primary',
    },
  ];

  return (
    <Section id="why-us" className="bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            More Than a Vendor.
            <br />
            <span className="text-primary">
              We're Your Strategic Partner.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-1"
              data-testid={`benefit-card-${index}`}
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-br ${benefit.gradient} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="bg-white rounded-3xl shadow-large p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent mb-2">
                25+
              </div>
              <div className="text-sm text-gray-600 font-medium">Years Excellence</div>
            </div>
            <div className="text-center border-l border-gray-200">
              <div className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent mb-2">
                2000+
              </div>
              <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="text-center border-l border-gray-200">
              <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-red-600 bg-clip-text text-transparent mb-2">
                10+
              </div>
              <div className="text-sm text-gray-600 font-medium">Global Locations</div>
            </div>
            <div className="text-center border-l border-gray-200">
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-primary bg-clip-text text-transparent mb-2">
                4.8★
              </div>
              <div className="text-sm text-gray-600 font-medium">Client Rating</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyUsSection;
