'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, useRouter } from '@/i18n/routing';
import { FiMenu, FiX, FiChevronDown, FiGlobe, FiPhone, FiMail } from 'react-icons/fi';

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
    { label: 'Services', href: '#services', hasDropdown: true },
    { label: 'Industries', href: '#industries' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
  ];

  const services = [
    { label: 'AI Development', href: '#ai-development' },
    { label: 'SaaS Engineering', href: '#saas-engineering' },
    { label: 'Cybersecurity', href: '#cybersecurity' },
    { label: 'QA & Testing', href: '#qa-testing' },
    { label: 'Cloud & DevOps', href: '#cloud-devops' },
    { label: 'Data & Analytics', href: '#data-analytics' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white py-2">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+18886618967" className="flex items-center gap-2 hover:text-primary transition-colors">
                <FiPhone className="text-primary" />
                +1-888-661-8967
              </a>
              <a href="mailto:info@netsmartz.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <FiMail className="text-primary" />
                info@netsmartz.com
              </a>
            </div>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <FiGlobe />
              {locale === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-medium' : 'bg-white'
        }`}
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="text-3xl font-bold">
                <span className="text-black">Nets</span>
                <span className="text-primary">martz</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  {item.hasDropdown ? (
                    <div
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button className="flex items-center text-gray-800 hover:text-primary transition-colors font-medium py-2">
                        {item.label}
                        <FiChevronDown className="ml-1 rtl:mr-1 rtl:ml-0" />
                      </button>
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-large rounded-lg overflow-hidden border border-gray-100">
                          {services.map((service) => (
                            <a
                              key={service.label}
                              href={service.href}
                              className="block px-6 py-3 text-gray-800 hover:bg-primary hover:text-white transition-colors"
                            >
                              {service.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a href={item.href} className="text-gray-800 hover:text-primary transition-colors font-medium">
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-primary hover:bg-primary-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md"
              >
                Contact Us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-800 hover:text-primary transition-colors"
            >
              {isMobileMenuOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div
            className="absolute right-0 rtl:right-auto rtl:left-0 top-0 bottom-0 w-80 bg-white shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            dir={locale === 'ar' ? 'rtl' : 'ltr'}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="text-2xl font-bold">
                  <span className="text-black">Nets</span>
                  <span className="text-primary">martz</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800">
                  <FiX className="text-2xl" />
                </button>
              </div>

              <nav className="space-y-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.hasDropdown ? (
                      <div>
                        <button 
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="w-full flex items-center justify-between py-3 px-4 text-gray-800 hover:bg-primary hover:text-white rounded-lg transition-colors font-medium"
                        >
                          {item.label}
                          <FiChevronDown className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isServicesOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {services.map((service) => (
                              <a
                                key={service.label}
                                href={service.href}
                                className="block py-2 px-4 text-gray-600 hover:text-primary rounded-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {service.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        className="block py-3 px-4 text-gray-800 hover:bg-primary hover:text-white rounded-lg transition-colors font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
              </nav>

              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full mt-6 px-6 py-3 bg-primary hover:bg-primary-600 text-white rounded-lg font-semibold transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;