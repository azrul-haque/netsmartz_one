import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from './components/HeroSection';
import ProblemsSection from './components/ProblemsSection';
import SolutionsOverviewSection from './components/SolutionsOverviewSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import ApproachSection from './components/ApproachSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import WhyNetsmartzSection from './components/WhyNetsmartzSection';

export const metadata: Metadata = {
  title: 'AI/ML Services - Enterprise AI Solutions | Netsmartz',
  description: 'Turn AI from experimentation into real business impact. AI/ML services that bridge the gap—turning data into intelligent systems that automate decisions and optimize operations.',
  openGraph: {
    title: 'AI/ML Services - Netsmartz',
    description: 'Turn AI from Experimentation into Real Business Impact',
    type: 'website',
  },
};

export default function AIMLServicesPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ProblemsSection />
      <SolutionsOverviewSection />
      <ServicesSection />
      <ProcessSection />
      <ApproachSection />
      <TargetAudienceSection />
      <WhyNetsmartzSection />
      <ContactSection />
    </div>
  );
}
