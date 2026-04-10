import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import BenefitsSection from './components/BenefitsSection';
import RelatedServicesSection from './components/RelatedServicesSection';
import WhyChooseSection from '../devops/components/WhyChooseSection';

export const metadata: Metadata = {
  title: 'CI/CD Optimization | Netsmartz',
  description: 'Streamline Your Pipeline with Expert CI/CD Optimization. Boost Efficiency, Speed Up Releases, and Ensure Consistency.',
};

export default function CICDAutomationPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <IntroSection />
      <BenefitsSection />
      <RelatedServicesSection />
      <WhyChooseSection />
      <ContactSection />
    </div>
  );
}
