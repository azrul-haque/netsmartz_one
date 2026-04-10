import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import TestimonialSection from './components/TestimonialSection';
import WhyChooseSection from './components/WhyChooseSection';
import IndustryTrendsSection from './components/IndustryTrendsSection';
import IndustriesSection from '../devops/components/IndustriesSection';

export const metadata: Metadata = {
  title: 'Cybersecurity Assessment & Services | Netsmartz',
  description: 'Your Managed Security Services Provider Built For the Enterprise. Detect, respond, and eliminate threats before they impact your business.',
};

export default function CybersecurityPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialSection />
      <WhyChooseSection />
      <IndustryTrendsSection />
      <IndustriesSection />
      <ContactSection />
    </div>
  );
}
