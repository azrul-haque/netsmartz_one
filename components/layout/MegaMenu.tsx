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

  const services = [
    {
      icon: <FiCpu className="text-3xl" />,
      title: t('aiDevelopment'),
      description: t('aiDescription'),
      href: '#ai-development',
    },
    {
      icon: <FiCloud className="text-3xl" />,
      title: t('saasEngineering'),
      description: t('saasDescription'),
      href: '#saas-engineering',
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: t('cybersecurity'),
      description: t('cybersecurityDescription'),
      href: '#cybersecurity',
    },
    {
      icon: <FiCheckCircle className="text-3xl" />,
      title: t('qaTesting'),
      description: t('qaDescription'),
      href: '#qa-testing',
    },
    {
      icon: <FiServer className="text-3xl" />,
      title: t('cloudDevOps'),
      description: t('cloudDescription'),
      href: '#cloud-devops',
    },
    {
      icon: <FiBarChart2 className="text-3xl" />,
      title: t('dataAnalytics'),
      description: t('dataDescription'),
      href: '#data-analytics',
    },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        onClick={onClose}
        onMouseEnter={onClose}
      />

      {/* Mega Menu Content */}
      <div
        className="fixed left-0 right-0 top-[72px] bg-white shadow-2xl z-50 border-t border-gray-100"
        onMouseLeave={onClose}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.href}
                className="group p-6 rounded-lg hover:bg-gradient-to-br hover:from-primary-50 hover:to-secondary-50 transition-all duration-300"
                onClick={onClose}
              >
                <div className="text-primary-600 group-hover:text-primary-700 mb-3">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-700">
                  {service.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
