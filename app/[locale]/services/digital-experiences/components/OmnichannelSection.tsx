'use client';

import React from 'react';

const OmnichannelSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <p className="text-[#fe7725] font-semibold text-sm uppercase tracking-wider mb-2">Cross-channel excellence</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Customer-centric Omnichannel Experiences
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Leverage the power of exhilarating omnichannel experiences to delight customers with highly-personalized content, and digital assets being fed via multiple touchpoints to empower commerce.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Improve brand resonance among customers by increasing retention rates and brand advocacy, resulting in a higher CLV (customer lifetime value) - the holy grail for digital brands.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden">
              <img
                src="/images/services/digital-experiences/omnichannel.jpg"
                alt="Omnichannel Experience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OmnichannelSection;