'use client';

import React from 'react';
import { FiCheckCircle, FiX } from 'react-icons/fi';

const TargetAudienceSection: React.FC = () => {
  const idealFor = [
    'Growth-stage & enterprise SaaS companies',
    'CTOs & VPs of engineering shipping AI into live products',
    'Teams needing rapid AI execution without hiring',
    'Organizations seeking predictable cost and delivery',
    'SaaS products requiring governance, security, and compliance'
  ];

  const notIdealFor = [
    'Research-only or experimental AI initiatives',
    'One-off chatbot demos or proof-of-concept builds',
    'Teams without a defined path to production',
    'Ad-hoc AI efforts with unclear ownership',
    'Teams unwilling to embed AI into core product workflows'
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#fe7725]/10 text-[#fe7725] text-sm font-semibold mb-4 border border-[#fe7725]/30">
            Who Are Netsmartz AI Pods Built For?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Designed for SaaS Teams <span className="text-[#fe7725]">Focused on Execution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            AI development pods for SaaS are purpose-built for organizations that want to deploy production-grade AI features, not run isolated pilots. This model is best if you need speed, governance, and predictable delivery without adding permanent headcount or operational risk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ideal For */}
          <div className="bg-white border border-green-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white">
                <FiCheckCircle className="text-xl" />
              </div>
              Ideal For
            </h3>
            <ul className="space-y-3">
              {idealFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FiCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Ideal For */}
          <div className="bg-white border border-red-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white">
                <FiX className="text-xl" />
              </div>
              Not Ideal For
            </h3>
            <ul className="space-y-3">
              {notIdealFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FiX className="text-red-500 text-xl flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;