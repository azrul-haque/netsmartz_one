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
            ? 'bg-white shadow-md py-3'
            : 'bg-white/95 backdrop-blur-sm py-4'
        }`}
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Netsmartz
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.hasMenu ? (
                    <button
                      className="flex items-center text-gray-700 hover:text-primary-600 transition-colors font-medium"
                      onMouseEnter={() => setIsServicesOpen(true)}
                    >
                      {item.label}
                      <FiChevronDown className="ml-1 rtl:mr-1 rtl:ml-0" />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
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
                className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                aria-label="Toggle language"
              >
                <FiGlobe className="text-xl mr-2 rtl:mr-0 rtl:ml-2" />
                <span className="font-medium">{locale === 'en' ? 'العربية' : 'English'}</span>
              </button>

              <Button variant="primary" size="md">
                {t('common.contactUs')}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-primary-600 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
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
          className="fixed inset-0 z-40 lg:hidden bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed right-0 rtl:right-auto rtl:left-0 top-0 bottom-0 w-80 bg-white shadow-xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Netsmartz
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700"
                >
                  <FiX className="text-2xl" />
                </button>
              </div>

              <nav className="space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block py-2 text-gray-700 hover:text-primary-600 transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-8 space-y-4">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center w-full py-2 text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <FiGlobe className="text-xl mr-3 rtl:mr-0 rtl:ml-3" />
                  <span className="font-medium">{locale === 'en' ? 'العربية' : 'English'}</span>
                </button>

                <Button variant="primary" className="w-full">
                  {t('common.contactUs')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
