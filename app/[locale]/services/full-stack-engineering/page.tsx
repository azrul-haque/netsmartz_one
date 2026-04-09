import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import SuccessStoriesSection from '@/components/sections/SuccessStoriesSection';
import HeroSection from './components/HeroSection';
import EngineeringSpeedSection from './components/EngineeringSpeedSection';
import EngineeringScopeSection from './components/EngineeringScopeSection';
import MVPScaleSection from './components/MVPScaleSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import WhoThisWorksForSection from './components/WhoThisWorksForSection';
import WhyNetsmartzSection from './components/WhyNetsmartzSection';
import TechStackSection from '../software-product-development/components/TechStackSection';
import IndustriesSection from '../software-product-development/components/IndustriesSection';

export const metadata: Metadata = {
  title: 'Full-Stack Engineering Services | Netsmartz',
  description: 'Build, scale, and evolve your products with full-stack engineering. Expert teams covering frontend, backend, APIs, and cloud-native solutions.',
  openGraph: {
    title: 'Full-Stack Engineering - Netsmartz',
    description: 'End-to-end engineering that moves at product speed',
    type: 'website',
  },
};

export default function FullStackEngineeringPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <EngineeringSpeedSection />
      <EngineeringScopeSection />
      <MVPScaleSection />
      <HowWeWorkSection />
      <WhoThisWorksForSection />
      <WhyNetsmartzSection />
      <SuccessStoriesSection />
      <TechStackSection />
      <IndustriesSection />
      <ContactSection />
    </div>
  );
}
