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
  // 1 - Tour de Lisboa
  {
    id: 'tour-de-lisboa',
    slug: 'tour-de-lisboa',
    title: 'Tour de Lisboa',
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

  // 2 - Passeio Sintra Cascais Estoril
  {
    id: 'passeio-sintra-cascais-estoril',
    slug: 'passeio-sintra-cascais-estoril',
    title: 'Passeio Sintra Cascais Estoril',
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

  // 3 - Fátima Batalha Nazaré e Óbidos
  {
    id: 'fatima-batalha-nazare-obidos',
    slug: 'fatima-batalha-nazare-obidos',
    title: 'Fátima Batalha Nazaré e Óbidos',
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
    featured: true,
  },

  // 4 - Tour Lisboa Sintra
  {
    id: 'tour-lisboa-sintra',
    slug: 'tour-lisboa-sintra',
    title: 'Tour Lisboa Sintra',
    subtitle: 'Capital e Vila Romântica',
    duration: 'Até 8 horas',
    suggestedTime: '9:00',
    price: {
      total: 290,
      perPerson: 73,
      maxPeople: 4,
    },
    description:
      'Combine o melhor de Lisboa com a magia de Sintra numa experiência única que mostra dois tesouros portugueses num só dia.',
    longDescription: `Este tour oferece a oportunidade perfeita de conhecer dois dos destinos mais emblemáticos de Portugal. Começamos pela vibrante Lisboa com seus monumentos históricos e depois seguimos para a encantadora Sintra, com seus palácios de conto de fadas.`,
    highlights: [
      'Belém - Torre de Belém e Mosteiro dos Jerónimos',
      'Padrão dos Descobrimentos e Pastéis de Belém',
      'Sintra - Vila Património Mundial UNESCO',
      'Palácio da Pena ou Palácio Nacional',
      'Centro histórico de Sintra',
      'Travesseiros e Queijadas tradicionais',
    ],
    image:
      'https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?w=800',
      'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
      'https://images.unsplash.com/photo-1562281302-809108fd533c?w=800',
      'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=800',
    ],
    itinerary: [
      {
        time: '9:00',
        location: 'Partida',
        description: 'Recolha no local designado',
      },
      {
        time: '9:30',
        location: 'Belém',
        description: 'Torre de Belém e Mosteiro dos Jerónimos',
      },
      {
        time: '11:00',
        location: 'Padrão dos Descobrimentos',
        description: 'Monument aos navegadores portugueses',
      },
      {
        time: '11:30',
        location: 'Pastéis de Belém',
        description: 'Degustação dos famosos pastéis',
      },
      {
        time: '12:30',
        location: 'Viagem para Sintra',
        description: 'Percurso cénico até Sintra',
      },
      {
        time: '13:30',
        location: 'Almoço em Sintra',
        description: 'Tempo para almoço (não incluído)',
      },
      {
        time: '15:00',
        location: 'Palácio',
        description: 'Visita a um palácio à escolha',
      },
      {
        time: '16:30',
        location: 'Centro de Sintra',
        description: 'Exploração da vila histórica',
      },
      {
        time: '17:30',
        location: 'Regresso',
        description: 'Viagem de volta',
      },
    ],
    featured: false,
  },

  // 5 - Tour Évora e Monsaraz
  {
    id: 'tour-evora-monsaraz',
    slug: 'tour-evora-monsaraz',
    title: 'Tour Évora e Monsaraz',
    subtitle: 'Alentejo Histórico e Vinhos',
    duration: 'Até 8 horas',
    suggestedTime: '9:00',
    price: {
      total: 380,
      perPerson: 95,
      maxPeople: 4,
    },
    description:
      'Descubra o coração do Alentejo com este tour que combina história romana, arquitetura medieval e os melhores vinhos da região.',
    longDescription: `Uma viagem ao Alentejo, região de vastas planícies douradas, cortiça e vinhas. Évora, cidade-museu classificada como Património Mundial da UNESCO, e Monsaraz, uma das mais belas vilas medievais de Portugal, aguardam-no nesta experiência única.`,
    highlights: [
      'Évora - Templo Romano e Capela dos Ossos',
      'Centro histórico de Évora (UNESCO)',
      'Monsaraz - Vila medieval murada',
      'Prova de vinhos do Alentejo',
      'Paisagens alentejanas únicas',
      'Gastronomia regional tradicional',
    ],
    image:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1614024672748-ba2f7b6e0b0f?w=800',
      'https://images.unsplash.com/photo-1580654712911-d7932d8491bc?w=800',
      'https://images.unsplash.com/photo-1587890146347-0c8ddfbca5fc?w=800',
    ],
    itinerary: [
      {
        time: '9:00',
        location: 'Partida',
        description: 'Recolha no local designado',
      },
      {
        time: '10:30',
        location: 'Évora',
        description: 'Chegada à cidade património UNESCO',
      },
      {
        time: '11:00',
        location: 'Templo Romano',
        description: 'Templo de Diana - vestígios romanos',
      },
      {
        time: '11:30',
        location: 'Capela dos Ossos',
        description: 'Igreja de São Francisco',
      },
      {
        time: '12:30',
        location: 'Centro histórico',
        description: 'Sé Catedral e Praça do Giraldo',
      },
      {
        time: '13:30',
        location: 'Almoço',
        description: 'Gastronomia alentejana (não incluído)',
      },
      {
        time: '15:00',
        location: 'Viagem para Monsaraz',
        description: 'Paisagens alentejanas',
      },
      {
        time: '16:00',
        location: 'Monsaraz',
        description: 'Vila medieval e vistas sobre Alqueva',
      },
      {
        time: '17:00',
        location: 'Prova de vinhos',
        description: 'Degustação de vinhos regionais',
      },
      {
        time: '18:00',
        location: 'Regresso',
        description: 'Viagem de volta',
      },
    ],
    featured: false,
  },

  // 6 - Tour Azeitão Palmela Sesimbra Arrábida Setúbal
  {
    id: 'tour-azeitao-palmela-sesimbra-arrabida-setubal',
    slug: 'tour-azeitao-palmela-sesimbra-arrabida-setubal',
    title: 'Tour Azeitão Palmela Sesimbra Arrábida Setúbal',
    subtitle: 'Península de Setúbal e Serra da Arrábida',
    duration: 'Até 8 horas',
    suggestedTime: '9:00',
    price: {
      total: 320,
      perPerson: 80,
      maxPeople: 4,
    },
    description:
      'Explore a península de Setúbal, com suas praias paradisíacas, vinhos famosos, queijos tradicionais e vistas deslumbrantes sobre o Atlântico.',
    longDescription: `A região de Setúbal oferece uma das paisagens mais diversificadas de Portugal: desde as encostas verdejantes da Serra da Arrábida até às praias de águas cristalinas. Discover os sabores únicos dos vinhos moscatel e queijos de Azeitão.`,
    highlights: [
      'Azeitão - Quintas de Moscatel e queijo fresco',
      'Palmela - Castelo com vista panorâmica',
      'Serra da Arrábida - Parque Natural',
      'Sesimbra - Vila piscatória e praia',
      'Setúbal - Centro histórico e mercado',
      'Prova de vinhos Moscatel',
    ],
    image:
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800',
      'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?w=800',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?w=800',
    ],
    itinerary: [
      {
        time: '9:00',
        location: 'Partida',
        description: 'Recolha no local designado',
      },
      {
        time: '9:45',
        location: 'Azeitão',
        description: 'Visita a quinta e prova de Moscatel',
      },
      {
        time: '11:00',
        location: 'Palmela',
        description: 'Castelo e vista panorâmica',
      },
      {
        time: '12:00',
        location: 'Serra da Arrábida',
        description: 'Parque Natural e miradouros',
      },
      {
        time: '13:00',
        location: 'Sesimbra',
        description: 'Almoço na vila piscatória (não incluído)',
      },
      {
        time: '15:00',
        location: 'Praia da Arrábida',
        description: 'Paragem na praia de águas cristalinas',
      },
      {
        time: '16:00',
        location: 'Setúbal',
        description: 'Centro histórico e Igreja de Jesus',
      },
      {
        time: '17:00',
        location: 'Mercado do Livramento',
        description: 'Um dos melhores mercados de peixe do mundo',
      },
      {
        time: '17:30',
        location: 'Regresso',
        description: 'Viagem de volta',
      },
    ],
    featured: false,
  },

  // 7 - Tour Coimbra e Porto
  {
    id: 'tour-coimbra-porto',
    slug: 'tour-coimbra-porto',
    title: 'Tour Coimbra e Porto',
    subtitle: 'Universidade Milenar e Cidade Invicta',
    duration: 'Até 10 horas',
    suggestedTime: '8:00',
    price: {
      total: 450,
      perPerson: 113,
      maxPeople: 4,
    },
    description:
      'Uma viagem épica pelo centro e norte de Portugal, visitando duas das cidades mais importantes: Coimbra universitária e o Porto histórico.',
    longDescription: `Uma das viagens mais completas por Portugal, combinando a tradição académica de Coimbra com a vibrant energia comercial do Porto. Duas cidades Património Mundial da UNESCO numa experiência única.`,
    highlights: [
      'Coimbra - Universidade mais antiga de Portugal',
      'Biblioteca Joanina - Uma das mais belas do mundo',
      'Porto - Centro histórico UNESCO',
      'Ribeira do Porto e Rio Douro',
      'Caves de Vinho do Porto em Vila Nova de Gaia',
      'Estação de São Bento e azulejos',
    ],
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?w=800',
      'https://images.unsplash.com/photo-1588863167952-21c6a34b0d4e?w=800',
    ],
    itinerary: [
      {
        time: '8:00',
        location: 'Partida',
        description: 'Recolha no local designado',
      },
      {
        time: '10:00',
        location: 'Coimbra',
        description: 'Chegada à cidade universitária',
      },
      {
        time: '10:30',
        location: 'Universidade de Coimbra',
        description: 'Biblioteca Joanina e Paço das Escolas',
      },
      {
        time: '12:00',
        location: 'Centro de Coimbra',
        description: 'Exploração do centro histórico',
      },
      {
        time: '13:00',
        location: 'Viagem para Porto',
        description: 'Percurso para o norte',
      },
      {
        time: '14:30',
        location: 'Almoço no Porto',
        description: 'Gastronomia nortenha (não incluído)',
      },
      {
        time: '16:00',
        location: 'Centro do Porto',
        description: 'Estação São Bento e Sé Catedral',
      },
      {
        time: '17:00',
        location: 'Ribeira',
        description: 'Zona histórica junto ao Douro',
      },
      {
        time: '17:30',
        location: 'Vila Nova de Gaia',
        description: 'Caves de Vinho do Porto (opcional)',
      },
      {
        time: '18:30',
        location: 'Regresso',
        description: 'Viagem de volta',
      },
    ],
    featured: false,
  },

  // 8 - Passeio a Fátima e Sintra
  {
    id: 'passeio-fatima-sintra',
    slug: 'passeio-fatima-sintra',
    title: 'Passeio a Fátima e Sintra',
    subtitle: 'Espiritualidade e Romantismo',
    duration: 'Até 8 horas',
    suggestedTime: '9:00',
    price: {
      total: 340,
      perPerson: 85,
      maxPeople: 4,
    },
    description:
      'Combine a espiritualidade de Fátima com a magia dos palácios de Sintra numa experiência única que toca a alma.',
    longDescription: `Uma jornada que combina dois dos destinos mais emblemáticos de Portugal: o santuário de Fátima, centro mundial de peregrinação, e Sintra, vila romântica com palácios de sonho.`,
    highlights: [
      'Fátima - Santuário e Basílica',
      'Capela das Aparições',
      'Valinhos - Lar dos pastorinhos',
      'Sintra - Vila Património UNESCO',
      'Palácio da Pena ou Nacional',
      'Centro histórico de Sintra',
    ],
    image: 'https://images.unsplash.com/photo-1555881018-9bbb4a7be8f1?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1555881018-9bbb4a7be8f1?w=800',
      'https://images.unsplash.com/photo-1562281302-809108fd533c?w=800',
      'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=800',
      'https://images.unsplash.com/photo-1577086664693-894d8406334a?w=800',
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
        description: 'Santuário e Capela das Aparições',
      },
      {
        time: '11:30',
        location: 'Valinhos',
        description: 'Casas dos três pastorinhos',
      },
      {
        time: '12:30',
        location: 'Viagem para Sintra',
        description: 'Percurso cénico',
      },
      {
        time: '13:30',
        location: 'Almoço',
        description: 'Tempo para almoço em Sintra (não incluído)',
      },
      {
        time: '15:00',
        location: 'Palácio',
        description: 'Visita a um palácio à escolha',
      },
      {
        time: '16:30',
        location: 'Centro de Sintra',
        description: 'Exploração da vila histórica',
      },
      {
        time: '17:30',
        location: 'Regresso',
        description: 'Viagem de volta',
      },
    ],
    featured: false,
  },

  // 9 - Passeio a Sintra e Óbidos
  {
    id: 'passeio-sintra-obidos',
    slug: 'passeio-sintra-obidos',
    title: 'Passeio a Sintra e Óbidos',
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

  // 10 - Tour Algarve Praia da Rocha Lagos Sagres
  {
    id: 'tour-algarve-praia-da-rocha-lagos-sagres',
    slug: 'tour-algarve-praia-da-rocha-lagos-sagres',
    title: 'Tour Algarve Praia da Rocha Lagos Sagres',
    subtitle: 'Costa Dourada e Fim do Mundo',
    duration: 'Até 10 horas',
    suggestedTime: '8:00',
    price: {
      total: 480,
      perPerson: 120,
      maxPeople: 4,
    },
    description:
      'Descubra o melhor do Algarve numa viagem épica pelas praias douradas, falésias espetaculares e o cabo que os navegadores chamavam "Fim do Mundo".',
    longDescription: `Uma viagem ao sul de Portugal, região famosa pelas suas praias de areias douradas e águas cristalinas. Do glamour de Portimão à história dos Descobrimentos em Sagres, este tour mostra a diversidade única do Algarve.`,
    highlights: [
      'Praia da Rocha - Uma das praias mais famosas',
      'Portimão - Cidade costeira vibrante',
      'Lagos - Centro histórico e Ponta da Piedade',
      'Sagres - Fortaleza e "Fim do Mundo"',
      'Cabo de São Vicente - Ponto mais sudoeste da Europa',
      'Falésias douradas espetaculares',
    ],
    image:
      'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?w=800',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
    ],
    itinerary: [
      {
        time: '8:00',
        location: 'Partida',
        description: 'Recolha no local designado',
      },
      {
        time: '11:00',
        location: 'Portimão',
        description: 'Chegada à cidade costeira',
      },
      {
        time: '11:30',
        location: 'Praia da Rocha',
        description: 'Praia icónica do Algarve',
      },
      {
        time: '12:30',
        location: 'Lagos',
        description: 'Centro histórico e marina',
      },
      {
        time: '13:30',
        location: 'Almoço',
        description: 'Gastronomia algarvia (não incluído)',
      },
      {
        time: '15:00',
        location: 'Ponta da Piedade',
        description: 'Falésias e grutas espetaculares',
      },
      {
        time: '16:00',
        location: 'Sagres',
        description: 'Fortaleza e vila dos descobrimentos',
      },
      {
        time: '17:00',
        location: 'Cabo de São Vicente',
        description: 'Farol e "Fim do Mundo"',
      },
      {
        time: '18:00',
        location: 'Regresso',
        description: 'Viagem de volta',
      },
    ],
    featured: false,
  },

  // 11 - Tour Fátima e Coimbra
  {
    id: 'tour-fatima-coimbra',
    slug: 'tour-fatima-coimbra',
    title: 'Tour Fátima e Coimbra',
    subtitle: 'Fé e Sabedoria',
    duration: 'Até 8 horas',
    suggestedTime: '9:00',
    price: {
      total: 370,
      perPerson: 93,
      maxPeople: 4,
    },
    description:
      'Combine a espiritualidade de Fátima com a tradição académica de Coimbra, duas cidades que representam a fé e o conhecimento.',
    longDescription: `Uma jornada que liga dois pilares da cultura portuguesa: a devoção religiosa de Fátima e a tradição universitária milenar de Coimbra. Duas experiências únicas numa só viagem.`,
    highlights: [
      'Fátima - Santuário Mariano mundial',
      'Capela das Aparições e Basílica',
      'Coimbra - Universidade mais antiga',
      'Biblioteca Joanina - Tesouro mundial',
      'Fado de Coimbra - Tradição estudantil',
      'Centro histórico de Coimbra',
    ],
    image:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1555881018-9bbb4a7be8f1?w=800',
      'https://images.unsplash.com/photo-1614024672748-ba2f7b6e0b0f?w=800',
      'https://images.unsplash.com/photo-1577086664693-894d8406334a?w=800',
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
        description: 'Santuário e Capela das Aparições',
      },
      {
        time: '11:30',
        location: 'Basílica',
        description: 'Visita às basílicas e tempo para oração',
      },
      {
        time: '12:30',
        location: 'Viagem para Coimbra',
        description: 'Percurso até à cidade universitária',
      },
      {
        time: '13:30',
        location: 'Almoço',
        description: 'Gastronomia regional (não incluído)',
      },
      {
        time: '15:00',
        location: 'Universidade de Coimbra',
        description: 'Biblioteca Joanina e Paço das Escolas',
      },
      {
        time: '16:30',
        location: 'Centro de Coimbra',
        description: 'Exploração do centro histórico',
      },
      {
        time: '17:30',
        location: 'Regresso',
        description: 'Viagem de volta',
      },
    ],
    featured: false,
  },

  // 12 - Passeio Fátima e Óbidos
  {
    id: 'passeio-fatima-obidos',
    slug: 'passeio-fatima-obidos',
    title: 'Passeio Fátima e Óbidos',
    subtitle: 'Espiritualidade e Tradição Medieval',
    duration: 'Até 7 horas',
    suggestedTime: '9:00',
    price: {
      total: 330,
      perPerson: 83,
      maxPeople: 4,
    },
    description:
      'Uma jornada espiritual que combina o fervor religioso de Fátima com o charme medieval de Óbidos.',
    longDescription: `Este tour oferece uma experiência única que combina a espiritualidade de um dos maiores santuários marianos do mundo com a atmosfera medieval preservada de uma das mais belas vilas de Portugal.`,
    highlights: [
      'Fátima - Santuário e Basílica',
      'Capela das Aparições',
      'Valinhos - Casas dos pastorinhos',
      'Óbidos - Vila medieval murada',
      'Ginja de Óbidos tradicional',
      'Artesanato e doçaria regional',
    ],
    image:
      'https://images.unsplash.com/photo-1577551926752-4863c480ba97?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1577551926752-4863c480ba97?w=800',
      'https://images.unsplash.com/photo-1555881018-9bbb4a7be8f1?w=800',
      'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800',
      'https://images.unsplash.com/photo-1577086664693-894d8406334a?w=800',
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
        description: 'Santuário e Capela das Aparições',
      },
      {
        time: '11:30',
        location: 'Valinhos',
        description: 'Casas dos três pastorinhos',
      },
      {
        time: '12:30',
        location: 'Viagem para Óbidos',
        description: 'Percurso cénico',
      },
      {
        time: '13:30',
        location: 'Almoço',
        description: 'Tempo para almoço (não incluído)',
      },
      {
        time: '15:00',
        location: 'Óbidos',
        description: 'Exploração da vila medieval',
      },
      {
        time: '16:30',
        location: 'Ginja de Óbidos',
        description: 'Degustação do licor tradicional',
      },
      {
        time: '17:00',
        location: 'Regresso',
        description: 'Viagem de volta',
      },
    ],
    featured: false,
  },

  // 13 - Tour Templários em Portugal
  {
    id: 'tour-templarios-portugal',
    slug: 'tour-templarios-portugal',
    title: 'Tour Templários em Portugal',
    subtitle: 'Mistérios e História dos Cavaleiros',
    duration: 'Até 8 horas',
    suggestedTime: '9:00',
    price: {
      total: 380,
      perPerson: 95,
      maxPeople: 4,
    },
    description:
      'Siga os passos dos misteriosos Cavaleiros Templários através dos seus monumentos mais impressionantes em Portugal.',
    longDescription: `Uma viagem fascinante pelos vestígios dos Cavaleiros Templários em Portugal, desde Tomar com o seu magnífico Convento de Cristo até aos castelos e igrejas que guardam os segredos desta ordem militar e religiosa.`,
    highlights: [
      'Tomar - Convento de Cristo (UNESCO)',
      'Charola Templária - Rotunda sagrada',
      'Janela do Capítulo - Obra-prima manuelina',
      'Almourol - Castelo templário no Tejo',
      'História dos Templários em Portugal',
      'Arquitetura militar e religiosa',
    ],
    image:
      'https://images.unsplash.com/photo-1601296160691-b34a86938874?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1601296160691-b34a86938874?w=800',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1614024672748-ba2f7b6e0b0f?w=800',
      'https://images.unsplash.com/photo-1580654712911-d7932d8491bc?w=800',
    ],
    itinerary: [
      {
        time: '9:00',
        location: 'Partida',
        description: 'Recolha no local designado',
      },
      {
        time: '10:30',
        location: 'Tomar',
        description: 'Chegada à cidade templária',
      },
      {
        time: '11:00',
        location: 'Convento de Cristo',
        description: 'Charola e claustos',
      },
      {
        time: '12:30',
        location: 'Centro de Tomar',
        description: 'Igreja de Santa Maria do Olival',
      },
      {
        time: '13:30',
        location: 'Almoço',
        description: 'Tempo para almoço (não incluído)',
      },
      {
        time: '15:00',
        location: 'Almourol',
        description: 'Castelo templário no Rio Tejo',
      },
      {
        time: '16:30',
        location: 'Dornes',
        description: 'Torre templária pentagonal',
      },
      {
        time: '17:30',
        location: 'Regresso',
        description: 'Viagem de volta',
      },
    ],
    featured: false,
  },

  // 14 - Tour Coimbra Aveiro
  {
    id: 'tour-coimbra-aveiro',
    slug: 'tour-coimbra-aveiro',
    title: 'Tour Coimbra Aveiro',
    subtitle: 'Universidade e Veneza Portuguesa',
    duration: 'Até 8 horas',
    suggestedTime: '9:00',
    price: {
      total: 360,
      perPerson: 90,
      maxPeople: 4,
    },
    description:
      'Descubra duas pérolas do centro de Portugal: a histórica Coimbra universitária e a encantadora Aveiro, conhecida como a Veneza Portuguesa.',
    longDescription: `Uma viagem que combina a tradição académica milenar de Coimbra com o charme único de Aveiro, cidade dos canais, moliceiros e ovos moles. Duas experiências distintas numa região rica em história e tradições.`,
    highlights: [
      'Coimbra - Universidade histórica',
      'Biblioteca Joanina - Tesouro bibliográfico',
      'Aveiro - "Veneza Portuguesa"',
      'Passeio de moliceiro pelos canais',
      'Ovos moles de Aveiro',
      'Costa Nova - Casas listradas',
    ],
    image:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1614024672748-ba2f7b6e0b0f?w=800',
      'https://images.unsplash.com/photo-1580654712911-d7932d8491bc?w=800',
      'https://images.unsplash.com/photo-1587890146347-0c8ddfbca5fc?w=800',
    ],
    itinerary: [
      {
        time: '9:00',
        location: 'Partida',
        description: 'Recolha no local designado',
      },
      {
        time: '10:30',
        location: 'Coimbra',
        description: 'Chegada à cidade universitária',
      },
      {
        time: '11:00',
        location: 'Universidade',
        description: 'Biblioteca Joanina e Paço das Escolas',
      },
      {
        time: '12:30',
        location: 'Centro de Coimbra',
        description: 'Exploração do centro histórico',
      },
      {
        time: '13:30',
        location: 'Viagem para Aveiro',
        description: 'Percurso até à "Veneza Portuguesa"',
      },
      {
        time: '14:30',
        location: 'Almoço em Aveiro',
        description: 'Gastronomia regional (não incluído)',
      },
      {
        time: '16:00',
        location: 'Passeio de moliceiro',
        description: 'Canais de Aveiro (opcional)',
      },
      {
        time: '17:00',
        location: 'Costa Nova',
        description: 'Casas listradas tradicionais',
      },
      {
        time: '17:30',
        location: 'Regresso',
        description: 'Viagem de volta',
      },
    ],
    featured: false,
  },

  // 15 - Passeio Porto Santiago de Compostela
  {
    id: 'passeio-porto-santiago-compostela',
    slug: 'passeio-porto-santiago-compostela',
    title: 'Passeio Porto Santiago de Compostela',
    subtitle: 'Cidade Invicta e Fim do Caminho',
    duration: 'Até 12 horas',
    suggestedTime: '7:00',
    price: {
      total: 520,
      perPerson: 130,
      maxPeople: 4,
    },
    description:
      'Uma viagem épica que atravessa fronteiras, do histórico Porto português até à mística Santiago de Compostela na Galiza.',
    longDescription: `Uma das viagens mais extraordinárias que pode fazer, cruzando a fronteira luso-espanhola para visitar dois centros históricos Património Mundial da UNESCO. Do Porto comercial e vibrante até ao destino final dos peregrinos do Caminho de Santiago.`,
    highlights: [
      'Porto - Centro histórico UNESCO',
      'Ribeira e Cais da Ribeira',
      'Vila Nova de Gaia - Caves do Porto',
      'Santiago de Compostela - Catedral',
      'Plaza del Obradoiro',
      'Fim do Caminho de Santiago',
    ],
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4?w=800',
      'https://images.unsplash.com/photo-1588863167952-21c6a34b0d4e?w=800',
    ],
    itinerary: [
      {
        time: '7:00',
        location: 'Partida',
        description: 'Recolha no local designado',
      },
      {
        time: '9:30',
        location: 'Porto',
        description: 'Chegada à Cidade Invicta',
      },
      {
        time: '10:00',
        location: 'Centro do Porto',
        description: 'Estação São Bento e Sé Catedral',
      },
      {
        time: '11:00',
        location: 'Ribeira',
        description: 'Zona histórica junto ao Douro',
      },
      {
        time: '12:00',
        location: 'Vila Nova de Gaia',
        description: 'Caves de Vinho do Porto (opcional)',
      },
      {
        time: '13:00',
        location: 'Viagem para Santiago',
        description: 'Atravessar a fronteira para Espanha',
      },
      {
        time: '15:30',
        location: 'Santiago de Compostela',
        description: 'Chegada à cidade dos peregrinos',
      },
      {
        time: '16:00',
        location: 'Catedral',
        description: 'Plaza del Obradoiro e Catedral',
      },
      {
        time: '17:30',
        location: 'Centro histórico',
        description: 'Exploração da cidade velha',
      },
      {
        time: '18:30',
        location: 'Regresso',
        description: 'Viagem de volta a Portugal',
      },
    ],
    featured: false,
  },

  // 16 - Passeio Tomar Convento de Cristo e Coimbra
  {
    id: 'passeio-tomar-convento-cristo-coimbra',
    slug: 'passeio-tomar-convento-cristo-coimbra',
    title: 'Passeio Tomar Convento de Cristo e Coimbra',
    subtitle: 'Templários e Universidade',
    duration: 'Até 8 horas',
    suggestedTime: '9:00',
    price: {
      total: 370,
      perPerson: 93,
      maxPeople: 4,
    },
    description:
      'Descobra os segredos dos Templários em Tomar e a tradição académica milenar de Coimbra numa viagem através da História de Portugal.',
    longDescription: `Uma jornada fascinante que combina os mistérios da Ordem dos Templários no magnífico Convento de Cristo de Tomar com a sabedoria acumulada ao longo de séculos na Universidade de Coimbra.`,
    highlights: [
      'Tomar - Convento de Cristo (UNESCO)',
      'Charola Templária original',
      'Janela do Capítulo manuelina',
      'Coimbra - Universidade histórica',
      'Biblioteca Joanina única',
      'Duas joias do Património Mundial',
    ],
    image:
      'https://images.unsplash.com/photo-1601296160691-b34a86938874?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1601296160691-b34a86938874?w=800',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1614024672748-ba2f7b6e0b0f?w=800',
      'https://images.unsplash.com/photo-1580654712911-d7932d8491bc?w=800',
    ],
    itinerary: [
      {
        time: '9:00',
        location: 'Partida',
        description: 'Recolha no local designado',
      },
      {
        time: '10:30',
        location: 'Tomar',
        description: 'Chegada à cidade templária',
      },
      {
        time: '11:00',
        location: 'Convento de Cristo',
        description: 'Charola, claustos e janela manuelina',
      },
      {
        time: '12:30',
        location: 'Centro de Tomar',
        description: 'Igreja de Santa Maria do Olival',
      },
      {
        time: '13:30',
        location: 'Viagem para Coimbra',
        description: 'Percurso até à cidade universitária',
      },
      {
        time: '14:30',
        location: 'Almoço',
        description: 'Gastronomia regional (não incluído)',
      },
      {
        time: '16:00',
        location: 'Universidade de Coimbra',
        description: 'Biblioteca Joanina e Paço das Escolas',
      },
      {
        time: '17:30',
        location: 'Centro de Coimbra',
        description: 'Exploração do centro histórico',
      },
      {
        time: '18:00',
        location: 'Regresso',
        description: 'Viagem de volta',
      },
    ],
    featured: false,
  },

  // 17 - Tour Fátima e Santiago de Compostela
  {
    id: 'tour-fatima-santiago-compostela',
    slug: 'tour-fatima-santiago-compostela',
    title: 'Tour Fátima e Santiago de Compostela',
    subtitle: 'Dois Grandes Santuários Ibéricos',
    duration: 'Até 12 horas',
    suggestedTime: '7:00',
    price: {
      total: 550,
      perPerson: 138,
      maxPeople: 4,
    },
    description:
      'Uma peregrinação única que une dois dos mais importantes santuários da Península Ibérica: Fátima em Portugal e Santiago de Compostela em Espanha.',
    longDescription: `Uma jornada espiritual extraordinária que conecta dois dos maiores centros de peregrinação da Europa: o Santuário de Fátima, onde a Virgem Maria apareceu aos três pastorinhos, e Santiago de Compostela, destino final dos peregrinos do Caminho.`,
    highlights: [
      'Fátima - Santuário Mariano mundial',
      'Capela das Aparições',
      'Valinhos - Casas dos pastorinhos',
      'Santiago de Compostela - Catedral',
      'Plaza del Obradoiro',
      'Duas tradições de peregrinação',
    ],
    image: 'https://images.unsplash.com/photo-1555881018-9bbb4a7be8f1?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1555881018-9bbb4a7be8f1?w=800',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
      'https://images.unsplash.com/photo-1577086664693-894d8406334a?w=800',
      'https://images.unsplash.com/photo-1588863167952-21c6a34b0d4e?w=800',
    ],
    itinerary: [
      {
        time: '7:00',
        location: 'Partida',
        description: 'Recolha no local designado',
      },
      {
        time: '8:00',
        location: 'Fátima',
        description: 'Santuário e Capela das Aparições',
      },
      {
        time: '9:30',
        location: 'Valinhos',
        description: 'Casas dos três pastorinhos',
      },
      {
        time: '10:30',
        location: 'Tempo para oração',
        description: 'Momento de recolhimento',
      },
      {
        time: '11:30',
        location: 'Viagem para Santiago',
        description: 'Atravessar Portugal e entrar em Espanha',
      },
      {
        time: '15:00',
        location: 'Santiago de Compostela',
        description: 'Chegada à cidade dos peregrinos',
      },
      {
        time: '15:30',
        location: 'Catedral',
        description: 'Plaza del Obradoiro e Catedral',
      },
      {
        time: '17:00',
        location: 'Centro histórico',
        description: 'Exploração da cidade velha',
      },
      {
        time: '18:00',
        location: 'Regresso',
        description: 'Viagem de volta a Portugal',
      },
    ],
    featured: false,
  },

  // 18 - Passeio a Sintra e Mafra
  {
    id: 'passeio-sintra-mafra',
    slug: 'passeio-sintra-mafra',
    title: 'Passeio a Sintra e Mafra',
    subtitle: 'Romantismo e Barroco Real',
    duration: 'Até 8 horas',
    suggestedTime: '9:00',
    price: {
      total: 340,
      perPerson: 85,
      maxPeople: 4,
    },
    description:
      'Descubra duas faces da realeza portuguesa: os palácios românticos de Sintra e o imponente Palácio-Convento de Mafra.',
    longDescription: `Uma viagem através de dois estilos arquitetónicos e duas épocas distintas da história real portuguesa: o romantismo dos palácios de Sintra e a grandiosidade barroca de Mafra, obra-prima de D. João V.`,
    highlights: [
      'Sintra - Vila Património UNESCO',
      'Palácio da Pena ou Nacional',
      'Centro histórico romântico',
      'Mafra - Palácio-Convento monumental',
      'Basílica e biblioteca histórica',
      'Arquitetura barroca imponente',
    ],
    image: 'https://images.unsplash.com/photo-1562281302-809108fd533c?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1562281302-809108fd533c?w=800',
      'https://images.unsplash.com/photo-1590073844006-33379778ae09?w=800',
      'https://images.unsplash.com/photo-1601296160691-b34a86938874?w=800',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
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
        description: 'Chegada à vila romântica',
      },
      {
        time: '10:00',
        location: 'Palácio',
        description: 'Visita a um palácio à escolha',
      },
      {
        time: '12:00',
        location: 'Centro de Sintra',
        description: 'Exploração da vila histórica',
      },
      {
        time: '13:00',
        location: 'Viagem para Mafra',
        description: 'Percurso até ao palácio-convento',
      },
      {
        time: '13:30',
        location: 'Almoço',
        description: 'Tempo para almoço (não incluído)',
      },
      {
        time: '15:00',
        location: 'Palácio de Mafra',
        description: 'Basílica, biblioteca e apartamentos reais',
      },
      {
        time: '17:00',
        location: 'Vila de Mafra',
        description: 'Exploração da vila histórica',
      },
      {
        time: '17:30',
        location: 'Regresso',
        description: 'Viagem de volta',
      },
    ],
    featured: false,
  },

  // 19 - Passeio de Fátima 5h
  {
    id: 'passeio-fatima-5horas',
    slug: 'passeio-fatima-5horas',
    title: 'Passeio de Fátima 5h',
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

  // 20 - Passeio a Sintra 4h
  {
    id: 'passeio-sintra-4horas',
    slug: 'passeio-sintra-4horas',
    title: 'Passeio a Sintra 4h',
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

  // 21 - Tour de Lisboa 4h
  {
    id: 'tour-lisboa-4horas',
    slug: 'tour-lisboa-4horas',
    title: 'Tour de Lisboa 4h',
    subtitle: 'O Essencial da Capital',
    duration: 'Até 4 horas',
    suggestedTime: '9:00 ou 14:00',
    price: {
      total: 250,
      perPerson: 63,
      maxPeople: 4,
    },
    description:
      'Descubra o essencial de Lisboa num tour de meio dia que mostra os pontos mais icónicos da capital portuguesa.',
    longDescription: `Uma versão concentrada do melhor de Lisboa, perfeita para quem tem tempo limitado mas não quer perder os monumentos e bairros mais emblemáticos da capital. Uma introdução perfeita à cidade das sete colinas.`,
    highlights: [
      'Belém - Torre e Mosteiro dos Jerónimos',
      'Padrão dos Descobrimentos',
      'Pastéis de Belém originais',
      'Alfama - Bairro mais antigo',
      'Miradouros panorâmicos',
      'Baixa Pombalina histórica',
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
        location: 'Partida',
        description: 'Recolha no local designado',
      },
      {
        time: '9:30',
        location: 'Belém',
        description: 'Torre de Belém e Mosteiro dos Jerónimos',
      },
      {
        time: '10:30',
        location: 'Padrão dos Descobrimentos',
        description: 'Monumento aos navegadores',
      },
      {
        time: '11:00',
        location: 'Pastéis de Belém',
        description: 'Degustação dos famosos pastéis',
      },
      {
        time: '11:30',
        location: 'Alfama',
        description: 'Bairro histórico e miradouros',
      },
      {
        time: '12:30',
        location: 'Baixa Pombalina',
        description: 'Praça do Comércio e Rossio',
      },
      {
        time: '13:00',
        location: 'Chegada',
        description: 'Fim do tour',
      },
    ],
    featured: false,
  },

  // 22 - Tour a pé e de bonde em Lisboa 4h
  {
    id: 'tour-a-pe-bonde-lisboa',
    slug: 'tour-a-pe-bonde-lisboa',
    title: 'Tour a pé e de bonde em Lisboa 4h',
    subtitle: 'Lisboa Autêntica nos Elétricos',
    duration: 'Até 4 horas',
    suggestedTime: '9:00 ou 14:00',
    price: {
      total: 280,
      perPerson: 70,
      maxPeople: 4,
    },
    description:
      'Experimente Lisboa de forma autêntica combinando caminhadas pelos bairros históricos com viagens nos icónicos elétricos amarelos.',
    longDescription: `A forma mais autêntica de conhecer Lisboa, combinando caminhadas pelos bairros mais típicos com viagens nos históricos elétricos amarelos. Uma experiência única que mostra a cidade como os lisboetas a vivem.`,
    highlights: [
      'Elétrico 28 - Rota mais famosa',
      'Alfama a pé - Ruelas e fado',
      'Bairro Alto - Zona boémia',
      'Chiado - Shopping e cultura',
      'Rossio e Carmo - Coração da cidade',
      'Experiência local autêntica',
    ],
    image:
      'https://images.unsplash.com/photo-1573479667972-ea82d7c0104e?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1573479667972-ea82d7c0104e?w=800',
      'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
      'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
      'https://images.unsplash.com/photo-1513735492246-483525079686?w=800',
    ],
    itinerary: [
      {
        time: '9:00',
        location: 'Partida',
        description: 'Encontro no centro de Lisboa',
      },
      {
        time: '9:30',
        location: 'Elétrico 28',
        description: 'Viagem no elétrico mais famoso',
      },
      {
        time: '10:30',
        location: 'Alfama a pé',
        description: 'Caminhada pelas ruelas históricas',
      },
      {
        time: '11:30',
        location: 'Baixa Pombalina',
        description: 'Exploração do centro comercial',
      },
      {
        time: '12:00',
        location: 'Elevador da Gloria',
        description: 'Subida para o Bairro Alto',
      },
      {
        time: '12:30',
        location: 'Chiado a pé',
        description: 'Zona comercial e cultural',
      },
      {
        time: '13:00',
        location: 'Fim do tour',
        description: 'Despedida no centro',
      },
    ],
    featured: false,
  },

  // 23 - Passeio noturno Lisboa 3h
  {
    id: 'passeio-noturno-lisboa',
    slug: 'passeio-noturno-lisboa',
    title: 'Passeio noturno Lisboa 3h',
    subtitle: 'A Cidade Iluminada',
    duration: 'Até 3 horas',
    suggestedTime: '19:00',
    price: {
      total: 220,
      perPerson: 55,
      maxPeople: 4,
    },
    description:
      'Descubra Lisboa quando o sol se põe. A cidade ganha vida noturna com luzes que destacam monumentos e criam uma atmosfera mágica.',
    longDescription: `Lisboa à noite tem um charme especial. As luzes destacam os monumentos históricos, os miradouros oferecem vistas espetaculares sobre a cidade iluminada, e a atmosfera noturna convida a descobrir o lado mais romântico da capital.`,
    highlights: [
      'Miradouros noturnos espetaculares',
      'Monumentos iluminados',
      'Ponte 25 de Abril à noite',
      'Cristo Rei com vista panorâmica',
      'Bairros históricos iluminados',
      'Atmosfera romântica única',
    ],
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800',
      'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800',
      'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800',
      'https://images.unsplash.com/photo-1513735492246-483525079686?w=800',
    ],
    itinerary: [
      {
        time: '19:00',
        location: 'Partida',
        description: 'Recolha no local designado',
      },
      {
        time: '19:30',
        location: 'Miradouro da Senhora do Monte',
        description: 'Vista panorâmica ao pôr do sol',
      },
      {
        time: '20:00',
        location: 'Alfama iluminada',
        description: 'Bairro histórico à noite',
      },
      {
        time: '20:30',
        location: 'Baixa Pombalina',
        description: 'Centro histórico iluminado',
      },
      {
        time: '21:00',
        location: 'Ponte 25 de Abril',
        description: 'Vista noturna da ponte',
      },
      {
        time: '21:30',
        location: 'Cristo Rei',
        description: 'Vista panorâmica noturna',
      },
      {
        time: '22:00',
        location: 'Regresso',
        description: 'Fim do passeio noturno',
      },
    ],
    featured: false,
  },

  // 24 - Passeio lisboa à noite com Fado show e jantar
  {
    id: 'passeio-lisboa-noite-fado-jantar',
    slug: 'passeio-lisboa-noite-fado-jantar',
    title: 'Passeio lisboa à noite com Fado show e jantar',
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
    featured: true,
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
