'use client';

import React from 'react';
import { FiCheck } from 'react-icons/fi';

const WhoThisWorksForSection: React.FC = () => {
  const audiences = [
    "SaaS companies building or scaling products",
    "Businesses launching new digital platforms",
    "Teams struggling with slow-release cycles",
    "Organizations dealing with fragmented engineering efforts",
    "Companies modernizing legacy applications"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Who This Works Best For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#fe7725] hover:bg-orange-50 transition-all"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-[#fe7725] rounded-full flex items-center justify-center mt-0.5">
                  <FiCheck className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-800 text-lg font-medium">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisWorksForSection;
