import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import DownloadSection from './components/DownloadSection';
import AgentsByFunctionSection from './components/AgentsByFunctionSection';
import IndustriesSection from './components/IndustriesSection';
import BenefitsSection from './components/BenefitsSection';
import WhyNetsmartzSection from './components/WhyNetsmartzSection';
import ProcessSection from './components/ProcessSection';
import ScorecardSection from './components/ScorecardSection';

export const metadata: Metadata = {
  title: 'AI Agents Marketplace - Deploy AI Agents in 48 Hours | Netsmartz',
  description: 'A curated marketplace of production-ready AI agents designed to automate business workflows across sales, support, finance, operations, and more.',
  openGraph: {
    title: 'AI Agents Marketplace - Netsmartz',
    description: 'Deploy AI agents that deliver ROI in 48 hours',
    type: 'website',
  },
};

export default function AIAgentsMarketplacePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <DownloadSection />
      <AgentsByFunctionSection />
      <IndustriesSection />
      <BenefitsSection />
      <WhyNetsmartzSection />
      <ProcessSection />
      <ScorecardSection />
      <ContactSection />
    </div>
  );
}
