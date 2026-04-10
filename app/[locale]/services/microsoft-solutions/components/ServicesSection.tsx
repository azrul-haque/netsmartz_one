'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Business Review',
      description: 'Conduct business process reviews to identify gaps, improve performance, and define strategies that support growth and efficiency.',
      icon: <FiArrowRight />
    },
    {
      title: 'Implementation',
      description: 'Ensure smooth Dynamics 365 solutions implementation by aligning best practices with your processes and setting a strong foundation for success.',
      icon: <FiArrowLeft />
    },
    {
      title: 'Support',
      description: 'Provide 24/7 priority support to maintain continuity, optimize performance, and maximize ROI while building confidence in your systems.',
      icon: <FiArrowLeft />
    },
    {
      title: 'Upgrades',
      description: 'Upgrade legacy systems and older Dynamics versions to the latest Dynamics 365 to improve performance, scalability, and future readiness.',
      icon: <FiArrowRight />
    },
    {
      title: 'Migration',
      description: 'Migrate data from legacy systems to Dynamics 365 solutions seamlessly, ensuring accuracy, security, and minimal disruption to operations.',
      icon: <FiArrowRight />
    },
    {
      title: 'Integration',
      description: 'Integrate Dynamics 365 solutions with Microsoft tools and third-party applications to streamline workflows and create a connected business ecosystem.',
      icon: null
    },
    {
      title: 'Customization',
      description: 'Customize Dynamics 365 solutions to fit your business processes, ensuring flexibility, scalability, and adaptability to evolving needs.',
      icon: <FiArrowRight />
    },
    {
      title: 'Resource Augmentation',
      description: 'Access certified Dynamics 365 experts on a flexible basis to scale teams efficiently and support evolving project requirements.',
      icon: <FiArrowLeft />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Netsmartz: Your Trusted Partner for Microsoft Dynamics 365 Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From implementation to ongoing support, Netsmartz is your go-to Microsoft solutions partner. We don't just deliver solutions; we work alongside you to drive lasting business impact.
          </p>
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Microsoft Dynamics 365 Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                {service.icon && (
                  <div className="text-[#fe7725] text-2xl">
                    {service.icon}
                  </div>
                )}
              </div>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Empowering Industry Leaders Through Digital Excellence
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
