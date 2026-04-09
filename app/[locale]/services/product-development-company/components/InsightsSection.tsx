'use client';

import React from 'react';

const InsightsSection: React.FC = () => {
  const insights = [
    {
      type: "Whitepaper",
      title: "Unleashing the Power of Minimum Viable Product (MVP) for a Business",
      description: "A significant reason for the failure of startups is that entrepreneurs and business leaders design their initial products based on assumptions. They assume that their business product will solve probl...",
      link: "#",
      image: ""
    },
    {
      type: "Blog",
      title: "How to build a Minimum Viable Product (MVP) for a Successful Business",
      image: "https://netsmartz.com/wp-content/uploads/2022/03/How-to-build-a-Minimum-Viable-Product-MVP-for-a-Successful-Business.png",
      link: "#"
    },
    {
      type: "Blog",
      title: "Dedicated Product Development Teams for Projects of Any Scale and Complexity",
      image: "https://netsmartz.com/wp-content/uploads/2021/03/dedicated-team-blog-2.png",
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-[#fe7725] font-semibold text-sm uppercase tracking-wider mb-2">KNOW MORE</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Insights
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Read our blogs to stay updated on the latest trends and challenges in IT and Cloud infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group"
            >
              {insight.image && (
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[#fe7725] text-white text-xs font-semibold rounded-full mb-3">
                  {insight.type}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{insight.title}</h3>
                {insight.description && (
                  <p className="text-gray-300 mb-4 line-clamp-3">{insight.description}</p>
                )}
                <a
                  href={insight.link}
                  className="inline-flex items-center text-[#fe7725] font-semibold hover:text-orange-400 transition-colors"
                >
                  {insight.type === "Whitepaper" ? "Download Whitepaper" : "Read Article"}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Learn more about the intricacies and processes of the Remote Development industry and scale your Team today!
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Insights
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
