'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { generatePriceTable } from '@/lib/utils';
import {
  Check,
  X as XIcon,
  Clock,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Shield,
  Car,
  Award,
  AlertCircle,
  MessageCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import { businessInfo } from '@/data/tours';
import BookingForm from '@/components/sections/BookingForm';

interface TourDetailContentProps {
  tour: any;
}

// Mapeamento dos slugs dos tours para os nomes das imagens de mapa
const tourMapImages = {
  'tour-de-lisboa': 'tour-de-lisboa.jpg',
  'passeio-sintra-cascais-estoril': 'passeio-sintra-cascais-estoril.jpg',
  'fatima-batalha-nazare-obidos': 'fatima-batalha-nazare-e-obidos.jpg',
  'tour-lisboa-sintra': 'tour-lisboa-sintra.jpg',
  'tour-evora-monsaraz': 'tour-evora-e-monsaraz.jpg',
  'tour-azeitao-palmela-sesimbra-arrabida-setubal':
    'tour-azeitao-palmela-sesimbra-arrabida-setubal.jpg',
  'tour-coimbra-porto': 'tour-coimbra-e-porto.jpg',
  'passeio-fatima-sintra': 'passeio-a-fatima-e-sintra.jpg',
  'passeio-sintra-obidos': 'passeio-a-sintra-e-obidos.jpg',
  'tour-algarve-praia-da-rocha-lagos-sagres':
    'tour-algarve-praia-da-rocha-lagos-sagres.jpg',
  'tour-fatima-coimbra': 'tour-fatima-e-coimbra.jpg',
  'passeio-fatima-obidos': 'passeio-fatima-e-obidos.jpg',
  'tour-templarios-portugal': 'tour-templarios-em-portugal.jpg',
  'tour-coimbra-aveiro': 'tour-coimbra-aveiro.jpg',
  'passeio-porto-santiago-compostela':
    'passeio-porto-santiago-de-compostela.jpg',
  'passeio-tomar-convento-cristo-coimbra':
    'passeio-tomar-convento-de-cristo-e-coimbra.jpg',
  'tour-fatima-santiago-compostela': 'tour-fatima-e-santiago-de-compostela.jpg',
  'passeio-sintra-mafra': 'passeio-a-sintra-e-mafra.jpg',
  'passeio-fatima-5horas': 'passeio-de-fatima-5horas.jpg',
  'passeio-sintra-4horas': 'passeio-a-sintra-4horas.jpg',
  'tour-lisboa-4horas': 'tour-de-lisboa-4horas.jpg',
  'tour-a-pe-bonde-lisboa': 'tour-a-pe-e-de-bonde-em-lisboa.jpg',
  'passeio-noturno-lisboa': 'passeio-noturno-lisboa.jpg',
  'passeio-lisboa-noite-fado-jantar':
    'passeio-lisboa-a-noite-com-fado-show-e-jantar.jpg',
};

const TourDetailContent: React.FC<TourDetailContentProps> = ({ tour }) => {
  const [selectedPassengers, setSelectedPassengers] = useState(4);

  // ============================================
  // TABELA DE PREÇOS DINÂMICA
  // ============================================
  // Se o tour tem basePrice e additionalPassenger definidos,
  // usa o cálculo automático (novo sistema)
  // Caso contrário, usa fallback com multiplicadores (tours antigos)
  const priceTable =
    tour.price.basePrice && tour.price.additionalPassenger
      ? generatePriceTable(
          tour.price.basePrice,
          tour.price.additionalPassenger,
          tour.price.maxPeople
        )
      : [
          // Fallback para tours que ainda não foram atualizados
          {
            passengers: 1,
            total: tour.price.total * 0.74,
            perPerson: tour.price.total * 0.74,
          },
          {
            passengers: 2,
            total: tour.price.total * 0.81,
            perPerson: (tour.price.total * 0.81) / 2,
          },
          {
            passengers: 3,
            total: tour.price.total * 0.93,
            perPerson: (tour.price.total * 0.93) / 3,
          },
          {
            passengers: 4,
            total: tour.price.total,
            perPerson: tour.price.perPerson,
          },
        ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de mais informações sobre o tour: ${tour.title}`
    );
    window.open(
      `https://wa.me/${businessInfo.whatsapp}?text=${message}`,
      '_blank'
    );
  };

  return (
    <div className='bg-gray-50 py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Coluna Principal - Conteúdo */}
          <div className='lg:col-span-2 space-y-8'>
            {/* Descrição */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='bg-white rounded-2xl p-8 shadow-md'
            >
              <h2 className='text-3xl font-bold mb-4'>Sobre Este Tour</h2>
              <p className='text-gray-700 text-lg leading-relaxed mb-4'>
                {tour.description}
              </p>
              {tour.longDescription && (
                <p className='text-gray-600 leading-relaxed'>
                  {tour.longDescription}
                </p>
              )}
            </motion.div>

            {/* Destaques */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='bg-white rounded-2xl p-8 shadow-md'
            >
              <h2 className='text-3xl font-bold mb-6'>Destaques do Tour</h2>
              <div className='grid md:grid-cols-2 gap-4'>
                {tour.highlights.map((highlight: string, index: number) => (
                  <div key={index} className='flex items-start gap-3'>
                    <Check
                      className='text-green-500 mt-1 flex-shrink-0'
                      size={20}
                    />
                    <span className='text-gray-700'>{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mapa do Percurso */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='bg-white rounded-2xl p-8 shadow-md'
            >
              <h2 className='text-3xl font-bold mb-6 flex items-center gap-3'>
                <MapPin className='text-primary' size={32} />
                Mapa do Percurso
              </h2>
              <div className='relative w-full h-[600px] rounded-xl overflow-hidden border-4 border-gray-100'>
                <img
                  src={`/${
                    tourMapImages[tour.slug as keyof typeof tourMapImages] ||
                    'default-map.jpg'
                  }`}
                  alt={`Mapa do percurso - ${tour.title}`}
                  className='w-full h-full object-cover'
                  onError={e => {
                    // Fallback se a imagem não existir
                    (e.target as HTMLImageElement).src = tour.image;
                  }}
                />
              </div>
              <p className='text-sm text-gray-500 mt-3 text-center'>
                * Percurso sujeito a alterações conforme preferências do cliente
              </p>
            </motion.div>

            {/* Itinerário Detalhado */}
            {tour.itinerary && tour.itinerary.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='bg-white rounded-2xl p-8 shadow-md'
              >
                <h2 className='text-3xl font-bold mb-6 flex items-center gap-3'>
                  <Clock className='text-primary' size={32} />
                  Itinerário Detalhado
                </h2>
                <div className='space-y-6'>
                  {tour.itinerary.map((item: any, index: number) => (
                    <div key={index} className='flex gap-4 relative'>
                      {/* Linha vertical */}
                      {index !== tour.itinerary.length - 1 && (
                        <div className='absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200' />
                      )}

                      {/* Horário */}
                      <div className='flex-shrink-0'>
                        <div className='bg-primary text-white px-4 py-2 rounded-full font-bold text-sm'>
                          {item.time}
                        </div>
                      </div>

                      {/* Conteúdo */}
                      <div className='flex-1 pb-6'>
                        <div className='bg-gray-50 rounded-xl p-4'>
                          <h4 className='font-bold text-lg mb-2 text-primary'>
                            {item.location}
                          </h4>
                          <p className='text-gray-600'>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* O Que Está Incluído / Não Incluído */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='bg-white rounded-2xl p-8 shadow-md'
            >
              <h2 className='text-3xl font-bold mb-6'>
                Informações Importantes
              </h2>
              <div className='grid md:grid-cols-2 gap-8'>
                {/* Incluído */}
                <div>
                  <h3 className='text-xl font-semibold mb-4 text-green-600 flex items-center gap-2'>
                    <Check size={24} />O Que Está Incluído
                  </h3>
                  <ul className='space-y-3'>
                    {businessInfo.included.map((item, index) => (
                      <li key={index} className='flex items-start gap-3'>
                        <Check
                          className='text-green-500 mt-1 flex-shrink-0'
                          size={18}
                        />
                        <span className='text-gray-700 text-sm'>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Não Incluído */}
                <div>
                  <h3 className='text-xl font-semibold mb-4 text-red-600 flex items-center gap-2'>
                    <XIcon size={24} />
                    Não Incluído
                  </h3>
                  <ul className='space-y-3'>
                    {businessInfo.notIncluded.map((item, index) => (
                      <li key={index} className='flex items-start gap-3'>
                        <XIcon
                          className='text-red-500 mt-1 flex-shrink-0'
                          size={18}
                        />
                        <span className='text-gray-700 text-sm'>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Políticas */}
              <div className='mt-8 pt-8 border-t'>
                <h3 className='text-xl font-semibold mb-4 flex items-center gap-2'>
                  <AlertCircle className='text-primary' size={24} />
                  Políticas e Regras
                </h3>
                <div className='space-y-3 text-gray-700'>
                  <p className='flex items-start gap-3'>
                    <span className='text-primary mt-1'>•</span>
                    <span>
                      Cancelamentos até 48 horas antes do tour têm reembolso
                      total
                    </span>
                  </p>
                  <p className='flex items-start gap-3'>
                    <span className='text-primary mt-1'>•</span>
                    <span>
                      Tours funcionam independentemente das condições
                      meteorológicas
                    </span>
                  </p>
                  <p className='flex items-start gap-3'>
                    <span className='text-primary mt-1'>•</span>
                    <span>
                      Itinerário pode ser ajustado conforme suas preferências
                    </span>
                  </p>
                  <p className='flex items-start gap-3'>
                    <span className='text-primary mt-1'>•</span>
                    <span>Recolha e entrega no local designado por si</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Informações e Reserva */}
          <div className='lg:col-span-1'>
            <div className='sticky top-32 space-y-6'>
              {/* Card de Preços */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className='bg-white rounded-2xl p-6 shadow-lg border-2 border-primary/20'
              >
                <div className='text-center mb-6'>
                  <p className='text-gray-600 mb-2'>A partir de</p>
                  <p className='text-4xl font-bold text-primary'>
                    {formatPrice(tour.price.perPerson)}
                  </p>
                  <p className='text-sm text-gray-500'>
                    por pessoa (4 pessoas)
                  </p>
                </div>

                {/* Seletor de Passageiros */}
                <div className='mb-6'>
                  <label className='block text-sm font-semibold mb-3'>
                    Número de Passageiros
                  </label>
                  <div className='grid grid-cols-4 gap-2'>
                    {priceTable.map(price => (
                      <button
                        key={price.passengers}
                        onClick={() => setSelectedPassengers(price.passengers)}
                        className={`py-3 px-2 rounded-lg font-semibold transition-all ${
                          selectedPassengers === price.passengers
                            ? 'bg-primary text-white shadow-lg scale-105'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        {price.passengers}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Preço Selecionado */}
                <div className='bg-primary/5 rounded-xl p-4 mb-6'>
                  <div className='flex justify-between items-center mb-2'>
                    <span className='text-gray-600'>
                      {selectedPassengers}{' '}
                      {selectedPassengers === 1 ? 'pessoa' : 'pessoas'}
                    </span>
                    <span className='text-xl font-bold text-primary'>
                      {formatPrice(
                        priceTable.find(
                          p => p.passengers === selectedPassengers
                        )?.total || tour.price.total
                      )}
                    </span>
                  </div>
                  <div className='text-sm text-gray-500'>
                    {formatPrice(
                      priceTable.find(p => p.passengers === selectedPassengers)
                        ?.perPerson || tour.price.perPerson
                    )}{' '}
                    por pessoa
                  </div>
                </div>

                {/* Botões de Ação */}
                <div className='space-y-3'>
                  <a href='#booking-section'>
                    <Button
                      size='lg'
                      className='w-full bg-secondary hover:bg-secondary/90 text-black font-bold'
                    >
                      <Calendar className='mr-2' size={20} />
                      Reservar Agora
                    </Button>
                  </a>
                  <Button
                    size='lg'
                    variant='outline'
                    className='w-full border-2 border-green-500 text-green-600 hover:bg-green-50'
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle className='mr-2' size={20} />
                    WhatsApp
                  </Button>
                </div>
              </motion.div>

              {/* Card de Contato */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className='bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-6 shadow-lg'
              >
                <h3 className='text-xl font-bold mb-4'>Precisa de Ajuda?</h3>
                <div className='space-y-3 text-sm'>
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className='flex items-center gap-3 hover:text-secondary transition-colors'
                  >
                    <Phone size={18} />
                    {businessInfo.phone}
                  </a>
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className='flex items-center gap-3 hover:text-secondary transition-colors break-all'
                  >
                    <Mail size={18} />
                    {businessInfo.email}
                  </a>
                  <div className='flex items-center gap-3'>
                    <MapPin size={18} />
                    {businessInfo.location}
                  </div>
                </div>
              </motion.div>

              {/* Card de Garantias */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className='bg-white rounded-2xl p-6 shadow-md'
              >
                <h3 className='text-lg font-bold mb-4'>Nossas Garantias</h3>
                <div className='space-y-4'>
                  <div className='flex items-start gap-3'>
                    <Shield className='text-primary flex-shrink-0' size={20} />
                    <div>
                      <p className='font-semibold text-sm'>Seguro Completo</p>
                      <p className='text-xs text-gray-600'>
                        Acidentes e responsabilidade civil
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Car className='text-primary flex-shrink-0' size={20} />
                    <div>
                      <p className='font-semibold text-sm'>Veículos Premium</p>
                      <p className='text-xs text-gray-600'>Hyundai & Toyota</p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Award className='text-primary flex-shrink-0' size={20} />
                    <div>
                      <p className='font-semibold text-sm'>
                        Motorista Certificado
                      </p>
                      <p className='text-xs text-gray-600'>
                        Profissional licenciado
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Seção de Reserva */}
        <div id='booking-section' className='mt-16'>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default TourDetailContent;
