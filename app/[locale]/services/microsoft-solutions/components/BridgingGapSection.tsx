'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiLayers, FiTrendingUp, FiZap, FiLink, FiCpu, FiShield } from 'react-icons/fi';

const BridgingGapSection: React.FC = () => {
  const features = [
    {
      icon: <FiLayers />,
      title: 'Unified Business Ops',
      description: 'One platform for every department.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Real-Time Insights',
      description: 'Data-driven decisions, not guesses.'
    },
    {
      icon: <FiZap />,
      title: 'Built to Scale & Adapt',
      description: 'Growth without technical friction.'
    },
    {
      icon: <FiLink />,
      title: 'Seamless Integrations',
      description: 'Connecting the tools you already use.'
    },
    {
      icon: <FiCpu />,
      title: 'AI-Powered Productivity',
      description: 'Leveraging Copilot for smarter workflows.'
    },
    {
      icon: <FiShield />,
      title: 'Secure Cloud Platform',
      description: 'Enterprise-grade protection for your data.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Bridging the Gap Between People and Processes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Microsoft solutions bring together data, processes, and people into a unified ecosystem, helping businesses operate smarter and scale faster with greater control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-[#fe7725] text-4xl mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BridgingGapSection;
