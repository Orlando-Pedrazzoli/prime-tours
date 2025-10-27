'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TourCard from '@/components/TourCard';
import { tours } from '@/data/tours';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const ToursSection = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [showAll, setShowAll] = useState(false);

  const categories = [
    { id: 'todos', name: t('tours.allTours'), count: tours.length },
    { id: 'meio-dia', name: t('tours.halfDay'), count: 2 },
  ];

  const filteredTours = tours.filter(tour => {
    if (selectedCategory === 'todos') return true;
    if (selectedCategory === 'dia-completo')
      return tour.duration.includes('8 horas');
    if (selectedCategory === 'meio-dia')
      return (
        tour.duration.includes('4 horas') || tour.duration.includes('5 horas')
      );
    if (selectedCategory === 'noturno') return tour.id === 'fado-dinner';
    return true;
  });

  const displayedTours = showAll ? filteredTours : filteredTours.slice(0, 18);

  return (
    <section id='tours' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            {t('tours.title')} <span className='text-primary'>{t('tours.titleHighlight')}</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            {t('tours.subtitle')}
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='flex flex-wrap justify-center gap-3 mb-12'
        >
          {categories.map(category => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? 'bg-primary' : ''}
            >
              {category.name}
              <span className='ml-2 bg-white/20 px-2 py-0.5 rounded-full text-xs'>
                {category.count}
              </span>
            </Button>
          ))}
        </motion.div>

        {/* Tours Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {displayedTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TourCard tour={tour} />
            </motion.div>
          ))}
        </div>

        {/* Ver Mais Button */}
        {filteredTours.length > 6 && !showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mt-12'
          >
            <Button
              size='lg'
              variant='outline'
              onClick={() => setShowAll(true)}
              className='border-primary text-primary hover:bg-primary hover:text-white'
            >
              {t('tours.viewAllTours')}
            </Button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mt-16 bg-primary rounded-2xl p-8 md:p-12 text-white text-center'
        >
          <h3 className='text-3xl font-bold mb-4'>
            {t('tours.notFoundTitle')}
          </h3>
          <p className='text-xl mb-8 opacity-90'>
            {t('tours.customTourDescription')}
          </p>
          <Button
            size='lg'
            className='bg-secondary hover:bg-secondary/90 text-black font-bold'
          >
            {t('tours.requestCustomTour')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ToursSection;