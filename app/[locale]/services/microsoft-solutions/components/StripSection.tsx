'use client';

import React from 'react';
import { motion } from 'framer-motion';

const StripSection: React.FC = () => {
  const stats = [
    { value: '26+', label: 'Years in Business' },
    { value: '10+', label: 'Locations' },
    { value: '1500+', label: 'Team Members' },
    { value: '500+', label: 'Successful Projects' },
  ];

  return (
    <section className="bg-gradient-to-r from-[#fe7725] to-[#ff9555] py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/90 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StripSection;
