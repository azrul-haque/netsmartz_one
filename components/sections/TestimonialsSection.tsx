'use client';

import React, { useState } from 'react';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

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
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#fe7725] flex-shrink-0">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/placeholder-avatar.jpg';
                  }}
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">{testimonials[activeIndex].name}</h4>
                {testimonials[activeIndex].title && (
                  <p className="text-gray-400">{testimonials[activeIndex].title}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all ${
                  activeIndex === index ? 'border-[#fe7725] scale-110' : 'border-white/20'
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/placeholder-avatar.jpg';
                  }}
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
