'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { businessInfo } from '@/data/tours';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Aparecer após 2 segundos

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Olá! Gostaria de mais informações sobre os tours privados em Portugal.'
    );
    const whatsappNumber = businessInfo.whatsapp;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleWhatsAppClick}
      className='fixed bottom-5 right-5 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 animate-float group'
      aria-label='Contactar pelo WhatsApp'
    >
      <MessageCircle size={24} />
      <span className='absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
        Fale connosco no WhatsApp!
      </span>
    </button>
  );
};

export default WhatsAppButton;
