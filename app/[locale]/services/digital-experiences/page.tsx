import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import InsightsSection from '@/components/sections/InsightsSection';
import HeroSection from './components/HeroSection';
import CustomerJourneySection from './components/CustomerJourneySection';
import ArsenalSection from './components/ArsenalSection';
import OmnichannelSection from './components/OmnichannelSection';
import BenefitsSection from './components/BenefitsSection';
import FAQSection from './components/FAQSection';

export const metadata: Metadata = {
  title: 'Digital eCommerce Solution & Planning | Best Digital Experience',
  description: 'We provide an ultimate digital experience with our end-to-end digital eCommerce solutions- eCommerce website development, digital assets & more. Call us now!',
  openGraph: {
    title: 'Digital Experiences - Netsmartz',
    description: 'Crafting Awesome Digital Experiences with Adobe Experience Cloud',
    type: 'website',
  },
};

export default function DigitalExperiencesPage() {
  const testimonials = [
    {
      quote: "Our organization has partnered with Envision eCommerce for the past four years to manage our Magento e-commerce platform. They have consistently proven to be dependable and knowledgeable partners. Rajwinder's technical expertise and outstanding customer service have been a standout part of this collaboration and a key reason for its success.",
      name: "Marcia Strickland",
      title: "Director, SkillsUSA",
      image: "/images/placeholder-avatar.jpg"
    },
    {
      quote: "The team at Envision eCommerce provided outstanding support in helping us launch our store online. They've been extremely flexible in the process, and I highly recommend their expertise and services.",
      name: "William Doyle",
      title: "Southco",
      image: "/images/placeholder-avatar.jpg"
    }
  ];

  const insights = [
    {
      type: 'Blog' as const,
      title: "Personalized Shopping Experience for Your Customers with AI",
      image: "https://envisionecommerce.com/wp-content/uploads/2024/09/personalized-shopping-experience.png",
      link: "#"
    },
    {
      type: 'Blog' as const,
      title: "3 Principles to Understand the Online Shopping Scenario After the Pandemic",
      image: "https://envisionecommerce.com/wp-content/uploads/2022/05/Online-Shopping-After-Pandemic.jpg",
      link: "#"
    },
    {
      type: 'Blog' as const,
      title: "Adobe Summit 2022: Key Highlights of The Biggest Digital Experience Conference",
      image: "https://envisionecommerce.com/wp-content/uploads/2022/03/Adobe-Summit-2022-Key-Highlights-of-The-Biggest-Digital-Experience-Conference.png",
      link: "#"
    }
  ];

  return (
    <div className="bg-white">
      <HeroSection />
      <CustomerJourneySection />
      <ArsenalSection />
      <OmnichannelSection />
      <BenefitsSection />
      <TestimonialsSection testimonials={testimonials} />
      <FAQSection />
      <InsightsSection insights={insights} />
      <ContactSection />
    </div>
  );
}