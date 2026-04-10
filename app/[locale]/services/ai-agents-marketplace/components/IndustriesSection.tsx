'use client';

import React from 'react';
import { FiActivity, FiTool, FiCode, FiShoppingCart, FiRadio, FiDollarSign } from 'react-icons/fi';

const IndustriesSection: React.FC = () => {
  const industries = [
    {
      icon: <FiActivity className="text-3xl" />,
      title: "Healthcare",
      services: ["Prior authorization automation", "Clinical documentation assistance", "Patient intake triage", "HIPAA-compliant workflow agents"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80"
    },
    {
      icon: <FiTool className="text-3xl" />,
      title: "Manufacturing",
      services: ["Predictive maintenance alerts", "Supply chain monitoring", "Quality inspection analysis", "Inventory optimization"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"
    },
    {
      icon: <FiCode className="text-3xl" />,
      title: "SaaS & Technology",
      services: ["Embedded AI features (chat, search, agents)", "User onboarding automation", "Churn prediction", "Product usage analytics"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
    },
    {
      icon: <FiShoppingCart className="text-3xl" />,
      title: "Retail & E-commerce",
      services: ["Personalized recommendations", "Demand forecasting", "Customer support automation", "Returns processing"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80"
    },
    {
      icon: <FiRadio className="text-3xl" />,
      title: "Telecommunications",
      services: ["Network performance monitoring", "Customer churn prediction", "Service call automation", "Field operations scheduling"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80"
    },
    {
      icon: <FiDollarSign className="text-3xl" />,
      title: "Financial Services",
      services: ["Fraud detection alerts", "Regulatory reporting", "Customer inquiry automation", "Document processing"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80"
    }
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#fe7725]/10 text-[#fe7725] text-sm font-semibold mb-4 border border-[#fe7725]/30">
            Industries We Serve
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI agents addressing <span className="text-[#fe7725]">real-world complexities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our marketplace is not one-size-fits-all. Agents are pre-trained and configurable for the unique workflows, compliance needs, and data environments of key industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              data-testid={`industry-card-${index}`}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#fe7725] to-[#ff9555] rounded-xl flex items-center justify-center text-white mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                <ul className="space-y-2">
                  {industry.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="text-sm text-gray-600 flex items-start">
                      <span className="text-[#fe7725] mr-2 mt-1">✓</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;