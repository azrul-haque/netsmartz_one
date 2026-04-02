'use client';

import React, { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import Link from 'next/link';
import { FiMenu, FiX, FiChevronDown, FiGlobe, FiPhone, FiMail } from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';

// Type Definitions
interface MenuLink {
  label: string;
  href: string;
  external?: boolean;
}

interface MenuCategory {
  title: string;
  links: MenuLink[];
}

interface MegaMenu {
  title: string;
  desc: string;
  categories: MenuCategory[];
}

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

  const megaMenus: Record<string, MegaMenu> = {
    services: {
      title: 'Services',
      desc: 'We transform businesses at the intersection of deep domain knowledge and emerging technologies expertise.',
      categories: [
        { 
          title: 'AI', 
          links: [
            { label: 'AI Agents Marketplace', href: '/services/ai/agents-marketplace' },
            { label: 'AI Platforms', href: '/services/ai/platforms' },
            { label: 'AI Pods', href: '/services/ai/pods' },
            { label: 'AI/ML Services', href: '/services/ai/ml-services' }
          ] 
        },
        { 
          title: 'GCC', 
          links: [
            { label: 'Global Capability Centers', href: '/services/gcc/global-capability-centers' },
            { label: 'Build-Operate-Transfer', href: '/services/gcc/build-operate-transfer' }
          ] 
        },
        { 
          title: 'Cloud, DevOps & Infrastructure', 
          links: [
            { label: 'Cloud Modernization', href: '/services/cloud/modernization' },
            { label: 'DevOps Engineering', href: '/services/cloud/devops' },
            { label: 'CI/CD & Automation', href: '/services/cloud/cicd-automation' },
            { label: 'Infrastructure Modernization', href: '/services/cloud/infrastructure' },
            { label: 'SRE (24×7)', href: '/services/cloud/sre' }
          ] 
        },
        { 
          title: 'Data & Analytics', 
          links: [
            { label: 'Data Management & Analytics', href: '/services/data/management-analytics' },
            { label: 'DataLake & Warehouse', href: '/services/data/datalake-warehouse' },
            { label: 'Data Pods', href: '/services/data/pods' },
            { label: 'Data Visualization Services', href: '/services/data/visualization' }
          ] 
        },
        { 
          title: 'Digital Engineering', 
          links: [
            { label: 'Software as a Service', href: '/services/digital/saas' },
            { label: 'Full-Stack Engineering', href: '/services/digital/fullstack' },
            { label: 'Custom Software Development', href: '/services/digital/custom-software' },
            { label: 'Mobile Application Development', href: '/services/digital/mobile' },
            { label: 'Digital Commerce', href: '/services/digital/ecommerce' }
          ] 
        },
        { 
          title: 'Cybersecurity', 
          links: [
            { label: 'Cybersecurity Assessment', href: '/services/cybersecurity/assessment' },
            { label: 'Penetration Testing', href: '/services/cybersecurity/penetration-testing' },
            { label: 'SOC-as-a-Service', href: '/services/cybersecurity/soc' },
            { label: 'MDR', href: '/services/cybersecurity/mdr' },
            { label: 'Cloud Security', href: '/services/cybersecurity/cloud-security' },
            { label: 'Identity & Access Security', href: '/services/cybersecurity/identity-access' }
          ] 
        },
        { 
          title: 'Business Applications & Platforms', 
          links: [
            { label: 'Microsoft Solutions', href: '/services/business-apps/microsoft' },
            { label: 'Salesforce Solutions', href: '/services/business-apps/salesforce' },
            { label: 'ServiceNow Solutions', href: '/services/business-apps/servicenow' },
            { label: 'Adobe Solutions', href: '/services/business-apps/adobe' },
            { label: 'IBM Solutions', href: '/services/business-apps/ibm' }
          ] 
        },
        { 
          title: 'Quality Engineering', 
          links: [
            { label: 'Test Automation', href: '/services/quality/test-automation' },
            { label: 'AI Powered Testing', href: '/services/quality/ai-testing' },
            { label: 'AI Powered QE', href: '/services/quality/ai-qe' },
            { label: 'Performance Testing', href: '/services/quality/performance' },
            { label: 'Regression Testing', href: '/services/quality/regression' },
            { label: 'Mobile & Web App Testing', href: '/services/quality/mobile-web' },
            { label: 'Functional Testing', href: '/services/quality/functional' },
            { label: 'QA Pods', href: '/services/quality/qa-pods' }
          ] 
        },
        { 
          title: 'Data Centers', 
          links: [
            { label: 'Data Center Solutions', href: '/services/data-centers' }
          ] 
        },
        { 
          title: 'Private Equity', 
          links: [
            { label: 'Private Equity Services', href: '/services/private-equity' }
          ] 
        }
      ]
    },
    industries: {
      title: 'Industries',
      desc: 'Delivering industry-specific solutions powered by deep domain expertise.',
      categories: [
        { 
          title: '', 
          links: [
            { label: 'Construction & Real Estate', href: '/industries/construction-real-estate' },
            { label: 'Healthcare & Life Sciences', href: '/industries/healthcare' },
            { label: 'Technology & SaaS', href: '/industries/technology-saas' },
            { label: 'Telecommunication', href: '/industries/telecommunication' },
            { label: 'Manufacturing & Logistics', href: '/industries/manufacturing-logistics' },
            { label: 'Retail', href: '/industries/retail' },
            { label: 'Media & Entertainment', href: '/industries/media-entertainment' },
            { label: 'Travel & Tourism', href: '/industries/travel-tourism' },
            { label: 'Non Profit & Public Sector', href: '/industries/non-profit-public' },
            { label: 'F & B', href: '/industries/food-beverage' },
            { label: 'Aerospace', href: '/industries/aerospace' },
            { label: 'E-Commerce', href: '/industries/ecommerce' }
          ] 
        }
      ]
    },
    ai: {
      title: 'Artificial Intelligence',
      desc: 'Leading the AI revolution with cutting-edge intelligent automation solutions.',
      categories: [
        { 
          title: 'AI Platforms', 
          links: [
            { label: 'Salesforce Agentforce', href: '/ai/platforms/salesforce-agentforce' },
            { label: 'ServiceNow Now Assist', href: '/ai/platforms/servicenow' },
            { label: 'Microsoft Copilot', href: '/ai/platforms/microsoft-copilot' },
            { label: 'IBM WatsonX', href: '/ai/platforms/ibm-watsonx' }
          ] 
        },
        { 
          title: 'AI Solutions', 
          links: [
            { label: 'AI for Construction', href: '/ai/solutions/construction' },
            { label: 'AI for Healthcare', href: '/ai/solutions/healthcare' },
            { label: 'AI for SaaS', href: '/ai/solutions/saas' },
            { label: 'Manufacturing AI', href: '/ai/solutions/manufacturing' },
            { label: 'Retail Ecommerce AI', href: '/ai/solutions/retail-ecommerce' },
            { label: 'Generative AI', href: '/ai/solutions/generative-ai' }
          ] 
        },
        { 
          title: 'AI Marketplace', 
          links: [
            { label: 'AI Agents Marketplace', href: '/ai/marketplace' }
          ] 
        }
      ]
    },
    products: {
      title: 'Products',
      desc: 'Innovative SaaS products and platforms designed for the modern enterprise.',
      categories: [
        { 
          title: 'Products', 
          links: [
            { label: 'ProjectPro', href: '/products/projectpro' },
            { label: 'CFPro', href: '/products/cfpro' },
            { label: 'AgentSmartz', href: '/products/agentsmartz' },
            { label: 'Construction365', href: '/products/construction365' },
            { label: 'PropSmartz', href: '/products/propsmartz' },
            { label: 'AI Talent Solution', href: '/products/ai-talent-solution' }
          ] 
        }
      ]
    },
    partners: {
      title: 'Partners',
      desc: 'Strategic alliances with global technology leaders.',
      categories: [
        { 
          title: '', 
          links: [
            { label: 'Microsoft Partner', href: '/partners/microsoft' },
            { label: 'IBM Partner', href: '/partners/ibm' },
            { label: 'Adobe Partner', href: '/partners/adobe' },
            { label: 'Salesforce Partner', href: '/partners/salesforce' },
            { label: 'ServiceNow Partner', href: '/partners/servicenow' },
            { label: 'AWS Partner', href: '/partners/aws' },
            { label: 'Google Partner', href: '/partners/google' },
            { label: 'Crowdstrike Partner', href: '/partners/crowdstrike' },
            { label: 'SentinelOne Partner', href: '/partners/sentinelone' }
          ] 
        }
      ]
    },
    about: {
      title: 'About',
      desc: '25+ years of excellence in technology innovation',
      categories: [
        { 
          title: 'Company', 
          links: [
            { label: 'Our Story', href: '/about/story' },
            { label: 'Leaders', href: '/about/leaders' },
            { label: 'Awards and Recognition', href: '/about/awards' },
            { label: 'School of AI & Cybersecurity', href: '/about/school' },
            { label: 'Innovation Labs', href: '/about/innovation-labs' }
          ] 
        },
        { 
          title: 'Global Locations', 
          links: [
            { label: 'Rochester, NY', href: '/about/locations/rochester' },
            { label: 'Vancouver, BC', href: '/about/locations/vancouver' },
            { label: 'Toronto, ON', href: '/about/locations/toronto' },
            { label: 'Dubai', href: '/about/locations/dubai' },
            { label: 'Singapore', href: '/about/locations/singapore' },
            { label: 'Melbourne', href: '/about/locations/melbourne' },
            { label: 'Mohali', href: '/about/locations/mohali' },
            { label: 'Gurugram', href: '/about/locations/gurugram' },
            { label: 'Noida', href: '/about/locations/noida' }
          ] 
        },
        { 
          title: 'Culture', 
          links: [
            { label: 'Talent Stories', href: '/about/culture/talent-stories' },
            { label: 'Giving Back', href: '/about/culture/giving-back' },
            { label: 'CSR', href: '/about/culture/csr' },
            { label: 'Sustainability', href: '/about/culture/sustainability' }
          ] 
        }
      ]
    },
    resources: {
      title: 'Resources',
      desc: 'Insights, research, and thought leadership.',
      categories: [
        { 
          title: 'Customer Success', 
          links: [
            { label: 'Case Studies', href: '/resources/case-studies' },
            { label: 'Testimonials', href: '/resources/testimonials' },
            { label: 'Certifications', href: '/resources/certifications' },
            { label: 'Events & Media', href: '/resources/events-media' }
          ] 
        },
        { 
          title: 'Thought Leadership', 
          links: [
            { label: 'Blogs', href: '/resources/blogs' },
            { label: 'Expert Q&A', href: '/resources/expert-qa' },
            { label: 'Whitepapers', href: '/resources/whitepapers' },
            { label: 'Industry Reports', href: '/resources/industry-reports' },
            { label: 'Podcasts', href: '/resources/podcasts' }
          ] 
        }
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
              <a href="https://www.linkedin.com/company/netsmartz" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="https://twitter.com/netsmartz" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                <FaTwitter />
              </a>
              <a href="https://www.facebook.com/netsmartz" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
        <nav className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between h-20">
           {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.webp" alt="Netsmartz Logo" className="h-10 w-auto" />
          </Link>

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
                              {megaMenus[key].categories.map((cat: MenuCategory, idx: number) => (
                                <div key={idx}>
                                  {cat.title && <h3 className="text-sm font-semibold text-[#fe7725] mb-3">{cat.title}</h3>}
                                  <ul className="space-y-2">
                                    {cat.links.map((link: MenuLink, linkIdx: number) => (
                                      <li key={linkIdx}>
                                        {link.external ? (
                                          <a 
                                            href={link.href} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-sm text-gray-700 hover:text-[#fe7725] transition-colors"
                                          >
                                            {link.label}
                                          </a>
                                        ) : (
                                          <Link 
                                            href={link.href} 
                                            className="text-sm text-gray-700 hover:text-[#fe7725] transition-colors"
                                            onClick={() => setActiveMenu(null)}
                                          >
                                            {link.label}
                                          </Link>
                                        )}
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
              <Link href="/contact" className="text-[#1a1a1a] hover:text-[#fe7725] font-medium text-sm transition-colors">
                Contact
              </Link>
              <Link href="/careers" className="text-[#1a1a1a] hover:text-[#fe7725] font-medium text-sm transition-colors">
                Career
              </Link>
              
              <button onClick={handleLanguageSwitch} className="flex items-center gap-1 text-[#1a1a1a] hover:text-[#fe7725] font-medium text-sm transition-colors">
                <FiGlobe />
                {locale.toUpperCase()}
              </button>
            </div>

            {/* CTA */}
            <Link href="/contact" className="hidden lg:block px-6 py-3 bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all">
              Get Started
            </Link>

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
                        {megaMenus[key].categories.map((cat: MenuCategory, idx: number) => (
                          <div key={idx}>
                            {cat.title && <div className="text-xs font-semibold text-[#fe7725] mt-2">{cat.title}</div>}
                            {cat.links.map((link: MenuLink, linkIdx: number) => (
                              <React.Fragment key={linkIdx}>
                                {link.external ? (
                                  <a 
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block py-1 text-sm text-gray-700 hover:text-[#fe7725]"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {link.label}
                                  </a>
                                ) : (
                                  <Link 
                                    href={link.href}
                                    className="block py-1 text-sm text-gray-700 hover:text-[#fe7725]"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {link.label}
                                  </Link>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link 
                  href="/contact" 
                  className="block py-2 text-[#1a1a1a] hover:text-[#fe7725] font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  href="/careers" 
                  className="block py-2 text-[#1a1a1a] hover:text-[#fe7725] font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Career
                </Link>
              </nav>
              <Link 
                href="/contact" 
                className="block mt-6 px-6 py-3 bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white rounded-lg font-semibold text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
