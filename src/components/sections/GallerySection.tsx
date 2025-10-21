'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 2,
      src: '/img02.jpg',
      alt: 'Imagem 2',
    },
    {
      id: 3,
      src: '/img03.jpg',
      alt: 'Imagem 3',
    },
    {
      id: 4,
      src: '/img04.jpg',
      alt: 'Imagem 4',
    },
    {
      id: 5,
      src: '/img05.jpg',
      alt: 'Imagem 5',
    },
    {
      id: 6,
      src: '/img06.jpg',
      alt: 'Imagem 6',
    },
    {
      id: 7,
      src: '/img07.jpg',
      alt: 'Imagem 7',
    },
    {
      id: 8,
      src: '/img08.jpg',
      alt: 'Imagem 8',
    },
    {
      id: 9,
      src: '/img09.jpg',
      alt: 'Imagem 9',
    },
    {
      id: 10,
      src: '/img10.jpg',
      alt: 'Imagem 10',
    },
    {
      id: 11,
      src: '/img11.jpg',
      alt: 'Imagem 11',
    },
    {
      id: 12,
      src: '/img12.jpg',
      alt: 'Imagem 12',
    },
    {
      id: 13,
      src: '/img13.jpg',
      alt: 'Imagem 13',
    },
    {
      id: 14,
      src: '/img14.jpg',
      alt: 'Imagem 14',
    },
    {
      id: 15,
      src: '/img15.jpg',
      alt: 'Imagem 15',
    },
    {
      id: 16,
      src: '/img16.jpg',
      alt: 'Imagem 16',
    },
    {
      id: 17,
      src: '/img17.jpg',
      alt: 'Imagem 17',
    },
    {
      id: 18,
      src: '/img18.jpg',
      alt: 'Imagem 18',
    },
    {
      id: 19,
      src: '/img19.jpg',
      alt: 'Imagem 19',
    },
    {
      id: 20,
      src: '/img20.jpg',
      alt: 'Imagem 20',
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
            </motion.div>
          ))}
        </div>

        {/* Lightbox - Otimizado para imagens verticais */}
        {selectedImage !== null && (
          <div
            className='fixed inset-0 bg-black/95 z-50 flex items-center justify-center'
            onClick={() => setSelectedImage(null)}
          >
            <button
              className='absolute top-4 right-4 text-white hover:text-secondary transition-colors z-10'
              onClick={() => setSelectedImage(null)}
              aria-label='Fechar'
            >
              <X size={32} />
            </button>

            <button
              className='absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors z-10'
              onClick={e => {
                e.stopPropagation();
                handlePrevious();
              }}
              aria-label='Imagem anterior'
            >
              <ChevronLeft size={40} />
            </button>

            <button
              className='absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors z-10'
              onClick={e => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label='Próxima imagem'
            >
              <ChevronRight size={40} />
            </button>

            {/* Container otimizado para formato vertical */}
            <div className='w-full h-full flex items-center justify-center px-4 py-8 md:px-16 md:py-12'>
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className='max-w-full max-h-full w-auto h-auto object-contain'
                onClick={e => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
