import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from './components/HeroSection';
import AutomationSection from './components/AutomationSection';
import KeyFeaturesSection from './components/KeyFeaturesSection';
import RelatedServicesSection from './components/RelatedServicesSection';
import WhyChooseSection from '../devops/components/WhyChooseSection';

export const metadata: Metadata = {
  title: 'Site Reliability Engineering (SRE) | Netsmartz',
  description: 'Maximize Stability and Efficiency with Expert SRE Consulting. Enhanced system stability, streamlined operations, and relentless support for your growth.',
};

export default function SiteReliabilityEngineeringPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <AutomationSection />
      <KeyFeaturesSection />
      <RelatedServicesSection />
      <WhyChooseSection />
      <ContactSection />
    </div>
  );
}
