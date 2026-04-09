'use client';

import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why is Customer Experience important in eCommerce?",
      answer: "To establish a leading brand in the market, CX should be the first priority of every eCommerce business. It is crucial to attract customers, increase conversions, generate repeat sales, and build brand loyalty."
    },
    {
      question: "What are the benefits of AEM as a cloud service?",
      answer: "AEM as a cloud service helps businesses manage CX seamlessly. Besides, it has many advantages like improved scalability, a highly-secured CMS, ensures 99.99% uptime, and a low cost of ownership."
    },
    {
      question: "Who manages the updates of Adobe Experience Manager as a Cloud Service?",
      answer: "Adobe is responsible for all the operations and updates on the codebase of AEM. It releases new features every month to update and improve the overall functionality. Plus, Adobe is also releasing bug fixes regularly to improve security."
    },
    {
      question: "How Envision eCommerce can help you with AEM integration?",
      answer: "Adobe Experience Managers provides hundreds of features and integrations to improve the overall functionality of your online store. Our experienced eCommerce developers and store managers can help you with integrating the right AEM features and functions that will bring value to your business."
    },
    {
      question: "What are the challenges of digital commerce?",
      answer: "Running an eCommerce business is not easy in a highly competitive market. Some of the common challenges that digital commerce businesses face include cybersecurity, order fulfillment, attracting the perfect customers, online identity verification, building customer loyalty, performance optimization, improving customer journey, improving the conversion and shopping cart abandonment rate."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-bold text-gray-900 pr-8">{faq.question}</h3>
                {activeIndex === index ? (
                  <FiChevronUp className="w-6 h-6 text-[#fe7725] flex-shrink-0" />
                ) : (
                  <FiChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;