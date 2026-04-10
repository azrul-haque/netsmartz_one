'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Section } from '../ui/Section';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Select } from '../ui/Select';
import { FiCheckCircle, FiAlertCircle, FiSend } from 'react-icons/fi';

const ContactSection: React.FC = () => {
  const t = useTranslations('contact');
  const tServices = useTranslations('services');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const serviceOptions = [
    { value: '', label: t('service') },
    { value: 'ai-development', label: tServices('aiDevelopment') },
    { value: 'saas-engineering', label: tServices('saasEngineering') },
    { value: 'cybersecurity', label: tServices('cybersecurity') },
    { value: 'qa-testing', label: tServices('qaTesting') },
    { value: 'cloud-devops', label: tServices('cloudDevOps') },
    { value: 'data-analytics', label: tServices('dataAnalytics') },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          service: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-semibold mb-4 border border-white/20">
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your <span className="text-[#fe7725]">AI-Driven Future?</span>
          </h2>
          <p className="text-xl text-gray-300">
            {t('subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="name"
                type="text"
                placeholder={t('name')}
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
                data-testid="contact-form-name"
              />
              <Input
                name="email"
                type="email"
                placeholder={t('email')}
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
                data-testid="contact-form-email"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                name="phone"
                type="tel"
                placeholder={t('phone')}
                value={formData.phone}
                onChange={handleChange}
                data-testid="contact-form-phone"
              />
              <Input
                name="company"
                type="text"
                placeholder={t('company')}
                value={formData.company}
                onChange={handleChange}
                data-testid="contact-form-company"
              />
            </div>

            <Select
              name="service"
              options={serviceOptions}
              value={formData.service}
              onChange={handleChange}
              data-testid="contact-form-service"
            />

            <Textarea
              name="message"
              placeholder={t('message')}
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              required
              rows={5}
              data-testid="contact-form-message"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-[#fe7725] to-[#ff9555] hover:from-[#ff9555] hover:to-[#fe7725] text-white rounded-xl font-semibold text-lg shadow-large hover:shadow-glow transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              data-testid="contact-form-submit"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  {t('sending')}
                </>
              ) : (
                <>
                  <FiSend />
                  {t('submit')}
                </>
              )}
            </button>
          </form>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div
              className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3 animate-fade-in"
              data-testid="contact-form-success"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <FiCheckCircle className="text-white text-xl" />
              </div>
              <p className="text-green-800 font-medium">{t('success')}</p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div
              className="mt-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-center gap-3 animate-fade-in"
              data-testid="contact-form-error"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <FiAlertCircle className="text-white text-xl" />
              </div>
              <p className="text-red-800 font-medium">{t('error')}</p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
