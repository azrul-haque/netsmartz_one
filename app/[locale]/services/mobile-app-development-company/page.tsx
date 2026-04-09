import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from './components/HeroSection';
import CompetenciesSection from './components/CompetenciesSection';
import OfferingSection from './components/OfferingSection';
import TechStackSection from '../software-product-development/components/TechStackSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import TestimonialsSection from './components/TestimonialsSection';
import EngagementModelsSection from './components/EngagementModelsSection';
import InsightsSection from './components/InsightsSection';

export const metadata: Metadata = {
  title: 'Custom Mobile App Development Services | Netsmartz',
  description: 'Do you want to build custom mobile applications on different platforms seamlessly? Then hire offshore web developers from Netsmartz for seamless operations.',
  openGraph: {
    title: 'Mobile App Development Company - Netsmartz',
    description: 'Craft, design, and develop powerful & engaging mobile applications',
    type: 'website',
  },
};

export default function MobileAppDevelopmentCompanyPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <CompetenciesSection />
      <OfferingSection />
      <TechStackSection />
      <SuccessStoriesSection />
      <TestimonialsSection />
      <EngagementModelsSection />
      <InsightsSection />
      <ContactSection />
    </div>
  );
}