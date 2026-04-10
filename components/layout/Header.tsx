'use client';

import React, { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import Link from 'next/link';
import { FiMenu, FiX, FiChevronDown, FiGlobe, FiPhone, FiMail } from 'react-icons/fi';
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';

// Type Definitions
interface MenuLink {
  label: string;
  href: string;
  icon?: string; // Added for product and partner icons
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
  graphic?: string; // Added for right side graphics
}

const Header: React.FC = () => {
  const locale = useLocale();
  const t = useTranslations('nav');
  const tCommon = useTranslations('common');
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageSwitch = (newLocale: string) => {
    console.log('Language switch:', { from: locale, to: newLocale, pathname });
    setIsLanguageDropdownOpen(false);
    router.push(pathname, { locale: newLocale });
  };

  const megaMenus: Record<string, MegaMenu> = {
    services: {
      title: t('services'),
      desc: t('servicesDesc'),
      categories: [
        { 
          title: 'AI', 
          links: [
            { label: 'AI Agents Marketplace', href: '/services/ai-agents-marketplace' },
            { label: 'AI Platforms', href: '/services/ai/platforms' },
            { label: 'AI Pods', href: '/services/ai-pod' },
            { label: 'AI/ML Services', href: '/services/ai-ml-services' }
          ] 
        },
        { 
          title: 'GCC', 
          links: [
            { label: 'GCC - MENA', href: '#' },
            { label: 'SaaS Pods', href: '/services/saas-pods' },
            { label: 'Executive Search Firms', href: '/services/executive-search-firms' },
            { label: 'AI Pods', href: '/services/ai-pod' },
            { label: 'Data Pods', href: '/services/data-pods' },
            { label: 'Microsoft Support Pods for MSPs', href: '/services/gcc/build-operate-transfer' },
            { label: 'Existing Indian GCCs scalling in the Tier2', href: '/services/indian-gcc-scalling-in-tier2' }
          ]
        },
        { 
          title: 'Cloud, DevOps & Infrastructure', 
          links: [
            { label: 'Cloud Modernization', href: '/services/managed-cloud-services' },
            { label: 'DevOps Engineering', href: '/services/devops' },
            { label: 'CI/CD & Automation', href: '/services/ci-cd-automation' },
            { label: 'Infrastructure Modernization', href: '/services/infrastructure-modernization' },
            { label: 'SRE (24×7)', href: '/services/site-reliability-engineering' },
            { label: 'Verticalization for Home Healthcare', href: '/services/cloud/sre' }
            
          ] 
        },
        { 
          title: 'Data & Analytics', 
          links: [
             { label: 'Data Labeling (Annotation) & Enrichment', href: '/services/data-management-analytics' },
            { label: 'Data Management & Analytics', href: '/services/data-management-analytics' },
            { label: 'DataLake & Warehouse', href: '/services/datalake-warehouse' },
            { label: 'Data Pods', href: '/services/data-pods' },
            { label: 'Data Visualization Services', href: '/services/data-visualization-services' }
          ] 
        },
        { 
          title: 'Digital Engineering', 
          links: [
            { label: 'Software as a Service', href: '/services/software-product-development' },
            { label: 'Full-Stack Engineering', href: '/services/full-stack-engineering/' },
            { label: 'Custom Software Development', href: '/services/product-development-company' },
            { label: 'Mobile Application Development', href: '/services/mobile-app-development-company' },
            { label: 'Digital Commerce', href: '/services/digital-experiences' }
          ] 
        },
        { 
          title: 'Cybersecurity', 
          links: [
            { label: 'Cybersecurity Assessment', href: '/services/cybersecurity' },
            { label: 'Penetration Testing', href: '/services/vulnerability-assessment-penetration-testing' },
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
        }
      ]
    },
    industries: {
      title: t('industries'),
      desc: t('industriesDesc'),
      categories: [
        { 
          title: '', 
          links: [
            { label: 'Construction & Real Estate', href: '/industries/construction-real-estate' },
            { label: 'Healthcare & Life Sciences', href: '/industries/healthcare' },
            { label: 'Technology & SaaS', href: '/industries/technology-saas' },
            { label: 'Telecommunication', href: '/industries/telecommunication' }
          ] 
        },
        { 
          title: '', 
          links: [
            { label: 'Manufacturing & Logistics', href: '/industries/manufacturing-logistics' },
            { label: 'Retail', href: '/industries/retail' },
            { label: 'Media & Entertainment', href: '/industries/media-entertainment' },
            { label: 'Travel & Tourism', href: '/industries/travel-tourism' }
          ] 
        },
        { 
          title: '', 
          links: [
            { label: 'Non Profit & Public Sector', href: '/industries/non-profit-public' },
            { label: 'F & B', href: '/industries/food-beverage' },
            { label: 'Aerospace', href: '/industries/aerospace' },
            { label: 'E-Commerce', href: '/industries/ecommerce' }
          ] 
        }
      ]
    },
    ai: {
      title: t('ai'),
      desc: t('aiDesc'),
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
      title: t('products'),
      desc: t('productsDesc'),
      graphic: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80',
      categories: [
        { 
          title: '', 
          links: [
            { label: 'ProjectPro', href: '/products/projectpro', icon: '/assets/products_icon/projectpro.png' },
            { label: 'CFPro', href: '/products/cfpro', icon: '/assets/products_icon/projectpro.png' },
            { label: 'AgentSmartz', href: '/products/agentsmartz', icon: '/assets/products_icon/projectpro.png' },
            { label: 'Construction365', href: '/products/construction365', icon: '/assets/products_icon/projectpro.png' },
            { label: 'PropSmartz', href: '/products/propsmartz', icon: '/assets/products_icon/projectpro.png' },
            { label: 'AI Talent Solution', href: '/products/ai-talent-solution', icon: '/assets/products_icon/projectpro.png' }
          ] 
        }
      ]
    },
    partners: {
      title: t('partners'),
      desc: t('partnersDesc'),
      graphic: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80',
      categories: [
        { 
          title: '', 
          links: [
            { label: 'Microsoft Partner', href: '/partners/microsoft', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
            { label: 'IBM Partner', href: '/partners/ibm', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
            { label: 'Adobe Partner', href: '/partners/adobe', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg' },
            { label: 'Salesforce Partner', href: '/partners/salesforce', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
            { label: 'ServiceNow Partner', href: '/partners/servicenow', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg' },
            { label: 'AWS Partner', href: '/partners/aws', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
            { label: 'Google Partner', href: '/partners/google', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg' },
            { label: 'Crowdstrike Partner', href: '/partners/crowdstrike', icon: 'https://logos-world.net/wp-content/uploads/2021/10/CrowdStrike-Logo.png' },
            { label: 'SentinelOne Partner', href: '/partners/sentinelone', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZL8fYGZ-5vF0JQfXZqFZLQvZKQfXZqFZLQg&s' }
          ] 
        }
      ]
    },
    about: {
      title: t('about'),
      desc: t('aboutDesc'),
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
            { label: 'Austin, TX', href: '/about/locations/texas' },
            { label: 'Vancouver, BC', href: '/about/locations/vancouver' },
            { label: 'Toronto, ON', href: '/about/locations/toronto' },
            { label: 'Dubai', href: '/about/locations/dubai' },
            { label: 'Singapore', href: '/about/locations/singapore' },
            { label: 'Melbourne', href: '/about/locations/melbourne' },
            { label: 'Chandigarh', href: '/about/locations/chandigarh' },
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
      title: t('resources'),
      desc: t('resourcesDesc'),
      categories: [
        { 
          title: 'Customer Success', 
          links: [
            { label: 'Case Studies', href: '/success-story' },
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
            { label: 'Podcasts', href: '/resources/podcasts' },
            { label: 'Webinars', href: '/resources/webinars' }
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
            <img src="/logo.webp" alt="Netsmartz Logo" className="h-12 w-auto" />
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

                  <div 
                    className={`fixed left-0 right-0 bg-white border-t border-gray-200 shadow-2xl transition-all duration-300 ease-in-out ${
                      activeMenu === key 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                    style={{ top: isScrolled ? '70px' : '104px', zIndex: 60 }}
                    onMouseEnter={() => setActiveMenu(key)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                      <div className="container mx-auto px-6 max-w-7xl py-8 h-[80vh]">
                        <div className="flex gap-8">
                          <div className="w-[35%] pr-8 border-r border-gray-200">
                            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">{megaMenus[key].title}</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">{megaMenus[key].desc}</p>
                          </div>
                          <div className={`${megaMenus[key].graphic ? 'w-[45%]' : 'w-[65%]'} max-h-[400px] overflow-y-auto`}>
                            <div
  className={`grid ${
    key === 'partners' ? 'grid-cols-1' : 'grid-cols-3'
  } gap-x-12 gap-y-8`}
>
                              {megaMenus[key].categories.map((cat: MenuCategory, idx: number) => (
                                <div key={idx}>
                                  {cat.title && <h3 className="text-sm font-semibold text-[#fe7725] mb-3">{cat.title}</h3>}
                                  <ul
  className={`${
    key === 'partners'
      ? 'grid grid-cols-2 gap-x-6 gap-y-2'
      : 'space-y-2'
  }`}
>
                                    {cat.links.map((link: MenuLink, linkIdx: number) => (
                                      <li key={linkIdx}>
                                        {link.external ? (
                                          <a 
                                            href={link.href} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-sm text-gray-700 hover:text-[#fe7725] transition-colors flex items-center gap-2"
                                          >
                                            {link.icon && (
                                              <img 
                                                src={link.icon} 
                                                alt={link.label} 
                                                className="w-5 h-5 object-contain"
                                                onError={(e) => {
                                                  e.currentTarget.style.display = 'none';
                                                }}
                                              />
                                            )}
                                            {link.label}
                                          </a>
                                        ) : (
                                          <Link 
                                            href={link.href} 
                                            className="text-sm text-gray-700 hover:text-[#fe7725] transition-colors flex items-center gap-2"
                                            onClick={() => setActiveMenu(null)}
                                          >
                                            {link.icon && (
                                              <img 
                                                src={link.icon} 
                                                alt={link.label} 
                                                className="w-5 h-5 object-contain"
                                                onError={(e) => {
                                                  e.currentTarget.style.display = 'none';
                                                }}
                                              />
                                            )}
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
                          {megaMenus[key].graphic && (
                            <div className="w-[40%] pl-8 border-l border-gray-200">
                              <div className="relative h-full rounded-xl overflow-hidden shadow-xl">
                                <img 
                                  src={megaMenus[key].graphic} 
                                  alt={megaMenus[key].title}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                  <div className="text-white">
                                    {/* <h3 className="text-xl font-bold mb-2">{megaMenus[key].title}</h3> */}
                                   
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                </div>
              ))}
              
              {/* Contact Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)}
                  onMouseEnter={() => setIsContactDropdownOpen(true)}
                  className="flex items-center gap-1 text-[#1a1a1a] hover:text-[#fe7725] font-medium text-sm transition-colors"
                >
                  {t('contact')}
                  <FiChevronDown className={`text-xs transition-transform ${isContactDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isContactDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-30" 
                      onClick={() => setIsContactDropdownOpen(false)}
                    />
                    <div 
                      className="absolute right-0 mt-2 w-56 bg-[#fff] rounded-lg shadow-xl py-3 z-40"
                      onMouseLeave={() => setIsContactDropdownOpen(false)}
                    >
                    
                      <Link
                        href="/contact"
                        onClick={() => setIsContactDropdownOpen(false)}
                        className="block px-4 py-2.5 text-[#000] hover:text-[#fe7725] transition-colors text-sm"
                      >
                        {t('contact')}
                      </Link>
                      <Link
                        href="/contact"
                        onClick={() => setIsContactDropdownOpen(false)}
                        className="block px-4 py-2.5 text-[#000] hover:text-[#fe7725] transition-colors text-sm"
                      >
                        {t('requestProposal')}
                      </Link>
                      <Link
                        href="/contact"
                        onClick={() => setIsContactDropdownOpen(false)}
                        className="block px-4 py-2.5 text-[#000] hover:text-[#fe7725] transition-colors text-sm"
                      >
                        {t('gccCampusVisit')}
                      </Link>
                      <Link
                        href="/contact"
                        onClick={() => setIsContactDropdownOpen(false)}
                        className="block px-4 py-2.5 text-[#000] hover:text-[#fe7725] transition-colors text-sm"
                      >
                        {t('becomePartner')}
                      </Link>
                    </div>
                  </>
                )}
              </div>
              
              {/* <Link href="/careers" className="text-[#1a1a1a] hover:text-[#fe7725] font-medium text-sm transition-colors">
                {t('career')}
              </Link> */}
              
              {/* Language Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="flex items-center gap-1 text-[#1a1a1a] hover:text-[#fe7725] font-medium text-sm transition-colors"
                >
                  <FiGlobe />
                  {locale.toUpperCase()}
                  <FiChevronDown className={`text-xs transition-transform ${isLanguageDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isLanguageDropdownOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-30" 
                      onClick={() => setIsLanguageDropdownOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-40">
                      <button
                        onClick={() => handleLanguageSwitch('en')}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${locale === 'en' ? 'text-[#fe7725] font-semibold' : 'text-gray-700'}`}
                      >
                        English
                      </button>
                      <button
                        onClick={() => handleLanguageSwitch('ar')}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${locale === 'ar' ? 'text-[#fe7725] font-semibold' : 'text-gray-700'}`}
                      >
                        العربية
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* CTA */}
            <Link href="/contact" className="hidden lg:block px-6 py-3 bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all">
              {tCommon('getStarted')}
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
                
                {/* Contact Dropdown - Mobile */}
                <div>
                  <button 
                    onClick={() => setIsContactDropdownOpen(!isContactDropdownOpen)} 
                    className="w-full flex justify-between py-2 text-[#1a1a1a] hover:text-[#fe7725] font-medium"
                  >
                    {t('contact')}
                    <FiChevronDown className={`transition-transform ${isContactDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isContactDropdownOpen && (
                    <div className="ml-4 mt-2 space-y-2">
                      <Link 
                        href="/contact"
                        className="block py-1 text-sm text-gray-700 hover:text-[#fe7725]"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsContactDropdownOpen(false);
                        }}
                      >
                        {t('requestProposal')}
                      </Link>
                      <Link 
                        href="/gcc-campus-visit"
                        className="block py-1 text-sm text-gray-700 hover:text-[#fe7725]"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsContactDropdownOpen(false);
                        }}
                      >
                        {t('gccCampusVisit')}
                      </Link>
                      <Link 
                        href="/become-partner"
                        className="block py-1 text-sm text-gray-700 hover:text-[#fe7725]"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsContactDropdownOpen(false);
                        }}
                      >
                        {t('becomePartner')}
                      </Link>
                    </div>
                  )}
                </div>
                
                <Link 
                  href="/careers" 
                  className="block py-2 text-[#1a1a1a] hover:text-[#fe7725] font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('career')}
                </Link>
              </nav>
              <Link 
                href="/contact" 
                className="block mt-6 px-6 py-3 bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white rounded-lg font-semibold text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {tCommon('getStarted')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
