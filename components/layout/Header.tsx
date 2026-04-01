'use client';

import React, { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { FiMenu, FiX, FiChevronDown, FiGlobe, FiPhone, FiMail } from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';

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

  const handleLanguageSwitch = () => {
    const newLocale = locale === 'en' ? 'ar' : 'en';
    console.log('Language switch:', { from: locale, to: newLocale, pathname });
    router.push(pathname, { locale: newLocale });
    // Force reload to ensure all content updates
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  const megaMenus: Record<string, any> = {
    services: {
      title: 'Services',
      desc: 'We transform businesses at the intersection of deep domain knowledge and emerging technologies expertise.',
      categories: [
        { title: 'AI', links: ['AI Agents Marketplace', 'AI Platforms', 'AI Pods', 'AI/ML Services'] },
        { title: 'GCC', links: ['Global Capability Centers', 'Build-Operate-Transfer'] },
        { title: 'Cloud, DevOps & Infrastructure', links: ['Cloud Modernization', 'DevOps Engineering', 'CI/CD & Automation', 'Infrastructure Modernization', 'SRE (24×7)'] },
        { title: 'Data & Analytics', links: ['Data Management & Analytics', 'DataLake & Warehouse', 'Data Pods', 'Data Visualization Services'] },
        { title: 'Digital Engineering', links: ['Software as a Service', 'Full-Stack Engineering', 'Custom Software Development', 'Mobile Application Development', 'Digital Commerce'] },
        { title: 'Cybersecurity', links: ['Cybersecurity Assessment', 'Penetration Testing', 'SOC-as-a-Service', 'MDR', 'Cloud Security', 'Identity & Access Security'] },
        { title: 'Business Applications & Platforms', links: ['Microsoft Solutions', 'Salesforce Solutions', 'ServiceNow Solutions', 'Adobe Solutions', 'IBM Solutions'] },
        { title: 'Quality Engineering', links: ['Test Automation', 'AI Powered Testing', 'AI Powered QE', 'Performance Testing', 'Regression Testing', 'Mobile & Web App Testing', 'Functional Testing', 'QA Pods'] },
        { title: 'Data Centers', links: [] },
        { title: 'Private Equity', links: [] }
      ]
    },
    industries: {
      title: 'Industries',
      desc: 'Delivering industry-specific solutions powered by deep domain expertise.',
      categories: [
        { title: '', links: ['Construction & Real Estate', 'Healthcare & Life Sciences', 'Technology & SaaS', 'Telecommunication', 'Manufacturing & Logistics', 'Retail', 'Media & Entertainment', 'Travel & Tourism', 'Non Profit & Public Sector', 'F & B', 'Aerospace', 'E-Commerce'] }
      ]
    },
    ai: {
      title: 'Artificial Intelligence',
      desc: 'Leading the AI revolution with cutting-edge intelligent automation solutions.',
      categories: [
        { title: 'AI Platforms', links: ['Salesforce Agentforce', 'ServiceNow Now Assist', 'Microsoft Copilot', 'IBM WatsonX'] },
        { title: 'AI Solutions', links: ['AI for Construction', 'AI for Healthcare', 'AI for SaaS', 'Manufacturing AI', 'Retail Ecommerce AI', 'Generative AI'] },
        { title: 'AI Marketplace', links: ['AI Agents Marketplace'] }
      ]
    },
    products: {
      title: 'Products',
      desc: 'Innovative SaaS products and platforms designed for the modern enterprise.',
      categories: [
        { title: 'Products', links: ['ProjectPro', 'CFPro', 'AgentSmartz', 'Construction365', 'PropSmartz', 'AI Talent Solution'] }
      ]
    },
    partners: {
      title: 'Partners',
      desc: 'Strategic alliances with global technology leaders.',
      categories: [
        { title: '', links: ['Microsoft Partner', 'IBM Partner', 'Adobe Partner', 'Salesforce Partner', 'ServiceNow Partner', 'AWS Partner', 'Google Partner', 'Crowdstrike Partner', 'SentinelOne Partner'] }
      ]
    },
    about: {
      title: 'About',
      desc: '25+ years of excellence in technology innovation',
      categories: [
        { title: 'Company', links: ['Our Story', 'Leaders', 'Awards and Recognition', 'School of AI & Cybersecurity', 'Innovation Labs'] },
        { title: 'Global Locations', links: ['Rochester, NY', 'Vancouver, BC', 'Toronto, ON', 'Dubai', 'Singapore', 'Melbourne', 'Mohali', 'Gurugram', 'Noida'] },
        { title: 'Culture', links: ['Talent Stories', 'Giving Back', 'CSR', 'Sustainability'] }
      ]
    },
    resources: {
      title: 'Resources',
      desc: 'Insights, research, and thought leadership.',
      categories: [
        { title: 'Customer Success', links: ['Case Studies', 'Testimonials', 'Certifications', 'Events & Media'] },
        { title: 'Thought Leadership', links: ['Blogs', 'Expert Q&A', 'Whitepapers', 'Industry Reports', 'Podcasts'] }
      ]
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white py-2">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+18886618967" className="flex items-center gap-2 hover:text-black transition-colors">
                <FiPhone />
                <span className="hidden sm:inline">+1-888-661-8967</span>
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
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
        <nav className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="text-3xl font-bold">
              <span className="text-[#1a1a1a]">Nets</span>
              <span className="text-[#fe7725]">martz</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {['services', 'industries', 'ai', 'products', 'partners', 'about', 'resources'].map((key) => (
                <div key={key} className="nav-item relative">
                  <button 
                    onMouseEnter={() => setActiveMenu(key)}
                    className="text-[#1a1a1a] hover:text-[#fe7725] font-medium text-sm flex items-center gap-1 transition-colors"
                  >
                    {megaMenus[key].title}
                    <FiChevronDown className="text-xs" />
                  </button>

                  {activeMenu === key && (
                    <div 
                      className="fixed left-0 right-0 bg-white border-t border-gray-200 shadow-2xl"
                      style={{ top: isScrolled ? '70px' : '104px', zIndex: 60 }}
                      onMouseEnter={() => setActiveMenu(key)}
                      onMouseLeave={() => setActiveMenu(null)}
                    >
                      <div className="container mx-auto px-6 max-w-7xl py-8">
                        <div className="flex gap-8">
                          <div className="w-[35%] pr-8 border-r border-gray-200">
                            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">{megaMenus[key].title}</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">{megaMenus[key].desc}</p>
                          </div>
                          <div className="w-[65%] max-h-[400px] overflow-y-auto">
                            <div className="grid grid-cols-3 gap-x-12 gap-y-8">
                              {megaMenus[key].categories.map((cat: any, idx: number) => (
                                <div key={idx}>
                                  {cat.title && <h3 className="text-sm font-semibold text-[#fe7725] mb-3">{cat.title}</h3>}
                                  <ul className="space-y-2">
                                    {cat.links.map((link: string, linkIdx: number) => (
                                      <li key={linkIdx}>
                                        <a href="#" className="text-sm text-gray-700 hover:text-[#fe7725] transition-colors">{link}</a>
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
              <a href="#contact" className="text-[#1a1a1a] hover:text-[#fe7725] font-medium text-sm transition-colors">Contact</a>
              <a href="#careers" className="text-[#1a1a1a] hover:text-[#fe7725] font-medium text-sm transition-colors">Career</a>
              
              <button onClick={handleLanguageSwitch} className="flex items-center gap-1 text-[#1a1a1a] hover:text-[#fe7725] font-medium text-sm transition-colors">
                <FiGlobe />
                {locale.toUpperCase()}
              </button>
            </div>

            {/* CTA */}
            <a href="#contact" className="hidden lg:block px-6 py-3 bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all">
              Get Started
            </a>

            {/* Mobile Toggle */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden text-[#1a1a1a]">
              {isMobileMenuOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-white overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between mb-8">
                <div className="text-2xl font-bold"><span className="text-[#1a1a1a]">Nets</span><span className="text-[#fe7725]">martz</span></div>
                <button onClick={() => setIsMobileMenuOpen(false)}><FiX className="text-2xl" /></button>
              </div>
              <nav className="space-y-4">
                {Object.keys(megaMenus).map((key) => (
                  <div key={key}>
                    <button onClick={() => setActiveMenu(activeMenu === key ? null : key)} className="w-full flex justify-between py-2 text-[#1a1a1a] hover:text-[#fe7725] font-medium">
                      {megaMenus[key].title}
                      <FiChevronDown className={`transition-transform ${activeMenu === key ? 'rotate-180' : ''}`} />
                    </button>
                    {activeMenu === key && (
                      <div className="ml-4 mt-2 space-y-2">
                        {megaMenus[key].categories.map((cat: any, idx: number) => (
                          <div key={idx}>
                            {cat.title && <div className="text-xs font-semibold text-[#fe7725] mt-2">{cat.title}</div>}
                            {cat.links.map((link: string, linkIdx: number) => (
                              <a key={linkIdx} href="#" className="block py-1 text-sm text-gray-700 hover:text-[#fe7725]">{link}</a>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a href="#contact" className="block py-2 text-[#1a1a1a] hover:text-[#fe7725] font-medium">Contact</a>
                <a href="#careers" className="block py-2 text-[#1a1a1a] hover:text-[#fe7725] font-medium">Career</a>
              </nav>
              <a href="#contact" className="block mt-6 px-6 py-3 bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white rounded-lg font-semibold text-center">
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