import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from './components/HeroSection';
import ProblemsSection from './components/ProblemsSection';
import SolutionSection from './components/SolutionSection';
import DualPillarsSection from './components/DualPillarsSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import ServicesSection from './components/ServicesSection';
import WhyNetsmartzSection from './components/WhyNetsmartzSection';

export const metadata: Metadata = {
  title: 'Data Management & Analytics - Microsoft Fabric Services | Netsmartz',
  description: 'Turn fragmented data into real-time business intelligence with Microsoft Fabric. Unified data platform for data engineering, integration, and analytics.',
  openGraph: {
    title: 'Data Management & Analytics - Microsoft Fabric | Netsmartz',
    description: 'Turn Fragmented Data into Real-Time Business Intelligence',
    type: 'website',
  },
};

export default function DataManagementAnalyticsPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <DualPillarsSection />
      <TargetAudienceSection />
      <ServicesSection />
      <WhyNetsmartzSection />
      <ContactSection />
    </div>
  );
}
