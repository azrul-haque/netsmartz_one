import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { caseStudies } from '@/lib/caseStudiesData';

export const metadata: Metadata = {
  title: 'Our Clients Success Stories & Case Study | Netsmartz',
  description: 'Read our client case studies to learn how Netsmartz, software development team helps business owners to deliver successful software solutions. Learn more!',
};

export default function SuccessStoryPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/case-studies/advisory-hero.jpg')] bg-cover bg-center"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Empowering Businesses to Compete and Win in the New Normal. We have helped 1000+ businesses upscale their digital solutions to meet and exceed the demands of modern consumers.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((study) => (
              <article
                key={study.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={study.thumbnail}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-[#fe7725] text-white text-xs sm:text-sm font-semibold rounded-full">
                      {study.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 line-clamp-2 group-hover:text-[#fe7725] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-3">
                    {study.excerpt}
                  </p>
                  <Link
                    href={`/success-stories/${study.slug}`}
                    className="inline-flex items-center gap-2 text-[#fe7725] font-semibold hover:text-orange-600 transition-colors text-sm sm:text-base"
                  >
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#fe7725] to-orange-600">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to kickstart your project?
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Get in touch with one of our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-100 text-[#fe7725] rounded-xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Build Your Team
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold text-base sm:text-lg border border-white/20 transition-all duration-300"
              >
                Our Engagement Model
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}