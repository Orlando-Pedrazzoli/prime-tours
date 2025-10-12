// Dados dos Tours e Informações do Negócio

export const businessInfo = {
  name: 'Premiere Tours Portugal',
  tagline: 'Experiências Exclusivas de Turismo Privado',
  description:
    'Transporte privado de passageiros e passeios guiados em Portugal',
  location: 'Oeiras, Lisboa',
  capacity: 4,
  vehicles: ['Hyundai i30 SW', 'Toyota Yaris Cross'],
  email: 'pedrazzoliorlando@gmail.com',
  phone: '+351 912 164 220',
  whatsapp: '351912164220',

  included: [
    'Veículos Hyundai i30 SW ou Toyota Yaris Cross de alto conforto',
    'Motorista-guia profissional certificado',
    'WiFi e águas a bordo',
    'Seguro de acidentes e responsabilidade civil',
    'Todos os impostos incluídos',
  ],

  notIncluded: [
    'Bilhetes de entrada em monumentos',
    'Refeições e alojamento dos clientes',
  ],
};

export const tours = [
  {
    id: 'lisboa-tour',
    slug: 'lisboa-tour-privado-dia-completo',
    title: 'Lisboa - Tour Privado Dia Completo',
    subtitle: 'A Cidade das Sete Colinas',
    duration: 'Até 8 horas',
    suggestedTime: '9:00',
    price: {
      total: 270,
      perPerson: 68,
      maxPeople: 4,
    },
    description:
      'Explore a beleza de Lisboa ao seu próprio ritmo com um tour privado de dia completo. Descubra a rica história, cultura vibrante e joias escondidas da capital portuguesa.',
    longDescription: `Lisboa tem vistas incríveis e monumentos impressionantes. Tem um elétrico amarelo que percorre as ruas estreitas e vielas da cidade velha desde o início do século XX. Lisboa tem calçadas de pedra inalteradas há séculos. Tem bairros antigos, tabernas famosas e multidões esperando por pãezinhos e pastéis de nata. À noite, entre muitas outras coisas, pode ouvir Fado e as guitarras portuguesas. O rio Tejo rodeia Lisboa e proporciona um estuário animado onde os golfinhos nadam.`,
    highlights: [
      'Parque das Nações - Arquitetura moderna do Expo 98',
      'Alfama - Bairro mais antigo, miradouros, Fado',
      'Baixa Pombalina - Praça do Comércio, Rossio',
      'Parque Eduardo VII - Vista panorâmica',
      'Ponte 25 de Abril e Cristo Rei',
      'Belém - Mosteiro dos Jerónimos, Torre de Belém, Pastéis',
      'Chiado e Bairro Alto - Zonas boémias',
    ],
    image:
      'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
      'https://images.unsplash.com/photo-1513735492246-483525079686?w=800',
      'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
      'https://images.unsplash.com/photo-1573479667972-ea82d7c0104e?w=800',
    ],
    itinerary: [
      {
        time: '9:00',
        location: 'Parque das Nações (Expo 98)',
        description: 'Arquitetura moderna, Oceanário opcional',
      },
      {
        time: '10:30',
        location: 'Alfama',
        description:
          'Bairro mais antigo, miradouros, Castelo de São Jorge opcional',
      },
      {
        time: '12:00',
        location: 'Baixa Pombalina',
        description: 'Praça do Comércio, Rossio, Arco da Rua Augusta',
      },
      {
        time: '13:00',
        location: 'Almoço',
        description: 'Tempo livre para almoço (não incluído)',
      },
      {
        time: '14:30',
        location: 'Parque Eduardo VII',
        description: 'Vista panorâmica da cidade',
      },
      {
        time: '15:00',
        location: 'Ponte 25 de Abril e Cristo Rei',
        description: 'Vistas espetaculares',
      },
      {
        time: '16:00',
        location: 'Belém',
        description: 'Mosteiro dos Jerónimos, Torre de Belém, Pastéis de Belém',
      },
      {
        time: '17:30',
        location: 'Chiado e Bairro Alto',
        description: 'Zonas boémias e artísticas',
      },
    ],
    featured: true,
  },
  {
    id: 'sintra-cascais',
    slug: 'sintra-cascais-costa-estoril',
    title: 'Sintra, Cascais e Costa do Estoril',
    subtitle: 'Palácios de Conto de Fadas e Costa Atlântica',
    duration: 'Até 8 horas',
    suggestedTime: '8:30',
    price: {
      total: 280,
      perPerson: 70,
      maxPeople: 4,
    },
    description:
      'Embarque numa aventura inesquecível que mostra os cantos mais encantadores de Portugal, desde palácios de conto de fadas até à costa atlântica deslumbrante.',
    longDescription: `Este tour combina a magia dos castelos portugueses desde os tempos medievais até o período do romantismo. Sintra, Património Mundial da UNESCO e capital do romantismo em Portugal, tem abrigado os palácios de verão da família real desde o século XIV.`,
    highlights: [
      'Palácio de Queluz - O "Versalhes Português"',
      'Sintra - Centro histórico, palácios, doces tradicionais',
      'Cabo da Roca - Ponto mais ocidental da Europa',
      'Boca do Inferno - Cratera rochosa no Atlântico',
      'Cascais - Vila de pescadores cosmopolita',
      'Costa do Estoril - Cassino que inspirou James Bond',
    ],
    image: 'https://images.unsplash.com/photo-1562281302-809108fd533c?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1562281302-809108fd533c?w=800',
      'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
      'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=800',
      'https://images.unsplash.com/photo-1567177173829-eedf4f72793e?w=800',
    ],
    itinerary: [
      {
        time: '8:30',
        location: 'Partida',
        description: 'Recolha no local designado',
      },
      {
        time: '9:00',
        location: 'Palácio de Queluz',
        description: 'Visita opcional ao "Versalhes Português"',
      },
      {
        time: '10:00',
        location: 'Sintra',
        description: 'Centro histórico, visita a um palácio à escolha',
      },
      {
        time: '13:00',
        location: 'Almoço',
        description: 'Tempo para almoço em Sintra (não incluído)',
      },
      {
        time: '14:30',
        location: 'Cabo da Roca',
        description: 'Ponto mais ocidental da Europa continental',
      },
      {
        time: '15:30',
        location: 'Boca do Inferno',
        description: 'Formação rochosa impressionante',
      },
      {
        time: '16:00',
        location: 'Cascais',
        description: 'Tempo livre na baía',
      },
      {
        time: '17:00',
        location: 'Costa do Estoril',
        description: 'Regresso por Estoril com vista para o mar',
      },
    ],
    featured: true,
  },
  {
    id: 'fatima-batalha',
    slug: 'fatima-batalha-nazare-obidos',
    title: 'Fátima, Batalha, Nazaré e Óbidos',
    subtitle: 'Espiritualidade, História e Beleza Costeira',
    duration: 'Até 8 horas',
    suggestedTime: '9:00',
    price: {
      total: 350,
      perPerson: 88,
      maxPeople: 4,
    },
    description:
      'Experimente o melhor de Portugal num tour privado que combina espiritualidade, história e beleza costeira de tirar o fôlego.',
    longDescription: `Uma jornada através da fé, história e tradições de Portugal. Visite o Santuário de Fátima, um dos maiores centros de peregrinação do mundo, o majestoso Mosteiro da Batalha, as ondas gigantes da Nazaré e a encantadora vila medieval de Óbidos.`,
    highlights: [
      'Fátima - Santuário Mariano, Basílica, Capela das Aparições',
      'Valinhos - Vila dos três pastorinhos',
      'Batalha - Mosteiro Património Mundial UNESCO',
      'Nazaré - Vila piscatória famosa pelas ondas gigantes',
      'Óbidos - Vila medieval murada, Ginja de Óbidos',
    ],
    image: 'https://images.unsplash.com/photo-1555881018-9bbb4a7be8f1?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1555881018-9bbb4a7be8f1?w=800',
      'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800',
      'https://images.unsplash.com/photo-1577551926752-4863c480ba97?w=800',
      'https://images.unsplash.com/photo-1601296160691-b34a86938874?w=800',
    ],
    itinerary: [
      {
        time: '9:00',
        location: 'Partida',
        description: 'Recolha no local designado',
      },
      {
        time: '10:00',
        location: 'Fátima',
        description: 'Santuário, Basílica, Capela das Aparições',
      },
      {
        time: '11:30',
        location: 'Valinhos',
        description: 'Casas dos três pastorinhos',
      },
      {
        time: '12:30',
        location: 'Batalha',
        description: 'Mosteiro da Batalha (UNESCO)',
      },
      {
        time: '14:00',
        location: 'Almoço',
        description: 'Tempo para almoço (não incluído)',
      },
      {
        time: '15:30',
        location: 'Nazaré',
        description: 'Vista das ondas gigantes, Praia do Norte',
      },
      {
        time: '16:30',
        location: 'Óbidos',
        description: 'Vila medieval, muralhas, Ginja',
      },
      {
        time: '17:30',
        location: 'Regresso',
        description: 'Viagem de volta',
      },
    ],
    featured: false,
  },
  {
    id: 'sintra-obidos',
    slug: 'sintra-obidos-tour-privado',
    title: 'Sintra e Óbidos - Tour Privado',
    subtitle: 'Do Romantismo ao Medieval',
    duration: 'Até 8 horas',
    suggestedTime: '9:00',
    price: {
      total: 340,
      perPerson: 85,
      maxPeople: 4,
    },
    description:
      'Este tour leva-o numa descoberta da magia dos castelos portugueses desde os tempos medievais até ao período do romantismo.',
    longDescription: `Sintra será a primeira área a visitar. Um local Património Mundial da UNESCO, a capital do romantismo em Portugal, a apenas 25 km de Lisboa, Sintra tem abrigado os palácios de verão da família real desde o século XIV. Cem quilómetros a norte de Sintra, o nosso tour chegará a Óbidos, uma encantadora vila medieval dentro de muralhas de defesa.`,
    highlights: [
      'Sintra - Centro histórico e palácios reais',
      'Travesseiros e Queijadas tradicionais',
      'Palácio Nacional, Palácio da Pena ou Quinta da Regaleira',
      'Óbidos - Vila medieval murada',
      'Ginja de Óbidos em copo de chocolate',
      'Ruas de pedra e casas caiadas',
    ],
    image:
      'https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?w=800',
      'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800',
      'https://images.unsplash.com/photo-1577551926752-4863c480ba97?w=800',
      'https://images.unsplash.com/photo-1562281302-809108fd533c?w=800',
    ],
    itinerary: [
      {
        time: '9:00',
        location: 'Partida',
        description: 'Recolha no local designado',
      },
      {
        time: '10:00',
        location: 'Sintra',
        description: 'Centro histórico, pastelaria Piriquita',
      },
      {
        time: '10:30',
        location: 'Palácio',
        description: 'Visita a um palácio à escolha (opcional)',
      },
      {
        time: '13:00',
        location: 'Almoço',
        description: 'Tempo para almoço em Sintra (não incluído)',
      },
      {
        time: '14:30',
        location: 'Viagem para Óbidos',
        description: 'Percurso cénico até à vila medieval',
      },
      {
        time: '15:30',
        location: 'Óbidos',
        description: 'Exploração da vila medieval',
      },
      {
        time: '17:00',
        location: 'Ginja de Óbidos',
        description: 'Degustação do licor tradicional',
      },
      {
        time: '17:30',
        location: 'Regresso',
        description: 'Viagem de volta',
      },
    ],
    featured: false,
  },
  {
    id: 'fatima-half-day',
    slug: 'fatima-meio-dia-tour-privado',
    title: 'Fátima - Tour Privado Meio Dia',
    subtitle: 'Santuário Mariano de Portugal',
    duration: 'Até 5 horas',
    suggestedTime: '9:00',
    price: {
      total: 320,
      perPerson: 80,
      maxPeople: 4,
    },
    description:
      'Visite o famoso Santuário de Fátima, um dos maiores centros de peregrinação do mundo, construído onde a Virgem Maria apareceu a três pastores em 1917.',
    longDescription: `Partindo de Lisboa em direção ao norte, chegamos a Fátima onde visitaremos o famoso Santuário. É um dos maiores centros de peregrinação do mundo, construído em torno do local onde, em 1917, a Virgem Maria apareceu a três pastores. Após visitar a Basílica onde os três videntes estão sepultados, a capela das aparições e a moderna Igreja da Santíssima Trindade, teremos algum tempo livre para rezar ou assistir à celebração da missa (opcional).`,
    highlights: [
      'Capela das Aparições',
      'Basílica de Nossa Senhora do Rosário',
      'Basílica da Santíssima Trindade',
      'Túmulos de Lúcia, Jacinta e Francisco',
      'Valinhos - Casas dos pastorinhos',
      'Tempo para oração ou missa',
    ],
    image: 'https://images.unsplash.com/photo-1555881018-9bbb4a7be8f1?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1555881018-9bbb4a7be8f1?w=800',
      'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=800',
      'https://images.unsplash.com/photo-1577086664693-894d8406334a?w=800',
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800',
    ],
    itinerary: [
      {
        time: '9:00',
        location: 'Partida',
        description: 'Recolha no local designado',
      },
      {
        time: '10:30',
        location: 'Santuário de Fátima',
        description: 'Capela das Aparições, Basílica',
      },
      {
        time: '11:30',
        location: 'Igreja da Santíssima Trindade',
        description: 'Visita à igreja moderna',
      },
      {
        time: '12:00',
        location: 'Tempo livre',
        description: 'Oração, missa ou compras religiosas (opcional)',
      },
      {
        time: '12:30',
        location: 'Valinhos',
        description: 'Casas dos três pastorinhos',
      },
      {
        time: '13:30',
        location: 'Regresso',
        description: 'Viagem de volta',
      },
    ],
    featured: false,
  },
  {
    id: 'sintra-half-day',
    slug: 'sintra-meio-dia-tour-privado',
    title: 'Sintra - Tour Privado Meio Dia',
    subtitle: 'Capital do Romantismo',
    duration: 'Até 4 horas',
    suggestedTime: '9:00 ou 14:00',
    price: {
      total: 300,
      perPerson: 75,
      maxPeople: 4,
    },
    description:
      'Este tour desvenda a magia deste lugar único na terra. Sintra leva-nos a palácios e castelos encantados, vistas deslumbrantes, grutas misteriosas e trilhos secretos.',
    longDescription: `O microclima de Sintra é a chave para a exuberância da vegetação luxuriante muitas vezes elogiada por autores românticos e filantropos do século XIX, nomeadamente William Beckford, Lord Byron ou Francis Cook. Caminharemos pelas antigas ruas de pedra com lojas acolhedoras que exibem o artesanato local e as pastelarias onde pode provar os deliciosos Travesseiros e Queijadas.`,
    highlights: [
      'Centro histórico de Sintra',
      'Pastelaria Piriquita - Travesseiros e Queijadas',
      'Opção de visita a um palácio',
      'Boca do Inferno - Cratera rochosa',
      'Baía de Cascais',
      'Estoril e o famoso Casino',
    ],
    image:
      'https://images.unsplash.com/photo-1588863167952-21c6a34b0d4e?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1588863167952-21c6a34b0d4e?w=800',
      'https://images.unsplash.com/photo-1562281302-809108fd533c?w=800',
      'https://images.unsplash.com/photo-1567177173829-eedf4f72793e?w=800',
      'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
    ],
    itinerary: [
      {
        time: '9:00',
        location: 'Partida',
        description: 'Recolha no local designado',
      },
      {
        time: '9:30',
        location: 'Sintra',
        description: 'Centro histórico, ruas de pedra',
      },
      {
        time: '10:00',
        location: 'Palácio (opcional)',
        description: 'Visita a um palácio à escolha',
      },
      {
        time: '11:00',
        location: 'Boca do Inferno',
        description: 'Paragem para fotos',
      },
      {
        time: '11:30',
        location: 'Cascais',
        description: 'Tempo livre na baía',
      },
      {
        time: '12:30',
        location: 'Costa do Estoril',
        description: 'Regresso pela costa',
      },
      {
        time: '13:00',
        location: 'Chegada',
        description: 'Fim do tour',
      },
    ],
    featured: false,
  },
  {
    id: 'fado-dinner',
    slug: 'jantar-fado-transporte-privado',
    title: 'Jantar com Fado e Transporte Privado',
    subtitle: 'A Alma de Lisboa numa Noite',
    duration: 'Até 4 horas',
    suggestedTime: '19:00',
    price: {
      total: 500,
      perPerson: 125,
      maxPeople: 4,
    },
    description:
      'O Fado é a expressão noturna de Lisboa. Neste tour, ouviremos esta música única, com tons chorosos tocados por guitarras portuguesas.',
    longDescription: `O Fado, eleito Património Imaterial da Humanidade, é mais do que apenas um estilo musical, é o som da alma portuguesa. Alfama é o bairro onde nasceu o Fado. É aqui que começamos. Vamos ouvir o verdadeiro Fado de Lisboa, acompanhado de uma refeição tradicional com boa comida e vinho português.`,
    highlights: [
      'Jantar tradicional português incluído',
      'Espetáculo de Fado ao vivo',
      'Vista panorâmica de Alfama iluminada',
      'Baixa Pombalina à noite',
      'Avenida da Liberdade iluminada',
      'Parque Eduardo VII com vista noturna',
    ],
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800',
      'https://images.unsplash.com/photo-1555881018-9bbb4a7be8f1?w=800',
      'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
      'https://images.unsplash.com/photo-1513735492246-483525079686?w=800',
    ],
    itinerary: [
      {
        time: '19:00',
        location: 'Partida',
        description: 'Recolha no hotel/local designado',
      },
      {
        time: '19:30',
        location: 'Alfama',
        description: 'Vista panorâmica do bairro iluminado',
      },
      {
        time: '20:00',
        location: 'Casa de Fado',
        description: 'Jantar e espetáculo de Fado',
      },
      {
        time: '22:00',
        location: 'Tour noturno',
        description: 'Baixa Pombalina iluminada',
      },
      {
        time: '22:30',
        location: 'Parque Eduardo VII',
        description: 'Vista noturna de Lisboa',
      },
      {
        time: '23:00',
        location: 'Regresso',
        description: 'Transporte de volta ao hotel',
      },
    ],
    featured: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Ana Silva',
    location: 'Brasil',
    rating: 5,
    text: 'Experiência incrível! O Pedro é um guia fantástico, conhece todos os melhores lugares e conta histórias fascinantes sobre Portugal. Super recomendo!',
    tour: 'Lisboa - Tour Privado',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
  },
  {
    id: 2,
    name: 'John Williams',
    location: 'Estados Unidos',
    rating: 5,
    text: "Best tour we've had in Europe! Pedro made our day unforgettable with his knowledge and friendliness. The vehicles are very comfortable.",
    tour: 'Sintra & Cascais',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
  },
  {
    id: 3,
    name: 'Marie Dubois',
    location: 'França',
    rating: 5,
    text: 'Un guide exceptionnel! Pedro connaît les moindres recoins du Portugal. Le tour de Fátima était très émouvant.',
    tour: 'Fátima, Batalha & Nazaré',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
  },
  {
    id: 4,
    name: 'Carlos López',
    location: 'Espanha',
    rating: 5,
    text: 'Servicio impecable. Los coches muy cómodos y Pedro es un conductor excelente. Conoce la historia de cada lugar a la perfección.',
    tour: 'Sintra & Óbidos',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
  },
];

