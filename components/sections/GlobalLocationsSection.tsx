'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { FiMapPin, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const GlobalLocationsSection: React.FC = () => {
  const t = useTranslations('locations');
  const locale = useLocale();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const locations = [
    {
      id: 1,
      name: 'Rochester, NY',
      label: t('headquarters'),
      description: t('description'),
      subtitle: t('descriptionSuffix'),
      address: '1250 Pittsford Victor Road Ste 310\nPittsford, NY 14534',
      image: '/assets/office_locations/rochester.jpg',
      mapIcon: '🇺🇸'
    },
    {
      id: 2,
      name: 'Vancouver',
      label: 'Canada',
      description: t('descriptionShort'),
      subtitle: t('descriptionSuffix'),
      address: '701 West Georgia Street, Suite 1500, Vancouver\nBritish Columbia, V7Y 1C6',
      image: '/assets/office_locations/vancouver.jpg',
      mapIcon: '🇨🇦'
    },
    {
      id: 3,
      name: 'Mississauga',
      label: 'Canada',
      description: t('descriptionShort'),
      subtitle: t('descriptionSuffix'),
      address: '2233 Argentia Road, East Tower, Suite 302\nMississauga, Ontario, L5N 2X7',
      image: '/assets/office_locations/mississauga.jpg',
      mapIcon: '🇨🇦'
    },
    {
      id: 4,
      name: 'Dubai',
      label: 'UAE',
      description: t('descriptionShort'),
      subtitle: t('descriptionSuffix'),
      address: '1103, Al Moosa Towers 1, Sheikh Zayed Road\nDubai, UAE',
      image: '/assets/office_locations/dubai.jpg',
      mapIcon: '🇦🇪'
    },
    {
      id: 5,
      name: 'Melbourne',
      label: 'Australia',
      description: t('descriptionShort'),
      subtitle: t('descriptionSuffix'),
      address: 'Level 14, 380 St Kilda Road\nMelbourne, VIC, 3000',
      image: '/assets/office_locations/melbourne.jpeg',
      mapIcon: '🇦🇺'
    },
    {
      id: 6,
      name: 'Singapore',
      label: 'Singapore',
      description: t('descriptionShort'),
      subtitle: t('descriptionSuffix'),
      address: 'DUO Tower, 3 Fraser Street Level 08-21\nSingapore 189352',
      image: '/assets/office_locations/singapore.png',
      mapIcon: '🇸🇬'
    },
    // {
    //   id: 7,
    //   name: 'Pune',
    //   label: 'India',
    //   description: t('descriptionShort'),
    //   subtitle: t('descriptionSuffix'),
    //   address: '22 B Wing, City Vista, Fountain Road\nAshoka Nagar, Kharadi, Pune, Maharashtra 411014',
    //   image: '/assets/office_locations/Pune.jpg',
    //   mapIcon: '🇮🇳'
    // },
    {
      id: 8,
      name: 'Gurugram',
      label: 'India',
      description: t('descriptionShort'),
      subtitle: t('descriptionSuffix'),
      address: '9th Floor, JMD IT Megapolis, Sector 48\nSohna Road, Gurugram, Haryana 122001',
      image: '/assets/office_locations/Gurgaon.jpg',
      mapIcon: '🇮🇳'
    },
    {
      id: 9,
      name: 'Noida',
      label: 'India',
      description: t('descriptionShort'),
      subtitle: t('descriptionSuffix'),
      address: 'Advant Navis Business Park Pvt Ltd, #7, Sector - 142\nExpressway, Noida, Uttar Pradesh - 201301',
      image: '/assets/office_locations/Noida.jpg',
      mapIcon: '🇮🇳'
    },
    {
      id: 10,
      name: 'Chandigarh',
      label: 'Netsmartz House',
      description: t('descriptionShort'),
      subtitle: t('descriptionSuffix'),
      address: 'Plot no. 10, Rajiv Gandhi Technology Park\nChandigarh 160101',
      image: '/assets/office_locations/Chandigarh.jpg',
      mapIcon: '🇮🇳'
    },
    {
      id: 11,
      name: 'Mohali',
      label: 'Netsmartz Square',
      description: t('descriptionShort'),
      subtitle: t('descriptionSuffix'),
      address: 'IT-C-9, Sector 67 Mohali\nPunjab 160062',
      image: '/assets/office_locations/mohali.jpg',
      mapIcon: '🇮🇳'
    }
  ];

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 'next' : 'prev');
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setDirection('next');
    setActiveIndex((prev) => (prev + 1) % locations.length);
  };

  const prevSlide = () => {
    setDirection('prev');
    setActiveIndex((prev) => (prev - 1 + locations.length) % locations.length);
  };

  const activeLocation = locations[activeIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-purple-50 overflow-hidden relative">
      {/* Gradient Orbs Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('title')} <span className="text-[#fe7725]">{t('titleHighlight')}</span> {t('titleSuffix')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Main Content Area */}
        <div className="relative">
          {/* Slide Content */}
          <div className="relative min-h-[500px]">
            <div
              key={activeIndex}
              className={`animate-fadeIn`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
                {/* Left: Description */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
                    <span className="text-3xl">{activeLocation.mapIcon}</span>
                    <span className="text-sm font-semibold text-[#fe7725]">
                      {activeLocation.label}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      <strong>{activeLocation.description}</strong>{' '}
                      {activeLocation.subtitle}
                    </p>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={prevSlide}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-gray-300 hover:border-[#fe7725] hover:bg-[#fe7725] hover:text-white transition-all duration-300 group"
                      aria-label="Previous location"
                    >
                      <FiChevronLeft className="text-xl" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-gray-300 hover:border-[#fe7725] hover:bg-[#fe7725] hover:text-white transition-all duration-300 group"
                      aria-label="Next location"
                    >
                      <FiChevronRight className="text-xl" />
                    </button>
                  </div>
                </div>

                {/* Right: Location Pin Visual with Glass Effect */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    {/* Outer Glow Ring */}
                    <div className="absolute inset-0 w-48 h-48 rounded-full bg-gradient-to-br from-[#fe7725]/30 to-orange-300/30 blur-2xl animate-pulse-glow"></div>
                    
                    {/* Glass Circle */}
                    <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-white/40 to-orange-100/40 backdrop-blur-xl flex items-center justify-center border border-white/60 shadow-2xl overflow-hidden">
                      {/* Inner gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#fe7725]/10 to-orange-300/20"></div>
                      
                      {/* Animated shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer"></div>
                      
                      {/* Map Pin Icon */}
                      <FiMapPin className="text-[#fe7725] text-7xl relative z-10 drop-shadow-lg animate-bounce-slow" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Image and Address Card with Glass Effect */}
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/50">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                  {/* Office Image */}
                  <div className="md:col-span-3 relative h-80 md:h-96 bg-gray-200">
                    <Image
                      src={activeLocation.image}
                      alt={`${activeLocation.name} Office`}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <div className="inline-block px-4 py-2 bg-[#fe7725] text-white rounded-lg font-semibold">
                        {activeIndex + 1} {t('ofText')} {locations.length}
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="md:col-span-2 p-8 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#fe7725] flex items-center justify-center flex-shrink-0">
                        <FiMapPin className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {activeLocation.name}
                        </h3>
                        <p className="text-sm text-[#fe7725] font-semibold mb-4">
                          {activeLocation.label}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {activeLocation.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mt-12">
            <div className="flex flex-wrap justify-center gap-3">
              {locations.map((location, index) => (
                <button
                  key={location.id}
                  onClick={() => goToSlide(index)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-gradient-to-r from-[#fe7725] to-[#ff9555] text-white shadow-glow'
                      : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#fe7725] hover:text-[#fe7725]'
                  }`}
                  data-testid={`location-tab-${location.name.toLowerCase().replace(/\\s+/g, '-')}`}
                >
                  {location.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Footer with Glass Effect */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-xl border border-white/50 hover:bg-white/90 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-[#fe7725] mb-2">{t('stat1Number')}</div>
            <div className="text-sm text-gray-600 font-medium">{t('stat1Label')}</div>
          </div>
          <div className="text-center p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-xl border border-white/50 hover:bg-white/90 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-[#fe7725] mb-2">{t('stat2Number')}</div>
            <div className="text-sm text-gray-600 font-medium">{t('stat2Label')}</div>
          </div>
          <div className="text-center p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-xl border border-white/50 hover:bg-white/90 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-[#fe7725] mb-2">{t('stat3Number')}</div>
            <div className="text-sm text-gray-600 font-medium">{t('stat3Label')}</div>
          </div>
          <div className="text-center p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-xl border border-white/50 hover:bg-white/90 transition-all duration-300 hover:scale-105">
            <div className="text-3xl font-bold text-[#fe7725] mb-2">{t('stat4Number')}</div>
            <div className="text-sm text-gray-600 font-medium">{t('stat4Label')}</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default GlobalLocationsSection;
