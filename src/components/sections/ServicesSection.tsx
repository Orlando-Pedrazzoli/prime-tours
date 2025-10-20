'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Users,
  Clock,
  Shield,
  Heart,
  Sparkles,
  Globe,
  CreditCard,
  Headphones,
  Star,
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: MapPin,
      title: 'Tours Personalizados',
      description:
        'Roteiros exclusivos adaptados aos seus interesses, ritmo e preferências pessoais',
      color: 'bg-blue-500',
    },

    {
      icon: Shield,
      title: 'Segurança Garantida',
      description:
        'Seguro completo, veículos inspecionados e motorista-guia certificado',
      color: 'bg-orange-500',
    },
    {
      icon: Heart,
      title: 'Atendimento Premium',
      description:
        'Serviço atencioso e dedicado do início ao fim da sua experiência',
      color: 'bg-red-500',
    },
  ];

  const whyChooseUs = [
    {
      icon: Star,
      title: 'Experiência Local',
      description:
        'Conhecimento profundo de Portugal, suas histórias e segredos',
    },
    {
      icon: Sparkles,
      title: 'Momentos Únicos',
      description:
        'Criamos experiências memoráveis que vão além do turismo convencional',
    },
    {
      icon: CreditCard,
      title: 'Preços Transparentes',
      description: 'Sem taxas ocultas, tudo incluído no preço anunciado',
    },
    {
      icon: Headphones,
      title: 'Suporte 24/7',
      description:
        'Estamos sempre disponíveis para ajudar antes, durante e após o tour',
    },
  ];

  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        {/* Título Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Porquê Escolher os{' '}
            <span className='text-primary'>Nossos Serviços</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Oferecemos uma experiência de turismo premium com atenção aos
            mínimos detalhes
          </p>
        </motion.div>

        {/* Grid de Serviços */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='group'
            >
              <div className='bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 h-full'>
                <div
                  className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className='text-white' size={28} />
                </div>
                <h3 className='text-xl font-bold mb-3'>{service.title}</h3>
                <p className='text-gray-600'>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Seção "Por que nos escolher" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='bg-gradient-to-br from-primary to-primary-700 rounded-3xl p-12 text-white'
        >
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h3 className='text-3xl font-bold mb-6'>
                Uma Experiência Verdadeiramente Portuguesa
              </h3>
              <p className='text-lg mb-8 opacity-90'>
                Mais do que um simples transporte, oferecemos uma jornada
                cultural através de Portugal. Cada tour é uma oportunidade de
                mergulhar na história, gastronomia e tradições locais.
              </p>
              <div className='space-y-4'>
                {whyChooseUs.map((item, index) => (
                  <div key={index} className='flex items-start gap-4'>
                    <div className='bg-white/20 p-2 rounded-lg flex-shrink-0'>
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className='font-semibold mb-1'>{item.title}</h4>
                      <p className='text-sm opacity-90'>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='relative'>
              <img
                src='https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600'
                alt='Lisboa'
                className='rounded-2xl shadow-2xl'
              />
              <div className='absolute -bottom-6 -right-6 bg-secondary text-black p-6 rounded-2xl shadow-xl'>
                <div className='text-center'>
                  <p className='text-3xl font-bold'>100%</p>
                  <p className='text-sm font-medium'>Satisfação</p>
                  <p className='text-sm'>Garantida</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <h3 className='text-2xl font-bold mb-4'>
            Pronto para uma experiência inesquecível?
          </h3>
          <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
            Deixe-nos criar o tour perfeito para si. Cada detalhe será pensado
            para tornar a sua viagem única e memorável.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='#tours'
              className='bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center'
            >
              Ver Tours Disponíveis
            </a>
            <a
              href='#contacto'
              className='bg-secondary text-black px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors inline-flex items-center justify-center'
            >
              Solicitar Tour Personalizado
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
