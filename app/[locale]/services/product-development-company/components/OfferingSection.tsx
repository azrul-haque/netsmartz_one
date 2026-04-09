'use client';

import React from 'react';

const OfferingSection: React.FC = () => {
  const offerings = [
    {
      title: "Prototyping",
      description: "Netsmartz ensures the delivery of complete specification lists and designed interfaces, keeping into account your future scalability. We focus on minimizing development risks and forecasting investments.",
      image: "/images/services/product-development-company/prototyping.jpg"
    },
    {
      title: "Product Development",
      description: "We implement an agile development methodology while carrying out all our development services activities. The product development process that we follow prioritizes the requirements of the clients.",
      image: "/images/services/product-development-company/development.jpg"
    },
    {
      title: "Product Testing",
      description: "Our highly dedicated QA team makes sure that your product will be best known for its performance and functionality in the market. Our testing tools ascertain that your product is reliable and secure.",
      image: "/images/services/product-development-company/testing.jpg"
    },
    {
      title: "Product Support",
      description: "We stay updated with the latest trends and technologies to keep our customers satisfied. Furthermore, we enable them to stay ahead of the curve through our cutting-edge product support services.",
      image: "/images/services/product-development-company/support.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-[#fe7725] font-semibold text-sm uppercase tracking-wider mb-2">Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Offering
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Architect your solution. Accelerate your project development. Upscale your product. Build better. On-demand developers for your software product development project.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Request a Free Consultation
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={offering.image}
                  alt={offering.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{offering.title}</h3>
                <p className="text-gray-300 leading-relaxed">{offering.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingSection;
