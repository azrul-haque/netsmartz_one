'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter } from '@/i18n/routing';
import { FiMenu, FiX, FiChevronDown, FiGlobe } from 'react-icons/fi';
import { Button } from '../ui/Button';
import MegaMenu from './MegaMenu';

const Header: React.FC = () => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    router.replace('/', { locale: newLocale });
  };

  const navItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.services'), href: '#services', hasMenu: true },
    { label: t('nav.industries'), href: '#industries' },
    { label: t('nav.caseStudies'), href: '#case-studies' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.careers'), href: '#careers' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-lg shadow-medium py-4'
            : 'bg-white/80 backdrop-blur-sm py-6'
        }`}
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl mr-3 group-hover:scale-110 transition-transform">
                  N
                </div>
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Netsmartz
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.hasMenu ? (
                    <button
                      className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50"
                      onMouseEnter={() => setIsServicesOpen(true)}
                    >
                      {item.label}
                      <FiChevronDown className="ml-1 rtl:mr-1 rtl:ml-0 text-sm" />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-blue-50 block"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
                aria-label="Toggle language"
              >
                <FiGlobe className="text-xl mr-2 rtl:mr-0 rtl:ml-2" />
                <span className="font-medium text-sm">{locale === 'en' ? 'AR' : 'EN'}</span>
              </button>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold shadow-md hover:shadow-large transition-all duration-300 hover:scale-105"
              >
                {t('common.contactUs')}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="text-3xl" />
              ) : (
                <FiMenu className="text-3xl" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mega Menu */}
      {isServicesOpen && (
        <MegaMenu
          isOpen={isServicesOpen}
          onClose={() => setIsServicesOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"></div>
          
          {/* Menu Panel */}
          <div
            className="absolute right-0 rtl:right-auto rtl:left-0 top-0 bottom-0 w-80 bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl mr-3">
                    N
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Netsmartz
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-700 hover:text-blue-600"
                >
                  <FiX className="text-2xl" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="space-y-2 mb-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Actions */}
              <div className="space-y-4 pt-6 border-t border-gray-200">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center w-full py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <FiGlobe className="text-xl mr-3 rtl:mr-0 rtl:ml-3" />
                  <span className="font-medium">{locale === 'en' ? 'العربية' : 'English'}</span>
                </button>

                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold shadow-md"
                >
                  {t('common.contactUs')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
