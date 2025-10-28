'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, Users, MapPin, ArrowRight, Euro, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface TourCardProps {
  tour: {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    duration: string;
    price: {
      total: number;
      perPerson: number;
      maxPeople: number;
      basePrice?: number;
      additionalPassenger?: number;
    };
    description: string;
    image: string;
    highlights: string[];
    featured?: boolean;
    departure?: string;
  };
  index?: number;
}

const TourCard: React.FC<TourCardProps> = ({ tour, index = 0 }) => {
  const { t, language } = useLanguage();
  const priceForOne = tour.price.basePrice || Math.round(tour.price.total * 0.74);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = language === 'pt' 
      ? `Olá! Gostaria de mais informações sobre o tour: ${tour.title}`
      : `Hello! I would like more information about the tour: ${tour.title}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/351912164220?text=${encodedMessage}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className='group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative'
    >
      {tour.featured && (
        <div className='absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg'>
          ⭐ {t('tourCard.featured')}
        </div>
      )}

      <Link href={`/tours/${tour.slug}`} className='block'>
        <div className='relative h-64 overflow-hidden cursor-pointer'>
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10' />
          <img
            src={tour.image}
            alt={tour.title}
            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out'
            loading='lazy'
          />
          <div className='absolute bottom-4 left-4 right-4 z-20'>
            <h3 className='text-2xl font-bold text-white mb-1 line-clamp-2 drop-shadow-lg'>
              {tour.title}
            </h3>
            <p className='text-white/90 text-sm line-clamp-1'>
              {tour.subtitle}
            </p>
          </div>

          <div className='absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20'>
            <div className='bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg'>
              <ArrowRight className='text-primary' size={24} />
            </div>
          </div>
        </div>
      </Link>

      <div className='p-6'>
        <p className='text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed'>
          {tour.description}
        </p>

        <div className='grid grid-cols-2 gap-3 mb-4'>
          <div className='flex items-center gap-2 text-sm'>
            <Clock className='text-primary flex-shrink-0' size={16} />
            <span className='text-gray-600'>{tour.duration}</span>
          </div>
          <div className='flex items-center gap-2 text-sm'>
            <Users className='text-primary flex-shrink-0' size={16} />
            <span className='text-gray-600'>
              {t('tourCard.upTo')} {tour.price.maxPeople} {t('tourCard.people')}
            </span>
          </div>
          <div className='flex items-center gap-2 text-sm col-span-2'>
            <MapPin className='text-primary flex-shrink-0' size={16} />
            <span className='text-gray-600'>
              {t('tourCard.departure')}: {tour.departure || t('tourCard.departureLisbon')}
            </span>
          </div>
        </div>

        <div className='mb-6'>
          <p className='font-semibold text-sm text-gray-700 mb-2'>
            {t('tourCard.highlights')}
          </p>
          <ul className='text-sm text-gray-600 space-y-1'>
            {tour.highlights.slice(0, 3).map((highlight, idx) => (
              <li key={idx} className='flex items-start gap-2'>
                <span className='text-primary mt-1 flex-shrink-0'>•</span>
                <span className='line-clamp-1'>{highlight}</span>
              </li>
            ))}
            {tour.highlights.length > 3 && (
              <li className='text-primary text-sm font-medium pl-4'>
                +{tour.highlights.length - 3} {t('tourCard.moreHighlights')}
              </li>
            )}
          </ul>
        </div>

        <div className='border-t pt-4'>
          <div className='grid grid-cols-2 gap-3 mb-4'>
            <div className='bg-primary/5 rounded-lg p-3 border border-primary/20'>
              <p className='text-xs text-gray-500 mb-1'>
                1 {t('tourCard.person')}
              </p>
              <div className='flex items-baseline gap-1'>
                <Euro className='text-primary' size={14} />
                <span className='text-2xl font-bold text-primary'>{priceForOne}</span>
              </div>
            </div>
            <div className='bg-green-50 rounded-lg p-3 border border-green-200'>
              <p className='text-xs text-gray-500 mb-1'>
                {t('tourCard.group')} ({tour.price.maxPeople} {t('tourCard.people')})
              </p>
              <div className='flex items-baseline gap-1'>
                <Euro className='text-green-600' size={14} />
                <span className='text-2xl font-bold text-green-600'>{tour.price.perPerson}</span>
                <span className='text-xs text-green-600'>/{t('tourCard.perPerson')}</span>
              </div>
            </div>
          </div>

          <div className='flex gap-2'>
            <Link href={`/tours/${tour.slug}`} className='flex-1'>
              <Button
                className='w-full bg-primary hover:bg-primary/90 group transition-all duration-300'
                size='lg'
              >
                {t('tourCard.viewDetails')}
                <ArrowRight
                  className='ml-2 group-hover:translate-x-1 transition-transform duration-300'
                  size={16}
                />
              </Button>
            </Link>
            <Button
              variant='outline'
              size='lg'
              className='border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600 px-4'
              onClick={handleWhatsAppClick}
            >
              <MessageCircle size={18} />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;