export const faqs = [
  {
    question: 'Qual a capacidade máxima dos veículos?',
    answer:
      'Os nossos veículos têm capacidade para até 4 passageiros confortavelmente. Para grupos maiores, por favor contacte-nos para arranjos especiais.',
  },
  {
    question: 'Os preços incluem entradas em monumentos?',
    answer:
      'Não, os preços dos tours não incluem bilhetes de entrada em monumentos, museus ou palácios. Estes devem ser pagos à parte. Podemos ajudar com informações sobre preços e horários.',
  },
  {
    question: 'É possível personalizar os tours?',
    answer:
      'Sim! Todos os nossos tours são privados e podem ser personalizados de acordo com os seus interesses e preferências. Contacte-nos para criar o seu itinerário ideal.',
  },
  {
    question: 'Onde é o ponto de encontro?',
    answer:
      'Fazemos a recolha em qualquer local designado por si - hotel, aeroporto, estação de comboios ou outro local em Lisboa/Oeiras.',
  },
  {
    question: 'Qual a política de cancelamento?',
    answer:
      'Cancelamentos até 48 horas antes do tour têm reembolso total. Cancelamentos com menos de 48 horas estão sujeitos a uma taxa de 50%.',
  },
  {
    question: 'Os tours funcionam com chuva?',
    answer:
      'Sim, os tours funcionam independentemente das condições meteorológicas. Portugal tem um clima ameno e muitas atrações são interiores ou cobertas.',
  },
];

