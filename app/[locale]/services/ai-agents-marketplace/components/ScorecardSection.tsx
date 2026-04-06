'use client';

import React from 'react';
import { FiCheckCircle, FiTarget, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const ScorecardSection: React.FC = () => {
  const benefits = [
    {
      icon: <FiCheckCircle className="text-2xl" />,
      title: "Your AI maturity level",
      description: "From curious to leader, know where you stand"
    },
    {
      icon: <FiTarget className="text-2xl" />,
      title: "High-ROI automation opportunities",
      description: "Specific workflows ready for immediate impact"
    },
    {
      icon: <FiTrendingUp className="text-2xl" />,
      title: "A personalized deployment plan",
      description: "A clear list of agents you can launch within days"
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#fe7725]/10 text-[#fe7725] text-sm font-semibold mb-4 border border-[#fe7725]/30">
            Get Your AI Readiness Scorecard
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A diagnosis before you <span className="text-[#fe7725]">deploy AI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Before picking an agent, you need a roadmap. Our AI Adoption Scorecard is a 10-minute executive assessment that reveals:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              data-testid={`scorecard-benefit-${index}`}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-xl flex items-center justify-center text-white mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to turn AI vision into <span className="text-[#fe7725]">measurable outcomes?</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Run the AI Adoption Scorecard and identify your first deployable AI agent today. Or dive straight into the marketplace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-lg shadow-large hover:shadow-glow transition-all duration-300 hover:scale-105"
                data-testid="get-scorecard-btn"
              >
                Get Your AI Adoption Score
                <FiArrowRight className="text-xl" />
              </Link>
              <Link
                href="#agents"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                data-testid="explore-marketplace-btn"
              >
                Explore the Marketplace
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScorecardSection;
