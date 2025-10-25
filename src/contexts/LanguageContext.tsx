'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traduções
const translations = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.tours': 'Tours',
    'nav.about': 'Sobre',
    'nav.gallery': 'Galeria',
    'nav.testimonials': 'Depoimentos',
    'nav.contact': 'Contacto',
    'nav.bookNow': 'Reservar Agora',
    
    // Hero Section
    'hero.title': 'Descubra Portugal de',
    'hero.titleHighlight': 'Forma Exclusiva',
    'hero.subtitle': 'Tours privados personalizados. Experiências únicas desde Lisboa até aos recantos mais encantadores de Portugal.',
    'hero.exploreTours': 'Explorar Tours',
    'hero.location': 'Localização',
    'hero.lisbon': 'Lisboa',
    'hero.capacity': 'Capacidade',
    'hero.upTo': 'Até 4 pessoas',
    'hero.rating': 'Avaliação',
    
    // Tours Section
    'tours.title': 'Nossos',
    'tours.titleHighlight': 'Tours Exclusivos',
    'tours.subtitle': 'Descubra Portugal com tours privados personalizados. Do histórico ao contemporâneo, do espiritual ao cultural, temos a experiência perfeita para si.',
    'tours.allTours': 'Todos os Tours',
    'tours.halfDay': 'Meio Dia',
    'tours.fullDay': 'Dia Completo',
    'tours.viewAll': 'Ver Todos os Tours',
    'tours.notFound': 'Não encontrou o tour ideal?',
    'tours.customTour': 'Criamos experiências personalizadas de acordo com os seus interesses e preferências',
    'tours.requestCustom': 'Solicitar Tour Personalizado',
    'tours.duration': 'Duração',
    'tours.from': 'A partir de',
    'tours.perPerson': 'por pessoa',
    'tours.total': 'Total',
    'tours.people': 'pessoas',
    'tours.departure': 'Partida',
    'tours.highlights': 'Destaques',
    'tours.viewDetails': 'Ver Detalhes',
    'tours.moreHighlights': 'mais destaques...',
    
    // About Section
    'about.meetYour': 'Conheça o Seu',
    'about.driver': 'Motorista',
    'about.greeting': 'Olá! Sou o Orlando, o seu motorista dedicado para descobrir Portugal de uma forma única e memorável.',
    'about.passion': 'Tenho a paixão de partilhar a beleza, história e cultura do meu país com visitantes de todo o mundo. Com mais de 8 anos de experiência em turismo premium, garanto que cada tour é uma experiência personalizada e inesquecível.',
    'about.languages': 'Falo português e inglês fluentemente, permitindo-me comunicar confortavelmente com clientes de diversas nacionalidades. O meu objetivo é não apenas levá-lo aos destinos, mas também proporcionar-lhe uma verdadeira imersão na cultura portuguesa.',
    'about.experience': 'Anos de Experiência',
    'about.knowTours': 'Conhecer os Tours',
    'about.portuguese': 'Português',
    'about.english': 'English',
    
    // Services
    'services.certified': 'Motorista Certificado',
    'services.certifiedDesc': 'Motorista profissional certificado com anos de experiência',
    'services.localKnowledge': 'Conhecimento Local',
    'services.localDesc': 'Conheço os melhores lugares, histórias e segredos de Portugal',
    'services.personalized': '100% Personalizado',
    'services.personalizedDesc': 'Tours privados adaptados aos seus interesses e preferências',
    'services.flexibility': 'Flexibilidade Total',
    'services.flexibilityDesc': 'Horários e itinerários flexíveis ao seu ritmo',
    'services.safety': 'Segurança Garantida',
    'services.safetyDesc': 'Seguro completo e veículos sempre em perfeitas condições',
    'services.premium': 'Experiência Premium',
    'services.premiumDesc': 'Serviço de excelência com atenção aos mínimos detalhes',
    
    // Contact
    'contact.phone': 'Telefone',
    'contact.email': 'Email',
    'contact.location': 'Localização',

    // Footer
    'footer.description': 'Experiências exclusivas de turismo privado em Portugal. Descubra o melhor do nosso país com conforto e segurança.',
    'footer.popularTours': 'Tours Populares',
    'footer.information': 'Informações',
    'footer.available': 'Disponível todos os dias',
    'footer.certifications': 'Certificações',
    'footer.insurance': 'Seguro Total',
    'footer.insuranceDesc': 'Acidentes e RC incluídos',
    'footer.premiumVehicles': 'Veículos Premium',
    'footer.vehiclesDesc': 'Hyundai & Toyota',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.privacyPolicy': 'Política de Privacidade',
    'footer.termsConditions': 'Termos e Condições',

    
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.tours': 'Tours',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Book Now',
    
    // Hero Section
    'hero.title': 'Discover Portugal',
    'hero.titleHighlight': 'Exclusively',
    'hero.subtitle': 'Personalized private tours. Unique experiences from Lisbon to the most charming corners of Portugal.',
    'hero.exploreTours': 'Explore Tours',
    'hero.location': 'Location',
    'hero.lisbon': 'Lisbon',
    'hero.capacity': 'Capacity',
    'hero.upTo': 'Up to 4 people',
    'hero.rating': 'Rating',
    
    // Tours Section
    'tours.title': 'Our',
    'tours.titleHighlight': 'Exclusive Tours',
    'tours.subtitle': 'Discover Portugal with personalized private tours. From historical to contemporary, from spiritual to cultural, we have the perfect experience for you.',
    'tours.allTours': 'All Tours',
    'tours.halfDay': 'Half Day',
    'tours.fullDay': 'Full Day',
    'tours.viewAll': 'View All Tours',
    'tours.notFound': "Didn't find the ideal tour?",
    'tours.customTour': 'We create personalized experiences according to your interests and preferences',
    'tours.requestCustom': 'Request Custom Tour',
    'tours.duration': 'Duration',
    'tours.from': 'From',
    'tours.perPerson': 'per person',
    'tours.total': 'Total',
    'tours.people': 'people',
    'tours.departure': 'Departure',
    'tours.highlights': 'Highlights',
    'tours.viewDetails': 'View Details',
    'tours.moreHighlights': 'more highlights...',
    
    // About Section
    'about.meetYour': 'Meet Your',
    'about.driver': 'Driver',
    'about.greeting': "Hello! I'm Orlando, your dedicated driver to discover Portugal in a unique and memorable way.",
    'about.passion': "I have a passion for sharing the beauty, history, and culture of my country with visitors from around the world. With over 8 years of experience in premium tourism, I guarantee that each tour is a personalized and unforgettable experience.",
    'about.languages': "I speak Portuguese and English fluently, allowing me to communicate comfortably with clients from various nationalities. My goal is not just to take you to destinations, but also to provide you with a true immersion in Portuguese culture.",
    'about.experience': 'Years of Experience',
    'about.knowTours': 'Discover Tours',
    'about.portuguese': 'Português',
    'about.english': 'English',
    
    // Services
    'services.certified': 'Certified Driver',
    'services.certifiedDesc': 'Professional certified driver with years of experience',
    'services.localKnowledge': 'Local Knowledge',
    'services.localDesc': 'I know the best places, stories and secrets of Portugal',
    'services.personalized': '100% Personalized',
    'services.personalizedDesc': 'Private tours adapted to your interests and preferences',
    'services.flexibility': 'Total Flexibility',
    'services.flexibilityDesc': 'Flexible schedules and itineraries at your pace',
    'services.safety': 'Guaranteed Safety',
    'services.safetyDesc': 'Complete insurance and vehicles always in perfect condition',
    'services.premium': 'Premium Experience',
    'services.premiumDesc': 'Excellence service with attention to the smallest details',
    
    // Contact
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.location': 'Location',

    // Footer
    'footer.description': 'Exclusive private tourism experiences in Portugal. Discover the best of our country with comfort and safety.',
    'footer.popularTours': 'Popular Tours',
    'footer.information': 'Information',
    'footer.available': 'Available every day',
    'footer.certifications': 'Certifications',
    'footer.insurance': 'Full Insurance',
    'footer.insuranceDesc': 'Accidents and liability included',
    'footer.premiumVehicles': 'Premium Vehicles',
    'footer.vehiclesDesc': 'Hyundai & Toyota',
    'footer.rights': 'All rights reserved.',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsConditions': 'Terms and Conditions',

    
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('pt');

  // Carregar idioma salvo no localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('siteLanguage') as Language;
    if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    } else {
      // Detectar idioma do navegador
      const browserLang = navigator.language.toLowerCase();
      const detectedLang = browserLang.startsWith('pt') ? 'pt' : 'en';
      setLanguageState(detectedLang);
    }
  }, []);

  // Salvar idioma no localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('siteLanguage', lang);
  };

  // Função de tradução
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}