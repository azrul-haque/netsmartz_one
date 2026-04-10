'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const SolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dynamics');

  const tabs = [
    { id: 'dynamics', label: 'Dynamics 365 Biz Apps' },
    { id: 'power', label: 'Power Platform' },
    { id: 'copilot', label: 'Copilot AI' }
  ];

  const dynamicsSolutions = [
    {
      title: 'Dynamics 365 Business Central',
      description: 'An all-in-one solution for small and medium businesses to connect operations, gain real-time visibility, and make better, data-driven decisions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
    },
    {
      title: 'Dynamics 365 Finance & Supply Chain Management',
      description: 'Unify financial management and supply chain operations to improve visibility, control costs, and drive efficiency across your business.',
      image: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0'
    },
    {
      title: 'Dynamics 365 Field Service',
      description: 'Equip your technicians with AI-driven tools to improve first-time fix rates and deliver efficient, high-quality service.',
      image: 'https://images.unsplash.com/photo-1669101283206-480f531d0f47'
    },
    {
      title: 'Dynamics 365 Sales',
      description: 'Accelerate revenue with an AI-powered platform that helps track data, understand customer behavior, and optimize sales performance.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0'
    },
    {
      title: 'Dynamics 365 Customer Service',
      description: 'Deliver personalized experiences using data insights to resolve issues faster and build long-term customer relationships.',
      image: 'https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c'
    }
  ];

  const powerPlatform = [
    {
      title: 'Power BI',
      description: 'Turn data into real-time insights and interactive dashboards.'
    },
    {
      title: 'Power Apps',
      description: 'Build custom apps tailored to your business needs.'
    },
    {
      title: 'Power Automate',
      description: 'Automate workflows to save time and reduce manual effort.'
    },
    {
      title: 'Power Pages',
      description: 'Build secure, data-driven business websites with ease.'
    }
  ];

  const copilotFeatures = [
    'Reduce Manual Effort',
    'Faster Decision-Making',
    'Context-Aware Assistance',
    'Smarter Daily Workflows',
    'AI Across Business Apps'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Microsoft Solutions to Accelerate Your Business Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gain a competitive edge with AI-powered Microsoft solutions designed to improve efficiency, agility, and sustainable growth.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 text-lg font-semibold transition-colors relative ${
                activeTab === tab.id
                  ? 'text-[#fe7725]'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#fe7725]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {activeTab === 'dynamics' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {dynamicsSolutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {solution.description}
                    </p>
                    <a
                      href="#"
                      className="text-[#fe7725] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Learn more <FiArrowRight />
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'power' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            >
              {powerPlatform.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
              <div className="md:col-span-2 text-center mt-8">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#fe7725] font-semibold hover:gap-3 transition-all"
                >
                  Learn more <FiArrowRight />
                </a>
              </div>
            </motion.div>
          )}

          {activeTab === 'copilot' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-lg text-white">
                <h3 className="text-3xl font-bold mb-8 text-center">
                  Microsoft Copilot
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {copilotFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-[#fe7725] rounded-full"></div>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#fe7725] font-semibold hover:gap-3 transition-all"
                  >
                    Learn more <FiArrowRight />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
