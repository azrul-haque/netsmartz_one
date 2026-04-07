import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import SuccessStoriesSection from '@/components/sections/SuccessStoriesSection';
import HeroSection from './components/HeroSection';
import ChallengesSection from './components/ChallengesSection';
import ServicesSection from './components/ServicesSection';
import ProductStagesSection from './components/ProductStagesSection';
import StatsSection from './components/StatsSection';
import WhyPartnerSection from './components/WhyPartnerSection';
import TechStackSection from './components/TechStackSection';
import IndustriesSection from './components/IndustriesSection';
import HiringProcessSection from './components/HiringProcessSection';

export const metadata: Metadata = {
  title: 'SaaS Product Development Services | Netsmartz',
  description: 'End-to-End product development services with agile teams to build, scale, and ship your idea to the market. Hire the best developers for your SaaS product.',
  openGraph: {
    title: 'Software Product Development - Netsmartz',
    description: 'Build, scale, and ship your SaaS product with expert agile teams',
    type: 'website',
  },
};

export default function SoftwareProductDevelopmentPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ChallengesSection />
      <ServicesSection />
      <ProductStagesSection />
      <StatsSection />
      <WhyPartnerSection />
      <SuccessStoriesSection />
      <TechStackSection />
      <IndustriesSection />
      <HiringProcessSection />
      <ContactSection />
    </div>
  );
}
