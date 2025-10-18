'use client';

import React, { useState, useEffect } from 'react';
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

const bookingSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(9, 'Telefone inválido'),
  whatsapp: z.string().optional(),
  tour: z.string().min(1, 'Por favor selecione um tour'),
  date: z.string().min(1, 'Por favor selecione uma data'),
  passengers: z.string().min(1, 'Por favor indique o número de passageiros'),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

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
            tour_date: new Date(data.date).toLocaleDateString('pt-PT'),
            passengers: data.passengers,
            message: data.message || 'Sem mensagem adicional',
            booking_date: new Date().toLocaleDateString('pt-PT'),
            booking_time: new Date().toLocaleTimeString('pt-PT'),
          }
        );
      } else {
        const message = encodeURIComponent(
          `Nova Reserva:\n\nNome: ${data.name}\nEmail: ${
            data.email
          }\nTelefone: ${data.phone}\nTour: ${data.tour}\nData: ${new Date(
            data.date
          ).toLocaleDateString('pt-PT')}\nPassageiros: ${
            data.passengers
          }\nMensagem: ${data.message || 'Sem mensagem'}`
        );
        window.open(
          `https://wa.me/${businessInfo.whatsapp}?text=${message}`,
          '_blank'
        );
      }

      setSubmitStatus('success');
      reset();
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
              Reserve o Seu <span className='text-primary'>Tour Privado</span>
            </h2>
            <p className='text-xl text-gray-600'>
              Preencha o formulário abaixo e entraremos em contacto em até 24
              horas
            </p>
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
                  Informações de Contacto
                </h3>

                <div className='space-y-6'>
                  <div className='flex items-start gap-4'>
                    <div className='bg-white/20 p-3 rounded-full'>
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className='font-semibold mb-1'>Telefone</p>
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
                      <p className='font-semibold mb-1'>Email</p>
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
                      <p className='font-semibold mb-1'>Localização</p>
                      <p className='opacity-90'>{businessInfo.location}</p>
                    </div>
                  </div>
                </div>

                <div className='mt-8 pt-8 border-t border-white/20'>
                  <h4 className='font-semibold mb-4'>O que está incluído:</h4>
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
              <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                <div className='grid md:grid-cols-2 gap-6'>
                  {/* Nome */}
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Nome Completo *
                    </label>
                    <div className='relative'>
                      <User
                        className='absolute left-3 top-3 text-gray-400'
                        size={20}
                      />
                      <input
                        {...register('name')}
                        className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                        placeholder='Seu nome completo'
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
                      Email *
                    </label>
                    <div className='relative'>
                      <Mail
                        className='absolute left-3 top-3 text-gray-400'
                        size={20}
                      />
                      <input
                        {...register('email')}
                        type='email'
                        className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                        placeholder='seu@email.com'
                      />
                    </div>
                    {errors.email && (
                      <p className='mt-1 text-sm text-red-600'>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Telefone */}
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Telefone *
                    </label>
                    <div className='relative'>
                      <Phone
                        className='absolute left-3 top-3 text-gray-400'
                        size={20}
                      />
                      <input
                        {...register('phone')}
                        className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                        placeholder='+351 xxx xxx xxx'
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
                      WhatsApp (opcional)
                    </label>
                    <div className='relative'>
                      <MessageSquare
                        className='absolute left-3 top-3 text-gray-400'
                        size={20}
                      />
                      <input
                        {...register('whatsapp')}
                        className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                        placeholder='+351 xxx xxx xxx'
                      />
                    </div>
                  </div>
                </div>

                {/* Tour */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-2'>
                    Selecione o Tour *
                  </label>
                  <select
                    {...register('tour')}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                  >
                    <option value=''>Escolha um tour...</option>
                    {tours.map(tour => (
                      <option key={tour.id} value={tour.title}>
                        {tour.title} - €{tour.price.total}
                      </option>
                    ))}
                    <option value='personalizado'>Tour Personalizado</option>
                  </select>
                  {errors.tour && (
                    <p className='mt-1 text-sm text-red-600'>
                      {errors.tour.message}
                    </p>
                  )}
                </div>

                <div className='grid md:grid-cols-2 gap-6'>
                  {/* Data */}
                  <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>
                      Data Pretendida *
                    </label>
                    <div className='relative'>
                      <Calendar
                        className='absolute left-3 top-3 text-gray-400'
                        size={20}
                      />
                      <input
                        {...register('date')}
                        type='date'
                        min={new Date().toISOString().split('T')[0]}
                        className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                      />
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
                      Número de Passageiros *
                    </label>
                    <div className='relative'>
                      <Users
                        className='absolute left-3 top-3 text-gray-400'
                        size={20}
                      />
                      <select
                        {...register('passengers')}
                        className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                      >
                        <option value=''>Selecione...</option>
                        <option value='1'>1 pessoa</option>
                        <option value='2'>2 pessoas</option>
                        <option value='3'>3 pessoas</option>
                        <option value='4'>4 pessoas</option>
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
                    Mensagem Adicional (opcional)
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
                    placeholder='Informações adicionais, pedidos especiais, etc...'
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
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className='mr-2' size={20} />
                      Enviar Reserva
                    </>
                  )}
                </Button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className='bg-green-50 text-green-800 p-4 rounded-lg flex items-center gap-3'>
                    <CheckCircle size={20} />
                    Reserva enviada com sucesso! Entraremos em contacto em
                    breve.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className='bg-red-50 text-red-800 p-4 rounded-lg flex items-center gap-3'>
                    <AlertCircle size={20} />
                    Erro ao enviar reserva. Por favor tente novamente ou
                    contacte-nos diretamente.
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
