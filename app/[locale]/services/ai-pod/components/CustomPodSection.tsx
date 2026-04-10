'use client';

import React from 'react';
import { FiSettings, FiLayers, FiTool, FiShield } from 'react-icons/fi';
import Link from 'next/link';

const CustomPodSection: React.FC = () => {
  const customOptions = [
    { icon: <FiLayers className="text-2xl" />, text: 'Pod size and team composition' },
    { icon: <FiSettings className="text-2xl" />, text: 'Key AI implementation focus areas' },
    { icon: <FiTool className="text-2xl" />, text: 'Engagement model (Dedicated, Hybrid, On-demand)' },
    { icon: <FiShield className="text-2xl" />, text: 'Advanced capabilities like data engineering, cybersecurity' }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-orange-50 via-white to-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#fe7725]/10 text-[#fe7725] text-sm font-semibold mb-6 border border-[#fe7725]/30">
              Build Your Custom AI Pod
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tailored to Your Unique <span className="text-[#fe7725]">SaaS Needs</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              For today's complex and evolving SaaS platforms, our custom AI pod lets you design the exact team you need to scale your SaaS business. Tell us about your SaaS requirements—we'll design the right AI development pod for SaaS, backed by an AI powered software development company focused on building scalable, high-impact SaaS solutions.
            </p>

            <div className="space-y-4 mb-8">
              {customOptions.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4"
                  data-testid={`custom-option-${index}`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    {option.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{option.text}</span>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-lg shadow-large hover:shadow-glow transition-all duration-300 hover:scale-105"
              data-testid="design-pod-btn"
            >
              Design Your Own AI Pod Now
            </Link>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Custom AI Pod for SaaS"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPodSection;