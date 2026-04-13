'use client';

import React from 'react';

const OfferingSection: React.FC = () => {
  const offerings = [
    {
      title: "Mobile Consulting",
      description: "Netsmartz has strong experience in providing client-focused mobile solutions that deliver the best business outcomes. Our consultants help brands navigate all aspects of the digital landscape. We have developed several cost-effective and highly innovative mobility solutions for customers.",
      image: "/images/services/mobile-app-development-company/mobile-design.jpg"
    },
    {
      title: "iOS Apps",
      description: "Netsmartz has gained a wealth of expertise in providing high-quality iOS app development services to its clients. Ensure faultless mobile solutions that can smoothly run on iPhones and iPads. Our developers stay up to date with the latest requirements and guidelines.",
      image: "/images/services/mobile-app-development-company/ios-development.jpg"
    },
    {
      title: "Android Apps",
      description: "Focused on native, hybrid and cross-platform development, Netsmartz guarantees a sustainable mobile experience. We offer design and development of mobile software that runs on all supported Android versions.",
      image: "/images/services/mobile-app-development-company/android-development.jpg"
    },
    {
      title: "Xamarin Apps",
      description: "We use Xamarin to deliver the mobile apps. Furthermore, we guarantee user experience while delivering mobile app that run on both iOS and Android devices.",
      image: "/images/services/mobile-app-development-company/cross-platform.jpg"
    },
    {
      title: "Mobile App Design",
      description: "Ensure delivery of responsive and user-friendly mobile app designs. We appreciate the feedback provided by you and do our best to grasp your vision of a perfect mobile app design.",
      image: "/images/services/mobile-app-development-company/hero-mobile-dev.jpg"
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
            Architect your solution. Accelerate your project development. Upscale your product. Build better. On-demand developers for your mobile app development project.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Request a Free Consultation
          </a>
        </div>

        {/* First row: 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-8">
          {offerings.slice(0, 3).map((offering, index) => (
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

        {/* Second row: 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {offerings.slice(3, 5).map((offering, index) => (
            <div
              key={index + 3}
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