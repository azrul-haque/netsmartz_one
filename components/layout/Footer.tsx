'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';

const Footer: React.FC = () => {
  const t = useTranslations('footer');
  const locale = useLocale();
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const companyLinks = [
    { label: t('aboutUs'), href: '#about' },
    { label: t('leadership'), href: '#leadership' },
    { label: t('careersFooter'), href: '#careers' },
    { label: t('newsEvents'), href: '#news' },
  ];

  const resourceLinks = [
    { label: t('blog'), href: '#blog' },
    { label: t('whitepapers'), href: '#whitepapers' },
    { label: t('caseStudiesFooter'), href: '#case-studies' },
    { label: t('documentation'), href: '#docs' },
  ];

  const servicesLinks = [
    { label: 'AI Development', href: '#ai' },
    { label: 'SaaS Engineering', href: '#saas' },
    { label: 'Cybersecurity', href: '#security' },
    { label: 'Cloud & DevOps', href: '#cloud' },
  ];

  const socialLinks = [
    { icon: <FiLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FiTwitter />, href: '#', label: 'Twitter' },
    { icon: <FiFacebook />, href: '#', label: 'Facebook' },
    { icon: <FiInstagram />, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-4">
              Netsmartz
            </div>
            <p className="text-sm text-gray-400 mb-4">
              {t('description')}
            </p>
            <div className="flex space-x-3 rtl:space-x-reverse">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t('company')}</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">{t('contactInfo')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiPhone className="text-primary-400 mt-1 mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0" />
                <a
                  href={`tel:${t('phone')}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('phone')}
                </a>
              </li>
              <li className="flex items-start">
                <FiMail className="text-primary-400 mt-1 mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0" />
                <a
                  href={`mailto:${t('email')}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('email')}
                </a>
              </li>
              <li className="flex items-start">
                <FiMapPin className="text-primary-400 mt-1 mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0" />
                <span className="text-gray-400">
                  {t('address')}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Netsmartz. {t('allRightsReserved')}
            </p>
            <div className="flex space-x-6 rtl:space-x-reverse">
              <a href="#privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                {t('privacy')}
              </a>
              <a href="#terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                {t('terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
