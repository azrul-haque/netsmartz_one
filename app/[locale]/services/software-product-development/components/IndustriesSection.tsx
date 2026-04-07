'use client';

import React from 'react';
import { FiHeart, FiPhone, FiBriefcase, FiDollarSign, FiTruck, FiMapPin, FiTv, FiBook, FiHome, FiCoffee } from 'react-icons/fi';

const IndustriesSection: React.FC = () => {
  const industries = [
    { name: 'Healthcare', icon: <FiHeart className="text-2xl" /> },
    { name: 'Telecommunication', icon: <FiPhone className="text-2xl" /> },
    { name: 'Banking & Finance', icon: <FiDollarSign className="text-2xl" /> },
    { name: 'Manufacturing', icon: <FiBriefcase className="text-2xl" /> },
    { name: 'Retail & Commerce', icon: <FiCoffee className="text-2xl" /> },
    { name: 'Transport & Logistics', icon: <FiTruck className="text-2xl" /> },
    { name: 'Sports', icon: <FiHeart className="text-2xl" /> },
    { name: 'Food and Beverage', icon: <FiCoffee className="text-2xl" /> },
    { name: 'Media & Entertainment', icon: <FiTv className="text-2xl" /> },
    { name: 'Education Learning', icon: <FiBook className="text-2xl" /> },
    { name: 'Real Estate', icon: <FiHome className="text-2xl" /> },
    { name: 'Travel and Hospitality', icon: <FiMapPin className="text-2xl" /> },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Businesses <span className="text-[#fe7725]">across Industries</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We have a proven track record of helping businesses across numerous industries achieve growth and build a strong market presence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 group text-center"
            >
              <div className="w-14 h-14 bg-[#fe7725]/10 rounded-xl flex items-center justify-center text-[#fe7725] mb-4 mx-auto group-hover:scale-110 transition-transform">
                {industry.icon}
              </div>
              <h3 className="text-sm font-bold text-gray-900">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;