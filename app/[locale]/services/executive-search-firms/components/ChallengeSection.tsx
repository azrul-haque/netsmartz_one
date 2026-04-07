'use client';

import React from 'react';
import { FiGlobe, FiTarget, FiUsers, FiAlertTriangle } from 'react-icons/fi';

const ChallengeSection: React.FC = () => {
  const challenges = [
    {
      icon: <FiGlobe className="text-2xl" />,
      text: "Requires a blend of global business understanding and local market expertise",
    },
    {
      icon: <FiTarget className="text-2xl" />,
      text: "Demands experience in scaling teams, managing operations, and driving outcomes",
    },
    {
      icon: <FiUsers className="text-2xl" />,
      text: "Limited talent pool with proven GCC leadership experience",
    },
    {
      icon: <FiAlertTriangle className="text-2xl" />,
      text: "High impact of hiring decisions—getting it wrong is costly",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              The Challenge: <span className="text-[#fe7725]">GCC Leadership</span> is Not Easy to Find
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Hiring for GCC leadership is fundamentally different from standard recruitment.
            </p>

            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#fe7725]/10 rounded-lg flex items-center justify-center text-[#fe7725] flex-shrink-0">
                    {challenge.icon}
                  </div>
                  <p className="text-gray-700 pt-2">{challenge.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1758518730380-04c8e0d57b68?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjByZWNydWl0bWVudCUyMGhpcmluZyUyMHByb2Nlc3N8ZW58MHx8fHwxNzc1NTQ0NjYyfDA&ixlib=rb-4.1.0&q=85"
              alt="Professional Recruitment"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;