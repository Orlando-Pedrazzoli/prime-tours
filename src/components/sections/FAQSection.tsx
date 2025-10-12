'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '@/data/tours';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Perguntas <span className='text-primary'>Frequentes</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Encontre respostas para as dúvidas mais comuns sobre os nossos tours
            privados
          </p>
        </motion.div>

        <div className='max-w-3xl mx-auto'>
          <div className='space-y-4'>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white rounded-xl shadow-md overflow-hidden'
              >
                <button
                  className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors'
                  onClick={() => toggleAccordion(index)}
                >
                  <div className='flex items-center gap-3'>
                    <HelpCircle
                      className='text-primary flex-shrink-0'
                      size={24}
                    />
                    <h3 className='font-semibold text-gray-800'>
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`text-gray-500 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                  />
                </button>
                <div
                  className={`px-6 transition-all duration-300 ${
                    openIndex === index ? 'py-4' : 'max-h-0 overflow-hidden'
                  }`}
                >
                  <p className='text-gray-600 pl-9'>{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='mt-12 bg-primary rounded-2xl p-8 text-center text-white'
          >
            <h3 className='text-2xl font-bold mb-3'>Ainda tem dúvidas?</h3>
            <p className='mb-6 opacity-90'>
              Estamos aqui para ajudar! Entre em contacto connosco e
              responderemos a todas as suas questões.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href={`mailto:${faqs[0] ? 'pedrazzoliorlando@gmail.com' : ''}`}
                className='bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-black transition-colors'
              >
                Enviar Email
              </a>
              <a
                href={`https://wa.me/351912164220`}
                className='bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors'
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
