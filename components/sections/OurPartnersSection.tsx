'use client';

import React from 'react';
import Image from 'next/image';

const partners = [
  { name: 'Microsoft', logo: '/assets/partner_logos/microsoft.svg', width: 140, height: 45 },
  { name: 'AWS', logo: '/assets/partner_logos/aws.svg', width: 80, height: 48 },
  { name: 'Google Cloud', logo: '/assets/partner_logos/google-cloud.svg', width: 140, height: 45 },
  { name: 'IBM', logo: '/assets/partner_logos/ibm.svg', width: 80, height: 45 },
  { name: 'Salesforce', logo: '/assets/partner_logos/salesforce.svg', width: 140, height: 45 },
  { name: 'ServiceNow', logo: '/assets/partner_logos/servicenow.svg', width: 140, height: 45 },
  { name: 'Adobe', logo: '/assets/partner_logos/adobe.svg', width: 100, height: 45 },
  { name: 'Oracle', logo: '/assets/partner_logos/oracle.svg', width: 120, height: 45 },
  { name: 'SAP', logo: '/assets/partner_logos/sap.svg', width: 100, height: 45 },
  { name: 'Azure', logo: '/assets/partner_logos/azure.svg', width: 120, height: 45 },
  { name: 'Cisco', logo: '/assets/partner_logos/cisco.svg', width: 100, height: 45 },
  { name: 'Dell', logo: '/assets/partner_logos/dell.svg', width: 80, height: 45 },
];

const OurPartnersSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hands with us and experience the difference of working with a trusted global AI-based technology partner. 
            Let's unlock new possibilities and accelerate your journey to success.
          </p>
        </div>

        {/* Partners Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110"
              data-testid={`partner-${partner.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} Partner Logo`}
                width={partner.width}
                height={partner.height}
                className="w-auto h-auto max-w-full"
                style={{ objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/partners"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white rounded-lg font-semibold text-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurPartnersSection;
