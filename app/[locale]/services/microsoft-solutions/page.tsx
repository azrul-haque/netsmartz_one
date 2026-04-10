import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from './components/HeroSection';
import StripSection from './components/StripSection';
import BridgingGapSection from './components/BridgingGapSection';
import SolutionsSection from './components/SolutionsSection';
import IndustrySection from './components/IndustrySection';
import PartnerSection from './components/PartnerSection';
import ServicesSection from './components/ServicesSection';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'Microsoft Solutions Partner | Dynamics 365 Experts',
  description: 'Netsmartz is a Microsoft Solutions Partner offering Dynamics 365 solutions and Power Platform to streamline operations and drive business growth.',
  keywords: ['Microsoft Solutions partner', 'Microsoft Dynamics 365 Solutions', 'microsoft dynamics 365 services']
};

export default function MicrosoftSolutionsPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <StripSection />
      <BridgingGapSection />
      <SolutionsSection />
      <IndustrySection />
      <PartnerSection />
      <ServicesSection />
      <CTASection />
      <ContactSection />
    </div>
  );
}
