'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Section } from '../ui/Section';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Select } from '../ui/Select';
import { Button } from '../ui/Button';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

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
    // Clear error for this field
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
    <Section id="contact" background="gray">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            {t('formTitle')}
          </h3>

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

            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full"
              data-testid="contact-form-submit"
            >
              {isSubmitting ? t('sending') : t('submit')}
            </Button>
          </form>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div
              className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3 rtl:space-x-reverse animate-fade-in"
              data-testid="contact-form-success"
            >
              <FiCheckCircle className="text-green-600 text-2xl flex-shrink-0" />
              <p className="text-green-800">{t('success')}</p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div
              className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3 rtl:space-x-reverse animate-fade-in"
              data-testid="contact-form-error"
            >
              <FiAlertCircle className="text-red-600 text-2xl flex-shrink-0" />
              <p className="text-red-800">{t('error')}</p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
