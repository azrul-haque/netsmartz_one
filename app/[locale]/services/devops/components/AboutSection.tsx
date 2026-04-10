'use client';

import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/services/devops/about-section.jpg"
                alt="DevOps Team Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Speed, Security, and <span className="text-[#fe7725]">Scalability</span>
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              Managed DevOps and DevSecOps Services Redefined by Netsmartz!
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              Every company is different. We embrace your unique environment and offer customized solutions with over 40 security tools in our toolbelt. We are your single-source solution from SOAR to compliance to Managed Cloud Security. With over 1,500 top-tier talent, we have the manpower to protect your business easily.
            </p>
          </div>
        </div>

        {/* Microsoft Azure and AWS Proficiency */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8">
            Microsoft Azure and <span className="text-[#fe7725]">AWS Proficiency</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 px-8 py-6 rounded-xl">
              <svg className="w-32 h-32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 20L20 50H40L30 90L80 50H60L70 20H40Z" fill="#0078D4"/>
              </svg>
              <p className="text-lg font-semibold text-gray-900 mt-2">Microsoft Azure</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 px-8 py-6 rounded-xl">
              <svg className="w-32 h-32" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 30L20 80H45L35 110L90 60H65L75 30H40Z" fill="#FF9900"/>
              </svg>
              <p className="text-lg font-semibold text-gray-900 mt-2">Amazon AWS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
