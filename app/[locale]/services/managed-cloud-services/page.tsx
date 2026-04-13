import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from './components/HeroSection';
import TailoredSolutionsSection from './components/TailoredSolutionsSection';
import KeyFeaturesSection from './components/KeyFeaturesSection';
import DevOpsServicesSection from './components/DevOpsServicesSection';
import WhyChooseSection from './components/WhyChooseSection';

export const metadata: Metadata = {
  title: 'Managed Cloud Services | Netsmartz',
  description: 'Maximize performance, reduce costs, and ensure scalability with tailored cloud solutions designed for your business success.',
};

export default function ManagedCloudServicesPage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <TailoredSolutionsSection />
      <KeyFeaturesSection />
      <DevOpsServicesSection />
      <WhyChooseSection />
      <ContactSection />
    </div>
  );
}
