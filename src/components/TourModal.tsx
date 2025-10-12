'use client';

import React from 'react';
import { X, Clock, Users, MapPin, Euro, Check, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';

interface TourModalProps {
  tour: any;
  isOpen: boolean;
  onClose: () => void;
}

const TourModal: React.FC<TourModalProps> = ({ tour, isOpen, onClose }) => {
  if (!isOpen || !tour) return null;

  return (
    <div className='fixed inset-0 z-50 overflow-y-auto'>
      <div className='flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center'>
        <div
          className='fixed inset-0 bg-black/70 transition-opacity'
          onClick={onClose}
        />

        <div className='relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto'>
          {/* Header com Imagem */}
          <div className='relative h-64 md:h-80'>
            <img
              src={tour.image}
              alt={tour.title}
              className='w-full h-full object-cover rounded-t-2xl'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent' />
            <button
              onClick={onClose}
              className='absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors'
            >
              <X className='text-white' size={24} />
            </button>
            <div className='absolute bottom-4 left-4 right-4 text-white'>
              <h2 className='text-3xl font-bold mb-2'>{tour.title}</h2>
              <p className='text-lg opacity-90'>{tour.subtitle}</p>
            </div>
          </div>

          {/* Conteúdo */}
          <div className='p-6 md:p-8'>
            {/* Info Rápida */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-8'>
              <div className='flex items-center gap-2 text-sm'>
                <Clock className='text-primary' size={20} />
                <div className='text-left'>
                  <p className='text-gray-500'>Duração</p>
                  <p className='font-semibold'>{tour.duration}</p>
                </div>
              </div>
              <div className='flex items-center gap-2 text-sm'>
                <Users className='text-primary' size={20} />
                <div className='text-left'>
                  <p className='text-gray-500'>Capacidade</p>
                  <p className='font-semibold'>
                    Até {tour.price.maxPeople} pessoas
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-2 text-sm'>
                <Euro className='text-primary' size={20} />
                <div className='text-left'>
                  <p className='text-gray-500'>Preço Total</p>
                  <p className='font-semibold'>
                    {formatPrice(tour.price.total)}
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-2 text-sm'>
                <Calendar className='text-primary' size={20} />
                <div className='text-left'>
                  <p className='text-gray-500'>Horário</p>
                  <p className='font-semibold'>{tour.suggestedTime}</p>
                </div>
              </div>
            </div>

            {/* Descrição */}
            <div className='mb-8'>
              <h3 className='text-xl font-bold mb-3'>Sobre este Tour</h3>
              <p className='text-gray-600 mb-4'>{tour.description}</p>
              {tour.longDescription && (
                <p className='text-gray-600'>{tour.longDescription}</p>
              )}
            </div>

            {/* Destaques */}
            <div className='mb-8'>
              <h3 className='text-xl font-bold mb-3'>Destaques do Tour</h3>
              <div className='grid md:grid-cols-2 gap-3'>
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className='flex items-start gap-2'>
                    <Check
                      className='text-green-500 mt-0.5 flex-shrink-0'
                      size={16}
                    />
                    <span className='text-sm text-gray-600'>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerário */}
            {tour.itinerary && (
              <div className='mb-8'>
                <h3 className='text-xl font-bold mb-3'>Itinerário Detalhado</h3>
                <div className='space-y-3'>
                  {tour.itinerary.map((item, index) => (
                    <div
                      key={index}
                      className='flex gap-4 pb-3 border-b last:border-0'
                    >
                      <div className='text-primary font-semibold min-w-[60px]'>
                        {item.time}
                      </div>
                      <div className='flex-1'>
                        <p className='font-semibold'>{item.location}</p>
                        <p className='text-sm text-gray-600'>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Galeria */}
            {tour.gallery && (
              <div className='mb-8'>
                <h3 className='text-xl font-bold mb-3'>Galeria</h3>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                  {tour.gallery.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${tour.title} ${index + 1}`}
                      className='w-full h-24 object-cover rounded-lg'
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Informações Importantes */}
            <div className='bg-gray-50 rounded-xl p-6 mb-8'>
              <h3 className='text-lg font-bold mb-3'>
                Informações Importantes
              </h3>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <p className='font-semibold text-sm mb-2 text-green-600'>
                    ✓ Incluído:
                  </p>
                  <ul className='text-sm text-gray-600 space-y-1'>
                    <li>• Veículos Hyundai/Toyota confortáveis</li>
                    <li>• Motorista-guia certificado</li>
                    <li>• WiFi e águas a bordo</li>
                    <li>• Seguro completo</li>
                    <li>• Todos os impostos</li>
                  </ul>
                </div>
                <div>
                  <p className='font-semibold text-sm mb-2 text-red-600'>
                    ✗ Não Incluído:
                  </p>
                  <ul className='text-sm text-gray-600 space-y-1'>
                    <li>• Bilhetes de entrada em monumentos</li>
                    <li>• Refeições e bebidas</li>
                    <li>• Alojamento</li>
                    <li>• Despesas pessoais</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Preços */}
            <div className='bg-primary/5 rounded-xl p-6 mb-8'>
              <h3 className='text-lg font-bold mb-3'>Tabela de Preços</h3>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
                <div>
                  <p className='text-sm text-gray-500'>1 Pessoa</p>
                  <p className='font-bold text-lg'>
                    {formatPrice(tour.price.total * 0.8)}
                  </p>
                </div>
                <div>
                  <p className='text-sm text-gray-500'>2 Pessoas</p>
                  <p className='font-bold text-lg'>
                    {formatPrice(tour.price.total * 0.85)}
                  </p>
                  <p className='text-xs text-gray-500'>
                    {formatPrice((tour.price.total * 0.85) / 2)}/pessoa
                  </p>
                </div>
                <div>
                  <p className='text-sm text-gray-500'>3 Pessoas</p>
                  <p className='font-bold text-lg'>
                    {formatPrice(tour.price.total * 0.93)}
                  </p>
                  <p className='text-xs text-gray-500'>
                    {formatPrice((tour.price.total * 0.93) / 3)}/pessoa
                  </p>
                </div>
                <div className='bg-primary text-white rounded-lg p-2'>
                  <p className='text-sm'>4 Pessoas</p>
                  <p className='font-bold text-lg'>
                    {formatPrice(tour.price.total)}
                  </p>
                  <p className='text-xs'>
                    {formatPrice(tour.price.perPerson)}/pessoa
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                className='flex-1 bg-primary hover:bg-primary-700'
                onClick={() => {
                  onClose();
                  document
                    .getElementById('contacto')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Reservar Este Tour
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='flex-1'
                onClick={() => {
                  const message = encodeURIComponent(
                    `Olá! Gostaria de mais informações sobre o tour: ${tour.title}`
                  );
                  window.open(
                    `https://wa.me/351912164220?text=${message}`,
                    '_blank'
                  );
                }}
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourModal;
