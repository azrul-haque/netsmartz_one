import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import TestimonialSection from './components/TestimonialSection';
import WhyChooseSection from './components/WhyChooseSection';
import IndustriesSection from './components/IndustriesSection';

export const metadata: Metadata = {
  title: 'DevOps Services | Netsmartz',
  description: 'Eliminate Development Bottlenecks with DevOps. Speed up software implementation without sacrificing quality.',
};

export default function DevOpsPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialSection />
      <WhyChooseSection />
      <IndustriesSection />
      <ContactSection />
    </div>
  );
}
