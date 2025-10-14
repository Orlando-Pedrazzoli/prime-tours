'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, MapPin, Users, Clock, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: 'Guia Certificado',
      description:
        'Motorista-guia profissional certificado com anos de experiência',
    },
    {
      icon: MapPin,
      title: 'Conhecimento Local',
      description:
        'Conheço os melhores lugares, histórias e segredos de Portugal',
    },
    {
      icon: Users,
      title: '100% Personalizado',
      description:
        'Tours privados adaptados aos seus interesses e preferências',
    },
    {
      icon: Clock,
      title: 'Flexibilidade Total',
      description: 'Horários e itinerários flexíveis ao seu ritmo',
    },
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Seguro completo e veículos sempre em perfeitas condições',
    },
    {
      icon: Star,
      title: 'Experiência Premium',
      description: 'Serviço de excelência com atenção aos mínimos detalhes',
    },
  ];

  return (
    <section id='sobre' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Imagem e Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className='relative'>
              <img
                src='/orlando-perfil.jpg'
                alt='Orlando Pedrazzoli - Motorista Guia'
                className='rounded-2xl shadow-xl w-full'
              />
              <div className='absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl'>
                <div className='text-center'>
                  <p className='text-3xl font-bold'>10+</p>
                  <p className='text-sm'>Anos de</p>
                  <p className='text-sm'>Experiência</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-6'>
              Conheça o Seu <span className='text-primary'>Guia</span>
            </h2>

            <p className='text-lg text-gray-700 mb-4'>
              Olá! Sou o Pedro, o seu motorista-guia dedicado para descobrir
              Portugal de uma forma única e memorável.
            </p>

            <p className='text-gray-600 mb-6'>
              Nascido e criado em Portugal, tenho a paixão de partilhar a
              beleza, história e cultura do meu país com visitantes de todo o
              mundo. Com mais de 10 anos de experiência em turismo premium,
              garanto que cada tour é uma experiência personalizada e
              inesquecível.
            </p>

            <p className='text-gray-600 mb-8'>
              Falo português, inglês, espanhol e francês fluentemente,
              permitindo-me comunicar confortavelmente com clientes de diversas
              nacionalidades. O meu objetivo é não apenas levá-lo aos destinos,
              mas também proporcionar-lhe uma verdadeira imersão na cultura
              portuguesa.
            </p>

            <div className='flex flex-wrap gap-4 mb-8'>
              <div className='flex items-center gap-2 text-sm'>
                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                <span>Português</span>
              </div>
              <div className='flex items-center gap-2 text-sm'>
                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                <span>English</span>
              </div>
              <div className='flex items-center gap-2 text-sm'>
                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                <span>Español</span>
              </div>
              <div className='flex items-center gap-2 text-sm'>
                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                <span>Français</span>
              </div>
            </div>

            <Button size='lg' className='bg-primary hover:bg-primary-700'>
              Conhecer os Tours
            </Button>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-16'
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='bg-gray-50 rounded-xl p-6 hover:bg-primary hover:text-white transition-all duration-300 group'
            >
              <feature.icon
                className='mb-4 text-primary group-hover:text-white'
                size={32}
              />
              <h4 className='font-semibold mb-2'>{feature.title}</h4>
              <p className='text-sm opacity-80'>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Veículos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mt-16 bg-gradient-to-r from-primary to-primary-700 rounded-2xl p-8 md:p-12 text-white'
        >
          <div className='text-center'>
            <h3 className='text-3xl font-bold mb-4'>
              Viaje com Conforto e Segurança
            </h3>
            <p className='text-xl mb-8 opacity-90'>
              Veículos modernos e confortáveis para a sua experiência premium
            </p>
            <div className='grid md:grid-cols-2 gap-8 max-w-2xl mx-auto'>
              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6'>
                <h4 className='text-xl font-bold mb-2'>Hyundai i30 SW</h4>
                <p className='opacity-90'>
                  Espaçoso e confortável para viagens longas
                </p>
              </div>
              <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6'>
                <h4 className='text-xl font-bold mb-2'>Toyota Yaris Cross</h4>
                <p className='opacity-90'>
                  Compacto e eficiente para tours urbanos
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
