'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { tours, businessInfo } from '@/data/tours';
import {
  Calendar,
  Users,
  Mail,
  Phone,
  User,
  MessageSquare,
  MapPin,
  CheckCircle,
  Send,
  AlertCircle,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '@/contexts/LanguageContext';

type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  whatsapp?: string;
  tour: string;
  date: string;
  passengers: string;
  message?: string;
};

const BookingForm = () => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [dateValue, setDateValue] = useState('');

  // Schema de validação dinâmico baseado no idioma
  const bookingSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t('booking.validation.nameMin')),
        email: z.string().email(t('booking.validation.emailInvalid')),
        phone: z.string().min(9, t('booking.validation.phoneInvalid')),
        whatsapp: z.string().optional(),
        tour: z.string().min(1, t('booking.validation.tourRequired')),
        date: z.string().min(1, t('booking.validation.dateRequired')),
        passengers: z
          .string()
          .min(1, t('booking.validation.passengersRequired')),
        message: z.string().optional(),
      }),
    [t]
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);

    try {
      if (
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ) {
        const locale = language === 'pt' ? 'pt-PT' : 'en-US';
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            to_email: businessInfo.email,
            from_name: data.name,
            from_email: data.email,
            phone: data.phone,
            whatsapp: data.whatsapp || data.phone,
            tour_name: data.tour,
            tour_date: new Date(data.date).toLocaleDateString(locale),
            passengers: data.passengers,
            message: data.message || t('booking.whatsappNoMessage'),
            booking_date: new Date().toLocaleDateString(locale),
            booking_time: new Date().toLocaleTimeString(locale),
          }
        );
      } else {
        const locale = language === 'pt' ? 'pt-PT' : 'en-US';
        const message = encodeURIComponent(
          `${t('booking.whatsappNewBooking')}:\n\n${t(
            'booking.whatsappName'
          )}: ${data.name}\n${t('booking.whatsappEmail')}: ${
            data.email
          }\n${t('booking.whatsappPhone')}: ${data.phone}\n${t(
            'booking.whatsappTour'
          )}: ${data.tour}\n${t('booking.whatsappDate')}: ${new Date(
            data.date
          ).toLocaleDateString(locale)}\n${t('booking.whatsappPassengers')}: ${
            data.passengers
          }\n${t('booking.whatsappMessage')}: ${
            data.message || t('booking.whatsappNoMessage')
          }`
        );
        window.open(
          `https://wa.me/${businessInfo.whatsapp}?text=${message}`,
          '_blank'
        );
      }

      setSubmitStatus('success');
      reset();
      setDateValue('');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Erro ao enviar reserva:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contacto' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-12'
          >
            <h2 className='text-4xl md:text-5xl font-bold mb-4'>
              {t('booking.title')}{' '}
              <span className='text-primary'>{t('booking.titleHighlight')}</span>
            </h2>
            <p className='text-xl text-gray-600'>{t('booking.subtitle')}</p>
          </motion.div>

          <div className='grid lg:grid-cols-3 gap-8'>
            {/* Informações de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='lg:col-span-1'
            >
              <div className='bg-primary rounded-2xl p-8 text-white h-full'>
                <h3 className='text-2xl font-bold mb-6'>
                  {t('booking.contactInfo')}
                </h3>

                <div className='space-y-6'>
                  <div className='flex items-start gap-4'>
                    <div className='bg-white/20 p-3 rounded-full'>
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className='font-semibold mb-1'>
                        {t('contact.phone')}
                      </p>
                      <a
                        href={`tel:${businessInfo.phone}`}
                        className='hover:text-secondary transition-colors'
                      >
                        {businessInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='bg-white/20 p-3 rounded-full'>
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className='font-semibold mb-1'>{t('contact.email')}</p>
                      <a
                        href={`mailto:${businessInfo.email}`}
                        className='hover:text-secondary transition-colors text-sm'
                      >
                        {businessInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className='flex items-start gap-4'>
                    <div className='bg-white/20 p-3 rounded-full'>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className='font-semibold mb-1'>
                        {t('contact.location')}
                      </p>
                      <p className='opacity-90'>{businessInfo.location}</p>
                    </div>
                  </div>
                </div>

                <div className='mt-8 pt-8 border-t border-white/20'>
                  <h4 className='font-semibold mb-4'>
                    {t('booking.whatsIncluded')}
                  </h4>
                  <ul className='space-y-2 text-sm opacity-90'>
                    {businessInfo.included.slice(0, 3).map((item, index) => (
                      <li key={index} className='flex items-start gap-2'>
                        <CheckCircle
                          size={16}
                          className='mt-0.5 flex-shrink-0'
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='lg:col-span-2'
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='bg-gray-50 rounded-2xl p-6 md:p-8 space-y-6'
              >
                {/* Nome e Email */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                  {/* Nome */}
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      {t('booking.fullName')} *
                    </label>
                    <div className='relative'>
                      <User
                        className='absolute left-2.5 md:left-3 top-3 text-gray-400 pointer-events-none'
                        size={20}
                      />
                      <input
                        {...register('name')}
                        className='w-full pl-11 md:pl-10 pr-3 md:pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base'
                        placeholder={t('booking.namePlaceholder')}
                      />
                    </div>
                    {errors.name && (
                      <p className='mt-1 text-sm text-red-600'>
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      {t('booking.email')} *
                    </label>
                    <div className='relative'>
                      <Mail
                        className='absolute left-2.5 md:left-3 top-3 text-gray-400 pointer-events-none'
                        size={20}
                      />
                      <input
                        {...register('email')}
                        type='email'
                        className='w-full pl-11 md:pl-10 pr-3 md:pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base'
                        placeholder={t('booking.emailPlaceholder')}
                      />
                    </div>
                    {errors.email && (
                      <p className='mt-1 text-sm text-red-600'>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Telefone e WhatsApp */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                  {/* Telefone */}
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      {t('booking.phone')} *
                    </label>
                    <div className='relative'>
                      <Phone
                        className='absolute left-2.5 md:left-3 top-3 text-gray-400 pointer-events-none'
                        size={20}
                      />
                      <input
                        {...register('phone')}
                        className='w-full pl-11 md:pl-10 pr-3 md:pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base'
                        placeholder={t('booking.phonePlaceholder')}
                      />
                    </div>
                    {errors.phone && (
                      <p className='mt-1 text-sm text-red-600'>
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      {t('booking.whatsapp')}
                    </label>
                    <div className='relative'>
                      <MessageSquare
                        className='absolute left-2.5 md:left-3 top-3 text-gray-400 pointer-events-none'
                        size={20}
                      />
                      <input
                        {...register('whatsapp')}
                        className='w-full pl-11 md:pl-10 pr-3 md:pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base'
                        placeholder={t('booking.whatsappPlaceholder')}
                      />
                    </div>
                  </div>
                </div>

                {/* Tour */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    {t('booking.selectTour')} *
                  </label>
                  <select
                    {...register('tour')}
                    className='w-full px-3 md:px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base'
                  >
                    <option value=''>{t('booking.tourPlaceholder')}</option>
                    {tours.map(tour => (
                      <option key={tour.id} value={tour.title}>
                        {tour.title} - €{tour.price.total}
                      </option>
                    ))}
                    <option value={t('booking.customTour')}>
                      {t('booking.customTour')}
                    </option>
                  </select>
                  {errors.tour && (
                    <p className='mt-1 text-sm text-red-600'>
                      {errors.tour.message}
                    </p>
                  )}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
                  {/* Data */}
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      {t('booking.desiredDate')} *
                    </label>
                    <div className='relative'>
                      <Calendar
                        className='absolute left-2.5 md:left-3 top-3 text-gray-400 pointer-events-none'
                        size={20}
                      />
                      <input
                        {...register('date', {
                          onChange: e => setDateValue(e.target.value),
                        })}
                        type='date'
                        min={new Date().toISOString().split('T')[0]}
                        className='w-full pl-11 md:pl-10 pr-8 md:pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base'
                        style={{
                          colorScheme: 'light',
                          ...(dateValue === '' && {
                            color: 'transparent',
                          }),
                        }}
                        onFocus={e => (e.target.style.color = '#374151')}
                        onBlur={e => {
                          if (e.target.value === '') {
                            e.target.style.color = 'transparent';
                          }
                        }}
                      />
                      {!dateValue && (
                        <span className='absolute left-11 md:left-10 top-3 text-gray-400 text-sm md:text-base pointer-events-none'>
                          {t('booking.datePlaceholder')}
                        </span>
                      )}
                    </div>
                    {errors.date && (
                      <p className='mt-1 text-sm text-red-600'>
                        {errors.date.message}
                      </p>
                    )}
                  </div>

                  {/* Número de Passageiros */}
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      {t('booking.numberOfPassengers')} *
                    </label>
                    <div className='relative'>
                      <Users
                        className='absolute left-2.5 md:left-3 top-3 text-gray-400 pointer-events-none'
                        size={20}
                      />
                      <select
                        {...register('passengers')}
                        className='w-full pl-11 md:pl-10 pr-8 md:pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm md:text-base appearance-none'
                      >
                        <option value=''>
                          {t('booking.passengersPlaceholder')}
                        </option>
                        <option value='1'>1 {t('booking.person')}</option>
                        <option value='2'>2 {t('booking.people')}</option>
                        <option value='3'>3 {t('booking.people')}</option>
                        <option value='4'>4 {t('booking.people')}</option>
                      </select>
                    </div>
                    {errors.passengers && (
                      <p className='mt-1 text-sm text-red-600'>
                        {errors.passengers.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    {t('booking.additionalMessage')}
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                    placeholder={t('booking.messagePlaceholder')}
                  />
                </div>

                {/* Botão Submit */}
                <Button
                  type='submit'
                  size='lg'
                  className='w-full bg-primary hover:bg-primary-700'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className='mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent' />
                      {t('booking.sending')}
                    </>
                  ) : (
                    <>
                      <Send className='mr-2' size={20} />
                      {t('booking.sendBooking')}
                    </>
                  )}
                </Button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className='bg-green-50 text-green-800 p-4 rounded-lg flex items-center gap-3'>
                    <CheckCircle size={20} />
                    {t('booking.successMessage')}
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className='bg-red-50 text-red-800 p-4 rounded-lg flex items-center gap-3'>
                    <AlertCircle size={20} />
                    {t('booking.errorMessage')}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;