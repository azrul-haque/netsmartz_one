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
  title: 'Smart SaaS Product Development with AI | Netsmartz',
  description: 'Netsmartz, a leading SaaS product development company in the USA, delivers scalable, high performance solutions and expertise in AI in product development for global brands.',
  openGraph: {
    title: 'Product Development Company - Netsmartz',
    description: 'Hire expert product development teams to build, scale, ship, and iterate',
    type: 'website',
  },
};

export default function ProductDevelopmentCompanyPage() {
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
