'use client';

import React from 'react';
import { FiFileText } from 'react-icons/fi';

const BriefSection: React.FC = () => {
  return (
    <section className="py-10 bg-gradient-to-r from-[#fe7725] to-[#ff9555]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI ROI Starts with Data Reliability
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              A concise executive brief on fixing data foundations, restoring trust in analytics, and scaling AI safely in 90 days.
            </p>
          </div>
          <div>
            <a
              href="#download"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#fe7725] rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              data-testid="download-brief-btn"
            >
              <FiFileText className="text-2xl" />
              Download the Executive Brief
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefSection;