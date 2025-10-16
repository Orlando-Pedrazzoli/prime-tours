'use client';

import React, { useState } from 'react';
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
  Share2,
  Heart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Breadcrumbs from '@/components/Breadcrumbs';

interface TourDetailHeaderProps {
  tour: any;
}

const TourDetailHeader: React.FC<TourDetailHeaderProps> = ({ tour }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const [isLiked, setIsLiked] = useState(false);

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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: tour.title,
          text: tour.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Erro ao partilhar:', error);
      }
    } else {
      // Fallback: copiar para clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  const breadcrumbItems = [
    { label: 'Tours', href: '/#tours' },
    { label: tour.title },
  ];

  return (
    <>
      {/* Header com Breadcrumbs */}
      <div className='bg-white border-b sticky top-16 z-40 shadow-sm'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <Link href='/#tours'>
                <Button
                  variant='outline'
                  size='sm'
                  className='hover:bg-gray-50'
                >
                  <ArrowLeft className='mr-2' size={16} />
                  Voltar
                </Button>
              </Link>
              <div className='hidden md:block'>
                <Breadcrumbs items={breadcrumbItems} />
              </div>
            </div>

            <div className='flex items-center gap-2'>
              {/* Botões de Ação */}
              <Button
                variant='outline'
                size='sm'
                onClick={() => setIsLiked(!isLiked)}
                className={isLiked ? 'text-red-500 border-red-200' : ''}
              >
                <Heart size={16} className={isLiked ? 'fill-current' : ''} />
              </Button>

              <Button variant='outline' size='sm' onClick={handleShare}>
                <Share2 size={16} />
              </Button>

              <Button
                size='lg'
                className='bg-secondary hover:bg-secondary/90 text-black font-bold hidden md:inline-flex'
                onClick={scrollToBooking}
              >
                Reservar Agora
              </Button>
            </div>
          </div>

          {/* Breadcrumbs mobile */}
          <div className='md:hidden mt-3'>
            <Breadcrumbs items={breadcrumbItems} />
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
              <div className='flex items-start justify-between mb-4'>
                <div className='flex-1'>
                  <h1 className='text-3xl md:text-5xl font-bold mb-3 leading-tight'>
                    {tour.title}
                  </h1>
                  <p className='text-lg md:text-xl text-gray-600 mb-4'>
                    {tour.subtitle}
                  </p>
                </div>

                {/* Badge de Preço */}
                <div className='bg-primary text-white rounded-xl p-4 text-center ml-4 flex-shrink-0'>
                  <p className='text-sm opacity-90'>A partir de</p>
                  <p className='text-2xl font-bold'>€{tour.price.perPerson}</p>
                  <p className='text-xs opacity-90'>por pessoa</p>
                </div>
              </div>

              {/* Quick Info */}
              <div className='flex flex-wrap gap-3 text-sm'>
                <div className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg'>
                  <Clock className='text-primary' size={18} />
                  <span className='font-medium'>{tour.duration}</span>
                </div>
                <div className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg'>
                  <Users className='text-primary' size={18} />
                  <span className='font-medium'>
                    Até {tour.price.maxPeople} pessoas
                  </span>
                </div>
                <div className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg'>
                  <Calendar className='text-primary' size={18} />
                  <span className='font-medium'>
                    Início: {tour.suggestedTime || '9:00'}
                  </span>
                </div>
                <div className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg'>
                  <MapPin className='text-primary' size={18} />
                  <span className='font-medium'>Oeiras, Lisboa</span>
                </div>
                <div className='flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-lg'>
                  <Star className='text-yellow-500 fill-current' size={18} />
                  <span className='font-medium'>5.0 (500+ avaliações)</span>
                </div>
              </div>
            </div>

            {/* Grid de Imagens */}
            <div className='grid grid-cols-4 gap-2 h-[400px] md:h-[500px]'>
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
                <div className='absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium'>
                  Imagem Principal
                </div>
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
                      <span className='text-white text-lg font-bold'>
                        +{allImages.length - 5} fotos
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Botão Ver Todas as Fotos */}
            <div className='flex justify-between items-center mt-4'>
              <button
                onClick={() => setSelectedImageIndex(0)}
                className='text-primary font-medium hover:underline flex items-center gap-2'
              >
                Ver todas as {allImages.length} fotos
                <ChevronRight size={16} />
              </button>

              {/* Botão mobile para reservar */}
              <Button
                size='lg'
                className='bg-secondary hover:bg-secondary/90 text-black font-bold md:hidden'
                onClick={scrollToBooking}
              >
                Reservar
              </Button>
            </div>
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
