import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import InsightsSection from '@/components/sections/InsightsSection';
import HeroSection from './components/HeroSection';
import CompetenciesSection from './components/CompetenciesSection';
import OfferingSection from './components/OfferingSection';
import TechStackSection from '../software-product-development/components/TechStackSection';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import EngagementModelsSection from './components/EngagementModelsSection';

export const metadata: Metadata = {
  title: 'Custom Mobile App Development Services | Netsmartz',
  description: 'Do you want to build custom mobile applications on different platforms seamlessly? Then hire offshore web developers from Netsmartz for seamless operations.',
  openGraph: {
    title: 'Mobile App Development Company - Netsmartz',
    description: 'Craft, design, and develop powerful & engaging mobile applications',
    type: 'website',
  },
};

export default function MobileAppDevelopmentCompanyPage() {
  const testimonials = [
    {
      quote: "Having previously worked with Netsmartz, I found it easy to reconnect with them for my latest project.",
      name: "Steve Clemenson",
      title: "VP - Operations, Seneca Dairy Systems",
      image: "https://netsmartz.com/wp-content/uploads/2022/12/steve-clemson.jpg"
    },
    {
      quote: "The Netsmartz Team is dedicated, responsive, hardworking and has followed through on their commitments.",
      name: "Dr. Martin Hinckley",
      title: "",
      image: "https://netsmartz.com/wp-content/uploads/2022/04/18.jpg"
    },
    {
      quote: "My experience with Netsmartz far exceeded my expectations. They delivered on the same level as what I'm used to working with on our global outsourcing projects.",
      name: "Jeff Burton",
      title: "Director of Technology, Merck Tech",
      image: "https://netsmartz.com/wp-content/uploads/2022/12/jeff-burton.jpg"
    }
  ];

  const insights = [
    {
      type: 'Whitepaper' as const,
      title: "Unleashing the Power of Minimum Viable Product (MVP) for a Business",
      description: "A significant reason for the failure of startups is that entrepreneurs and business leaders design their initial products based on assumptions. They assume that their business product will solve probl...",
      link: "#"
    },
    {
      type: 'Blog' as const,
      title: "Flutter versus Dart",
      image: "https://netsmartz.com/wp-content/uploads/2021/02/Flutter-vs-React-Native.png",
      link: "#"
    },
    {
      type: 'Blog' as const,
      title: "Netsmartz Top Mobile App Development Company by TopFirms",
      image: "https://netsmartz.com/wp-content/uploads/2020/07/TOPFIRMS.png",
      link: "#"
    }
  ];

  return (
    <div className="bg-white">
      <HeroSection />
      <CompetenciesSection />
      <OfferingSection />
      <TechStackSection />
      <SuccessStoriesSection />
      <TestimonialsSection testimonials={testimonials} />
      <EngagementModelsSection />
      <InsightsSection insights={insights} />
      <ContactSection />
    </div>
  );
}