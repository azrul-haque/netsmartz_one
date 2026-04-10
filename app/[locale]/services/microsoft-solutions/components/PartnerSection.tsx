'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PartnerSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#fe7725] to-[#ff9555]">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success with Microsoft Solutions Starts with the Right Partner
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerSection;
