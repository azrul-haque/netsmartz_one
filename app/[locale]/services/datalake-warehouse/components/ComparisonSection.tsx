'use client';

import React from 'react';
import { FiDatabase, FiBarChart2 } from 'react-icons/fi';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Data Lake vs Data Warehouse: <span className="text-[#fe7725]">And Why You Need Both</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-4">
            Many organizations treat this as an either/or decision—but it's not.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white mb-6">
              <FiDatabase className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Lake</h3>
            <p className="text-gray-600 leading-relaxed">
              A data lake allows you to store large volumes of raw data at scale—providing flexibility at the ingestion layer for diverse data types and formats.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-xl flex items-center justify-center text-white mb-6">
              <FiBarChart2 className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Data Warehouse</h3>
            <p className="text-gray-600 leading-relaxed">
              A data warehouse enables structured, high-performance analytics—optimizing performance at the analytics layer for fast, reliable insights.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#fe7725] to-[#ff9555] rounded-2xl p-8 text-center">
          <p className="text-2xl font-bold text-white">
            We help you design an architecture where both work together—ensuring flexibility at the ingestion layer and performance at the analytics layer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;