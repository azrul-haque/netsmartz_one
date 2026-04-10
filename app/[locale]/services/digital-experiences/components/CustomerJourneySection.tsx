'use client';

import React from 'react';

const CustomerJourneySection: React.FC = () => {
  const journeySteps = [
    {
      title: "Discovery & Define",
      description: "To get started with our journey of breathing life into your digital commerce vision, our first milestone is to achieve clarity on your strategic vision and come up with tactical roadmaps aligned with your business operations. Based on our initial findings, we decide the people requirements and the skills-acumen mix needed along with the processes that are customized to suit your requirements.",
      points: [
        "Idea/business need a definition",
        "Competition analysis",
        "Target audience research",
        "Defining buyers persona and use cases",
        "Learning and documentation of major workflows",
        "Audit of legacy systems and solutions mapping",
        "Creating solution architecture and diagrams",
        "Defining implementation strategy"
      ],
      image: "/images/services/digital-experiences/content-management.jpg"
    },
    {
      title: "UI/UX/ID",
      description: "With hours of brainstorming and design thinking involved, our experience-design process is deeply rooted in data and behavioral science. The right user-centered approach is needed to come up with well-defined user personas. This will result in information architecture that leads to foolproof wireframes - everything adding up to an impeccable interaction design for your digital commerce brand.",
      points: [
        "Storyboarding & customer experience design",
        "Interaction design on various touch-points",
        "Heuristic evaluation",
        "UX Design - wireframing and prototyping",
        "UI - visual design"
      ],
      image: "/images/services/digital-experiences/ux-design.jpg"
    },
    {
      title: "Personalization/AI",
      description: "Delight your customers with awesome experiences while enhancing their engagement and conversion rates for your digital commerce brand. Unlike rest, we take personalization up another notch with Adobe Sensei for your global audience. We tap into bleeding-edge algorithms that are proven and tested by industry professionals. Not only this, Envision ensures quick integration of AI firepower within your platform so you don't have to wait for the results.",
      points: [
        "Personalized content delivery",
        "Product recommendations",
        "Optimizing buyers' journey, CTA, and Checkout",
        "Advanced A/B testing",
        "Behavioral messaging",
        "360° monitoring"
      ],
      image: "/images/services/digital-experiences/ai-personalization.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white" id="how-we-work">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Immersive Experiences by Envision
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            We echo the belief of Adobe - "The best experiences are consistently personal". Being an industry leader in crafting impeccable digital experiences for the Gen-X, Millennials, and Gen-Z, Envision is well-positioned to empower your brand with the pool of bleeding-edge offerings from Adobe Experience Cloud. Here's how we map customer journeys
          </p>
        </div>

        <div className="space-y-16">
          {journeySteps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{step.description}</p>
                <ul className="space-y-2">
                  {step.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-[#fe7725] mt-1">•</span>
                      <span>{point}</span>
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

export default CustomerJourneySection;