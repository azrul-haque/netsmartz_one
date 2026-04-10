import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from './components/HeroSection';
import ChallengesSection from './components/ChallengesSection';
import SolutionsSection from './components/SolutionsSection';
import ApproachSection from './components/ApproachSection';
import AssuranceSection from './components/AssuranceSection';
import TargetSection from './components/TargetSection';
import WhyNetsmartzSection from './components/WhyNetsmartzSection';

export const metadata: Metadata = {
  title: 'Infrastructure Modernization | Netsmartz',
  description: 'Modernize Your Infrastructure Without Disrupting Your Business. Build a resilient, scalable infrastructure for the future.',
};

export default function InfrastructureModernizationPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ChallengesSection />
      <SolutionsSection />
      <ApproachSection />
      <AssuranceSection />
      <TargetSection />
      <WhyNetsmartzSection />
      <ContactSection />
    </div>
  );
}
