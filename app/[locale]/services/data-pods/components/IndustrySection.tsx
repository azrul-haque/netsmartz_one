'use client';

import React from 'react';
import { FiActivity, FiCode } from 'react-icons/fi';
import Link from 'next/link';

const IndustrySection: React.FC = () => {
  const industries = [
    {
      icon: <FiActivity className="text-4xl" />,
      title: 'Data Pods for Healthcare Organizations',
      description: 'Healthcare AI fails when data quality and governance break down. Our Healthcare Data Pods stabilize clinical and operational data so analytics and AI can scale securely.',
      link: '/services/healthcare-data-pods',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80'
    },
    {
      icon: <FiCode className="text-4xl" />,
      title: 'Data Pods for SaaS Companies',
      description: 'SaaS AI underperforms when product and revenue data aren\'t production-ready. Our SaaS Data Pods fix data reliability, so churn, pricing, and growth analytics deliver real ROI.',
      link: '/services/saas-data-pods',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Data Pods Built for <span className="text-[#fe7725]">Industry-Specific Outcomes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              data-testid={`industry-${index}`}
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-xl flex items-center justify-center text-white mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{industry.description}</p>
                <Link
                  href={industry.link}
                  className="inline-flex items-center gap-2 text-[#fe7725] font-semibold hover:gap-3 transition-all duration-300"
                >
                  Explore Data Pods for {index === 0 ? 'Healthcare' : 'SaaS'}
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;