import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from './components/HeroSection';
import ProblemsSection from './components/ProblemsSection';
import WhyAIBreaksSection from './components/WhyAIBreaksSection';
import BriefSection from './components/BriefSection';
import SolutionSection from './components/SolutionSection';
import UseCasesSection from './components/UseCasesSection';
import CTASection from './components/CTASection';
import OutcomesSection from './components/OutcomesSection';
import IndustrySection from './components/IndustrySection';
import WhyNetsmartzSection from './components/WhyNetsmartzSection';

export const metadata: Metadata = {
  title: 'Data Pod Services | AI & Data Engineering Pods for Enterprises | Netsmartz',
  description: 'Launch AI and analytics faster with dedicated Data Pods. Get scalable data engineering, governance, and AI delivery built for modern enterprises.',
  openGraph: {
    title: 'Data Pod Services - Netsmartz',
    description: 'Fix Your Data Foundation. Unlock AI ROI in 90 Days',
    type: 'website',
  },
};

export default function DataPodsPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ProblemsSection />
      <WhyAIBreaksSection />
      <BriefSection />
      <SolutionSection />
      <UseCasesSection />
      <CTASection />
      <OutcomesSection />
      <IndustrySection />
      <WhyNetsmartzSection />
      <ContactSection />
    </div>
  );
}
