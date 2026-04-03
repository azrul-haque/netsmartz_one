'use client';

import React, { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const partners = [
  { name: 'Microsoft', logo: '/assets/partner_logos/png/microsoft.png' },
  { name: 'IBM', logo: '/assets/partner_logos/png/ibm.png' },
  { name: 'Adobe', logo: '/assets/partner_logos/png/adobe.png' },
  { name: 'Salesforce', logo: '/assets/partner_logos/png/salesforce.png' },
  { name: 'ServiceNow', logo: '/assets/partner_logos/png/servicenow.png' },
  { name: 'AWS', logo: '/assets/partner_logos/png/microsoft-solutions.png' },
  { name: 'Crowdstrike', logo: '/assets/partner_logos/png/microsoft-solutions1.png' },
  { name: 'SentinelOne', logo: '/assets/partner_logos/png/microsoft-solutions-azure.jpg' },
];

const OurPartnersSection: React.FC = () => {
  const t = useTranslations('partners');
  const tCommon = useTranslations('common');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // pixels per frame
    let animationId: number;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      
      // Reset scroll when we've scrolled past the first set
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      
      scrollContainer.scrollLeft = scrollAmount;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Duplicate partners for infinite scroll effect
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-20 bg-white overflow-hidden">
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

        {/* Scrolling Carousel */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Carousel Container */}
          <div 
            ref={scrollRef}
            className="flex gap-12 overflow-x-hidden py-8"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
                data-testid={`partner-${partner.name.toLowerCase().replace(/\s+/g, '-')}-${index}`}
              >
                {/* Partner Logo Container */}
                <div className="relative w-[200px] h-[100px] flex items-center justify-center bg-white rounded-xl shadow-md border border-gray-100 transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#fe7725]">
                  <div className="relative w-[180px] h-[90px] grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150 transform">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} Partner Logo`}
                      fill
                      className="object-contain p-2"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't load
                        e.currentTarget.src = '/assets/partner_logos/png/microsoft.png';
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
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
