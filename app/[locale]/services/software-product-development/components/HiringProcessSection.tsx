'use client';

import React from 'react';
import { FiMessageSquare, FiUsers, FiCalendar } from 'react-icons/fi';

const HiringProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <FiMessageSquare className="text-4xl text-white" />,
      title: "Tell us the skills you need",
      description: "We'll schedule a call to discuss your requirements.",
    },
    {
      icon: <FiUsers className="text-4xl text-white" />,
      title: "We find the best talent for you",
      description: "Get a list of pre-vetted developers within minutes.",
    },
    {
      icon: <FiCalendar className="text-4xl text-white" />,
      title: "Schedule interviews",
      description: "Meet and select the developers you like.",
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How to Hire a <span className="text-[#fe7725]">Netsmartz Developer?</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Work with best software companies in just 3 easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#fe7725] to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#fe7725] rounded-full flex items-center justify-center text-2xl font-bold">
                  {index + 1}
                </div> */}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringProcessSection;