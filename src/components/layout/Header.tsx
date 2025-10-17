'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { businessInfo } from '@/data/tours';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState('pt');
  const [activeSection, setActiveSection] = useState('inicio');
  const [showLangMenu, setShowLangMenu] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  const navItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#tours', label: 'Tours' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contacto', label: 'Contacto' },
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
      // Estamos em outra página (ex: tour detail), redirecionar para homepage com hash
      setIsMenuOpen(false);
      router.push(`/${href}`);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg py-2'
            : 'bg-white/95 backdrop-blur-md py-3'
        }`}
      >
        {/* Top Bar - Desktop Only */}
        <div
          className={`hidden lg:block bg-gradient-to-r from-primary via-primary-600 to-accent text-white transition-all duration-300 ${
            isScrolled ? 'py-1' : 'py-2'
          }`}
        >
          <div className='container mx-auto px-4 flex justify-between items-center text-sm'>
            <div className='flex items-center gap-6'>
              <motion.a
                href={`tel:${businessInfo.phone}`}
                className='flex items-center gap-2 hover:text-secondary transition-colors'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={14} />
                {businessInfo.phone}
              </motion.a>
              <motion.a
                href={`mailto:${businessInfo.email}`}
                className='flex items-center gap-2 hover:text-secondary transition-colors'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={14} />
                {businessInfo.email}
              </motion.a>
            </div>

            {/* Language Selector */}
            <div className='relative'>
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className='flex items-center gap-2 hover:text-secondary transition-colors'
              >
                <Globe size={14} />
                <span>{languages.find(l => l.code === currentLang)?.flag}</span>
                <span>{languages.find(l => l.code === currentLang)?.name}</span>
                <ChevronDown
                  size={14}
                  className={`transition-transform ${
                    showLangMenu ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className='absolute right-0 mt-2 bg-white rounded-lg shadow-xl py-2 min-w-[180px]'
                  >
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setShowLangMenu(false);
                        }}
                        className={`w-full px-4 py-2 text-left hover:bg-primary-50 transition-colors flex items-center gap-3 ${
                          currentLang === lang.code
                            ? 'bg-primary-50 text-primary font-semibold'
                            : 'text-gray-700'
                        }`}
                      >
                        <span className='text-xl'>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

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
                    className='w-12 h-12 rounded-full overflow-hidden shadow-lg 
     ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all'
                  >
                    <img
                      src='/flag.png'
                      alt='Bandeira de Portugal'
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div>
                    <span className='text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent'>
                      Pedrazzoli Tours
                    </span>
                    <p className='text-xs text-gray-600 group-hover:text-primary transition-colors'>
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
                        ? 'text-primary'
                        : 'text-gray-700 hover:text-primary'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {isActive && pathname === '/' && (
                      <motion.div
                        layoutId='activeSection'
                        className='absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent'
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size='lg'
                  className='ml-4 bg-gradient-to-r from-accent to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white shadow-lg hover:shadow-xl transition-all duration-300'
                  onClick={() => scrollToSection('#contacto')}
                >
                  Reservar Agora
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className='lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors'
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
                    <X size={24} className='text-primary' />
                  </motion.div>
                ) : (
                  <motion.div
                    key='menu'
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} className='text-primary' />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
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
                        Pedrazzoli Tours
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
                      <p className='text-xs text-gray-500'>Telefone</p>
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
                      <p className='text-xs text-gray-500'>Email</p>
                      <p className='font-medium text-sm break-all'>
                        {businessInfo.email}
                      </p>
                    </div>
                  </a>
                </div>

                {/* Language Selector */}
                <div className='border-t pt-6 mt-6'>
                  <p className='text-sm font-semibold text-gray-700 mb-3'>
                    Idioma
                  </p>
                  <div className='grid grid-cols-2 gap-2'>
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        onClick={() => setCurrentLang(lang.code)}
                        className={`px-3 py-2 rounded-lg border transition-all flex items-center justify-center gap-2 ${
                          currentLang === lang.code
                            ? 'bg-primary text-white border-primary'
                            : 'border-gray-300 hover:border-primary'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span className='text-sm'>
                          {lang.code.toUpperCase()}
                        </span>
                      </button>
                    ))}
                  </div>
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
                  Reservar Agora
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
