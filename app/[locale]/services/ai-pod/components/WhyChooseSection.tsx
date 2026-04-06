'use client';

import React from 'react';
import { FiAward, FiCheckCircle, FiDollarSign, FiCode, FiCloud, FiLock } from 'react-icons/fi';

const WhyChooseSection: React.FC = () => {
  const reasons = [
    { icon: <FiAward className="text-2xl" />, text: '26+ years of enterprise delivery experience' },
    { icon: <FiCheckCircle className="text-2xl" />, text: 'Production AI, not prototypes' },
    { icon: <FiDollarSign className="text-2xl" />, text: 'Predictable cost & delivery timelines' },
    { icon: <FiCode className="text-2xl" />, text: 'Deep AI + traditional engineering under one roof' },
    { icon: <FiCloud className="text-2xl" />, text: 'Multi-cloud expertise (Azure, AWS, GCP)' },
    { icon: <FiLock className="text-2xl" />, text: 'Full IP ownership—no vendor lock-in' }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 border border-white/20">
              Why SaaS Leaders Choose AI Pods?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Execution Without <span className="text-[#fe7725]">Enterprise Risks</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Netsmartz AI Pods are designed for SaaS organizations that aim for real outcomes—not prolonged POCs. With enterprise-grade security, predictable costs, and AI accelerators, we help teams move faster without introducing operational, data engineering, or compliance risk.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                data-testid={`reason-card-${index}`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {reason.icon}
                </div>
                <span className="text-white font-medium">{reason.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;