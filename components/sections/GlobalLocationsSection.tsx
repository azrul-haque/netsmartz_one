'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiMapPin, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const locations = [
  {
    id: 1,
    name: 'Rochester, NY',
    label: 'Headquarters',
    description: 'With 10+ state-of-the-art global campuses spanning over 2,000,000 square feet and $100M+ investments,',
    subtitle: 'we provide the foundation for your business to thrive in the digital age.',
    address: '1250 Pittsford Victor Road Ste 310\nPittsford, NY 14534',
    image: '/assets/office_locations/rochester.jpg',
    mapIcon: '🇺🇸'
  },
  {
    id: 2,
    name: 'Vancouver',
    label: 'Canada',
    description: 'With state-of-the-art campuses spanning over 200,000 square feet,',
    subtitle: 'we provide the foundation for your business to thrive in the digital age.',
    address: '701 West Georgia Street, Suite 1500, Vancouver\nBritish Columbia, V7Y 1C6',
    image: '/assets/office_locations/vancouver.jpg',
    mapIcon: '🇨🇦'
  },
  {
    id: 3,
    name: 'Mississauga',
    label: 'Canada',
    description: 'With state-of-the-art campuses spanning over 200,000 square feet,',
    subtitle: 'we provide the foundation for your business to thrive in the digital age.',
    address: '2233 Argentia Road, East Tower, Suite 302\nMississauga, Ontario, L5N 2X7',
    image: '/assets/office_locations/mississauga.jpg',
    mapIcon: '🇨🇦'
  },
  {
    id: 4,
    name: 'Dubai',
    label: 'UAE',
    description: 'With state-of-the-art campuses spanning over 200,000 square feet,',
    subtitle: 'we provide the foundation for your business to thrive in the digital age.',
    address: '1103, Al Moosa Towers 1, Sheikh Zayed Road\nDubai, UAE',
    image: '/assets/office_locations/dubai.jpg',
    mapIcon: '🇦🇪'
  },
  {
    id: 5,
    name: 'Melbourne',
    label: 'Australia',
    description: 'With state-of-the-art campuses spanning over 200,000 square feet,',
    subtitle: 'we provide the foundation for your business to thrive in the digital age.',
    address: 'Level 14, 380 St Kilda Road\nMelbourne, VIC, 3000',
    image: '/assets/office_locations/melbourne.jpg',
    mapIcon: '🇦🇺'
  },
  {
    id: 6,
    name: 'Singapore',
    label: 'Singapore',
    description: 'With state-of-the-art campuses spanning over 200,000 square feet,',
    subtitle: 'we provide the foundation for your business to thrive in the digital age.',
    address: 'DUO Tower, 3 Fraser Street Level 08-21\nSingapore 189352',
    image: '/assets/office_locations/singapore.jpg',
    mapIcon: '🇸🇬'
  },
  {
    id: 7,
    name: 'Pune',
    label: 'India',
    description: 'With state-of-the-art campuses spanning over 200,000 square feet,',
    subtitle: 'we provide the foundation for your business to thrive in the digital age.',
    address: '22 B Wing, City Vista, Fountain Road\nAshoka Nagar, Kharadi, Pune, Maharashtra 411014',
    image: '/assets/office_locations/pune.jpg',
    mapIcon: '🇮🇳'
  },
  {
    id: 8,
    name: 'Gurugram',
    label: 'India',
    description: 'With state-of-the-art campuses spanning over 200,000 square feet,',
    subtitle: 'we provide the foundation for your business to thrive in the digital age.',
    address: '9th Floor, JMD IT Megapolis, Sector 48\nSohna Road, Gurugram, Haryana 122001',
    image: '/assets/office_locations/gurugram.jpg',
    mapIcon: '🇮🇳'
  },
  {
    id: 9,
    name: 'Noida',
    label: 'India',
    description: 'With state-of-the-art campuses spanning over 200,000 square feet,',
    subtitle: 'we provide the foundation for your business to thrive in the digital age.',
    address: 'Advant Navis Business Park Pvt Ltd, #7, Sector - 142\nExpressway, Noida, Uttar Pradesh - 201301',
    image: '/assets/office_locations/noida.jpg',
    mapIcon: '🇮🇳'
  },
  {
    id: 10,
    name: 'Chandigarh',
    label: 'Netsmartz House',
    description: 'With state-of-the-art campuses spanning over 200,000 square feet,',
    subtitle: 'we provide the foundation for your business to thrive in the digital age.',
    address: 'Plot no. 10, Rajiv Gandhi Technology Park\nChandigarh 160101',
    image: '/assets/office_locations/chandigarh.jpg',
    mapIcon: '🇮🇳'
  },
  {
    id: 11,
    name: 'Mohali',
    label: 'Netsmartz Square',
    description: 'With state-of-the-art campuses spanning over 200,000 square feet,',
    subtitle: 'we provide the foundation for your business to thrive in the digital age.',
    address: 'IT-C-9, Sector 67 Mohali\nPunjab 160062',
    image: '/assets/office_locations/mohali.jpg',
    mapIcon: '🇮🇳'
  }
];

const GlobalLocationsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#fe7725]">Global Technology Centers</span> at a Glance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Spanning across continents with world-class infrastructure and innovation hubs
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

                {/* Right: Location Pin Visual */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="w-64 h-64 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center relative overflow-hidden">
                      <FiMapPin className="text-[#fe7725] text-9xl animate-bounce-slow" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#fe7725]/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Image and Address Card */}
              <div className="bg-white rounded-2xl shadow-large overflow-hidden">
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
                        {activeIndex + 1} of {locations.length}
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
                  data-testid={`location-tab-${location.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {location.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Footer */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-medium">
            <div className="text-3xl font-bold text-[#fe7725] mb-2">11+</div>
            <div className="text-sm text-gray-600 font-medium">Global Locations</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-medium">
            <div className="text-3xl font-bold text-[#fe7725] mb-2">2M+</div>
            <div className="text-sm text-gray-600 font-medium">Square Feet</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-medium">
            <div className="text-3xl font-bold text-[#fe7725] mb-2">$100M+</div>
            <div className="text-sm text-gray-600 font-medium">Investments</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-medium">
            <div className="text-3xl font-bold text-[#fe7725] mb-2">10+</div>
            <div className="text-sm text-gray-600 font-medium">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalLocationsSection;
