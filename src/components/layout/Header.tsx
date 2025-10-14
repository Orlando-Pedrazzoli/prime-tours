'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { businessInfo } from '@/data/tours';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState('pt');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'pt', name: 'PT', flag: '🇵🇹' },
    { code: 'en', name: 'EN', flag: '🇬🇧' },
    { code: 'es', name: 'ES', flag: '🇪🇸' },
    { code: 'fr', name: 'FR', flag: '🇫🇷' },
  ];

  const navItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#tours', label: 'Tours' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      {/* Top Bar */}
      <div className='hidden lg:block bg-primary text-white py-2'>
        <div className='container mx-auto px-4 flex justify-between items-center text-sm'>
          <div className='flex items-center gap-6'>
            <a
              href={`tel:${businessInfo.phone}`}
              className='flex items-center gap-2 hover:text-secondary transition-colors'
            >
              <Phone size={14} />
              {businessInfo.phone}
            </a>
            <a
              href={`mailto:${businessInfo.email}`}
              className='flex items-center gap-2 hover:text-secondary transition-colors'
            >
              <Mail size={14} />
              {businessInfo.email}
            </a>
          </div>
          <div className='flex items-center gap-2'>
            <Globe size={14} />
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => setCurrentLang(lang.code)}
                className={`px-2 py-1 rounded transition-all ${
                  currentLang === lang.code
                    ? 'bg-white/20 text-white'
                    : 'hover:bg-white/10'
                }`}
              >
                {lang.flag} {lang.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-20'>
          {/* Logo */}
          <Link href='/' className='flex items-center'>
            <div className='flex flex-col'>
              <span className='text-2xl font-bold text-primary'>
                Pedrazzoli Tours
              </span>
              <span className='text-xs text-gray-600'>
                Portugal Premium Experience
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex items-center gap-8'>
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className='text-gray-700 hover:text-primary font-medium transition-colors'
              >
                {item.label}
              </a>
            ))}
            <Button size='lg' className='bg-primary hover:bg-primary-700'>
              Reservar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className='lg:hidden p-2'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='lg:hidden py-4 border-t'>
            <div className='flex flex-col gap-4'>
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className='text-gray-700 hover:text-primary font-medium py-2 transition-colors'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className='pt-4 border-t'>
                <div className='flex flex-col gap-2'>
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className='flex items-center gap-2'
                  >
                    <Phone size={16} />
                    {businessInfo.phone}
                  </a>
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className='flex items-center gap-2'
                  >
                    <Mail size={16} />
                    {businessInfo.email}
                  </a>
                </div>
                <div className='flex gap-2 mt-4'>
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => setCurrentLang(lang.code)}
                      className={`px-3 py-1 rounded border ${
                        currentLang === lang.code
                          ? 'bg-primary text-white'
                          : 'border-gray-300'
                      }`}
                    >
                      {lang.flag} {lang.name}
                    </button>
                  ))}
                </div>
              </div>
              <Button
                size='lg'
                className='w-full bg-primary hover:bg-primary-700 mt-4'
              >
                Reservar Agora
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
