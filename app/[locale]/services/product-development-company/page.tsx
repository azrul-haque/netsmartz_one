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
  title: 'Smart SaaS Product Development with AI | Netsmartz',
  description: 'Netsmartz, a leading SaaS product development company in the USA, delivers scalable, high performance solutions and expertise in AI in product development for global brands.',
  openGraph: {
    title: 'Product Development Company - Netsmartz',
    description: 'Hire expert product development teams to build, scale, ship, and iterate',
    type: 'website',
  },
};

export default function ProductDevelopmentCompanyPage() {
  const testimonials = [
    {
      quote: "Throughout my work with Netsmartz, three things I loved: compassionate & passionate people, the company investing in its people, & the leadership role they play.",
      name: "Indresh",
      title: "Founder & CTO, HelpAll Social",
      image: "https://netsmartz.com/wp-content/uploads/2022/12/8.jpg"
    },
    {
      quote: "My experience with Netsmartz far exceeded my expectations. They delivered on the same level as what I'm used to working with on our global outsourcing projects.",
      name: "Jeff Burton",
      title: "Director of Technology, Merck Tech",
      image: "https://netsmartz.com/wp-content/uploads/2022/12/jeff-burton.jpg"
    },
    {
      quote: "Netsmartz has been able to work out an optimal path and deliver groundbreaking technology toward creating an outstanding product.",
      name: "George",
      title: "Managing Director, Single Click Solutions",
      image: "https://netsmartz.com/wp-content/uploads/2022/04/17.jpg"
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
      title: "How to build a Minimum Viable Product (MVP) for a Successful Business",
      image: "https://netsmartz.com/wp-content/uploads/2022/03/How-to-build-a-Minimum-Viable-Product-MVP-for-a-Successful-Business.png",
      link: "#"
    },
    {
      type: 'Blog' as const,
      title: "Dedicated Product Development Teams for Projects of Any Scale and Complexity",
      image: "https://netsmartz.com/wp-content/uploads/2021/03/dedicated-team-blog-2.png",
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
