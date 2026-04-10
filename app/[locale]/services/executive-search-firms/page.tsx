import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from './components/HeroSection';
import WhyLeadershipSection from './components/WhyLeadershipSection';
import ChallengeSection from './components/ChallengeSection';
import ApproachSection from './components/ApproachSection';
import TargetSection from './components/TargetSection';
import WhyNetsmartzSection from './components/WhyNetsmartzSection';

export const metadata: Metadata = {
  title: 'Executive Search for GCCs - Build the Right Leadership | Netsmartz',
  description: 'Executive search services for Global Capability Centers (GCCs). Find experienced leaders who can align global strategy with local execution and scale operations effectively.',
  openGraph: {
    title: 'Executive Search for GCCs - Netsmartz',
    description: 'Build your GCC with the right leadership from day one',
    type: 'website',
  },
};

export default function ExecutiveSearchFirmsPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <WhyLeadershipSection />
      <ChallengeSection />
      <ApproachSection />
      <TargetSection />
      <WhyNetsmartzSection />
      <ContactSection />
    </div>
  );
}
