'use client';

import React from 'react';

const TechStackSection: React.FC = () => {
  const technologies = [
    { name: 'Android', logo: 'https://cdn-idnhn.nitrocdn.com/pGZJrsaaNAeqFgzcqIWGRFXLaVNbxMer/assets/images/optimized/rev-0691244/netsmartz.com/wp-content/themes/netsmartz/assets/img/tech-icons/android.png' },
    { name: 'Angular', logo: 'https://cdn-idnhn.nitrocdn.com/pGZJrsaaNAeqFgzcqIWGRFXLaVNbxMer/assets/images/optimized/rev-0691244/netsmartz.com/wp-content/themes/netsmartz/assets/img/tech-icons/angular.png' },
    { name: 'iOS', logo: 'https://cdn-idnhn.nitrocdn.com/pGZJrsaaNAeqFgzcqIWGRFXLaVNbxMer/assets/images/optimized/rev-0691244/netsmartz.com/wp-content/themes/netsmartz/assets/img/tech-icons/apple.png' },
    { name: 'AWS', logo: 'https://cdn-idnhn.nitrocdn.com/pGZJrsaaNAeqFgzcqIWGRFXLaVNbxMer/assets/images/optimized/rev-0691244/netsmartz.com/wp-content/themes/netsmartz/assets/img/tech-icons/aws.png' },
    { name: 'Azure', logo: 'https://cdn-idnhn.nitrocdn.com/pGZJrsaaNAeqFgzcqIWGRFXLaVNbxMer/assets/images/optimized/rev-0691244/netsmartz.com/wp-content/themes/netsmartz/assets/img/tech-icons/azure.png' },
    { name: 'C#/MVC', logo: 'https://cdn-idnhn.nitrocdn.com/pGZJrsaaNAeqFgzcqIWGRFXLaVNbxMer/assets/images/optimized/rev-0691244/netsmartz.com/wp-content/themes/netsmartz/assets/img/tech-icons/cmvc.png' },
    { name: 'Flutter', logo: 'https://cdn-idnhn.nitrocdn.com/pGZJrsaaNAeqFgzcqIWGRFXLaVNbxMer/assets/images/optimized/rev-0691244/netsmartz.com/wp-content/themes/netsmartz/assets/img/tech-icons/flutter.png' },
    { name: 'Golang', logo: 'https://cdn-idnhn.nitrocdn.com/pGZJrsaaNAeqFgzcqIWGRFXLaVNbxMer/assets/images/optimized/rev-0691244/netsmartz.com/wp-content/themes/netsmartz/assets/img/tech-icons/golang.png' },
    { name: 'Java', logo: 'https://cdn-idnhn.nitrocdn.com/pGZJrsaaNAeqFgzcqIWGRFXLaVNbxMer/assets/images/optimized/rev-0691244/netsmartz.com/wp-content/themes/netsmartz/assets/img/tech-icons/java.png' },
    { name: 'Node.js', logo: 'https://cdn-idnhn.nitrocdn.com/pGZJrsaaNAeqFgzcqIWGRFXLaVNbxMer/assets/images/optimized/rev-0691244/netsmartz.com/wp-content/themes/netsmartz/assets/img/tech-icons/node-js.png' },
    { name: 'PHP', logo: 'https://cdn-idnhn.nitrocdn.com/pGZJrsaaNAeqFgzcqIWGRFXLaVNbxMer/assets/images/optimized/rev-0691244/netsmartz.com/wp-content/themes/netsmartz/assets/img/tech-icons/php.png' },
    { name: 'Python', logo: 'https://cdn-idnhn.nitrocdn.com/pGZJrsaaNAeqFgzcqIWGRFXLaVNbxMer/assets/images/optimized/rev-0691244/netsmartz.com/wp-content/themes/netsmartz/assets/img/tech-icons/python.png' },
    { name: 'React', logo: 'https://cdn-idnhn.nitrocdn.com/pGZJrsaaNAeqFgzcqIWGRFXLaVNbxMer/assets/images/optimized/rev-0691244/netsmartz.com/wp-content/themes/netsmartz/assets/img/tech-icons/react-js.png' },
    { name: 'Ruby on Rails', logo: 'https://cdn-idnhn.nitrocdn.com/pGZJrsaaNAeqFgzcqIWGRFXLaVNbxMer/assets/images/optimized/rev-0691244/netsmartz.com/wp-content/themes/netsmartz/assets/img/tech-icons/ruby-on-rails.png' },
    { name: 'Swift', logo: 'https://cdn-idnhn.nitrocdn.com/pGZJrsaaNAeqFgzcqIWGRFXLaVNbxMer/assets/images/optimized/rev-0691244/netsmartz.com/wp-content/themes/netsmartz/assets/img/tech-icons/swift.png' },
    { name: 'Vue.js', logo: 'https://cdn-idnhn.nitrocdn.com/pGZJrsaaNAeqFgzcqIWGRFXLaVNbxMer/assets/images/optimized/rev-0691244/netsmartz.com/wp-content/themes/netsmartz/assets/img/tech-icons/vue-js.png' },
    { name: 'DevOps', logo: 'https://cdn-idnhn.nitrocdn.com/pGZJrsaaNAeqFgzcqIWGRFXLaVNbxMer/assets/images/optimized/rev-0691244/netsmartz.com/wp-content/themes/netsmartz/assets/img/tech-icons/devoops.png' },
    { name: 'MEAN Stack', logo: 'https://cdn-idnhn.nitrocdn.com/pGZJrsaaNAeqFgzcqIWGRFXLaVNbxMer/assets/images/optimized/rev-0691244/netsmartz.com/wp-content/themes/netsmartz/assets/img/tech-icons/mean-stack-icon.png' },
    { name: 'MERN Stack', logo: 'https://cdn-idnhn.nitrocdn.com/pGZJrsaaNAeqFgzcqIWGRFXLaVNbxMer/assets/images/optimized/rev-0691244/netsmartz.com/wp-content/themes/netsmartz/assets/img/tech-icons/mern-stack.png' },
    { name: 'Testing', logo: 'https://cdn-idnhn.nitrocdn.com/pGZJrsaaNAeqFgzcqIWGRFXLaVNbxMer/assets/images/optimized/rev-0691244/netsmartz.com/wp-content/themes/netsmartz/assets/img/tech-icons/testing-icon.png' },
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            A pool of <span className="text-[#fe7725]">1500+ vetted and certified developers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            in 40+ skillstacks like Node.js, Python, Testing/QA, Ruby, React, Java and more.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4 mb-10">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all flex items-center justify-center group"
              title={tech.name}
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition-all"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-[#fe7725] hover:bg-[#e56815] text-white rounded-lg font-semibold transition-colors"
          >
            Build Your Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;