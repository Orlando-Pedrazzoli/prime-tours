'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { businessInfo } from '@/data/tours';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  // Hook de internacionalização
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Detectar seção ativa (apenas na página principal)
      if (pathname === '/') {
        const sections = [
          'inicio',
          'tours',
          'sobre',
          'galeria',
          'depoimentos',
          'contacto',
        ];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Fechar menu mobile ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuOpen && !(e.target as Element).closest('nav')) {
        setIsMenuOpen(false);
      }
      if (isLangMenuOpen && !(e.target as Element).closest('.lang-selector')) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen, isLangMenuOpen]);

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
  ];

  const navItems = [
    { href: '#inicio', label: t('nav.home') },
    { href: '#tours', label: t('nav.tours') },
    { href: '#sobre', label: t('nav.about') },
    { href: '#galeria', label: t('nav.gallery') },
    { href: '#depoimentos', label: t('nav.testimonials') },
    { href: '#contacto', label: t('nav.contact') },
  ];

  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');

    // Verificar se estamos na página principal
    if (pathname === '/') {
      // Estamos na página principal, fazer scroll normal
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
      setIsMenuOpen(false);
    } else {
      // Estamos em outra página, redirecionar para homepage com hash
      setIsMenuOpen(false);
      router.push(`/${href}`);
    }
  };

  const handleLanguageChange = (lang: 'pt' | 'en') => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-3'
        }`}
      >
        {/* Main Navigation */}
        <nav className='container mx-auto px-4'>
          <div className='flex justify-between items-center h-16 lg:h-20'>
            {/* Logo */}
            <Link href='/' className='flex items-center group'>
              <div className='flex flex-col'>
                <motion.div
                  className='flex items-center gap-2'
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <div
                    className='w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden shadow-lg 
     ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all'
                  >
                    <img
                      src='/flag.png'
                      alt='Bandeira de Portugal'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div>
                    <span
                      className={`text-lg lg:text-2xl font-bold transition-all ${
                        isScrolled
                          ? 'bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent'
                          : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'
                      }`}
                    >
                      Go Portugal Tours
                    </span>
                    <p
                      className={`text-[10px] lg:text-xs transition-colors ${
                        isScrolled
                          ? 'text-gray-600'
                          : 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]'
                      } group-hover:text-primary`}
                    >
                      Portugal Premium Experience
                    </p>
                  </div>
                </motion.div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center gap-1'>
              {navItems.map(item => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                      isActive && pathname === '/'
                        ? isScrolled
                          ? 'text-primary'
                          : 'text-white font-bold'
                        : isScrolled
                        ? 'text-gray-700 hover:text-primary'
                        : 'text-white/90 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {isActive && pathname === '/' && (
                      <motion.div
                        layoutId='activeSection'
                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                          isScrolled
                            ? 'bg-gradient-to-r from-primary to-accent'
                            : 'bg-white'
                        }`}
                        initial={false}
                        transition={{
                          type: 'spring',
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
              
              {/* Language Selector - Desktop */}
              <div className='relative ml-4 lang-selector'>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLangMenuOpen(!isLangMenuOpen);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    isScrolled
                      ? 'hover:bg-gray-100 text-gray-700'
                      : 'hover:bg-white/20 text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe size={18} />
                  <span className='text-sm font-medium'>
                    {languages.find(l => l.code === language)?.flag}
                  </span>
                </motion.button>
                
                {/* Language Dropdown */}
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className='absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden'
                    >
                      {languages.map(lang => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.code as 'pt' | 'en')}
                          className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors ${
                            language === lang.code ? 'bg-primary/10' : ''
                          }`}
                        >
                          <span className='text-xl'>{lang.flag}</span>
                          <span className='font-medium'>{lang.name}</span>
                          {language === lang.code && (
                            <span className='ml-auto text-primary'>✓</span>
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size='lg'
                  className='ml-4 bg-gradient-to-r from-accent to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white shadow-lg hover:shadow-xl transition-all duration-300'
                  onClick={() => scrollToSection('#contacto')}
                >
                  {t('nav.bookNow')}
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className='flex items-center gap-2 lg:hidden'>
              {/* Language Selector - Mobile */}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLangMenuOpen(!isLangMenuOpen);
                }}
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'
                }`}
              >
                <span className='text-xl'>
                  {languages.find(l => l.code === language)?.flag}
                </span>
              </motion.button>

              <motion.button
                className={`p-2 rounded-lg transition-colors ${
                  isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'
                }`}
                onClick={e => {
                  e.stopPropagation();
                  setIsMenuOpen(!isMenuOpen);
                }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode='wait'>
                  {isMenuOpen ? (
                    <motion.div
                      key='close'
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X
                        size={32}
                        className={isScrolled ? 'text-primary' : 'text-white'}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key='menu'
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu
                        size={32}
                        className={isScrolled ? 'text-primary' : 'text-white'}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>

        {/* Mobile Language Dropdown */}
        <AnimatePresence>
          {isLangMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='lg:hidden bg-white shadow-lg border-t'
            >
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code as 'pt' | 'en')}
                  className={`w-full flex items-center gap-3 px-6 py-3 hover:bg-gray-100 transition-colors ${
                    language === lang.code ? 'bg-primary/10' : ''
                  }`}
                >
                  <span className='text-xl'>{lang.flag}</span>
                  <span className='font-medium'>{lang.name}</span>
                  {language === lang.code && (
                    <span className='ml-auto text-primary'>✓</span>
                  )}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black/50 z-40 lg:hidden'
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className='fixed right-0 top-0 bottom-0 w-80 bg-white z-50 lg:hidden shadow-2xl overflow-y-auto'
            >
              <div className='p-6'>
                {/* Close Button */}
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className='absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors'
                >
                  <X size={24} className='text-gray-600' />
                </button>

                {/* Logo */}
                <div className='mb-8 pt-2'>
                  <div className='flex items-center gap-3'>
                    <div className='w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg'>
                      P
                    </div>
                    <div>
                      <h3 className='text-xl font-bold text-primary'>
                        Go Portugal Tours
                      </h3>
                      <p className='text-xs text-gray-600'>Portugal Premium</p>
                    </div>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className='flex flex-col gap-2 mb-8'>
                  {navItems.map((item, index) => {
                    const isActive =
                      activeSection === item.href.replace('#', '') &&
                      pathname === '/';
                    return (
                      <motion.button
                        key={item.href}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => scrollToSection(item.href)}
                        className={`text-left px-4 py-3 rounded-lg font-medium transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md'
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        {item.label}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Contact Info */}
                <div className='border-t pt-6 space-y-4'>
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className='flex items-center gap-3 text-gray-700 hover:text-primary transition-colors'
                  >
                    <div className='w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center'>
                      <Phone size={18} className='text-primary' />
                    </div>
                    <div>
                      <p className='text-xs text-gray-500'>{t('contact.phone')}</p>
                      <p className='font-medium'>{businessInfo.phone}</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className='flex items-center gap-3 text-gray-700 hover:text-primary transition-colors'
                  >
                    <div className='w-10 h-10 bg-primary-50 rounded-full flex items-center justify-center'>
                      <Mail size={18} className='text-primary' />
                    </div>
                    <div>
                      <p className='text-xs text-gray-500'>{t('contact.email')}</p>
                      <p className='font-medium text-sm break-all'>
                        {businessInfo.email}
                      </p>
                    </div>
                  </a>
                </div>

                {/* CTA Button */}
                <Button
                  size='lg'
                  className='w-full mt-6 bg-gradient-to-r from-accent to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white shadow-lg'
                  onClick={() => {
                    scrollToSection('#contacto');
                    setIsMenuOpen(false);
                  }}
                >
                  {t('nav.bookNow')}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;