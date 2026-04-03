'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const partners = [
  { name: 'Microsoft', logo: '/assets/partner_logos/png/microsoft.png' },
  { name: 'AWS', logo: '/assets/partner_logos/png/microsoft-solutions.png' },
  { name: 'Google Cloud', logo: '/assets/partner_logos/png/microsoft-solutions1.png' },
  { name: 'IBM', logo: '/assets/partner_logos/png/microsoft-solutions-azure.jpg' },
  { name: 'Salesforce', logo: '/assets/partner_logos/png/salesforce.png' },
  { name: 'ServiceNow', logo: '/assets/partner_logos/png/servicenow.png' },
  { name: 'Adobe', logo: '/assets/partner_logos/png/adobe.png' },
  { name: 'Oracle', logo: '/assets/partner_logos/png/cmmi.png' },
  { name: 'SAP', logo: '/assets/partner_logos/png/google-partner.png' },
  { name: 'Azure', logo: '/assets/partner_logos/png/iso1.png' },
  { name: 'Cisco', logo: '/assets/partner_logos/png/iso2.png' },
  { name: 'Dell', logo: '/assets/partner_logos/png/ibm.png' },
];

const OurPartnersSection: React.FC = () => {
  const t = useTranslations('partners');
  const tCommon = useTranslations('common');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:scale-110"
              data-testid={`partner-${partner.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Fixed Size Box */}
              <div className="relative w-[180px] h-[90px]">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Partner Logo`}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/partners"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white rounded-lg font-semibold text-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
          >
            {tCommon('becomePartner')}
          </a>
        </div>

      </div>
    </section>
  );
};

export default OurPartnersSection;
