'use client';

import React from 'react';

const TailoredSolutionsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Tailored Solutions for <span className="text-[#fe7725]">Seamless IT Alignment and Growth</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              As your dedicated cloud-managed service partner, we bring deep expertise in delivering comprehensive solutions that align with your IT investments and technology goals. Our approach is centered on driving measurable results by customizing cloud services to meet the unique needs of your business.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/services/managed-cloud-services/cloud-management.jpg"
                alt="Tailored Cloud Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TailoredSolutionsSection;
