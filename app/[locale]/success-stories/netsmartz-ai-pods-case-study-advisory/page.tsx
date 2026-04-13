import React from 'react';
import { Metadata } from 'next';
import ContactSection from '@/components/sections/ContactSection';
import Link from 'next/link';
import { FiCheck } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Netsmartz AI Pods Case Study: Advisory | Netsmartz',
  description: 'How a Fractional CTO Scaled AI Execution in Manufacturing Without Hiring',
};

export default function AdvisoryCaseStudyPage() {
  const deliverables = [
    'AI Strategy',
    'Cross-Functional AI Pod',
    'Production-Ready AI Delivery',
    'Scalable Execution Model',
    'AI Pod Operations'
  ];

  const challenges = [
    {
      title: 'The $180k Hiring Gamble',
      description: 'The client had a budget for a senior AI engineer. But full-time hires come with risk: 6-month ramp-up, cultural fit uncertainty, and no guarantee of delivery. One bad hire could cost $180k+ and derail the entire AI roadmap.'
    },
    {
      title: 'Stalled Initiatives',
      description: 'Without dedicated execution bandwidth, multiple AI pilots had stalled. Ideas existed. Strategy existed. But no one existed to build, integrate, and deploy.'
    },
    {
      title: 'Reputation at Risk',
      description: "The fractional CTO's reputation was tied to delivering outcomes. Recommending a risky full-time hire—or worse, watching the client's AI efforts fail—was not an option."
    }
  ];

  const solutions = [
    {
      title: 'The AI Pod Model',
      description: 'A dedicated manufacturing-focused AI Pod was deployed, consisting of: AI/ML Engineer, Data Engineer, Integration Engineer, Product Owner. The fractional CTO owned the strategy and client relationship. The Pod owned the execution.'
    },
    {
      title: 'Zero Hiring Risk',
      description: 'The client avoided the $180k gamble entirely. No interviews. No onboarding. No management overhead. The Pod was delivered in weeks, not months.'
    },
    {
      title: 'Production-First Mindset',
      description: 'The Pod built with real-world manufacturing constraints from day one—integrating with existing PLCs, sensor networks, and ERP systems—ensuring the solution worked on the plant floor, not just in a notebook.'
    }
  ];

  const results = [
    { label: '2 weeks', value: 'to deliver the first Pod' },
    { label: '$180k+', value: 'saved on full-time engineer gamble' },
    { label: '3 Pods', value: 'added within months' },
    { label: '10%', value: 'recurring revenue stream' }
  ];

  const techStack = [
    { category: 'Modeling & Data', items: ['Python', 'TensorFlow', 'PyTorch', 'Pandas'] },
    { category: 'MLOps & Deployment', items: ['Docker', 'Kubernetes', 'CI/CD Pipelines'] },
    { category: 'Integration', items: ['REST APIs', 'OPC-UA connectors', 'SAP Cloud Platform'] },
    { category: 'Monitoring & Analytics', items: ['Grafana', 'MLflow', 'custom alerting system'] }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/case-studies/advisory-hero.jpg"
            alt="Manufacturing AI"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-white">
            <div className="inline-block px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-xs sm:text-sm font-semibold mb-4 sm:mb-6 border border-white/20">
              AI Pod - Advisory
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              How a Fractional CTO Scaled AI Execution in Manufacturing Without Hiring
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Learn how a fractional CTO partnered with Netsmartz to move a manufacturing client from hiring paralysis to production-ready AI—using the AI Pod model to protect his reputation and unlock recurring revenue.
            </p>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                <p className="text-xs sm:text-sm text-gray-400 mb-1">Industry</p>
                <p className="text-sm sm:text-base font-semibold">Manufacturing</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                <p className="text-xs sm:text-sm text-gray-400 mb-1">Location</p>
                <p className="text-sm sm:text-base font-semibold">USA</p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
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
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Client Overview
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                The client is a U.S.-based manufacturing plant struggling to operationalize AI across their production lines. They had ambitious AI goals—predictive maintenance, quality control automation, and supply chain optimization—but were paralyzed by the risk of hiring the wrong talent. They turned to their trusted fractional CTO for a solution.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/case-studies/advisory-client.jpg"
                  alt="Manufacturing Plant"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
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
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">{result.label}</p>
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
            By shifting from "placing engineers" to "placing Pods," this fractional CTO solved his client's AI paralysis without taking on hiring risk. He kept his reputation intact, delivered production-ready AI in weeks, and built a scalable, recurring revenue stream—all without managing a single engineer.
          </p>
          <p className="text-base sm:text-lg text-white font-semibold mb-6 sm:mb-8">
            This is the AI execution model where you own the strategy. We own the execution. And that's how your reputation stays protected.
          </p>
          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore AI Pod Options for Your Clients
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
            <Link href="/success-stories/netsmartz-ai-pods-case-study-staffing" className="group">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#fe7725] transition-colors">
                  Netsmartz AI Pods Case Study Staffing
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