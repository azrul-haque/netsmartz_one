'use client';

import React from 'react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 sm:p-12 shadow-lg">
          <svg className="w-12 h-12 text-[#fe7725] mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
            Partnering with Netsmartz for cybersecurity was one of our best decisions. Their team provided top-tier protection against threats, ensuring our data and systems remain secure 24/7. The proactive approach and quick response time have given us unparalleled peace of mind. Netsmartz is more than a service provider—they are a trusted partner in our success.
          </p>
          <div className="flex items-center">
            <div>
              <p className="font-semibold text-gray-900">— Anatolij Petrov</p>
              <p className="text-gray-600">DanuBenet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
