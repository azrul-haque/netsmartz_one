'use client';

import React from 'react';
import { FiAward, FiUsers, FiCpu, FiDatabase, FiGlobe } from 'react-icons/fi';

const WhyNetsmartzSection: React.FC = () => {
  const reasons = [
    { icon: <FiAward className="text-2xl" />, text: '26+ years of enterprise delivery experience' },
    { icon: <FiUsers className="text-2xl" />, text: '1,500+ global engineers' },
    { icon: <FiCpu className="text-2xl" />, text: 'Platform expertise (Microsoft Fabric + Power BI)' },
    { icon: <FiDatabase className="text-2xl" />, text: 'Data engineering depth' },
    { icon: <FiGlobe className="text-2xl" />, text: 'Enterprise-scale execution capability' }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why <span className="text-[#fe7725]">Netsmartz?</span>
          </h2>
        </div>

        {/* First row - 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {reasons.slice(0, 3).map((reason, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              data-testid={`reason-${index}`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                {reason.icon}
              </div>
              <span className="text-white font-medium">{reason.text}</span>
            </div>
          ))}
        </div>
        
        {/* Second row - 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.slice(3, 5).map((reason, index) => (
            <div
              key={index + 3}
              className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              data-testid={`reason-${index + 3}`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                {reason.icon}
              </div>
              <span className="text-white font-medium">{reason.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNetsmartzSection;
