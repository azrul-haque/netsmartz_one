'use client';

import React from 'react';
import { FiTarget, FiCode, FiUsers, FiLayers } from 'react-icons/fi';

const ChallengesSection: React.FC = () => {
  const challenges = [
    {
      icon: <FiTarget className="text-3xl text-[#fe7725]" />,
      title: "Clarity in Product Development",
      description: "Agile requirement & process mapping to streamline product delivery",
    },
    {
      icon: <FiCode className="text-3xl text-[#fe7725]" />,
      title: "Adopting the Right Tech Stack",
      description: "Choose varied tech stacks to bring innovation & tackle obsolescence",
    },
    {
      icon: <FiUsers className="text-3xl text-[#fe7725]" />,
      title: "Hire a Skilled Team or the right developer",
      description: "Hire Pre-vetted and Remote-ready Developers for your Product",
    },
    {
      icon: <FiLayers className="text-3xl text-[#fe7725]" />,
      title: "Developing in Phases & Iterations",
      description: "Utilize incremental product development & build MVPs and prototypes",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Address <span className="text-[#fe7725]">Product Development Challenges</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Build an Agile Product Development Team that helps you develop, test, deploy and support your SaaS product using any tech stack whether you're a startup or an enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-[#fe7725]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  {challenge.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{challenge.title}</h3>
                  <p className="text-gray-600 text-sm">{challenge.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;