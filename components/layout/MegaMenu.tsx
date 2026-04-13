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

  // Helper function to get relevant SVG icons for menu items
  const getMenuIcon = (label: string) => {
    const lowerLabel = label.toLowerCase();
    
    // AI & ML related
    if (lowerLabel.includes('ai') || lowerLabel.includes('ml') || lowerLabel.includes('agent')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9a1 1 0 112 0v4a1 1 0 11-2 0V9zm1-4a1 1 0 100 2 1 1 0 000-2z"/></svg>;
    }
    // Cloud related
    if (lowerLabel.includes('cloud') || lowerLabel.includes('infrastructure') || lowerLabel.includes('modernization')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/></svg>;
    }
    // DevOps & CI/CD
    if (lowerLabel.includes('devops') || lowerLabel.includes('ci/cd') || lowerLabel.includes('automation') || lowerLabel.includes('sre')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/></svg>;
    }
    // Data related
    if (lowerLabel.includes('data') || lowerLabel.includes('analytics') || lowerLabel.includes('warehouse') || lowerLabel.includes('visualization')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/></svg>;
    }
    // Development related
    if (lowerLabel.includes('software') || lowerLabel.includes('development') || lowerLabel.includes('full-stack') || lowerLabel.includes('custom') || lowerLabel.includes('mobile') || lowerLabel.includes('engineering')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>;
    }
    // Commerce & Business
    if (lowerLabel.includes('commerce') || lowerLabel.includes('ecommerce') || lowerLabel.includes('experience')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"/></svg>;
    }
    // Security related
    if (lowerLabel.includes('security') || lowerLabel.includes('penetration') || lowerLabel.includes('soc') || lowerLabel.includes('mdr')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd"/></svg>;
    }
    // SaaS & Pods & GCC
    if (lowerLabel.includes('saas') || lowerLabel.includes('pod') || lowerLabel.includes('gcc') || lowerLabel.includes('executive') || lowerLabel.includes('search')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/></svg>;
    }
    // Default icon
    return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg>;
  };


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
      title: 'Global Capability Center',
      services: [
        { name: 'GCC - MENA', href: '#' },
        { name: 'SaaS PODS', href: '#gcc' },
        { name: 'Executive Search Firms', href: '#bot' },
        { name: 'AI PODS', href: '#bot' },
        { name: 'Data PODS', href: '#bot' },
        { name: 'Microsoft Support PODS for MSPs', href: '#bot' },
        { name: 'Existing Indian GCCs scalling in the Tier2', href: '#bot' },
        { name: 'GCC for Mid-sized American Companies', href: '#bot' },
        
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
        { name: 'Cybersecurity Assessment', href: '/services/cybersecurity' },
        { name: 'Penetration Testing', href: '/services/vulnerability-assessment-penetration-testing' },
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
                            className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2"
                            onClick={onClose}
                          >
                            <span className="text-[#fe7725]">{getMenuIcon(service.name)}</span>
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