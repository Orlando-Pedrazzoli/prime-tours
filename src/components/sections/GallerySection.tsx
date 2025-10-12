'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
      alt: 'Vista de Lisboa',
      category: 'Lisboa',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1562281302-809108fd533c?w=800',
      alt: 'Palácio da Pena, Sintra',
      category: 'Sintra',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1555881018-9bbb4a7be8f1?w=800',
      alt: 'Santuário de Fátima',
      category: 'Fátima',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1577551926752-4863c480ba97?w=800',
      alt: 'Vila de Óbidos',
      category: 'Óbidos',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1513735492246-483525079686?w=800',
      alt: 'Torre de Belém',
      category: 'Lisboa',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1567177173829-eedf4f72793e?w=800',
      alt: 'Costa de Cascais',
      category: 'Cascais',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=800',
      alt: 'Centro histórico de Sintra',
      category: 'Sintra',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1601296160691-b34a86938874?w=800',
      alt: 'Mosteiro da Batalha',
      category: 'Batalha',
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1573479667972-ea82d7c0104e?w=800',
      alt: 'Elétrico de Lisboa',
      category: 'Lisboa',
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
      alt: 'Praça do Comércio',
      category: 'Lisboa',
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800',
      alt: 'Castelo de Óbidos',
      category: 'Óbidos',
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800',
      alt: 'Nazaré',
      category: 'Nazaré',
    },
  ];

  const handlePrevious = () => {
    if (selectedImage !== null) {
      const newIndex =
        selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1;
      setSelectedImage(newIndex);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      const newIndex =
        selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1;
      setSelectedImage(newIndex);
    }
  };

  return (
    <section id='galeria' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Galeria de <span className='text-primary'>Momentos</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Explore a beleza de Portugal através das nossas lentes. Cada imagem
            conta uma história única dos nossos tours.
          </p>
        </motion.div>

        {/* Grid de Imagens */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className='relative group cursor-pointer overflow-hidden rounded-lg aspect-square'
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <div className='absolute bottom-4 left-4 text-white'>
                  <p className='font-semibold'>{image.category}</p>
                  <p className='text-sm opacity-90'>{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'
            onClick={() => setSelectedImage(null)}
          >
            <button
              className='absolute top-4 right-4 text-white hover:text-secondary transition-colors'
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <button
              className='absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors'
              onClick={e => {
                e.stopPropagation();
                handlePrevious();
              }}
            >
              <ChevronLeft size={40} />
            </button>

            <button
              className='absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors'
              onClick={e => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight size={40} />
            </button>

            <div className='max-w-5xl max-h-[90vh] relative'>
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className='w-full h-full object-contain'
                onClick={e => e.stopPropagation()}
              />
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4'>
                <p className='text-white text-lg font-semibold'>
                  {galleryImages[selectedImage].alt}
                </p>
                <p className='text-white/80'>
                  {galleryImages[selectedImage].category}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
