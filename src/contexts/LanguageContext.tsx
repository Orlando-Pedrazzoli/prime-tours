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
    
    // Services Section
    'services.whyChoose': 'Porquê Escolher os',
    'services.ourServices': 'Nossos Serviços',
    'services.subtitle': 'Oferecemos uma experiência de turismo premium com atenção aos mínimos detalhes',
    
    // Main Services Cards
    'services.personalizedTours': 'Tours Personalizados',
    'services.personalizedToursDesc': 'Roteiros exclusivos adaptados aos seus interesses, ritmo e preferências pessoais',
    'services.guaranteedSafety': 'Segurança Garantida',
    'services.guaranteedSafetyDesc': 'Seguro completo, veículos inspecionados e motorista-guia certificado',
    'services.premiumService': 'Atendimento Premium',
    'services.premiumServiceDesc': 'Serviço atencioso e dedicado do início ao fim da sua experiência',
    
    // Why Choose Us Items
    'services.localExperience': 'Experiência Local',
    'services.localExperienceDesc': 'Conhecimento profundo de Portugal, suas histórias e segredos',
    'services.uniqueMoments': 'Momentos Únicos',
    'services.uniqueMomentsDesc': 'Criamos experiências memoráveis que vão além do turismo convencional',
    'services.transparentPricing': 'Preços Transparentes',
    'services.transparentPricingDesc': 'Sem taxas ocultas, tudo incluído no preço anunciado',
    'services.support247': 'Suporte 24/7',
    'services.support247Desc': 'Estamos sempre disponíveis para ajudar antes, durante e após o tour',
    
    // Portuguese Experience
    'services.portugueseExperience': 'Uma Experiência Verdadeiramente Portuguesa',
    'services.portugueseExperienceDesc': 'Mais do que um simples transporte, oferecemos uma jornada cultural através de Portugal. Cada tour é uma oportunidade de mergulhar na história, gastronomia e tradições locais.',
    'services.satisfaction': 'Satisfação',
    'services.guaranteed': 'Garantida',
    
    // Call to Action
    'services.readyExperience': 'Pronto para uma experiência inesquecível?',
    'services.readyExperienceDesc': 'Deixe-nos criar o tour perfeito para si. Cada detalhe será pensado para tornar a sua viagem única e memorável.',
    'services.viewAvailableTours': 'Ver Tours Disponíveis',
    'services.requestCustomTour': 'Solicitar Tour Personalizado',
    
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
    
    // Services Section
    'services.whyChoose': 'Why Choose',
    'services.ourServices': 'Our Services',
    'services.subtitle': 'We offer a premium tourism experience with attention to the smallest details',
    
    // Main Services Cards
    'services.personalizedTours': 'Personalized Tours',
    'services.personalizedToursDesc': 'Exclusive itineraries adapted to your interests, pace and personal preferences',
    'services.guaranteedSafety': 'Guaranteed Safety',
    'services.guaranteedSafetyDesc': 'Complete insurance, inspected vehicles and certified driver-guide',
    'services.premiumService': 'Premium Service',
    'services.premiumServiceDesc': 'Attentive and dedicated service from start to finish of your experience',
    
    // Why Choose Us Items
    'services.localExperience': 'Local Experience',
    'services.localExperienceDesc': 'Deep knowledge of Portugal, its stories and secrets',
    'services.uniqueMoments': 'Unique Moments',
    'services.uniqueMomentsDesc': 'We create memorable experiences that go beyond conventional tourism',
    'services.transparentPricing': 'Transparent Pricing',
    'services.transparentPricingDesc': 'No hidden fees, everything included in the advertised price',
    'services.support247': '24/7 Support',
    'services.support247Desc': 'We are always available to help before, during and after the tour',
    
    // Portuguese Experience
    'services.portugueseExperience': 'A Truly Portuguese Experience',
    'services.portugueseExperienceDesc': 'More than just transportation, we offer a cultural journey through Portugal. Each tour is an opportunity to immerse yourself in local history, gastronomy and traditions.',
    'services.satisfaction': 'Satisfaction',
    'services.guaranteed': 'Guaranteed',
    
    // Call to Action
    'services.readyExperience': 'Ready for an unforgettable experience?',
    'services.readyExperienceDesc': 'Let us create the perfect tour for you. Every detail will be designed to make your trip unique and memorable.',
    'services.viewAvailableTours': 'View Available Tours',
    'services.requestCustomTour': 'Request Custom Tour',
    
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