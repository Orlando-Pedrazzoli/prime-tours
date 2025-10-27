'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin, Users, Clock, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: t('about.certifiedDriver'),
      description: t('about.certifiedDriverDesc'),
    },
    {
      icon: MapPin,
      title: t('about.localKnowledge'),
      description: t('about.localKnowledgeDesc'),
    },
    {
      icon: Users,
      title: t('about.fullyPersonalized'),
      description: t('about.fullyPersonalizedDesc'),
    },
    {
      icon: Clock,
      title: t('about.totalFlexibility'),
      description: t('about.totalFlexibilityDesc'),
    },
    {
      icon: Shield,
      title: t('about.guaranteedSafety'),
      description: t('about.guaranteedSafetyDesc'),
    },
    {
      icon: Star,
      title: t('about.premiumExperience'),
      description: t('about.premiumExperienceDesc'),
    },
  ];

  return (
    <section id='sobre' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Imagem e Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className='relative'>
              <img
                src='/orlando-perfil.jpg'
                alt={`Orlando Pedrazzoli - ${t('about.driver')}`}
                className='rounded-2xl shadow-xl w-full'
              />
              <div className='absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl'>
                <div className='text-center'>
                  <p className='text-3xl font-bold'>8+</p>
                  <p className='text-sm'>{t('about.experience')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              {t('about.meetYour')} <span className='text-primary'>{t('about.driver')}</span>
            </h2>

            <p className='text-lg text-gray-700 mb-4'>
              {t('about.greeting')}
            </p>

            <p className='text-gray-600 mb-6'>
              {t('about.passion')}
            </p>

            <p className='text-gray-600 mb-8'>
              {t('about.languages')}
            </p>

            <div className='flex flex-wrap gap-4 mb-8'>
              <div className='flex items-center gap-2 text-sm'>
                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                <span>{t('about.portuguese')}</span>
              </div>
              <div className='flex items-center gap-2 text-sm'>
                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                <span>{t('about.english')}</span>
              </div>
            </div>

            <Button size='lg' className='bg-primary hover:bg-primary-700'>
              {t('about.knowTours')}
            </Button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-16'
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='bg-gray-50 rounded-xl p-6 hover:bg-primary hover:text-white transition-all duration-300 group'
            >
              <feature.icon
                className='mb-4 text-primary group-hover:text-white'
                size={32}
              />
              <h4 className='font-semibold mb-2'>{feature.title}</h4>
              <p className='text-sm opacity-80'>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Veículos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mt-16 bg-gradient-to-r from-primary to-primary-700 rounded-2xl p-8 md:p-12 text-white'
        >
          <div className='text-center'>
            <h3 className='text-3xl font-bold mb-4'>
              {t('about.comfortSafety')}
            </h3>
            <p className='text-xl mb-8 opacity-90'>
              {t('about.modernVehicles')}
            </p>
            <div className='grid md:grid-cols-2 gap-8 max-w-2xl mx-auto'>
              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6'>
                <h4 className='text-xl font-bold mb-2'>Hyundai i30 SW</h4>
                <p className='opacity-90'>
                  {t('about.spaciousComfortable')}
                </p>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6'>
                <h4 className='text-xl font-bold mb-2'>Toyota Yaris Cross</h4>
                <p className='opacity-90'>
                  {t('about.compactEfficient')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;