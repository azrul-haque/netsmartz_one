'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
          alt="Microsoft Dynamics 365 Solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-7xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          AI-powered. Enterprise-ready.<br />
          Microsoft Dynamics 365 Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-200 max-w-3xl mx-auto"
        >
          No more chasing data. No more disconnected teams. Just Microsoft Solutions, built to give your business the clarity it needs to move faster, every day.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
