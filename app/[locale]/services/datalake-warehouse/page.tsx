import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from './components/HeroSection';
import ProblemsSection from './components/ProblemsSection';
import SolutionsSection from './components/SolutionsSection';
import ComparisonSection from './components/ComparisonSection';
import ApproachSection from './components/ApproachSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import WhyNetsmartzSection from './components/WhyNetsmartzSection';

export const metadata: Metadata = {
  title: 'DataLake & Warehouse Services - Build Scalable Data Foundation | Netsmartz',
  description: 'Build modern data lake and warehouse architectures where data is structured, accessible, and ready to drive real-time insights.',
  openGraph: {
    title: 'DataLake & Warehouse Services - Netsmartz',
    description: 'Build a Scalable Data Foundation for Real-Time Insights',
    type: 'website',
  },
};

export default function DataLakeWarehousePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ProblemsSection />
      <SolutionsSection />
      <ComparisonSection />
      <ApproachSection />
      <TargetAudienceSection />
      <WhyNetsmartzSection />
      <ContactSection />
    </div>
  );
}
