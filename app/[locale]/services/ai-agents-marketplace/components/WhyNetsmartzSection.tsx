'use client';

import React from 'react';
import { FiAward, FiClock, FiGlobe, FiCheckCircle, FiShield, FiCloud } from 'react-icons/fi';

const WhyNetsmartzSection: React.FC = () => {
  const stats = [
    {
      icon: <FiGlobe className="text-3xl" />,
      number: "26+",
      label: "Years of delivering complex technology solutions"
    },
    {
      icon: <FiCheckCircle className="text-3xl" />,
      number: "100%",
      label: "Production-ready AI for real-world use"
    },
    {
      icon: <FiAward className="text-3xl" />,
      number: "10+",
      label: "Global campuses with $100M+ invested"
    },
    {
      icon: <FiClock className="text-3xl" />,
      number: "<48",
      label: "Hours from selection to production"
    },
    {
      icon: <FiShield className="text-3xl" />,
      label: "Certifications",
      description: "SOC2, ISO 27001, CMMI Level 3"
    },
    {
      icon: <FiCloud className="text-3xl" />,
      label: "Platform agnostic",
      description: "Azure, AWS, GCP, OpenAI, Anthropic"
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-[#fe7725]">Netsmartz?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise AI delivery, backed by decades of discipline
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300"
              data-testid={`why-card-${index}`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                {stat.icon}
              </div>
              {stat.number && (
                <div className="text-5xl font-bold text-[#fe7725] mb-3">{stat.number}</div>
              )}
              <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
              {stat.description && (
                <p className="text-gray-400 text-sm">{stat.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNetsmartzSection;