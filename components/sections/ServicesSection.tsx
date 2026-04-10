'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Section } from '../ui/Section';
import { FiArrowRight } from 'react-icons/fi';

const ServicesSection: React.FC = () => {
  const t = useTranslations('services');
  const tNav = useTranslations('nav');
  const tSection = useTranslations('servicesSection');

  const services = [
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
        </svg>
      ),
      title: 'AI Marketplace',
      description: 'Access pre-built AI agents and intelligent automation solutions designed to accelerate your digital transformation with minimal integration effort.',
      gradient: 'from-purple-500 to-indigo-600',
      bgGradient: 'from-purple-50 to-indigo-50',
      link: '/services/ai-agents-marketplace'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd"/>
        </svg>
      ),
      title: 'Cybersecurity',
      description: 'Comprehensive security assessment, penetration testing, and 24/7 SOC services to protect your critical assets from evolving cyber threats.',
      gradient: 'from-red-500 to-orange-600',
      bgGradient: 'from-red-50 to-orange-50',
      link: '/services/cybersecurity'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
        </svg>
      ),
      title: 'Global Capability Center',
      description: 'Build, scale, and operate dedicated offshore development centers with top-tier talent across AI, SaaS, Data, and QA engineering teams.',
      gradient: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50',
      link: '/services/saas-pods'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 2h7v7H2V2zm9 0h7v7h-7V2zM2 11h7v7H2v-7zm9 0h7v7h-7v-7z"/>
        </svg>
      ),
      title: 'Microsoft Solutions',
      description: 'End-to-end Microsoft ecosystem integration including Azure, Dynamics 365, Power Platform, and Microsoft 365 for enterprise digital transformation.',
      gradient: 'from-blue-600 to-blue-800',
      bgGradient: 'from-blue-50 to-blue-100',
      link: '/services/business-apps/microsoft'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
        </svg>
      ),
      title: 'Salesforce',
      description: 'Salesforce implementation, customization, and integration services powered by certified architects and developers to maximize your CRM ROI.',
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-50 to-blue-50',
      link: '/services/business-apps/salesforce'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
        </svg>
      ),
      title: 'ServiceNow',
      description: 'ServiceNow implementation and automation services to streamline IT operations, enhance workflow efficiency, and accelerate service delivery.',
      gradient: 'from-green-500 to-teal-600',
      bgGradient: 'from-green-50 to-teal-50',
      link: '/services/business-apps/servicenow'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"/>
          <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"/>
          <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"/>
        </svg>
      ),
      title: 'Data & Analytics',
      description: 'Unified data management, lakehouse architecture, real-time analytics, and AI-powered insights to transform raw data into strategic business value.',
      gradient: 'from-indigo-500 to-purple-600',
      bgGradient: 'from-indigo-50 to-purple-50',
      link: '/services/data-management-analytics'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
          <path fillRule="evenodd" d="M10 7a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1H8a1 1 0 110-2h1V8a1 1 0 011-1z" clipRule="evenodd"/>
        </svg>
      ),
      title: 'Cloud & DevOps',
      description: 'Cloud migration, infrastructure modernization, CI/CD automation, and 24/7 SRE services for scalable, resilient, and high-performing systems.',
      gradient: 'from-sky-500 to-blue-600',
      bgGradient: 'from-sky-50 to-blue-50',
      link: '/services/managed-cloud-services'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      ),
      title: 'Quality Engineering',
      description: 'AI-powered testing, test automation, performance engineering, and comprehensive QA services to ensure flawless software delivery at speed.',
      gradient: 'from-emerald-500 to-green-600',
      bgGradient: 'from-emerald-50 to-green-50',
      link: '/services/quality/test-automation'
    },
  ];

  return (
    <Section id="services" className="bg-white">
      <div className="text-center mb-16">
        {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
          {tSection('badge')}
        </div> */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {tSection('title')}
          <br />
          <span className="text-[#fe7725]">
            {tSection('titleHighlight')}
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {tSection('subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 border border-gray-100 hover:border-transparent hover:-translate-y-2"
            data-testid={`service-card-${index}`}
          >
            {/* Hover Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

            <div className="relative z-10">
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700">
                {service.description}
              </p>

              {/* Link */}
              <a
                href={service.link}
                className={`inline-flex items-center font-semibold bg-[#fe7725] bg-clip-text text-transparent hover:gap-2 transition-all duration-300`}
              >
                {tNav('exploreSolution')}
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform text-[#fe7725]" />
              </a>
            </div>

            {/* Corner Decoration */}
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-5 rounded-bl-full`}></div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ServicesSection;
