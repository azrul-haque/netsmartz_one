'use client';

import React from 'react';
import { FiSearch, FiMessageSquare, FiCpu, FiZap, FiUsers, FiActivity } from 'react-icons/fi';

const UseCasesSection: React.FC = () => {
  const useCases = [
    {
      icon: <FiMessageSquare className="text-3xl" />,
      title: 'RAG-Based Assistants',
      description: 'AI pod for product documentation, tickets, and knowledge bases (KB) that include intelligent search.'
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: 'AI Copilots & Assistants',
      description: 'Help AI support pilots with accurate and relevant responses and ticket summaries.'
    },
    {
      icon: <FiSearch className="text-3xl" />,
      title: 'Search & Knowledge Discovery',
      description: 'Ensure semantic search over structured and unstructured data.'
    },
    {
      icon: <FiZap className="text-3xl" />,
      title: 'Workflow Automation',
      description: 'Automate using AI, with review points for accuracy, security, and compliance.'
    },
    {
      icon: <FiCpu className="text-3xl" />,
      title: 'SaaS AI Agents',
      description: 'Task-oriented SaaS AI agents directly embedded within product workflow processes.'
    },
    {
      icon: <FiActivity className="text-3xl" />,
      title: 'AI Operations & Monitoring',
      description: 'Deliver expense management, performance monitoring, and reliable production AI.'
    }
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#fe7725]/10 text-[#fe7725] text-sm font-semibold mb-4 border border-[#fe7725]/30">
            High-Impact Use Cases of Our AI Pods
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for Real Users, Real Data, & <span className="text-[#fe7725]">Real World</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            As an AI-powered SaaS software development company, Netsmartz designs Pods that are capable of delivering customer-facing and internal AI functionality that can easily integrate with your SaaS offering. The typical use cases for SaaS AI include:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              data-testid={`usecase-card-${index}`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
              <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;