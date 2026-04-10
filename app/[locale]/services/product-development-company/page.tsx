import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import InsightsSection from '@/components/sections/InsightsSection';
import HeroSection from './components/HeroSection';
import CompetenciesSection from './components/CompetenciesSection';
import OfferingSection from './components/OfferingSection';
import TechStackSection from '../software-product-development/components/TechStackSection';
import EngagementModelsSection from './components/EngagementModelsSection';
import Link from 'next/link';

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

  const stories = [
    {
      image: '/images/case-studies/advisory-thumb.jpg',
      category: 'AI Pod - Advisory',
      location: 'Manufacturing / USA',
      title: 'How a Fractional CTO Scaled AI Execution in Manufacturing Without Hiring',
      link: '/success-stories/netsmartz-ai-pods-case-study-advisory'
    },
    {
      image: '/images/case-studies/staffing-thumb.jpg',
      category: 'AI Pod - Staffing',
      location: 'IT Staffing / Denver',
      title: 'How an IT Staffing Firm Closed 3 AI Pods in 60 Days with Netsmartz',
      link: '/success-stories/netsmartz-ai-pods-case-study-staffing'
    }
  ];

  return (
    <div className="bg-white">
      <HeroSection />
      <CompetenciesSection />
      <OfferingSection />
      <TechStackSection />
      
      {/* Success Stories Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-[#fe7725] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">2100+ SATISFIED CLIENTS</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Success Stories
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Learn how organizations are redefining business norms with our cutting-edge solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {stories.map((story, index) => (
              <article
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-[#fe7725] text-white text-xs sm:text-sm font-semibold rounded-full">
                      {story.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-[#fe7725] font-semibold mb-2">{story.location}</p>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 line-clamp-2">{story.title}</h3>
                  <Link
                    href={story.link}
                    className="inline-flex items-center text-[#fe7725] font-semibold hover:text-orange-600 transition-colors text-sm sm:text-base"
                  >
                    Read Success Story
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/success-story"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View all Success Stories
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} />
      <EngagementModelsSection />
      <InsightsSection insights={insights} />
      <ContactSection />
    </div>
  );
}
