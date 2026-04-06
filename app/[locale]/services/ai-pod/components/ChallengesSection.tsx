'use client';

import React from 'react';
import { FiX, FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const ChallengesSection: React.FC = () => {
  const challenges = [
    { problem: 'AI features stuck in PoC', solution: 'Production-first pods', result: 'Live customer-facing AI in 6–8 weeks' },
    { problem: 'Shortage of AI engineers', solution: 'Dedicated AI engineers', result: 'No hiring, no ramp-up risks' },
    { problem: 'Rising engineering costs', solution: 'Predictable delivery', result: 'Fixed-scope, predictable spend' },
    { problem: 'Integration complexity', solution: 'AI pod embeds into stack', result: 'Zero disruption to existing SaaS architecture' },
    { problem: 'Slow time-to-market', solution: 'Pods to launch AI features without rework', result: 'Speed to market determining ARR growth' },
    { problem: 'Governance & compliance gaps', solution: 'Enterprise controls', result: 'Security, auditability, & compliance built-in' }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#fe7725]/10 text-[#fe7725] text-sm font-semibold mb-4 border border-[#fe7725]/30">
            Why SaaS Teams Struggle to Launch AI Features?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Does Netsmartz Assist with <span className="text-[#fe7725]">AI Pods</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            AI is a necessity for today's SaaS products—but execution is where most teams get stuck. The pressure that SaaS leaders feel when delivering advanced AI features is immense. That's exactly where Netsmartz AI pods as a service come in, working in tandem with your SaaS teams on delivery outcomes like shipped RAG assistants, AI search, automation, and much more.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-gray-900 to-black text-white">
                <th className="p-4 text-left font-semibold border border-gray-700">SaaS Challenges</th>
                <th className="p-4 text-left font-semibold border border-gray-700">Netsmartz Solution</th>
                <th className="p-4 text-left font-semibold border border-gray-700">Improved Framing with AI Pods</th>
              </tr>
            </thead>
            <tbody>
              {challenges.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors" data-testid={`challenge-row-${index}`}>
                  <td className="p-4 border border-gray-200">
                    <div className="flex items-start gap-2">
                      <FiX className="text-red-500 text-xl flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item.problem}</span>
                    </div>
                  </td>
                  <td className="p-4 border border-gray-200">
                    <div className="flex items-start gap-2">
                      <FiArrowRight className="text-[#fe7725] text-xl flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item.solution}</span>
                    </div>
                  </td>
                  <td className="p-4 border border-gray-200">
                    <div className="flex items-start gap-2">
                      <FiCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium">{item.result}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;