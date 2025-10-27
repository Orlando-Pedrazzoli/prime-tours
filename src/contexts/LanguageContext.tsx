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
    
    // About Features
    'about.certifiedDriver': 'Motorista Certificado',
    'about.certifiedDriverDesc': 'Motorista profissional certificado com anos de experiência',
    'about.localKnowledge': 'Conhecimento Local',
    'about.localKnowledgeDesc': 'Conheço os melhores lugares, histórias e segredos de Portugal',
    'about.fullyPersonalized': '100% Personalizado',
    'about.fullyPersonalizedDesc': 'Tours privados adaptados aos seus interesses e preferências',
    'about.totalFlexibility': 'Flexibilidade Total',
    'about.totalFlexibilityDesc': 'Horários e itinerários flexíveis ao seu ritmo',
    'about.guaranteedSafety': 'Segurança Garantida',
    'about.guaranteedSafetyDesc': 'Seguro completo e veículos sempre em perfeitas condições',
    'about.premiumExperience': 'Experiência Premium',
    'about.premiumExperienceDesc': 'Serviço de excelência com atenção aos mínimos detalhes',
    
    // About Vehicles
    'about.comfortSafety': 'Viaje com Conforto e Segurança',
    'about.modernVehicles': 'Veículos modernos e confortáveis para a sua experiência premium',
    'about.spaciousComfortable': 'Espaçoso e confortável para viagens longas',
    'about.compactEfficient': 'Compacto e eficiente para tours urbanos',
    
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

    // Booking Form
    'booking.title': 'Reserve o Seu',
    'booking.titleHighlight': 'Tour Privado',
    'booking.subtitle': 'Preencha o formulário abaixo e entraremos em contacto em até 24 horas',
    'booking.contactInfo': 'Informações de Contacto',
    'booking.whatsIncluded': 'O que está incluído:',
    
    // Form Labels
    'booking.fullName': 'Nome Completo',
    'booking.email': 'Email',
    'booking.phone': 'Telefone',
    'booking.whatsapp': 'WhatsApp (opcional)',
    'booking.selectTour': 'Selecione o Tour',
    'booking.desiredDate': 'Data Pretendida',
    'booking.numberOfPassengers': 'Número de Passageiros',
    'booking.additionalMessage': 'Mensagem Adicional (opcional)',
    
    // Form Placeholders
    'booking.namePlaceholder': 'O seu nome completo',
    'booking.emailPlaceholder': 'seuemail@exemplo.com',
    'booking.phonePlaceholder': '+351 xxx xxx xxx',
    'booking.whatsappPlaceholder': '+351 xxx xxx xxx',
    'booking.tourPlaceholder': 'Escolha um tour...',
    'booking.datePlaceholder': 'Selecione a data...',
    'booking.passengersPlaceholder': 'Selecione...',
    'booking.messagePlaceholder': 'Informações adicionais, pedidos especiais, etc...',
    
    // Form Options
    'booking.customTour': 'Tour Personalizado',
    'booking.person': 'pessoa',
    'booking.people': 'pessoas',
    
    // Validation Messages
    'booking.validation.nameMin': 'Nome deve ter pelo menos 2 caracteres',
    'booking.validation.emailInvalid': 'Email inválido',
    'booking.validation.phoneInvalid': 'Telefone inválido',
    'booking.validation.tourRequired': 'Por favor selecione um tour',
    'booking.validation.dateRequired': 'Por favor selecione uma data',
    'booking.validation.passengersRequired': 'Por favor indique o número de passageiros',
    
    // Form Buttons
    'booking.sending': 'A enviar...',
    'booking.sendBooking': 'Enviar Reserva',
    
    // Status Messages
    'booking.successMessage': 'Reserva enviada com sucesso! Entraremos em contacto em breve.',
    'booking.errorMessage': 'Erro ao enviar reserva. Por favor tente novamente ou contacte-nos diretamente.',
    
    // WhatsApp Message
    'booking.whatsappNewBooking': 'Nova Reserva',
    'booking.whatsappName': 'Nome',
    'booking.whatsappEmail': 'Email',
    'booking.whatsappPhone': 'Telefone',
    'booking.whatsappTour': 'Tour',
    'booking.whatsappDate': 'Data',
    'booking.whatsappPassengers': 'Passageiros',
    'booking.whatsappMessage': 'Mensagem',
    'booking.whatsappNoMessage': 'Sem mensagem',

    // FAQ Section
    'faq.title': 'Perguntas',
    'faq.titleHighlight': 'Frequentes',
    'faq.subtitle': 'Encontre respostas para as dúvidas mais comuns sobre os nossos tours privados',
    'faq.stillHaveQuestions': 'Ainda tem dúvidas?',
    'faq.contactMessage': 'Estamos aqui para ajudar! Entre em contacto connosco e responderemos a todas as suas questões.',
    'faq.sendEmail': 'Enviar Email',
    'faq.whatsapp': 'WhatsApp',

    // Footer
    'footer.description': 'Experiências exclusivas de turismo privado em Portugal. Descubra o melhor do nosso país com conforto e segurança.',
    'footer.popularTours': 'Tours Populares',
    'footer.information': 'Informações',
    'footer.available': 'Disponível todos os dias',
    'footer.certifications': 'Certificações',
    'footer.insurance': 'Seguro Completo',
    'footer.insuranceDesc': 'Acidentes e responsabilidade civil incluídos',
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
    'about.greeting': 'Hello! I am Orlando, your dedicated driver to discover Portugal in a unique and memorable way.',
    'about.passion': 'I have a passion for sharing the beauty, history and culture of my country with visitors from around the world. With over 8 years of experience in premium tourism, I guarantee that each tour is a personalized and unforgettable experience.',
    'about.languages': 'I speak Portuguese and English fluently, allowing me to communicate comfortably with clients of different nationalities. My goal is not only to take you to destinations, but also to provide you with a true immersion in Portuguese culture.',
    'about.experience': 'Years of Experience',
    'about.knowTours': 'Know the Tours',
    'about.portuguese': 'Português',
    'about.english': 'English',
    
    // About Features
    'about.certifiedDriver': 'Certified Driver',
    'about.certifiedDriverDesc': 'Certified professional driver with years of experience',
    'about.localKnowledge': 'Local Knowledge',
    'about.localKnowledgeDesc': 'I know the best places, stories and secrets of Portugal',
    'about.fullyPersonalized': '100% Personalized',
    'about.fullyPersonalizedDesc': 'Private tours adapted to your interests and preferences',
    'about.totalFlexibility': 'Total Flexibility',
    'about.totalFlexibilityDesc': 'Flexible schedules and itineraries at your pace',
    'about.guaranteedSafety': 'Guaranteed Safety',
    'about.guaranteedSafetyDesc': 'Complete insurance and vehicles always in perfect condition',
    'about.premiumExperience': 'Premium Experience',
    'about.premiumExperienceDesc': 'Excellent service with attention to the smallest details',
    
    // About Vehicles
    'about.comfortSafety': 'Travel with Comfort and Safety',
    'about.modernVehicles': 'Modern and comfortable vehicles for your premium experience',
    'about.spaciousComfortable': 'Spacious and comfortable for long trips',
    'about.compactEfficient': 'Compact and efficient for city tours',
    
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

    // Booking Form
    'booking.title': 'Book Your',
    'booking.titleHighlight': 'Private Tour',
    'booking.subtitle': 'Fill out the form below and we will contact you within 24 hours',
    'booking.contactInfo': 'Contact Information',
    'booking.whatsIncluded': "What's included:",
    
    // Form Labels
    'booking.fullName': 'Full Name',
    'booking.email': 'Email',
    'booking.phone': 'Phone',
    'booking.whatsapp': 'WhatsApp (optional)',
    'booking.selectTour': 'Select Tour',
    'booking.desiredDate': 'Desired Date',
    'booking.numberOfPassengers': 'Number of Passengers',
    'booking.additionalMessage': 'Additional Message (optional)',
    
    // Form Placeholders
    'booking.namePlaceholder': 'Your full name',
    'booking.emailPlaceholder': 'youremail@example.com',
    'booking.phonePlaceholder': '+351 xxx xxx xxx',
    'booking.whatsappPlaceholder': '+351 xxx xxx xxx',
    'booking.tourPlaceholder': 'Choose a tour...',
    'booking.datePlaceholder': 'Select date...',
    'booking.passengersPlaceholder': 'Select...',
    'booking.messagePlaceholder': 'Additional information, special requests, etc...',
    
    // Form Options
    'booking.customTour': 'Custom Tour',
    'booking.person': 'person',
    'booking.people': 'people',
    
    // Validation Messages
    'booking.validation.nameMin': 'Name must be at least 2 characters',
    'booking.validation.emailInvalid': 'Invalid email',
    'booking.validation.phoneInvalid': 'Invalid phone',
    'booking.validation.tourRequired': 'Please select a tour',
    'booking.validation.dateRequired': 'Please select a date',
    'booking.validation.passengersRequired': 'Please indicate the number of passengers',
    
    // Form Buttons
    'booking.sending': 'Sending...',
    'booking.sendBooking': 'Send Booking',
    
    // Status Messages
    'booking.successMessage': 'Booking sent successfully! We will contact you soon.',
    'booking.errorMessage': 'Error sending booking. Please try again or contact us directly.',
    
    // WhatsApp Message
    'booking.whatsappNewBooking': 'New Booking',
    'booking.whatsappName': 'Name',
    'booking.whatsappEmail': 'Email',
    'booking.whatsappPhone': 'Phone',
    'booking.whatsappTour': 'Tour',
    'booking.whatsappDate': 'Date',
    'booking.whatsappPassengers': 'Passengers',
    'booking.whatsappMessage': 'Message',
    'booking.whatsappNoMessage': 'No message',

    // FAQ Section
    'faq.title': 'Frequently',
    'faq.titleHighlight': 'Asked Questions',
    'faq.subtitle': 'Find answers to the most common questions about our private tours',
    'faq.stillHaveQuestions': 'Still have questions?',
    'faq.contactMessage': "We're here to help! Contact us and we'll answer all your questions.",
    'faq.sendEmail': 'Send Email',
    'faq.whatsapp': 'WhatsApp',

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