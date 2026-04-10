import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from './components/HeroSection';
import ProblemsSection from './components/ProblemsSection';
import SolutionsSection from './components/SolutionsSection';
import ApproachSection from './components/ApproachSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import WhyNetsmartzSection from './components/WhyNetsmartzSection';

export const metadata: Metadata = {
  title: 'Data Visualization Services - Transform Data into Decisions | Netsmartz',
  description: 'Design intuitive, real-time data visualization solutions that transform complex data into clear, decision-ready insights for your organization.',
  openGraph: {
    title: 'Data Visualization Services - Netsmartz',
    description: 'Turn Data into Clear, Actionable Business Decisions',
    type: 'website',
  },
};

export default function DataVisualizationServicesPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ProblemsSection />
      <SolutionsSection />
      <ApproachSection />
      <TargetAudienceSection />
      <WhyNetsmartzSection />
      <ContactSection />
    </div>
  );
}