// Traduções
export const translations = {
  pt: {
    nav: {
      home: 'Início',
      tours: 'Tours',
      about: 'Sobre',
      gallery: 'Galeria',
      contact: 'Contacto',
    },
    hero: {
      title: 'Descubra Portugal de Forma Exclusiva',
      subtitle: 'Tours privados personalizados com motorista-guia certificado',
      cta: 'Reserve Agora',
      explore: 'Explorar Tours',
    },
    booking: {
      title: 'Reserve o Seu Tour',
      name: 'Nome Completo',
      email: 'Email',
      phone: 'Telefone',
      whatsapp: 'WhatsApp',
      tour: 'Selecione o Tour',
      date: 'Data Pretendida',
      passengers: 'Número de Passageiros',
      message: 'Mensagem Adicional',
      submit: 'Enviar Reserva',
      success: 'Reserva enviada com sucesso!',
      error: 'Erro ao enviar reserva. Por favor tente novamente.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      tours: 'Tours',
      about: 'About',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    hero: {
      title: 'Discover Portugal Exclusively',
      subtitle: 'Personalized private tours with certified driver-guide',
      cta: 'Book Now',
      explore: 'Explore Tours',
    },
    booking: {
      title: 'Book Your Tour',
      name: 'Full Name',
      email: 'Email',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      tour: 'Select Tour',
      date: 'Desired Date',
      passengers: 'Number of Passengers',
      message: 'Additional Message',
      submit: 'Submit Booking',
      success: 'Booking sent successfully!',
      error: 'Error sending booking. Please try again.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      tours: 'Tours',
      about: 'Acerca',
      gallery: 'Galería',
      contact: 'Contacto',
    },
    hero: {
      title: 'Descubra Portugal Exclusivamente',
      subtitle: 'Tours privados personalizados con conductor-guía certificado',
      cta: 'Reservar Ahora',
      explore: 'Explorar Tours',
    },
    booking: {
      title: 'Reserve su Tour',
      name: 'Nombre Completo',
      email: 'Email',
      phone: 'Teléfono',
      whatsapp: 'WhatsApp',
      tour: 'Seleccione el Tour',
      date: 'Fecha Deseada',
      passengers: 'Número de Pasajeros',
      message: 'Mensaje Adicional',
      submit: 'Enviar Reserva',
      success: '¡Reserva enviada con éxito!',
      error: 'Error al enviar la reserva. Por favor, inténtelo de nuevo.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      tours: 'Tours',
      about: 'À propos',
      gallery: 'Galerie',
      contact: 'Contact',
    },
    hero: {
      title: 'Découvrez le Portugal en Exclusivité',
      subtitle: 'Tours privés personnalisés avec chauffeur-guide certifié',
      cta: 'Réserver Maintenant',
      explore: 'Explorer les Tours',
    },
    booking: {
      title: 'Réservez Votre Tour',
      name: 'Nom Complet',
      email: 'Email',
      phone: 'Téléphone',
      whatsapp: 'WhatsApp',
      tour: 'Sélectionnez le Tour',
      date: 'Date Souhaitée',
      passengers: 'Nombre de Passagers',
      message: 'Message Supplémentaire',
      submit: 'Envoyer la Réservation',
      success: 'Réservation envoyée avec succès!',
      error: "Erreur lors de l'envoi de la réservation. Veuillez réessayer.",
    },
  },
};
