'use client';

import React from 'react';
import { FiDatabase, FiBarChart2 } from 'react-icons/fi';

const DualPillarsSection: React.FC = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Data Management & Analytics—<span className="text-[#fe7725]">Unified in One Platform</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-xl flex items-center justify-center text-white mb-6">
              <FiDatabase className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Management</h3>
            <p className="text-gray-600 leading-relaxed">
              We help you build a strong data foundation by integrating, organizing, and governing data across systems. This ensures consistency, reliability, and scalability as your data grows.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-xl flex items-center justify-center text-white mb-6">
              <FiBarChart2 className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics & Business Intelligence</h3>
            <p className="text-gray-600 leading-relaxed">
              On top of that foundation, we enable real-time analytics and intuitive dashboards—turning raw data into actionable insights for faster, smarter decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualPillarsSection;