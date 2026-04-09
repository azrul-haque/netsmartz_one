'use client';

import React from 'react';
import { FiTrendingUp, FiTarget, FiShoppingCart, FiMonitor, FiLock, FiMapPin } from 'react-icons/fi';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: FiTrendingUp,
      text: "All-time high customer engagement (Avg. time on website)"
    },
    {
      icon: FiTarget,
      text: "Brand differentiation ahead of the competition"
    },
    {
      icon: FiShoppingCart,
      text: "Higher CRO, orders, and ROI"
    },
    {
      icon: FiMonitor,
      text: "Immersive experience on each channel"
    },
    {
      icon: FiLock,
      text: "Headless commerce with industry-leading security"
    },
    {
      icon: FiMapPin,
      text: "Stay on top of customers' journey"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#fe7725] to-orange-600">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-white/90 font-semibold text-sm uppercase tracking-wider mb-2">Extra edge for your brand</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            The Benefits
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Revenue growth and customer loyalty is a direct result of impeccable customer experiences.
          </p>
        </div>

        {/* First row: 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {benefits.slice(0, 3).map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#fe7725]" />
                  </div>
                  <p className="text-white text-lg font-medium pt-2">{benefit.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Second row: 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.slice(3, 6).map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index + 3}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#fe7725]" />
                  </div>
                  <p className="text-white text-lg font-medium pt-2">{benefit.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;