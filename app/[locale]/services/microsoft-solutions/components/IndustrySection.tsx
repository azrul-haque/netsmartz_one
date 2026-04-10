'use client';

import React from 'react';
import { motion } from 'framer-motion';

const IndustrySection: React.FC = () => {
  const industries = [
    'Construction',
    'Wholesale & Distribution',
    'Retail',
    'Manufacturing',
    'Field Service',
    'E-Commerce',
    'Financial Services'
  ];

  const industryImages = [
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5',
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
    'https://images.unsplash.com/photo-1764795849885-e226e3cabe87',
    'https://images.unsplash.com/photo-1647427060118-4911c9821b82',
    'https://images.unsplash.com/photo-1669216369047-ea1120729538',
    'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40'
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industry We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every industry operates differently, and so should your solution. Our Dynamics 365 solutions are tailored to your unique processes and industry needs, helping you operate more efficiently and effectively.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-64"
            >
              <img
                src={industryImages[index]}
                alt={industry}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-xl font-bold text-white">
                  {industry}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
