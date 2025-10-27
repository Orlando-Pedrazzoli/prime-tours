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
import { useLanguage } from '@/contexts/LanguageContext';
import { toursEn } from '@/data/tours-en';

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
  const { t, language } = useLanguage();

  // ============================================
  // OBTER DADOS DO TOUR COM BASE NO IDIOMA
  // ============================================
  const localizedTour = language === 'en' && (toursEn as any)[tour.id]
    ? { ...tour, ...(toursEn as any)[tour.id] }
    : tour;

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
      `${t('tourDetail.whatsappMessage')} ${localizedTour.title}`
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
              <h2 className='text-3xl font-bold mb-4'>{t('tourDetail.aboutTour')}</h2>
              <p className='text-gray-700 text-lg leading-relaxed mb-4'>
                {localizedTour.description}
              </p>
              {localizedTour.longDescription && (
                <p className='text-gray-600 leading-relaxed'>
                  {localizedTour.longDescription}
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
              <h2 className='text-3xl font-bold mb-6'>{t('tourDetail.highlights')}</h2>
              <div className='grid md:grid-cols-2 gap-4'>
                {localizedTour.highlights.map((highlight: string, index: number) => (
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
              className='bg-white rounded-2xl p-4 md:p-8 shadow-md'
            >
              <h2 className='text-2xl md:text-3xl font-bold mb-3 md:mb-6 flex items-center gap-2 md:gap-3'>
                <MapPin className='text-primary' size={28} />
                {t('tourDetail.routeMap')}
              </h2>
              <div className='relative w-full rounded-lg md:rounded-xl overflow-hidden border-2 md:border-4 border-primary/20'>
                <img
                  src={`/${
                    (tourMapImages as any)[tour.slug as keyof typeof tourMapImages] ||
                    'default-map.jpg'
                  }`}
                  alt={`${t('tourDetail.routeMap')} - ${localizedTour.title}`}
                  className='w-full h-auto max-h-[800px] md:max-h-[600px] object-cover md:object-contain'
                  onError={e => {
                    // Fallback se a imagem não existir
                    (e.target as HTMLImageElement).src = tour.image;
                  }}
                />
              </div>
              <p className='text-xs md:text-sm text-gray-500 mt-2 md:mt-3 text-center px-2'>
                {t('tourDetail.routeDisclaimer')}
              </p>
            </motion.div>

            {/* Itinerário Detalhado */}
            {localizedTour.itinerary && localizedTour.itinerary.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className='bg-white rounded-2xl p-8 shadow-md'
              >
                <h2 className='text-3xl font-bold mb-6'>{t('tourDetail.detailedItinerary')}</h2>
                <div className='space-y-6'>
                  {localizedTour.itinerary.map((stop: any, index: number) => (
                    <div
                      key={index}
                      className='border-l-4 border-primary pl-6 relative'
                    >
                      <div className='absolute -left-[10px] top-0 w-5 h-5 bg-primary rounded-full border-4 border-white'></div>
                      <h3 className='font-bold text-lg mb-2 text-gray-800'>
                        {stop.location}
                      </h3>
                      <p className='text-gray-600 leading-relaxed'>
                        {stop.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Incluído / Não Incluído */}
            <div className='grid md:grid-cols-2 gap-6'>
              {/* Incluído */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='bg-white rounded-2xl p-6 shadow-md'
              >
                <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
                  <Check className='text-green-500' size={24} />
                  {t('tourDetail.included')}
                </h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start gap-2'>
                    <span className='text-green-500 mt-1'>✓</span>
                    <span>{t('tourDetail.included.driver')}</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-green-500 mt-1'>✓</span>
                    <span>{t('tourDetail.included.vehicle')}</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-green-500 mt-1'>✓</span>
                    <span>{t('tourDetail.included.wifi')}</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-green-500 mt-1'>✓</span>
                    <span>{t('tourDetail.included.water')}</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-green-500 mt-1'>✓</span>
                    <span>{t('tourDetail.included.insurance')}</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-green-500 mt-1'>✓</span>
                    <span>{t('tourDetail.included.fuel')}</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-green-500 mt-1'>✓</span>
                    <span>{t('tourDetail.included.pickup')}</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-green-500 mt-1'>✓</span>
                    <span>{t('tourDetail.included.private')}</span>
                  </li>
                </ul>
              </motion.div>

              {/* Não Incluído */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='bg-white rounded-2xl p-6 shadow-md'
              >
                <h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
                  <XIcon className='text-red-500' size={24} />
                  {t('tourDetail.notIncluded')}
                </h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start gap-2'>
                    <span className='text-red-500 mt-1'>✕</span>
                    <span>{t('tourDetail.notIncluded.tickets')}</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-red-500 mt-1'>✕</span>
                    <span>{t('tourDetail.notIncluded.meals')}</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-red-500 mt-1'>✕</span>
                    <span>{t('tourDetail.notIncluded.personal')}</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-red-500 mt-1'>✕</span>
                    <span>{t('tourDetail.notIncluded.gratuities')}</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Informações Importantes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='bg-blue-50 border-2 border-blue-200 rounded-2xl p-6'
            >
              <h3 className='text-xl font-bold mb-4 flex items-center gap-2 text-blue-900'>
                <AlertCircle className='text-blue-600' size={24} />
                {t('tourDetail.importantInfo')}
              </h3>
              <div className='space-y-3 text-gray-700'>
                <p className='flex items-start gap-3'>
                  <span className='text-primary mt-1'>•</span>
                  <span>
                    {t('tourDetail.info.booking')}
                  </span>
                </p>
                <p className='flex items-start gap-3'>
                  <span className='text-primary mt-1'>•</span>
                  <span>
                    {t('tourDetail.info.weather')}
                  </span>
                </p>
                <p className='flex items-start gap-3'>
                  <span className='text-primary mt-1'>•</span>
                  <span>
                    {t('tourDetail.info.flexible')}
                  </span>
                </p>
                <p className='flex items-start gap-3'>
                  <span className='text-primary mt-1'>•</span>
                  <span>{t('tourDetail.info.pickup')}</span>
                </p>
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
                  <p className='text-gray-600 mb-2'>{t('tourDetail.from')}</p>
                  <p className='text-4xl font-bold text-primary'>
                    {formatPrice(tour.price.perPerson)}
                  </p>
                  <p className='text-sm text-gray-500'>
                    {t('tourDetail.perPerson4')}
                  </p>
                </div>

                {/* Seletor de Passageiros */}
                <div className='mb-6'>
                  <label className='block text-sm font-semibold mb-3'>
                    {t('tourDetail.numberOfPassengers')}
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
                      {selectedPassengers === 1 ? t('tourDetail.person') : t('tourDetail.people')}
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
                    {t('tourDetail.perPerson')}
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
                      {t('tourDetail.bookNow')}
                    </Button>
                  </a>
                  <Button
                    size='lg'
                    variant='outline'
                    className='w-full border-2 border-green-500 text-green-600 hover:bg-green-50'
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle className='mr-2' size={20} />
                    {t('tourDetail.whatsapp')}
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
                <h3 className='text-xl font-bold mb-4'>{t('tourDetail.needHelp')}</h3>
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
                <h3 className='text-lg font-bold mb-4'>{t('tourDetail.ourGuarantees')}</h3>
                <div className='space-y-4'>
                  <div className='flex items-start gap-3'>
                    <Shield className='text-primary flex-shrink-0' size={20} />
                    <div>
                      <p className='font-semibold text-sm'>{t('tourDetail.fullInsurance')}</p>
                      <p className='text-xs text-gray-600'>
                        {t('tourDetail.insuranceDesc')}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Car className='text-primary flex-shrink-0' size={20} />
                    <div>
                      <p className='font-semibold text-sm'>{t('tourDetail.premiumVehicles')}</p>
                      <p className='text-xs text-gray-600'>{t('tourDetail.vehiclesDesc')}</p>
                    </div>
                  </div>
                  <div className='flex items-start gap-3'>
                    <Award className='text-primary flex-shrink-0' size={20} />
                    <div>
                      <p className='font-semibold text-sm'>
                        {t('tourDetail.certifiedDriver')}
                      </p>
                      <p className='text-xs text-gray-600'>
                        {t('tourDetail.certifiedDriverDesc')}
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