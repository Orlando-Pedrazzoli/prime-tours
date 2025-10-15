'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, Users, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';

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
  };
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className='group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]'>
      {/* Image */}
      <div className='relative h-64 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10' />
        <img
          src={tour.image}
          alt={tour.title}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
        />
        <div className='absolute bottom-4 left-4 right-4 z-20'>
          <h3 className='text-2xl font-bold text-white mb-1'>{tour.title}</h3>
          <p className='text-white/90 text-sm'>{tour.subtitle}</p>
        </div>
      </div>

      {/* Content */}
      <div className='p-6'>
        <p className='text-gray-600 mb-4 line-clamp-2'>{tour.description}</p>

        {/* Info Grid */}
        <div className='grid grid-cols-3 gap-4 mb-4'>
          <div className='flex items-center gap-2 text-sm'>
            <Clock className='text-primary' size={16} />
            <span className='text-gray-600'>{tour.duration}</span>
          </div>
          <div className='flex items-center gap-2 text-sm'>
            <Users className='text-primary' size={16} />
            <span className='text-gray-600'>
              Até {tour.price.maxPeople} pessoas
            </span>
          </div>
          <div className='flex items-center gap-2 text-sm'>
            <MapPin className='text-primary' size={16} />
            <span className='text-gray-600'>Oeiras</span>
          </div>
        </div>

        {/* Highlights */}
        <div className='mb-4'>
          <p className='font-semibold text-sm text-gray-700 mb-2'>Destaques:</p>
          <ul className='text-sm text-gray-600 space-y-1'>
            {tour.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className='flex items-start gap-2'>
                <span className='text-primary mt-1'>•</span>
                <span className='line-clamp-1'>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price and CTA */}
        <div className='flex items-center justify-between pt-4 border-t'>
          <div>
            <p className='text-sm text-gray-500'>A partir de</p>
            <p className='text-2xl font-bold text-primary'>
              {formatPrice(tour.price.perPerson)}
              <span className='text-sm font-normal text-gray-600'>
                {' '}
                /pessoa
              </span>
            </p>
            <p className='text-xs text-gray-500'>
              Total: {formatPrice(tour.price.total)} (4 pessoas)
            </p>
          </div>

          {/* LINK PARA PÁGINA INDIVIDUAL DO TOUR */}
          <Link href={`/tours/${tour.slug}`}>
            <Button className='bg-primary hover:bg-primary-700 group'>
              Ver Detalhes
              <ArrowRight
                className='ml-2 group-hover:translate-x-1 transition-transform'
                size={16}
              />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
