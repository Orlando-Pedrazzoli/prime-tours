'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Users, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id='inicio' className='relative min-h-screen flex items-center'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 z-0'>
        <div
          className='absolute inset-0 bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1920)',
          }}
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent' />
      </div>

      {/* Content */}
      <div className='container mx-auto px-4 relative z-10 pt-24'>
        <div className='max-w-3xl'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>
              Descubra Portugal de
              <span className='text-secondary'> Forma Exclusiva</span>
            </h1>
            <p className='text-xl md:text-2xl text-white/90 mb-8'>
              Tours privados personalizados. Experiências únicas desde Lisboa
              até aos recantos mais encantadores de Portugal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex flex-col sm:flex-row gap-4 mb-12'
          >
            <Button
              size='xl'
              variant='outline'
              className='border-white text-white hover:bg-white hover:text-black'
              onClick={() => scrollToSection('tours')}
            >
              Explorar Tours
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'
          >
            <div className='flex items-center gap-3 text-white'>
              <div className='bg-secondary/20 p-3 rounded-full backdrop-blur-sm'>
                <MapPin className='text-secondary' size={20} />
              </div>
              <div>
                <p className='font-semibold'>Localização</p>
                <p className='text-sm opacity-90'>Lisboa</p>
              </div>
            </div>

            <div className='flex items-center gap-3 text-white'>
              <div className='bg-secondary/20 p-3 rounded-full backdrop-blur-sm'>
                <Users className='text-secondary' size={20} />
              </div>
              <div>
                <p className='font-semibold'>Capacidade</p>
                <p className='text-sm opacity-90'>Até 4 pessoas</p>
              </div>
            </div>

            <div className='flex items-center gap-3 text-white'>
              <div className='bg-secondary/20 p-3 rounded-full backdrop-blur-sm'>
                <Star className='text-secondary' size={20} />
              </div>
              <div>
                <p className='font-semibold'>Avaliação</p>
                <p className='text-sm opacity-90'>5.0 ★★★★★</p>
              </div>
            </div>

            <div className='flex items-center gap-3 text-white'></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
