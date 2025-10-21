'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, Users, MapPin, ArrowRight, Euro } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import { motion } from 'framer-motion';

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
    };
    description: string;
    image: string;
    highlights: string[];
    featured?: boolean;
  };
  index?: number;
}

const TourCard: React.FC<TourCardProps> = ({ tour, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className='group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] relative'
    >
      {/* Badge de Tour em Destaque */}
      {tour.featured && (
        <div className='absolute top-4 left-4 z-20 bg-secondary text-black px-3 py-1 rounded-full text-xs font-bold'>
          ⭐ Destaque
        </div>
      )}

      {/* Link envolvendo toda a imagem */}
      <Link href={`/tours/${tour.slug}`} className='block'>
        <div className='relative h-64 overflow-hidden cursor-pointer'>
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10' />
          <img
            src={tour.image}
            alt={tour.title}
            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
            loading='lazy'
          />
          <div className='absolute bottom-4 left-4 right-4 z-20'>
            <h3 className='text-2xl font-bold text-white mb-1 line-clamp-2'>
              {tour.title}
            </h3>
            <p className='text-white/90 text-sm line-clamp-1'>
              {tour.subtitle}
            </p>
          </div>

          {/* Overlay hover com ícone */}
          <div className='absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20'>
            <div className='bg-white/90 rounded-full p-3'>
              <ArrowRight className='text-primary' size={24} />
            </div>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className='p-6'>
        <p className='text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed'>
          {tour.description}
        </p>

        {/* Info Grid */}
        <div className='grid grid-cols-2 gap-3 mb-4'>
          <div className='flex items-center gap-2 text-sm'>
            <Clock className='text-primary flex-shrink-0' size={16} />
            <span className='text-gray-600'>{tour.duration}</span>
          </div>
          <div className='flex items-center gap-2 text-sm'>
            <Users className='text-primary flex-shrink-0' size={16} />
            <span className='text-gray-600'>Até {tour.price.maxPeople}p</span>
          </div>
          <div className='flex items-center gap-2 text-sm col-span-2'>
            <MapPin className='text-primary flex-shrink-0' size={16} />
            <span className='text-gray-600'>Partida: Lisboa</span>
          </div>
        </div>

        {/* Highlights */}
        <div className='mb-6'>
          <p className='font-semibold text-sm text-gray-700 mb-2'>Destaques:</p>
          <ul className='text-sm text-gray-600 space-y-1'>
            {tour.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className='flex items-start gap-2'>
                <span className='text-primary mt-1 flex-shrink-0'>•</span>
                <span className='line-clamp-1'>{highlight}</span>
              </li>
            ))}
            {tour.highlights.length > 3 && (
              <li className='text-primary text-sm font-medium'>
                +{tour.highlights.length - 3} mais destaques...
              </li>
            )}
          </ul>
        </div>

        {/* Price and CTA */}
        <div className='border-t pt-4'>
          <div className='flex items-center justify-between mb-4'>
            <div>
              <p className='text-sm text-gray-500'>A partir de</p>
              <div className='flex items-baseline gap-1'>
                <Euro className='text-primary' size={16} />
                <span className='text-2xl font-bold text-primary'>
                  {tour.price.perPerson}
                </span>
                <span className='text-sm font-normal text-gray-600'>
                  /pessoa
                </span>
              </div>
              <p className='text-xs text-gray-500'>
                Total: {formatPrice(tour.price.total)} ({tour.price.maxPeople}{' '}
                pessoas)
              </p>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className='flex gap-2'>
            <Link href={`/tours/${tour.slug}`} className='flex-1'>
              <Button
                className='w-full bg-primary hover:bg-primary-700 group transition-all duration-300'
                size='sm'
              >
                Ver Detalhes
                <ArrowRight
                  className='ml-2 group-hover:translate-x-1 transition-transform duration-300'
                  size={16}
                />
              </Button>
            </Link>
            <Button
              variant='outline'
              size='sm'
              className='border-green-500 text-green-600 hover:bg-green-50 px-3'
              onClick={e => {
                e.preventDefault();
                const message = encodeURIComponent(
                  `Olá! Gostaria de mais informações sobre o tour: ${tour.title}`
                );
                window.open(
                  `https://wa.me/351912164220?text=${message}`,
                  '_blank'
                );
              }}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;
