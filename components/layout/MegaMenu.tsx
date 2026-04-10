'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { FiCpu, FiCloud, FiShield, FiCheckCircle, FiServer, FiBarChart2 } from 'react-icons/fi';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  const t = useTranslations('services');

  const serviceCategories = [
    {
      title: 'AI',
      services: [
        { name: 'AI Agents Marketplace', href: '#ai-agents' },
        { name: 'AI Platforms', href: '#ai-platforms' },
        { name: 'AI Pods', href: '#ai-pods' },
        { name: 'AI/ML Services', href: '#ai-ml-services' },
      ],
    },
    {
      title: 'GCC',
      services: [
        { name: 'SaaS PODS', href: '#gcc' },
        { name: 'Executive Search Firms', href: '#bot' },
        { name: 'AI PODS', href: '#bot' },
        { name: 'Data PODS', href: '#bot' },
        { name: 'Microsoft Support PODS for MSPs', href: '#bot' },
        { name: 'Existing Indian GCCs scalling in the Tier2', href: '#bot' },
        { name: 'GCC for Mid-sized American Companies', href: '#bot' },
        { name: 'GCC - MEENA', href: '#' },
      ],
    },
    {
      title: 'Cloud, DevOps & Infrastructure',
      services: [
        { name: 'Cloud Modernization', href: '/services/managed-cloud-services' },
        { name: 'DevOps Engineering', href: '/services/devops' },
        { name: 'CI/CD & Automation', href: '/services/ci-cd-automation' },
        { name: 'Infrastructure Modernization', href: '/services/infrastructure-modernization' },
        { name: 'SRE (24x7)', href: '/services/site-reliability-engineering' },
      ],
    },
    {
      title: 'Data & Analytics',
      services: [
        { name: 'Data Management & Analytics', href: '#data-management' },
        { name: 'DataLake & Warehouse', href: '#datalake' },
        { name: 'Data Pods', href: '#data-pods' },
        { name: 'Data Visualization Services', href: '#data-viz' },
      ],
    },
    {
      title: 'Digital Engineering',
      services: [
        { name: 'Software as a Service', href: '#saas' },
        { name: 'Full-Stack Engineering', href: '/services/full-stack-engineering' },
        { name: 'Product Development Company', href: '/services/product-development-company' },
        { name: 'Custom Software Development', href: '#custom-dev' },
        { name: 'Mobile Application Development', href: '/services/mobile-app-development-company' },
        { name: 'Digital Experiences', href: '/services/digital-experiences' },
        { name: 'Digital Commerce', href: '#ecommerce' },
      ],
    },
    {
      title: 'Cybersecurity',
      services: [
        { name: 'Cybersecurity Assessment', href: '#security-assessment' },
        { name: 'Penetration Testing', href: '#pentest' },
        { name: 'SOC-as-a-Service', href: '#soc' },
        { name: 'MDR', href: '#mdr' },
        { name: 'Cloud Security', href: '#cloud-security' },
      ],
    },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
        onMouseEnter={onClose}
      />

      {/* Mega Menu Content */}
      <div
        className="fixed left-0 right-0 top-[72px] bg-[#2d3540] shadow-2xl z-50 border-t border-gray-700"
        onMouseLeave={onClose}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-12 gap-0">
            {/* Left Sidebar */}
            <div className="col-span-3 bg-[#1f2630] p-8 py-10">
              <h2 className="text-4xl font-bold text-white mb-6">Services</h2>
              <p className="text-gray-300 leading-relaxed">
                We transform businesses at the intersection of deep domain knowledge and emerging technologies expertise, helping organizations modernize operations, optimize processes, and accelerate digital transformation with scalable, future-ready solutions.
              </p>
            </div>

            {/* Services Grid */}
            <div className="col-span-9 p-8 py-10">
              <div className="grid grid-cols-3 gap-x-12 gap-y-10">
                {serviceCategories.map((category, index) => (
                  <div key={index}>
                    {/* Category Title with Underline */}
                    <h3 className="text-[#fe7725] font-bold text-lg mb-1">
                      {category.title}
                    </h3>
                    <div className="w-12 h-1 bg-[#fe7725] mb-4"></div>
                    
                    {/* Service Links */}
                    <ul className="space-y-3">
                      {category.services.map((service, idx) => (
                        <li key={idx}>
                          <a
                            href={service.href}
                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                            onClick={onClose}
                          >
                            {service.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;