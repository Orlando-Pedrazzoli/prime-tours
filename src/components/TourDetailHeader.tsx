'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Clock,
  Users,
  MapPin,
  Star,
  Calendar,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TourDetailHeaderProps {
  tour: any;
}

const TourDetailHeader: React.FC<TourDetailHeaderProps> = ({ tour }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Combinar imagem principal com galeria
  const allImages = [tour.image, ...(tour.gallery || [])];

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      const newIndex =
        selectedImageIndex === 0
          ? allImages.length - 1
          : selectedImageIndex - 1;
      setSelectedImageIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      const newIndex =
        selectedImageIndex === allImages.length - 1
          ? 0
          : selectedImageIndex + 1;
      setSelectedImageIndex(newIndex);
    }
  };

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking-section');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Breadcrumb e Botão Voltar */}
      <div className='bg-white border-b sticky top-16 z-40'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <Link href='/#tours'>
                <Button variant='outline' size='sm'>
                  <ArrowLeft className='mr-2' size={16} />
                  Voltar aos Tours
                </Button>
              </Link>
              <nav className='hidden md:flex items-center text-sm text-gray-600'>
                <Link href='/' className='hover:text-primary transition-colors'>
                  Início
                </Link>
                <span className='mx-2'>/</span>
                <Link
                  href='/#tours'
                  className='hover:text-primary transition-colors'
                >
                  Tours
                </Link>
                <span className='mx-2'>/</span>
                <span className='text-primary font-medium'>{tour.title}</span>
              </nav>
            </div>
            <Button
              size='lg'
              className='bg-secondary hover:bg-secondary/90 text-black font-bold hidden md:inline-flex'
              onClick={scrollToBooking}
            >
              Reservar Agora
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section com Galeria */}
      <div className='bg-white'>
        <div className='container mx-auto px-4 py-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Título e Info Rápida */}
            <div className='mb-6'>
              <h1 className='text-4xl md:text-5xl font-bold mb-3'>
                {tour.title}
              </h1>
              <p className='text-xl text-gray-600 mb-4'>{tour.subtitle}</p>

              {/* Quick Info */}
              <div className='flex flex-wrap gap-4 text-sm'>
                <div className='flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg'>
                  <Clock className='text-primary' size={18} />
                  <span className='font-medium'>{tour.duration}</span>
                </div>
                <div className='flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg'>
                  <Users className='text-primary' size={18} />
                  <span className='font-medium'>
                    Até {tour.price.maxPeople} pessoas
                  </span>
                </div>
                <div className='flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg'>
                  <Calendar className='text-primary' size={18} />
                  <span className='font-medium'>
                    Início: {tour.suggestedTime}
                  </span>
                </div>
                <div className='flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg'>
                  <MapPin className='text-primary' size={18} />
                  <span className='font-medium'>Oeiras, Lisboa</span>
                </div>
                <div className='flex items-center gap-2 bg-yellow-50 px-3 py-2 rounded-lg'>
                  <Star className='text-yellow-500 fill-current' size={18} />
                  <span className='font-medium'>5.0 (500+ avaliações)</span>
                </div>
              </div>
            </div>

            {/* Grid de Imagens */}
            <div className='grid grid-cols-4 gap-2 h-[500px]'>
              {/* Imagem Principal */}
              <div
                className='col-span-4 md:col-span-2 row-span-2 relative overflow-hidden rounded-xl cursor-pointer group'
                onClick={() => setSelectedImageIndex(0)}
              >
                <img
                  src={allImages[0]}
                  alt={tour.title}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors' />
              </div>

              {/* Imagens Secundárias */}
              {allImages.slice(1, 5).map((image, index) => (
                <div
                  key={index}
                  className='relative overflow-hidden rounded-xl cursor-pointer group'
                  onClick={() => setSelectedImageIndex(index + 1)}
                >
                  <img
                    src={image}
                    alt={`${tour.title} ${index + 2}`}
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors' />
                  {index === 3 && allImages.length > 5 && (
                    <div className='absolute inset-0 bg-black/60 flex items-center justify-center'>
                      <span className='text-white text-xl font-bold'>
                        +{allImages.length - 5} fotos
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Botão Ver Todas as Fotos */}
            <button
              onClick={() => setSelectedImageIndex(0)}
              className='mt-4 text-primary font-medium hover:underline'
            >
              Ver todas as {allImages.length} fotos
            </button>
          </motion.div>
        </div>
      </div>

      {/* Lightbox de Galeria */}
      {selectedImageIndex !== null && (
        <div
          className='fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4'
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            className='absolute top-4 right-4 text-white hover:text-secondary transition-colors z-50'
            onClick={() => setSelectedImageIndex(null)}
          >
            <X size={32} />
          </button>

          <button
            className='absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors z-50'
            onClick={e => {
              e.stopPropagation();
              handlePrevious();
            }}
          >
            <ChevronLeft size={48} />
          </button>

          <button
            className='absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors z-50'
            onClick={e => {
              e.stopPropagation();
              handleNext();
            }}
          >
            <ChevronRight size={48} />
          </button>

          <div className='max-w-6xl max-h-[90vh] relative'>
            <img
              src={allImages[selectedImageIndex]}
              alt={`${tour.title} ${selectedImageIndex + 1}`}
              className='w-full h-full object-contain'
              onClick={e => e.stopPropagation()}
            />
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full'>
              {selectedImageIndex + 1} / {allImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TourDetailHeader;
