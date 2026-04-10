'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Your Modern Enterprise Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Connect with a certified Dynamics 365 consultant to discuss your business challenges and growth goals and explore the right solution for your needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:gap-3 transition-all"
          >
            Talk to an Expert
            <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
