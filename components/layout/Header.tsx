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

  // Helper function to get relevant SVG icons for menu items
  const getMenuIcon = (label: string) => {
    const lowerLabel = label.toLowerCase();
    
    // AI & ML related
    if (lowerLabel.includes('ai') || lowerLabel.includes('ml') || lowerLabel.includes('agent')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9a1 1 0 112 0v4a1 1 0 11-2 0V9zm1-4a1 1 0 100 2 1 1 0 000-2z"/></svg>;
    }
    // Cloud related
    if (lowerLabel.includes('cloud') || lowerLabel.includes('infrastructure') || lowerLabel.includes('modernization')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/></svg>;
    }
    // DevOps & CI/CD
    if (lowerLabel.includes('devops') || lowerLabel.includes('ci/cd') || lowerLabel.includes('automation') || lowerLabel.includes('sre')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/></svg>;
    }
    // Data related
    if (lowerLabel.includes('data') || lowerLabel.includes('analytics') || lowerLabel.includes('warehouse') || lowerLabel.includes('visualization')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/></svg>;
    }
    // Security related
    if (lowerLabel.includes('security') || lowerLabel.includes('penetration') || lowerLabel.includes('soc') || lowerLabel.includes('mdr') || lowerLabel.includes('identity') || lowerLabel.includes('access')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd"/></svg>;
    }
    // Development related
    if (lowerLabel.includes('software') || lowerLabel.includes('development') || lowerLabel.includes('full-stack') || lowerLabel.includes('custom') || lowerLabel.includes('mobile') || lowerLabel.includes('engineering')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>;
    }
    // Commerce & Business
    if (lowerLabel.includes('commerce') || lowerLabel.includes('ecommerce') || lowerLabel.includes('retail')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"/></svg>;
    }
    // Testing & Quality
    if (lowerLabel.includes('test') || lowerLabel.includes('quality') || lowerLabel.includes('qa') || lowerLabel.includes('performance') || lowerLabel.includes('regression')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>;
    }
    // SaaS & Pods
    if (lowerLabel.includes('saas') || lowerLabel.includes('pod') || lowerLabel.includes('gcc')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/></svg>;
    }
    // Business Applications & Platforms
    if (lowerLabel.includes('microsoft') || lowerLabel.includes('salesforce') || lowerLabel.includes('servicenow') || lowerLabel.includes('adobe') || lowerLabel.includes('ibm')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd"/></svg>;
    }
    // Industries
    if (lowerLabel.includes('healthcare') || lowerLabel.includes('construction') || lowerLabel.includes('manufacturing') || lowerLabel.includes('telecom')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/></svg>;
    }
    // Media, Travel, Food
    if (lowerLabel.includes('media') || lowerLabel.includes('entertainment') || lowerLabel.includes('travel') || lowerLabel.includes('tourism') || lowerLabel.includes('f & b') || lowerLabel.includes('food')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/></svg>;
    }
    // Non-profit, public sector
    if (lowerLabel.includes('non profit') || lowerLabel.includes('public')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>;
    }
    // Aerospace, Data Centers
    if (lowerLabel.includes('aerospace') || lowerLabel.includes('data center')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd"/></svg>;
    }
    // Company, About, Locations
    if (lowerLabel.includes('story') || lowerLabel.includes('leader') || lowerLabel.includes('award') || lowerLabel.includes('innovation') || lowerLabel.includes('school')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>;
    }
    // Locations
    if (lowerLabel.includes('rochester') || lowerLabel.includes('austin') || lowerLabel.includes('vancouver') || lowerLabel.includes('toronto') || lowerLabel.includes('dubai') || lowerLabel.includes('singapore') || lowerLabel.includes('melbourne') || lowerLabel.includes('chandigarh') || lowerLabel.includes('mohali') || lowerLabel.includes('gurugram') || lowerLabel.includes('noida')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>;
    }
    // Culture, CSR
    if (lowerLabel.includes('culture') || lowerLabel.includes('talent') || lowerLabel.includes('giving') || lowerLabel.includes('csr') || lowerLabel.includes('sustainability')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>;
    }
    // Resources - Case Studies, Testimonials, etc
    if (lowerLabel.includes('case') || lowerLabel.includes('testimonial') || lowerLabel.includes('certification') || lowerLabel.includes('event') || lowerLabel.includes('media')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"/><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"/></svg>;
    }
    // Blogs, Whitepapers, Reports, Podcasts
    if (lowerLabel.includes('blog') || lowerLabel.includes('whitepaper') || lowerLabel.includes('report') || lowerLabel.includes('podcast') || lowerLabel.includes('expert')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"/></svg>;
    }
    // Executive Search
    if (lowerLabel.includes('executive') || lowerLabel.includes('search')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/></svg>;
    }
    // Default icon for items without specific category
    return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/></svg>;
  };

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
          title: 'Global Capability Center', 
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
            { label: 'Healthcare', href: '/industries/healthcare' },
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
            { label: 'Microsoft Partner', href: '/partners/microsoft', icon: '/assets/partners/microsoft.webp' },
            { label: 'IBM Partner', href: '/partners/ibm', icon: '/assets/partners/ibm.webp' },
            { label: 'Adobe Partner', href: '/partners/adobe', icon: '/assets/partners/adobe.webp' },
            { label: 'Salesforce Partner', href: '/partners/salesforce', icon: '/assets/partners/saleforce.webp' },
            { label: 'ServiceNow Partner', href: '/partners/servicenow', icon: '/assets/partners/servicenow.webp' },
            { label: 'AWS Partner', href: '/partners/aws', icon: '/assets/partners/aws.webp' },
            { label: 'Google Partner', href: '/partners/google', icon: '/assets/partners/google.webp' },
            { label: 'Crowdstrike Partner', href: '/partners/crowdstrike', icon: '/assets/partners/crowdstrike.webp' },
            { label: 'SentinelOne Partner', href: '/partners/sentinelone', icon: '/assets/partners/sentinel.webp' }
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
                                  {cat.title && (
                                    <>
                                      <h3 className="text-sm font-semibold text-[#fe7725] mb-1">{cat.title}</h3>
                                      <div className="w-12 h-1 bg-[#fe7725] mb-3"></div>
                                    </>
                                  )}
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
                                            {link.icon ? (
                                              <img 
                                                src={link.icon} 
                                                alt={link.label} 
                                                className="w-5 h-5 object-contain"
                                                onError={(e) => {
                                                  e.currentTarget.style.display = 'none';
                                                }}
                                              />
                                            ) : (
                                              <span className="text-[#fe7725]">{getMenuIcon(link.label)}</span>
                                            )}
                                            {link.label}
                                          </a>
                                        ) : (
                                          <Link 
                                            href={link.href} 
                                            className="text-sm text-gray-700 hover:text-[#fe7725] transition-colors flex items-center gap-2"
                                            onClick={() => setActiveMenu(null)}
                                          >
                                            {link.icon ? (
                                              <img 
                                                src={link.icon} 
                                                alt={link.label} 
                                                className="w-5 h-5 object-contain"
                                                onError={(e) => {
                                                  e.currentTarget.style.display = 'none';
                                                }}
                                              />
                                            ) : (
                                              <span className="text-[#fe7725]">{getMenuIcon(link.label)}</span>
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
                                    className="block py-1 text-sm text-gray-700 hover:text-[#fe7725] flex items-center gap-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {link.icon ? (
                                      <img 
                                        src={link.icon} 
                                        alt={link.label} 
                                        className="w-4 h-4 object-contain"
                                        onError={(e) => {
                                          e.currentTarget.style.display = 'none';
                                        }}
                                      />
                                    ) : (
                                      <span className="text-[#fe7725]">{getMenuIcon(link.label)}</span>
                                    )}
                                    {link.label}
                                  </a>
                                ) : (
                                  <Link 
                                    href={link.href}
                                    className="block py-1 text-sm text-gray-700 hover:text-[#fe7725] flex items-center gap-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {link.icon ? (
                                      <img 
                                        src={link.icon} 
                                        alt={link.label} 
                                        className="w-4 h-4 object-contain"
                                        onError={(e) => {
                                          e.currentTarget.style.display = 'none';
                                        }}
                                      />
                                    ) : (
                                      <span className="text-[#fe7725]">{getMenuIcon(link.label)}</span>
                                    )}
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
