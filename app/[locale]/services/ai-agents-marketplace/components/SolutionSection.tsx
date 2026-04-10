'use client';

import React from 'react';
import { FiCheck, FiSettings, FiZap } from 'react-icons/fi';

const SolutionSection: React.FC = () => {
  const features = [
    {
      icon: <FiCheck className="text-3xl" />,
      title: "Pre-built, role-specific agents",
      description: "No building from scratch. Pick an agent, deploy it."
    },
    {
      icon: <FiSettings className="text-3xl" />,
      title: "Seamless enterprise integration",
      description: "Works with your CRM, ERP, data lakes, and communication platforms"
    },
    {
      icon: <FiZap className="text-3xl" />,
      title: "Fully managed lifecycle",
      description: "We deploy, monitor, optimize, and retrain. You focus on results."
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#fe7725]/10 backdrop-blur-sm text-[#fe7725] text-sm font-semibold mb-4 border border-[#fe7725]/30">
            Enter The AI Agents Marketplace
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            A library of digital workers, ready to <span className="text-[#fe7725]">plug and play</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Netsmartz gives you instant access to a growing library of production-ready AI agents. These aren't just models or APIs—they are fully integrated, managed digital workers designed to automate specific business workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              data-testid={`solution-feature-${index}`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-xl flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;