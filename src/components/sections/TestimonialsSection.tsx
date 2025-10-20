'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  // Depoimentos com nome corrigido para Orlando
  const testimonials = [
    {
      id: 1,
      name: 'Maria Silva',
      location: 'Brasil',
      rating: 5,
      text: 'Uma experiência incrível! O Orlando foi super atencioso e nos mostrou lugares maravilhosos. Recomendo muito!',
      tour: 'Tour Lisboa e Sintra',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
    },
    {
      id: 2,
      name: 'João Santos',
      location: 'Portugal',
      rating: 5,
      text: 'Tour muito bem organizado! O Orlando conhece cada canto de Portugal e compartilha histórias fascinantes.',
      tour: 'Tour Fátima e Óbidos',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    },
    {
      id: 3,
      name: 'Ana Costa',
      location: 'Brasil',
      rating: 5,
      text: 'Simplesmente perfeito! O Orlando tornou nossa viagem inesquecível com seu conhecimento e simpatia.',
      tour: 'Tour Privado Personalizado',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
    },
    {
      id: 4,
      name: 'Carlos Oliveira',
      location: 'Angola',
      rating: 5,
      text: 'Melhor tour que já fiz! O Orlando é um excelente guia e profissional. Voltarei com certeza!',
      tour: 'Tour Batalha e Nazaré',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
    },
  ];

  return (
    <section id='depoimentos' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            O Que Dizem os <span className='text-primary'>Nossos Clientes</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Centenas de clientes satisfeitos já viveram experiências
            inesquecíveis com os nossos tours
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='bg-white rounded-xl shadow-lg p-6 relative'
            >
              <Quote
                className='absolute top-4 right-4 text-gray-200'
                size={40}
              />

              <div className='flex items-center mb-4'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='w-12 h-12 rounded-full mr-3 object-cover'
                />
                <div>
                  <h4 className='font-semibold'>{testimonial.name}</h4>
                  <p className='text-sm text-gray-600'>
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <div className='flex mb-3'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className='text-yellow-400 fill-current'
                    size={16}
                  />
                ))}
              </div>

              <p className='text-gray-700 text-sm mb-3 relative z-10'>
                "{testimonial.text}"
              </p>

              <p className='text-xs text-primary font-medium'>
                {testimonial.tour}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mt-12 text-center'
        >
          <div className='inline-flex items-center justify-center bg-primary text-white rounded-full px-8 py-4'>
            <div className='flex items-center gap-2 mr-6'>
              <span className='text-3xl font-bold'>5.0</span>
              <div className='flex'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className='text-yellow-400 fill-current'
                    size={20}
                  />
                ))}
              </div>
            </div>
            <div className='border-l border-white/30 pl-6'>
              <p className='font-semibold'>Excelente</p>
              <p className='text-sm opacity-90'>+500 avaliações</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
