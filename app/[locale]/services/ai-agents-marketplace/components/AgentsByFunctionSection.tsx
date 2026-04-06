'use client';

import React from 'react';
import { FiUsers, FiDollarSign, FiTrendingUp, FiCpu, FiTarget, FiShield, FiHeadphones, FiBarChart2 } from 'react-icons/fi';

const AgentsByFunctionSection: React.FC = () => {
  const agentCategories = [
    {
      icon: <FiUsers className="text-3xl" />,
      title: "HR",
      agents: ["Resume Screening Agent", "Job Description Generator Agent", "Performance Review Agent", "Employee Support Agent"]
    },
    {
      icon: <FiDollarSign className="text-3xl" />,
      title: "Finance",
      agents: ["Financial Forecasting Agent", "Expense Audit Agent", "Accounts Reconciliation Agent", "Budget Planning Agent"]
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: "Sales",
      agents: ["Lead Qualification Agent", "Deal Intelligence Agent", "Proposal Generation Agent", "CRM Update Agent"]
    },
    {
      icon: <FiCpu className="text-3xl" />,
      title: "Operations",
      agents: ["Workflow Orchestration Agent", "Task Coordination Agent", "Scheduling Optimization Agent", "Process Automation Agent"]
    },
    {
      icon: <FiTarget className="text-3xl" />,
      title: "Marketing",
      agents: ["Campaign Optimization", "Customer Segmentation", "Content Generation", "Market Intelligence Agent"]
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: "Compliance",
      agents: ["Access Governance", "Policy Compliance", "Risk Detection", "Regulatory Reporting Agent"]
    },
    {
      icon: <FiHeadphones className="text-3xl" />,
      title: "Customer Service",
      agents: ["Voice Support Agent", "Ticket Resolution Agent", "Customer Support Agent", "Customer Feedback Analysis Agent"]
    },
    {
      icon: <FiBarChart2 className="text-3xl" />,
      title: "Data and Analytics",
      agents: ["Database Query Agent", "BI Data Storyteller Agent", "Data Quality Monitoring Agent", "Insight Generation Agent"]
    }
  ];

  return (
    <section id="agents" className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#fe7725]/10 text-[#fe7725] text-sm font-semibold mb-4 border border-[#fe7725]/30">
            Meet Your New Digital Team
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Agents designed for <span className="text-[#fe7725]">every business function</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deploy specialized AI agents across your organization. Each agent is designed to automate a specific, high-impact workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agentCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              data-testid={`agent-category-${index}`}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.agents.map((agent, agentIndex) => (
                  <li key={agentIndex} className="text-sm text-gray-600 flex items-start">
                    <span className="text-[#fe7725] mr-2">•</span>
                    <span>{agent}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsByFunctionSection;