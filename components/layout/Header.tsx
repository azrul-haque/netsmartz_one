'use client';

import React, { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { FiMenu, FiX, FiChevronDown, FiGlobe, FiPhone, FiMail } from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';

const megaMenuData: Record<string, any> = {
  services: {
    title: 'Services',
    desc: 'We transform businesses with cutting-edge technology solutions',
    categories: [
      {
        title: 'AI',
        links: ['AI Agents Marketplace', 'AI Platforms', 'AI Pods', 'AI/ML Services']
      },
      {
        title: 'GCC',
        links: ['Global Capability Centers', 'Build-Operate-Transfer']
      },
      {
        title: 'Cloud, DevOps & Infrastructure',
        links: ['Cloud Modernization', 'DevOps Engineering', 'CI/CD & Automation', 'Infrastructure Modernization', 'SRE (24×7)']
      },
      {
        title: 'Data & Analytics',
        links: ['Data Management & Analytics', 'DataLake & Warehouse', 'Data Pods', 'Data Visualization Services']
      },
      {
        title: 'Digital Engineering',
        links: ['Software as a Service', 'Full-Stack Engineering', 'Custom Software Development', 'Mobile Application Development', 'Digital Commerce']
      },
      {
        title: 'Cybersecurity',
        links: ['Cybersecurity Assessment', 'Penetration Testing', 'SOC-as-a-Service', 'MDR', 'Cloud Security', 'Identity & Access Security']
      },
      {
        title: 'Business Applications',
        links: ['Microsoft Solutions', 'Salesforce Solutions', 'ServiceNow Solutions', 'Adobe Solutions']
      },
      {
        title: 'Quality Engineering',
        links: ['Test Automation', 'AI Powered Testing', 'Performance Testing', 'QA Pods']
      }
    ]
  },
  industries: {
    title: 'Industries',
    desc: 'Domain expertise across key industries',
    categories: [
      { title: 'Healthcare', links: ['Healthcare IT', 'Medical Devices', 'Pharma'] },
      { title: 'Financial Services', links: ['Banking', 'Insurance', 'Fintech'] },
      { title: 'Retail', links: ['E-commerce', 'Supply Chain'] },
      { title: 'Manufacturing', links: ['Smart Manufacturing', 'IoT'] }
    ]
  },
  resources: {
    title: 'Resources',
    desc: 'Insights and thought leadership',
    categories: [
      { title: 'Content', links: ['Blog', 'Case Studies', 'Whitepapers'] },
      { title: 'Tools', links: ['ROI Calculator', 'Assessment'] }
    ]
  }
};

const Header: React.FC = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <>
      {/* Top Bar - Orange */}
      <div className="bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white py-2">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+18886618967" className="flex items-center gap-2 hover:text-black transition-colors">
                <FiPhone />
                +1-888-661-8967
              </a>
              <a href="mailto:info@netsmartz.com" className="hidden md:flex items-center gap-2 hover:text-black transition-colors">
                <FiMail />
                info@netsmartz.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-black transition-colors"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-black transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-black transition-colors"><FaFacebookF /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
        dir={locale === 'ar' ? 'rtl' : 'ltr'}
      >
        <nav className="container mx-auto px-6 max-w-7xl relative">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <div className="text-3xl font-bold">
                <span className="text-[#1a1a1a]">Nets</span>
                <span className="text-[#fe7725]">martz</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {Object.keys(megaMenuData).map((key) => (
                <div
                  key={key}
                  className="nav-item relative"
                  onMouseEnter={() => setActiveMenu(key)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <a
                    href={`#${key}`}
                    className="text-[#1a1a1a] hover:text-[#fe7725] font-medium transition-colors text-sm flex items-center gap-1"
                  >
                    {megaMenuData[key].title}
                    <FiChevronDown className="text-xs" />
                  </a>
                  
                  {/* Mega Menu Dropdown */}
                  {activeMenu === key && (
                    <div className="absolute top-full left-0 right-0 w-screen bg-white border-t border-gray-200 shadow-2xl"
                         style={{ marginLeft: 'calc(-50vw + 50%)' }}>
                      <div className="container mx-auto px-6 max-w-7xl py-8">
                        <div className="flex gap-8">
                          <div className="w-[35%] pr-8 border-r border-gray-200">
                            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">
                              {megaMenuData[key].title}
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {megaMenuData[key].desc}
                            </p>
                          </div>
                          <div className="w-[65%] max-h-[400px] overflow-y-auto">
                            <div className="grid grid-cols-3 gap-x-12 gap-y-8">
                              {megaMenuData[key].categories.map((cat: any, idx: number) => (
                                <div key={idx}>
                                  <h3 className="text-sm font-semibold text-[#fe7725] mb-3">
                                    {cat.title}
                                  </h3>
                                  <ul className="space-y-2">
                                    {cat.links.map((link: string, linkIdx: number) => (
                                      <li key={linkIdx}>
                                        <a href="#" className="text-sm text-gray-700 hover:text-[#fe7725] transition-colors block">
                                          {link}
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
                  )}
                </div>
              ))}
              <a href="#ai" className="text-[#1a1a1a] hover:text-[#fe7725] font-medium transition-colors text-sm">AI</a>
              <a href="#products" className="text-[#1a1a1a] hover:text-[#fe7725] font-medium transition-colors text-sm">Products</a>
              <a href="#about" className="text-[#1a1a1a] hover:text-[#fe7725] font-medium transition-colors text-sm">About</a>
              <a href="#contact" className="text-[#1a1a1a] hover:text-[#fe7725] font-medium transition-colors text-sm">Contact</a>
              
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-[#1a1a1a] hover:text-[#fe7725] transition-colors text-sm font-medium"
              >
                <FiGlobe />
                {locale === 'en' ? 'AR' : 'EN'}
              </button>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden lg:block px-6 py-3 bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#1a1a1a]"
            >
              {isMobileMenuOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <div className="text-2xl font-bold">
                  <span className="text-[#1a1a1a]">Nets</span>
                  <span className="text-[#fe7725]">martz</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <FiX className="text-2xl" />
                </button>
              </div>

              <nav className="space-y-4">
                {Object.keys(megaMenuData).map((key) => (
                  <div key={key}>
                    <button
                      onClick={() => setActiveMenu(activeMenu === key ? null : key)}
                      className="w-full flex items-center justify-between py-3 text-[#1a1a1a] hover:text-[#fe7725] font-medium"
                    >
                      {megaMenuData[key].title}
                      <FiChevronDown className={`transition-transform ${activeMenu === key ? 'rotate-180' : ''}`} />
                    </button>
                    {activeMenu === key && (
                      <div className="ml-4 mt-2 space-y-3">
                        {megaMenuData[key].categories.map((cat: any, idx: number) => (
                          <div key={idx}>
                            <div className="text-sm font-semibold text-[#fe7725] mb-2">{cat.title}</div>
                            {cat.links.map((link: string, linkIdx: number) => (
                              <a key={linkIdx} href="#" className="block py-1 text-sm text-gray-700 hover:text-[#fe7725]">
                                {link}
                              </a>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a href="#ai" className="block py-3 text-[#1a1a1a] hover:text-[#fe7725] font-medium">AI</a>
                <a href="#products" className="block py-3 text-[#1a1a1a] hover:text-[#fe7725] font-medium">Products</a>
                <a href="#about" className="block py-3 text-[#1a1a1a] hover:text-[#fe7725] font-medium">About</a>
                <a href="#contact" className="block py-3 text-[#1a1a1a] hover:text-[#fe7725] font-medium">Contact</a>
              </nav>

              <a
                href="#contact"
                className="block mt-6 px-6 py-3 bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white rounded-lg font-semibold text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;