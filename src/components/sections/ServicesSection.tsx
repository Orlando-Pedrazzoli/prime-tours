'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Shield,
  Heart,
  Sparkles,
  Star,
  CreditCard,
  Headphones,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: MapPin,
      title: t('services.personalizedTours'),
      description: t('services.personalizedToursDesc'),
      color: 'bg-blue-500',
    },
    {
      icon: Shield,
      title: t('services.guaranteedSafety'),
      description: t('services.guaranteedSafetyDesc'),
      color: 'bg-orange-500',
    },
    {
      icon: Heart,
      title: t('services.premiumService'),
      description: t('services.premiumServiceDesc'),
      color: 'bg-red-500',
    },
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: t('services.localExperience'),
      description: t('services.localExperienceDesc'),
    },
    {
      icon: Sparkles,
      title: t('services.uniqueMoments'),
      description: t('services.uniqueMomentsDesc'),
    },
    {
      icon: CreditCard,
      title: t('services.transparentPricing'),
      description: t('services.transparentPricingDesc'),
    },
    {
      icon: Headphones,
      title: t('services.support247'),
      description: t('services.support247Desc'),
    },
  ];

  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        {/* Título Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            {t('services.whyChoose')}{' '}
            <span className='text-primary'>{t('services.ourServices')}</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Grid de Serviços */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full'>
                <div
                  className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className='text-white' size={28} />
                </div>
                <h3 className='text-xl font-bold mb-3'>{service.title}</h3>
                <p className='text-gray-600'>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Seção "Por que nos escolher" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='bg-gradient-to-br from-primary to-primary-700 rounded-3xl p-12 text-white'
        >
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h3 className='text-3xl font-bold mb-6'>
                {t('services.portugueseExperience')}
              </h3>
              <p className='text-lg mb-8 opacity-90'>
                {t('services.portugueseExperienceDesc')}
              </p>
              <div className='space-y-4'>
                {whyChooseUs.map((item, index) => (
                  <div key={index} className='flex items-start gap-4'>
                    <div className='bg-white/20 p-2 rounded-lg flex-shrink-0'>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className='font-semibold mb-1'>{item.title}</h4>
                      <p className='text-sm opacity-90'>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='relative'>
              <div className='relative w-full' style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className='absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl'
                  src='https://www.youtube.com/embed/N8bHCHl8X_0?si=WSyNIj-pzIiREBA5'
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                />
              </div>
             
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <h3 className='text-2xl font-bold mb-4'>
            {t('services.readyExperience')}
          </h3>
          <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
            {t('services.readyExperienceDesc')}
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button
              onClick={() => scrollToSection('tours')}
              className='bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center'
            >
              {t('services.viewAvailableTours')}
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className='bg-secondary text-black px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors inline-flex items-center justify-center'
            >
              {t('services.requestCustomTour')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;