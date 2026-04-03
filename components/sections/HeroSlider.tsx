'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';

const HeroSlider: React.FC = () => {
  const t = useTranslations('hero');
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: t('slide1Title'),
      highlight: t('slide1Highlight'),
      subtitle: t('slide1Subtitle'),
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80',
      cta: t('slide1Cta'),
    },
    {
      title: t('slide2Title'),
      highlight: t('slide2Highlight'),
      subtitle: t('slide2Subtitle'),
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80',
      cta: t('slide2Cta'),
    },
    {
      title: t('slide3Title'),
      highlight: t('slide3Highlight'),
      subtitle: t('slide3Subtitle'),
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80',
      cta: t('slide3Cta'),
    },
    {
      title: t('slide4Title'),
      highlight: t('slide4Highlight'),
      subtitle: t('slide4Subtitle'),
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80',
      cta: t('slide4Cta'),
    },
    {
      title: t('slide5Title'),
      highlight: t('slide5Highlight'),
      subtitle: t('slide5Subtitle'),
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1920&q=80',
      cta: t('slide5Cta'),
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl h-full flex items-center text-center justify-center">
            <div className="max-w-3xl space-y-8 flex flex-col items-center justify-center">
              {/* Slide Indicator Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#fe7725] to-[#ff9555] backdrop-blur-sm ">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                <span className="text-white text-sm font-semibold ">{t('badge')}</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold text-white leading-tight animate-fade-up">
                {slide.title}
                <span className="text-[#fe7725]">{slide.highlight}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
                {slide.subtitle}
              </p>

              {/* CTA Button */}
              <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-[#fe7725] hover:bg-[#e5661f] text-white rounded-lg font-semibold text-lg shadow-glow-lg transition-all duration-300 hover:scale-105"
                >
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-primary transition-all duration-300"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="text-2xl" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-primary transition-all duration-300"
        aria-label="Next slide"
      >
        <FiChevronRight className="text-2xl" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-12 bg-[#fe7725]' : 'w-8 bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
