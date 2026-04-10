import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from './components/HeroSection';
import ResultsSection from './components/ResultsSection';
import WhyAISection from './components/WhyAISection';
import ChallengesSection from './components/ChallengesSection';
import BriefSection from './components/BriefSection';
import UseCasesSection from './components/UseCasesSection';
import PodCompositionSection from './components/PodCompositionSection';
import PackagesSection from './components/PackagesSection';
import WhyChooseSection from './components/WhyChooseSection';
import CustomPodSection from './components/CustomPodSection';
import EngagementFlowSection from './components/EngagementFlowSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import FAQSection from './components/FAQSection';

export const metadata: Metadata = {
  title: 'AI Pods for SaaS Development | Production-Ready AI Features | Netsmartz',
  description: 'Netsmartz AI Pods deliver governed, enterprise-ready AI features for SaaS AI development in under 90 days—without vendor lock-in, stalled pilots, or hirings.',
  openGraph: {
    title: 'AI Pods for SaaS Development - Netsmartz',
    description: 'Launch Production-Ready AI Features Without Hiring or Overspending',
    type: 'website',
  },
};

export default function AIPodPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ResultsSection />
      <WhyAISection />
      <ChallengesSection />
      <BriefSection />
      <UseCasesSection />
      <PodCompositionSection />
      <PackagesSection />
      <WhyChooseSection />
      <CustomPodSection />
      <EngagementFlowSection />
      <TargetAudienceSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
