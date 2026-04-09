'use client';

import React from 'react';
import { FiMonitor, FiServer, FiLink, FiCloud } from 'react-icons/fi';

const EngineeringScopeSection: React.FC = () => {
  const scopes = [
    {
      icon: FiMonitor,
      title: "Frontend That Drives Experience",
      description: "We build responsive, high-performance interfaces that are intuitive, fast, and designed for real users—not just functional delivery.",
      image: "/images/services/full-stack-engineering/development-workspace.jpg"
    },
    {
      icon: FiServer,
      title: "Backend That Scales with Demand",
      description: "From architecture to execution, we ensure your backend can handle growth, complexity, and performance expectations without breaking.",
      image: "/images/services/full-stack-engineering/scalable-systems.jpg"
    },
    {
      icon: FiLink,
      title: "APIs & Integrations That Just Work",
      description: "We design clean, reliable integrations so your product connects seamlessly with internal systems and third-party platforms.",
      image: "/images/services/full-stack-engineering/cloud-infrastructure.jpg"
    },
    {
      icon: FiCloud,
      title: "Cloud-Native Foundations",
      description: "Your application is built for scalability from day one, ready to handle growth, traffic spikes, and evolving business needs.",
      image: "/images/services/full-stack-engineering/team-collaboration.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Engineering Scope Across the Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scopes.map((scope, index) => {
            const Icon = scope.icon;
            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={scope.image}
                    alt={scope.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#fe7725] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{scope.title}</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{scope.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EngineeringScopeSection;
