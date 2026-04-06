'use client';

import React from 'react';
import { FiMonitor, FiActivity, FiTarget, FiUsers, FiTrendingUp } from 'react-icons/fi';

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      icon: <FiMonitor className="text-3xl" />,
      title: 'Interactive Dashboards',
      description: 'Enable users to explore data dynamically with intuitive, user-friendly interfaces, allowing teams to drill down, filter, and analyze data without relying on technical support.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80'
    },
    {
      icon: <FiActivity className="text-3xl" />,
      title: 'Real-Time Reporting',
      description: 'Move from static reports to live dashboards that reflect current business performance, ensuring decision-makers always have access to the most up-to-date and relevant insights.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80'
    },
    {
      icon: <FiTarget className="text-3xl" />,
      title: 'Unified Metrics & KPIs',
      description: 'Establish a single source of truth with standardized metrics across teams, eliminating discrepancies in reporting and aligning all stakeholders on consistent data definitions.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80'
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: 'Role-Based Views',
      description: 'Deliver tailored dashboards for leadership, operations, and functional teams, providing each user with relevant insights based on their role, goals, and decision-making needs.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80'
    },
    {
      icon: <FiTrendingUp className="text-3xl" />,
      title: 'Scalable Visualization Frameworks',
      description: 'Ensure dashboards evolve with your data, systems, and business needs, supporting growing data volumes and new use cases without compromising performance or usability.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80'
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Data Visualization That Drives <span className="text-[#fe7725]">Decisions—Not Just Reports</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Effective visualization is not about charts—it's about clarity, context, and usability. We help you build:
          </p>
        </div>

        {/* First row - 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {solutions.slice(0, 3).map((solution, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              data-testid={`solution-${index}`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-xl flex items-center justify-center text-white mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Second row - 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {solutions.slice(3, 5).map((solution, index) => (
            <div
              key={index + 3}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              data-testid={`solution-${index + 3}`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-xl flex items-center justify-center text-white mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;