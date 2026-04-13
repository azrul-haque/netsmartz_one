import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import Link from 'next/link';
import { FiCheck } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Netsmartz AI Pods Case Study Staffing | Netsmartz',
  description: 'How an IT Staffing Firm Closed 3 AI Pods in 60 Days with Netsmartz',
};

export default function StaffingCaseStudyPage() {
  const deliverables = [
    'AI Candidate Matching Engine',
    'AI Pod Placement',
    'Managed AI Execution',
    'Client Expansion Strategy'
  ];

  const challenges = [
    {
      title: 'Failed Hiring Attempts',
      description: 'The SaaS client spent 6 months trying to hire internally—interviews, offers, negotiations. No launch. The AI project never left the whiteboard.'
    },
    {
      title: 'Traditional Staffing Limitations',
      description: 'The staffing firm\'s standard model—posting job descriptions and placing full-time engineers—couldn\'t solve the speed gap. The client needed execution, not another candidate slate.'
    },
    {
      title: 'High Cost of Delay',
      description: 'With every month of delay, the client burned $18k/month on contracted development costs with no tangible AI asset to show for it.'
    }
  ];

  const solutions = [
    {
      title: 'The AI Pod Model',
      description: 'A dedicated AI Pod was deployed, consisting of: AI/ML Engineer, Data Engineer, Integration Engineer, Product Owner. This team took full ownership of the SaaS client\'s AI roadmap.'
    },
    {
      title: 'Production-First Delivery',
      description: 'The Pod built the AI-powered candidate matching engine using real-world data from day one. No pilots. No handoffs. Just production-focused development with structured validation on edge cases and biases.'
    },
    {
      title: 'Speed Without Risk',
      description: 'The Pod model eliminated hiring risk entirely. The staffing firm owned the client relationship. Netsmartz owned the execution. The client got a working solution in weeks, not months.'
    }
  ];

  const results = [
    { label: '42 days', value: 'AI candidate matching engine' },
    { label: '$18k/month', value: 'in previously wasted dev costs' },
    { label: '2 Pods', value: 'added within 60 days' },
    { label: '15%', value: 'Recurring revenue stream without managing engineers' }
  ];

  const techStack = [
    { category: 'Modeling & Data', items: ['Python', 'TensorFlow', 'PyTorch', 'Pandas'] },
    { category: 'MLOps & Deployment', items: ['Docker', 'Kubernetes', 'CI/CD Pipelines'] },
    { category: 'Monitoring & Analytics', items: ['MLflow', 'Prometheus', 'Custom Dashboards'] },
    { category: 'Cloud Infrastructure', items: ['Amazon Web Services (AWS)', 'Kubernetes'] }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/case-studies/staffing-hero.jpg"
            alt="Technology Team"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-white">
            <div className="inline-block px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-white/20">
              AI Pod - Staffing
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              How an IT Staffing Firm Closed 3 AI Pods in 60 Days with Netsmartz
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Discover how a Denver IT staffing firm partnered with Netsmartz to deliver AI for their SaaS client—using a new model that turned a stalled project into a $18k/month savings and three new revenue streams.
            </p>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                <p className="text-xs sm:text-sm text-gray-400 mb-1">Industry</p>
                <p className="text-sm sm:text-base font-semibold">IT Staffing / SaaS</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                <p className="text-xs sm:text-sm text-gray-400 mb-1">Location</p>
                <p className="text-sm sm:text-base font-semibold">Denver, North America</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Check Your AI Pod Partnership Feasibility Today
            </a>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Deliverables
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {deliverables.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <p className="text-sm sm:text-base font-semibold text-gray-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Client Overview
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              The client is a Denver-based IT staffing firm specializing in placing technical talent with mid-to-large enterprise clients. One of their key accounts—a fast-growing B2B SaaS platform—needed an AI-powered candidate matching engine to automate and improve their talent acquisition process. The staffing firm's role was to deliver this solution on behalf of their client.
            </p>
          </div>
        </div>
      </section>

      {/* Business Challenges */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
            Business Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#fe7725] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl sm:text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{challenge.title}</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Our AI Pod-Led Solutions
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#fe7725] rounded-lg flex items-center justify-center">
                    <FiCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{solution.title}</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{solution.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#fe7725] to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
            Results & Achievements
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {results.map((result, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6 lg:p-8 text-center">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">{result.label}</p>
                <p className="text-xs sm:text-sm lg:text-base text-white/90">{result.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Tech Stack Used
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {techStack.map((stack, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#fe7725] rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaway */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">
            Key Takeaway
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
            By shifting from "placing talent" to "placing Pods," this Denver IT staffing firm unlocked a new revenue model—delivering production-ready AI for their SaaS client in 42 days, saving $18k/month, and expanding to three active Pods within two months.
          </p>
          <p className="text-base sm:text-lg text-white font-semibold mb-6 sm:mb-8">
            The result? A protected client relationship, recurring revenue, and zero engineering management overhead.
          </p>
          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Want to offer AI execution without the hiring headache?
            </a>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
            Recent Case Studies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/success-stories/netsmartz-ai-pods-case-study-advisory" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#fe7725] transition-colors">
                  Netsmartz AI Pods Case Study: Advisory
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
