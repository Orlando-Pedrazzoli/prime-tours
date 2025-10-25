'use client';

import React from 'react';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Car,
  Shield,
  Award,
  Clock,
} from 'lucide-react';
import { businessInfo, tours } from '@/data/tours';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className='bg-gray-900 text-white'>
      {/* Main Footer */}
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Sobre a Empresa */}
          <div>
            <h3 className='text-2xl font-bold mb-4 text-secondary'>
              Go Portugal Tours
            </h3>
            <p className='text-gray-300 mb-4'>
              {t('footer.description')}
            </p>
            <div className='flex gap-3'>
              <a
                href='#'
                className='bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors'
                aria-label='Facebook'
              >
                <Facebook size={20} />
              </a>
              <a
                href='#'
                className='bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors'
                aria-label='Instagram'
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Tours Populares */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>{t('footer.popularTours')}</h4>
            <ul className='space-y-2'>
              {tours.slice(0, 5).map(tour => (
                <li key={tour.id}>
                  <a
                    href={`#tours`}
                    className='text-gray-300 hover:text-secondary transition-colors text-sm'
                  >
                    {tour.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Informações */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>{t('footer.information')}</h4>
            <ul className='space-y-3'>
              <li className='flex items-center gap-2 text-gray-300 text-sm'>
                <MapPin size={16} className='flex-shrink-0' />
                {businessInfo.location}
              </li>
              <li className='flex items-center gap-2 text-gray-300 text-sm'>
                <Phone size={16} className='flex-shrink-0' />
                <a
                  href={`tel:${businessInfo.phone}`}
                  className='hover:text-secondary transition-colors'
                >
                  {businessInfo.phone}
                </a>
              </li>
              <li className='flex items-center gap-2 text-gray-300 text-sm'>
                <Mail size={16} className='flex-shrink-0' />
                <a
                  href={`mailto:${businessInfo.email}`}
                  className='hover:text-secondary transition-colors break-all'
                >
                  {businessInfo.email}
                </a>
              </li>
              <li className='flex items-center gap-2 text-gray-300 text-sm'>
                <Clock size={16} className='flex-shrink-0' />
                {t('footer.available')}
              </li>
            </ul>
          </div>

          {/* Certificações */}
          <div>
            <h4 className='text-lg font-semibold mb-4'>{t('footer.certifications')}</h4>
            <div className='space-y-3'>
              <div className='flex items-center gap-3'>
                <Shield className='text-secondary' size={24} />
                <div>
                  <p className='font-medium'>{t('footer.insurance')}</p>
                  <p className='text-xs text-gray-400'>
                    {t('footer.insuranceDesc')}
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <Award className='text-secondary' size={24} />
              </div>
              <div className='flex items-center gap-3'>
                <Car className='text-secondary' size={24} />
                <div>
                  <p className='font-medium'>{t('footer.premiumVehicles')}</p>
                  <p className='text-xs text-gray-400'>{t('footer.vehiclesDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-gray-800'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex flex-col md:flex-row justify-between items-center text-sm text-gray-400'>
            <p>
              © {currentYear} Go Portugal Tours. {t('footer.rights')}
            </p>
            <div className='flex gap-6 mt-2 md:mt-0'>
              <Link href='#' className='hover:text-secondary transition-colors'>
                {t('footer.privacyPolicy')}
              </Link>
              <Link href='#' className='hover:text-secondary transition-colors'>
                {t('footer.termsConditions')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;