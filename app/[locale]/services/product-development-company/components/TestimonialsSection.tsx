'use client';

import React, { useState } from 'react';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Throughout my work with Netsmartz, three things I loved: compassionate & passionate people, the company investing in its people, & the leadership role they play.",
      name: "Indresh",
      title: "Founder & CTO, HelpAll Social",
      image: "https://netsmartz.com/wp-content/uploads/2022/12/8.jpg"
    },
    {
      quote: "My experience with Netsmartz far exceeded my expectations. They delivered on the same level as what I'm used to working with on our global outsourcing projects.",
      name: "Jeff Burton",
      title: "Director of Technology, Merck Tech",
      image: "https://netsmartz.com/wp-content/uploads/2022/12/jeff-burton.jpg"
    },
    {
      quote: "Netsmartz has been able to work out an optimal path and deliver groundbreaking technology toward creating an outstanding product.",
      name: "George",
      title: "Managing Director, Single Click Solutions",
      image: "https://netsmartz.com/wp-content/uploads/2022/04/17.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What <span className="text-[#fe7725]">Our Clients</span> Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="mb-8">
              <svg className="w-12 h-12 text-[#fe7725] mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z"/>
              </svg>
              <p className="text-xl text-white leading-relaxed mb-6">
                {testimonials[activeIndex].quote}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <img
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#fe7725]"
              />
              <div>
                <h4 className="text-lg font-bold text-white">{testimonials[activeIndex].name}</h4>
                <p className="text-gray-400">{testimonials[activeIndex].title}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all ${
                  activeIndex === index ? 'border-[#fe7725] scale-110' : 'border-white/20'
                }`}
              >
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
