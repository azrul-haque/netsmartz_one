'use client';

import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      question: 'How is an AI pod different from traditional outsourcing or staff augmentation?',
      answer: 'At their core, AI pods are outcome-driven execution units, not time-and-material teams, making them ideal AI-powered tech teams for SaaS businesses. Instead of managing individual resources, you get a dedicated, cross-functional pod accountable for shipping production AI features. These pods work by operating autonomously, integrating into your product roadmap, and focusing on measurable outcomes, not hours logged.'
    },
    {
      question: 'Is this model suitable for scaling AI across multiple features or products?',
      answer: 'Yes. Once value addition is realized by the first AI pod, it becomes simple to expand or replicate it. This creates an ideal platform for customizing all new features within organizations that provide SaaS services.'
    },
    {
      question: 'Do we need an internal AI or data science team to work with AI pods?',
      answer: 'No. AI pods are intended to work autonomously while integrating with and working alongside your product and engineering teams. Your team will maintain focus on core road-mapping priorities while the pod takes care of the AI execution process from start to finish.'
    },
    {
      question: 'How fast can we realistically see production results with AI pods?',
      answer: 'Typically, an average SaaS organization can deliver its first production-quality AI capability within 6 to 8 weeks. This is followed by iterative optimization, meaning you get to enhance your capabilities without having to re-initiate the delivery cycle.'
    },
    {
      question: 'Are your AI pods compatible with our existing SaaS infrastructure and tools?',
      answer: 'Yes! As a leading AI SaaS development company in the USA, Netsmartz designs AI pods compatible with your existing infrastructure. In fact, we do not ask you to change your APIs, data processing, CI/CD tools, or your choice of infrastructure—in the cloud or elsewhere.'
    },
    {
      question: 'How do you ensure security, compliance, and enterprise governance?',
      answer: 'Governance is a core component of Netsmartz AI Pods, starting from day one. Our AI development pods for SaaS can be used in a corporate and regulated SaaS setup, not merely in experimental stages. They cover all critical aspects, such as access management, data segregation, audit trails, and cost tracking.'
    },
    {
      question: 'How can my SaaS company get started with Netsmartz AI Pods?',
      answer: 'Start with a comprehensive AI risk & ROI analysis. It will enable a feasibility study and ROI study before any AI pod is deployed. This way, our SaaS AI development company would be able to prioritize the right AI use cases and have a clear roadmap on executing these. For more information, contact us at +1-888-661-8967 or info@netsmartz.com.'
    }
  ];

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-[#fe7725]">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {displayedFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              data-testid={`faq-item-${index}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</span>
                <FiChevronDown
                  className={`text-2xl text-[#fe7725] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {faqs.length > 5 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              data-testid="toggle-faqs-btn"
            >
              {showAll ? 'Show Less' : `Show All ${faqs.length} FAQs`}
              <FiChevronDown className={`text-lg transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQSection;
