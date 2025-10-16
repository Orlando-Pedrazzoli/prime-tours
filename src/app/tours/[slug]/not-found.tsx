'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Search, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { tours } from '@/data/tours';

export default function NotFound() {
  // Sugerir tours alternativos
  const suggestedTours = tours.slice(0, 3);

  return (
    <>
      <Header />
      <main className='min-h-screen bg-gray-50 py-20'>
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Ilustração 404 */}
              <div className='mb-8'>
                <div className='text-8xl font-bold text-primary/20 mb-4'>
                  404
                </div>
                <h1 className='text-4xl font-bold text-gray-800 mb-4'>
                  Tour Não Encontrado
                </h1>
                <p className='text-xl text-gray-600 mb-8'>
                  Oops! O tour que procura não existe ou foi removido.
                  <br />
                  Que tal explorar uma das nossas outras experiências incríveis?
                </p>
              </div>

              {/* Botões de Ação */}
              <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
                <Link href='/'>
                  <Button size='lg' className='bg-primary hover:bg-primary-700'>
                    <Home className='mr-2' size={20} />
                    Voltar ao Início
                  </Button>
                </Link>
                <Link href='/#tours'>
                  <Button size='lg' variant='outline'>
                    <Search className='mr-2' size={20} />
                    Ver Todos os Tours
                  </Button>
                </Link>
                <a href='tel:+351912164220'>
                  <Button
                    size='lg'
                    variant='outline'
                    className='border-green-500 text-green-600 hover:bg-green-50'
                  >
                    <Phone className='mr-2' size={20} />
                    Contactar-nos
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Tours Sugeridos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className='bg-white rounded-2xl p-8 shadow-lg'
            >
              <h2 className='text-2xl font-bold mb-6'>Tours Populares</h2>
              <div className='grid md:grid-cols-3 gap-6'>
                {suggestedTours.map((tour, index) => (
                  <Link
                    key={tour.id}
                    href={`/tours/${tour.slug}`}
                    className='group block'
                  >
                    <div className='bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300'>
                      <div className='relative h-40 overflow-hidden'>
                        <img
                          src={tour.image}
                          alt={tour.title}
                          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent' />
                        <div className='absolute bottom-3 left-3 right-3'>
                          <h3 className='text-white font-bold text-sm line-clamp-2'>
                            {tour.title}
                          </h3>
                        </div>
                      </div>
                      <div className='p-4'>
                        <p className='text-sm text-gray-600 line-clamp-2 mb-2'>
                          {tour.description}
                        </p>
                        <div className='flex items-center justify-between'>
                          <span className='text-primary font-bold'>
                            €{tour.price.perPerson}/pessoa
                          </span>
                          <span className='text-xs text-gray-500'>
                            {tour.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Informações de Contacto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='mt-12 text-center'
            >
              <p className='text-gray-600 mb-4'>
                Não encontrou o que procurava? Entre em contacto connosco!
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <a
                  href='mailto:pedrazzoliorlando@gmail.com'
                  className='text-primary hover:underline'
                >
                  pedrazzoliorlando@gmail.com
                </a>
                <a
                  href='tel:+351912164220'
                  className='text-primary hover:underline'
                >
                  +351 912 164 220
                </a>
                <a
                  href='https://wa.me/351912164220'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-green-600 hover:underline'
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
