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
    
    // Specific AI items
    if (lowerLabel === 'ai agents marketplace') {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/></svg>;
    }
    if (lowerLabel === 'ai platforms') {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/></svg>;
    }
    if (lowerLabel === 'ai pods') {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>;
    }
    if (lowerLabel === 'ai/ml services') {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M13 7H7v6h6V7z"/><path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd"/></svg>;
    }
    
    // GCC specific items
    if (lowerLabel === 'gcc - meena') {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel === 'saas pods') {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM2 12a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2z"/></svg>;
    }
    if (lowerLabel === 'executive search firms') {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/></svg>;
    }
    if (lowerLabel === 'ai pods') {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel === 'data pods') {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"/><path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"/><path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"/></svg>;
    }
    if (lowerLabel.includes('microsoft support')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('existing indian gcc')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>;
    }
    
    // Cloud & DevOps specific
    if (lowerLabel === 'cloud modernization') {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/></svg>;
    }
    if (lowerLabel === 'devops engineering') {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('ci/cd')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('infrastructure modernization')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('sre')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('verticalization')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>;
    }
    
    // Data & Analytics specific
    if (lowerLabel === 'data management & analytics') {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/></svg>;
    }
    if (lowerLabel.includes('datalake') || lowerLabel.includes('warehouse')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"/><path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"/><path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"/></svg>;
    }
    if (lowerLabel.includes('visualization')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd"/></svg>;
    }
    
    // Digital Engineering specific
    if (lowerLabel.includes('software as a service') || lowerLabel === 'software as a service') {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('full-stack')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('custom software')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z" clipRule="evenodd"/><path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z"/></svg>;
    }
    if (lowerLabel.includes('mobile')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('commerce') || lowerLabel.includes('ecommerce') || lowerLabel.includes('e-commerce')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/></svg>;
    }
    
    // Cybersecurity specific
    if (lowerLabel === 'cybersecurity assessment') {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('penetration')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('soc-as-a-service')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel === 'mdr') {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('cloud security')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/><path fillRule="evenodd" d="M10 7a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1H8a1 1 0 110-2h1V8a1 1 0 011-1z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('identity') || lowerLabel.includes('access')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"/></svg>;
    }
    
    // Business Applications
    if (lowerLabel.includes('microsoft')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 2h7v7H2V2zm9 0h7v7h-7V2zM2 11h7v7H2v-7zm9 0h7v7h-7v-7z"/></svg>;
    }
    if (lowerLabel.includes('salesforce')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/></svg>;
    }
    if (lowerLabel.includes('servicenow')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('adobe')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('ibm')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd"/></svg>;
    }
    
    // Quality Engineering
    if (lowerLabel.includes('test automation')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('ai powered testing') || lowerLabel.includes('ai testing')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M13 7H7v6h6V7z"/><path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('performance')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('regression')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('functional')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('qa pod')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>;
    }
    
    // Data Centers
    if (lowerLabel.includes('data center')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/></svg>;
    }
    
    // Industries
    if (lowerLabel.includes('construction')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('healthcare')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/></svg>;
    }
    if (lowerLabel.includes('technology') || lowerLabel.includes('saas')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"/><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"/></svg>;
    }
    if (lowerLabel.includes('telecommunication')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>;
    }
    if (lowerLabel.includes('manufacturing')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('retail')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('media') || lowerLabel.includes('entertainment')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-2H7v4h6v-4zm2 0h1V9h-1v2zm1-4V5h-1v2h1zM5 5v2H4V5h1zm0 4H4v2h1V9zm-1 4h1v2H4v-2z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('travel') || lowerLabel.includes('tourism')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/></svg>;
    }
    if (lowerLabel.includes('non profit') || lowerLabel.includes('public')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('f & b') || lowerLabel.includes('food')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('aerospace')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/></svg>;
    }
    
    // About section
    if (lowerLabel.includes('our story')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('leader')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>;
    }
    if (lowerLabel.includes('award')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>;
    }
    if (lowerLabel.includes('school') || lowerLabel.includes('innovation')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/></svg>;
    }
    
    // Locations - use pin for all
    if (lowerLabel.includes('rochester') || lowerLabel.includes('austin') || lowerLabel.includes('vancouver') || 
        lowerLabel.includes('toronto') || lowerLabel.includes('dubai') || lowerLabel.includes('singapore') || 
        lowerLabel.includes('melbourne') || lowerLabel.includes('chandigarh') || lowerLabel.includes('mohali') || 
        lowerLabel.includes('gurugram') || lowerLabel.includes('noida')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>;
    }
    
    // Culture
    if (lowerLabel.includes('talent')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/></svg>;
    }
    if (lowerLabel.includes('giving') || lowerLabel.includes('csr')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('sustainability')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clipRule="evenodd"/></svg>;
    }
    
    // Resources
    if (lowerLabel.includes('case stud')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('testimonial')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('certification')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('event')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('blog')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"/><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"/></svg>;
    }
    if (lowerLabel.includes('expert')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/></svg>;
    }
    if (lowerLabel.includes('whitepaper')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('report')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/></svg>;
    }
    if (lowerLabel.includes('podcast')) {
      return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"/></svg>;
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
                            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-2">{megaMenus[key].title}</h2>
                            <div className="w-16 h-1 bg-[#fe7725] mb-4"></div>
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
