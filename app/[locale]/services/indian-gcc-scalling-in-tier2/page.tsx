import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from './components/HeroSection';
import Tier1ChallengesSection from './components/Tier1ChallengesSection';
import Tier2AdvantageSection from './components/Tier2AdvantageSection';
import ExpansionProcessSection from './components/ExpansionProcessSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import BusinessBenefitsSection from './components/BusinessBenefitsSection';
import WhyNetsmartzSection from './components/WhyNetsmartzSection';

export const metadata: Metadata = {
  title: 'Scale Your GCC in India Tier 2 Cities | Netsmartz',
  description: 'Expand your existing GCC into Tier 2 cities in India for cost optimization, access to untapped talent, and sustainable long-term growth.',
  openGraph: {
    title: 'Indian GCC Scaling in Tier 2 - Netsmartz',
    description: 'Scale smarter, faster, and more cost-efficiently in Tier 2 cities',
    type: 'website',
  },
};

export default function IndianGCCScalingPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <Tier1ChallengesSection />
      <Tier2AdvantageSection />
      <ExpansionProcessSection />
      <TargetAudienceSection />
      <BusinessBenefitsSection />
      <WhyNetsmartzSection />
      <ContactSection />
    </div>
  );
}
