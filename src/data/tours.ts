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
      'https://images.unsplash.com/photo-1639515918990-c283ecdfb0fd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
      'https://images.unsplash.com/photo-1715677821506-391be19b8aef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1624300346653-2cdf13634ed1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632',
      'https://images.unsplash.com/photo-1682616789315-b9a9f1e95ca7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1491',
    ],
    itinerary: [
      {
        location: 'Expo 98 - Parque das Nações',
        description:
          'Lugar onde em 1998 ocorreu a Feira Mundial, agora chamada Parque das Nações é o bairro mais recente da cidade de Lisboa onde se podem admirar algumas das maravilhas da arquitetura moderna (Ponte Vasco da Gama, Oceanário, Estação de trem do Oriente, Torres de São Gabriel e São Rafael, Shopping Vasco da Gama entre outros). Paragens para fotos e visita ao Oceanário (opcional) eleito pela TripAdvisor o melhor da Europa.',
      },
      {
        location: 'Alfama',
        description:
          'O bairro mais antigo de Lisboa que remonta à época dos mouros (séculos 8 a 12). Os mirantes de Santa Luzia e da Senhora do Monte proporcionam vistas maravilhosas do rio Tejo e da cidade. Exploraremos as ruelas, travessas e becos com pavimento de basalto, onde as fachadas das casas estão cobertas com azulejos, herança árabe na Península Ibérica. Aqui nasceu a canção nacional Portuguesa: O Fado. A Sé Catedral de Lisboa (ano de 1148) e a igreja de Santo António são outros dois pontos de passagem.',
      },
      {
        location: 'Baixa Pombalina',
        description:
          'Após o terremoto de 1755, o Marquês de Pombal reconstruiu o centro da cidade devastado, criando a primeira cidade moderna na Europa com plano urbanístico geométrico inovador. Visitaremos as famosas praças do Comércio e do Rossio (estátua de D. Pedro I do Brasil), a rua Augusta (a mais importante rua pedestre de Portugal), com o seu famoso Arco de Triunfo.',
      },
      {
        location: 'Parque Eduardo VII',
        description:
          'Passaremos pela Avenida da Liberdade, a Champs Élysées de Lisboa, uma das avenidas mais belas do mundo. Passagem pelo monumento do Marquês de Pombal. Do alto do Parque Eduardo VII, admiraremos a vista maravilhosa da cidade de Lisboa e do rio Tejo.',
      },
      {
        location: 'Ponte 25 de Abril e Monumento do Cristo Rei',
        description:
          'Inaugurada em 1966, a Ponte 25 de Abril é uma das mais imponentes pontes suspensas por cabos em todo o mundo. O monumento do Cristo Rei, inaugurado em 1959, oferece a panorâmica mais espetacular sobre a cidade de Lisboa a cerca de duzentos metros acima do nível do rio Tejo.',
      },
      {
        location: 'Belém',
        description:
          'O bairro dedicado aos grandes exploradores Portugueses dos séculos 15 e 16. Os majestosos monumentos refletem a época de ouro da história de Portugal: o Mosteiro dos Jerónimos, a Torre de Belém, e o Padrão dos Descobrimentos com as estátuas dos grandes navegadores Portugueses (Pedro Álvares Cabral, Vasco da Gama entre outros). Visita obrigatória aos Pastéis de Belém, os doces mais típicos de Portugal.',
      },
      {
        location: 'Chiado e Bairro Alto',
        description:
          'O boémio bairro do Chiado, reconstruído após o incêndio de 1988, é o bairro mais movimentado de Lisboa, com o famoso café A Brasileira e a estátua de Fernando Pessoa. Aqui estão alguns dos mais famosos restaurantes de Portugal. O Bairro Alto, situado num dos sete morros de Lisboa, é o local preferido dos Alfacinhas para desfrutarem da noite de Lisboa, com seus inúmeros bares, restaurantes e casas de fado.',
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
    image:
      'https://images.unsplash.com/photo-1697050303652-0b228f3f83df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632',
    gallery: [
      'https://images.unsplash.com/photo-1587973878066-b93f5430f875?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171',
      'https://images.unsplash.com/photo-1643119763555-d4239b5dfa12?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171',
      'https://images.unsplash.com/photo-1587973878097-ef3aabd5eeaa?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171',
      'https://images.pexels.com/photos/19952252/pexels-photo-19952252.jpeg',
    ],
    itinerary: [
      {
        location: 'Palácio de Queluz',
        description:
          'Visita opcional ao "Versalhes Português", com os seus três estilos arquitetónicos: Renascentista, Barroco e Neo-clássico, jardins franceses decorados com fontes de artistas ingleses, estátuas italianas e um magnífico canal (lago-piscina) decorado com azulejos do século 18. Foi residência oficial de D. João VI. Aqui poderemos visitar o quarto onde nasceu e morreu D. Pedro I do Brasil.',
      },
      {
        location: 'Sintra - Centro Histórico',
        description:
          'Sintra é sem dúvida um dos locais mais extraordinários em Portugal. O seu microclima torna esta pequena cidade na encosta da montanha e junto ao Atlântico um ponto de atração para os visitantes. Paragem no centro histórico e tempo livre onde poderá degustar os famosos travesseiros e queijadas na pastelaria Piriquita e explorar as ruelas da cidade mais romântica de Portugal.',
      },
      {
        location: 'Palácio em Sintra',
        description:
          'Visita opcional a um dos palácios: Palácio Nacional de Sintra, Palácio da Pena, Quinta da Regaleira ou Palácio de Monserrate. Cada palácio oferece uma experiência única da arquitetura e história portuguesa.',
      },
      {
        location: 'Cabo da Roca',
        description:
          'O ponto mais oeste da Europa continental. Paragem para fotografia e admirar a beleza paisagística do Cabo da Roca, onde as falésias encontram o oceano Atlântico de forma espetacular.',
      },
      {
        location: 'Boca do Inferno',
        description:
          'Paragem para fotografar a Boca do Inferno, uma imponente cratera rochosa virada para o oceano Atlântico, formada pela erosão das ondas ao longo dos séculos.',
      },
      {
        location: 'Cascais',
        description:
          "Esta antiga cidade romana de pescadores tornou-se no século 20 uma das estações balneares (resort) preferidas dos lisboetas. Conhecida internacionalmente pelos seus grandes eventos náuticos (World Cup Sailing, America's Cup, Red Bull Flugtag), Cascais atrai imensos turistas de todo o mundo, sendo uma das cidades mais cosmopolitas da Europa. Tempo livre para explorar as ruas de Cascais.",
      },
      {
        location: 'Costa do Estoril',
        description:
          'Estoril, famoso internacionalmente pelo seu casino que inspirou Ian Fleming a escrever "Casino Royale", o primeiro livro da série James Bond. Viagem de regresso a Lisboa feita ao longo da Costa do Estoril com uma paisagem de mar deslumbrante.',
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
    image:
      'https://images.unsplash.com/photo-1719851299604-4fc8a558e1fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1173',
    gallery: [
      'https://images.pexels.com/photos/20354066/pexels-photo-20354066.jpeg',
      'https://images.unsplash.com/photo-1608208771441-9661953383a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1073',
      'https://images.unsplash.com/photo-1584809414362-b15e562c4a10?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1697394491967-c6faf458ced7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    ],
    itinerary: [
      {
        location: 'Fátima - Santuário',
        description:
          'O famoso santuário Mariano de Fátima é sem dúvida um dos maiores centros de peregrinação do mundo. Aqui vêm milhões de pessoas anualmente prestar homenagem aos três pastorinhos que foram testemunhas da aparição da Virgem no lugar da Cova da Iria. Tempo livre para assistir a uma missa (opcional), visitar a Capelinha das Aparições onde se pode ver a imagem da Virgem de Fátima, e a Basílica onde se encontram os túmulos de Lúcia, Jacinta e Francisco (estes dois últimos canonizados pelo Papa Francisco em Maio de 2017, tornando-se assim os santos mais jovens da igreja católica).',
      },
      {
        location: 'Igreja da Santíssima Trindade',
        description:
          'Visita à moderna igreja da Santíssima Trindade de Fátima, com 8.633 lugares sentados e 40.000 m² de área, um projeto da autoria do arquiteto grego Alexandros Tombazis. Tempo para fazer as suas compras de artigos religiosos para si, sua família e amigos.',
      },
      {
        location: 'Valinhos',
        description:
          'Na aldeia de Valinhos nasceram os três pastorinhos, Lúcia, Jacinta e Francisco. Aqui visitamos as casas de pedra calcária pertença das suas famílias que se dedicavam à agricultura e criação de ovelhas, num meio isolado e pobre, mas muito belo, do interior de Portugal.',
      },
      {
        location: 'Batalha - Mosteiro',
        description:
          'O mosteiro da Batalha foi mandado construir pelo rei D. João I, para celebrar a vitória Portuguesa na célebre batalha de Aljubarrota em 1385. Património da UNESCO, este monumento é um dos melhores exemplos do estilo gótico europeu, na sua fase final. No interior alberga a igreja de Santa Maria da Vitória, a mais alta de Portugal com 32,5 metros de altura. Este mosteiro, símbolo da nacionalidade Portuguesa, é sem dúvida um dos monumentos mais belos da arquitetura portuguesa medieval.',
      },
      {
        location: 'Nazaré',
        description:
          'A antiga vila de pescadores da Nazaré tornou-se numa das estações balneárias mais procuradas pelos turistas. A sua maravilhosa praia com um areal branco de enorme extensão cativa quantos por ali passam. A Nazaré tornou-se mundialmente conhecida devido às ondas gigantes na Praia do Norte. Aqui foi batido o record mundial da maior onda do mundo com 24,4 metros, surfada pelo brasileiro Rodrigo Koxa. Paragem com tempo livre para fotos.',
      },
      {
        location: 'Óbidos',
        description:
          'A vila de Óbidos é uma antiga cidade romana que floresceu mesmo depois da queda do império. Na idade média foi amuralhada após a conquista do primeiro rei de Portugal, D. Afonso Henriques. Óbidos é um dos melhores exemplos de cidade medieval em Portugal. Ao entrarmos nas suas muralhas retrocedemos no tempo ao encontrarmos as ruelas de pedra antiga, as casas com as suas fachadas seculares pintadas de branco, o comércio sempre ativo, um sem número de igrejas construídas ao longo dos séculos. Não deixaremos de provar a famosa Ginja de Óbidos, o famoso licor local servido num copinho de chocolate.',
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
      'https://images.unsplash.com/photo-1556755658-871cbaa86a3f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171',
    gallery: [
      'https://plus.unsplash.com/premium_photo-1677344289076-b4e8d7325e94?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      'https://images.pexels.com/photos/11023106/pexels-photo-11023106.jpeg',
      'https://images.unsplash.com/photo-1693474461982-2853d7242561?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1662506254404-e8ee655d491a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    ],
    itinerary: [
      {
        location: 'Alfama',
        description:
          'O bairro mais antigo de Lisboa que remonta à época dos mouros (séculos 8 a 12). Os mirantes de Santa Luzia e da Senhora do Monte são paragem obrigatória, proporcionando vistas maravilhosas do rio Tejo e da cidade. Exploraremos as ruelas, travessas e becos com pavimento de basalto, onde as fachadas das casas estão cobertas com azulejos, herança árabe na Península Ibérica. Aqui nasceu a canção nacional Portuguesa: O Fado. A Sé Catedral de Lisboa (ano de 1148) e a igreja de Santo António são outros dois pontos de passagem.',
      },
      {
        location: 'Baixa Pombalina',
        description:
          'Em 1755 o maior terremoto jamais registrado na Europa ocorreu em Lisboa. O Marquês de Pombal reconstruiu o centro da cidade completamente devastado. Assim nasceu a primeira cidade moderna na Europa: a Baixa Pombalina, com o seu plano urbanístico geométrico inovador, foi o modelo usado na construção das novas cidades, sobretudo no Novo Mundo (Manhattan em Nova Iorque, Centro de Chicago, etc.). Aqui visitaremos as famosas praças do Comércio e do Rossio (estátua de D. Pedro I do Brasil), a rua Augusta (a mais importante rua pedestre de Portugal), com o seu famoso Arco de Triunfo.',
      },
      {
        location: 'Belém',
        description:
          'Belém, o bairro de Lisboa dedicado aos grandes exploradores Portugueses dos séculos 15 e 16. Tendo sido Portugal a primeira nação globalizadora do mundo com a chegada dos seus exploradores a todos os continentes, o seu império tornou-se um dos maiores da história da humanidade. Os majestosos monumentos que aqui encontramos refletem a época de ouro da história de Portugal: o Mosteiro dos Jerónimos, a Torre de Belém, e o Padrão dos Descobrimentos com as estátuas dos grandes navegadores Portugueses (Pedro Álvares Cabral, Vasco da Gama entre tantos outros). Visita obrigatória aos Pastéis de Belém, os doces mais típicos de Portugal.',
      },
      {
        location: 'Palácio de Queluz',
        description:
          'Visita opcional ao Palácio de Queluz, o "Versalhes Português", com os seus três estilos arquitetónicos: Renascentista, Barroco e Neo-clássico, jardins franceses decorados com fontes de artistas ingleses, estátuas italianas e um magnífico canal (lago-piscina) decorado com azulejos do século 18. Foi residência oficial de D. João VI. Aqui poderemos visitar o quarto onde nasceu e morreu D. Pedro I do Brasil. (Em opção poderá visitar um dos palácios de Sintra: Palácio Nacional de Sintra, Palácio da Pena, Quinta da Regaleira ou Palácio de Monserrate)',
      },
      {
        location: 'Sintra - Centro Histórico',
        description:
          'Sintra é sem dúvida um dos locais mais extraordinários em Portugal. O seu microclima torna esta pequena cidade na encosta da montanha e junto ao Atlântico um ponto de atração para os visitantes que por ali passam para admirar os seus famosos castelos, ou simplesmente apreciar a doçaria e comida tradicional, não esquecendo as lojas com os seus artigos típicos locais. Paragem no centro histórico e tempo livre onde poderá degustar os famosos travesseiros e queijadas na pastelaria Piriquita e explorar as ruelas da cidade mais romântica de Portugal.',
      },
      {
        location: 'Cabo da Roca',
        description:
          'O ponto mais oeste da Europa continental. Paragem no Cabo da Roca para fotografia e admirar a beleza paisagística onde as falésias encontram o oceano Atlântico.',
      },
      {
        location: 'Cascais',
        description:
          "Esta antiga cidade romana de pescadores tornou-se no século 20 uma das estações balneárias (resort) preferidas dos lisboetas que ali vão para desfrutar do sol e do mar, dos seus bares e restaurantes. Conhecida internacionalmente pelos seus grandes eventos náuticos (World Cup Sailing, America's Cup, Red Bull Flugtag), Cascais atrai imensos turistas de todo o mundo, quer para visitar quer para residir, sendo uma das cidades mais cosmopolitas da Europa. Tempo livre para explorar as ruas de Cascais.",
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
      'https://images.unsplash.com/photo-1697992253894-b957af8b3be4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1631',
    gallery: [
      'https://images.unsplash.com/photo-1747787759521-a1880a476384?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1750473966351-f213853f213a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1694429908976-0825ff3154fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
      'https://images.unsplash.com/photo-1694429908978-d3449534b730?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    ],
    itinerary: [
      {
        location: 'Ponte Vasco da Gama',
        description:
          'Iniciamos a nossa viagem em direção a Évora atravessando a ponte mais longa da Europa: A Ponte Vasco da Gama. Esta ponte foi construída em 1998 aquando da inauguração da feira mundial de Lisboa (Expo 98), na celebração dos 500 anos da descoberta do caminho marítimo para a Índia por Vasco da Gama. A caminho de Évora iremos desfrutar da paisagem única da região do Alentejo com as suas extensas florestas de sobreiros (árvore da cortiça) e vinhedos (maior região vinícola de Portugal).',
      },
      {
        location: 'Fábrica da Cortiça',
        description:
          'Visita a uma das fábricas de cortiça da região de Évora, onde aprenderemos o processo da laboração da cortiça, desde a apanha até ao produto final. Aqui também poderemos comprar artigos a preço direto de fábrica.',
      },
      {
        location: 'Cidade de Évora',
        description:
          'Visita à cidade Património da Humanidade da UNESCO. Fortificada por uma muralha do século 17, Évora conta-nos a sua história através dos seus monumentos, praças e ruas medievais. Desde o templo romano, às arcadas mouras na praça do Giraldo, passando pela catedral do século 12 e pela Capela dos Ossos do século 17, poderemos reconstituir o passado da cidade considerada o celeiro da Roma antiga, uma das mais importantes cidades comerciais da época árabe em Portugal, tornando-se a capital da província do Alentejo após a conquista portuguesa.',
      },
      {
        location: 'Templo Romano (Templo de Diana)',
        description:
          'Visita ao impressionante Templo Romano, também conhecido como Templo de Diana, um dos vestígios romanos mais bem preservados da Península Ibérica. Este monumento icónico é testemunho da importância de Évora durante o império romano.',
      },
      {
        location: 'Capela dos Ossos',
        description:
          'Visita à famosa Capela dos Ossos na Igreja de São Francisco, decorada com ossadas humanas. Esta capela do século 17 com a sua inscrição "Nós ossos que aqui estamos pelos vossos esperamos" é uma reflexão sobre a transitoriedade da vida.',
      },
      {
        location: 'Monsaraz',
        description:
          'Cidade medieval mágica, perto da fronteira com a Espanha. Explore as ruas e vielas de pedra de xisto de Monsaraz e o seu castelo medieval com vista para o maior lago artificial da Europa: o Alqueva. Aprenda sobre o legado dos Cavaleiros Templários e dos judeus portugueses sefarditas nesta joia das cidades históricas de Portugal.',
      },
      {
        location: 'Vinícola - Prova de Vinhos',
        description:
          'Visita e prova de vinhos opcional a uma vinícola local: Adega da Cartuxa, Herdade do Esporão ou Adega Ervideira. Deguste os famosos vinhos do Alentejo, reconhecidos internacionalmente pela sua qualidade.',
      },
      {
        location: 'Ponte 25 de Abril e Cristo Rei',
        description:
          'No regresso a Lisboa, passaremos pela Ponte 25 de Abril, inaugurada em 1966 e que se tornou um ex-libris da cidade. É uma das mais imponentes pontes suspensas por cabos em todo o mundo. O monumento do Cristo Rei, inaugurado em 1959, é um santuário nacional. Devido à sua situação privilegiada, o mirante localiza-se a cerca de duzentos metros acima do nível do mar, sendo esta a panorâmica mais espetacular sobre a cidade de Lisboa, facto que atrai milhões de turistas anualmente.',
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
      'https://blog.winetourismportugal.com/hs-fs/hubfs/quinta-da-bacalhoa-2.jpg?width=960&name=quinta-da-bacalhoa-2.jpg',
    gallery: [
      'https://images.unsplash.com/photo-1600598863272-e33f8342ba7d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2160',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Sesimbra_-_Portugal_%2850956102918%29.jpg/760px-Mapcarta.jpg',
      'https://www.vagamundos.pt/wp-content/uploads/2020/04/1-23-4.jpg',
      'https://images.unsplash.com/photo-1639515610041-50bdc1a70df8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074',
    ],
    itinerary: [
      {
        location: 'Palmela',
        description:
          'Atualmente conhecida por fazer parte da região vinícola da Península de Setúbal, esta antiga cidade moura com casas caiadas de branco é dominada desde o morro pelo estratégico Castelo de Palmela, conquistado por D. Afonso Henriques, primeiro rei de Portugal em 1147 e atribuído à ordem militar de Santiago de Espada. Aqui faremos a visita ao castelo de onde poderemos ver na distância as cidades de Setúbal e de Lisboa.',
      },
      {
        location: 'Azeitão',
        description:
          'A vila de Azeitão é sobejamente conhecida em Portugal por várias razões das quais destacamos três: O queijo, o vinho e as Tortas de Azeitão (Pastelaria-doçaria). Aqui faremos a visita a uma das caves mais antigas de Portugal, a José Maria da Fonseca e/ou Quinta da Bacalhôa, onde poderemos degustar o célebre vinho Periquita e o mundialmente conhecido vinho fortificado, Moscatel. Tempo também para degustar aquele que no entender de muitos é o melhor queijo de Portugal, o famoso queijo de Azeitão. Poderá também se assim desejar provar a doçaria típica local onde imperam as Tortas de Azeitão.',
      },
      {
        location: 'Sesimbra',
        description:
          'Antiga vila de pescadores encaixada entre montanhas e com o Atlântico como pano de fundo, aqui iremos explorar as ruelas que albergavam as casas das gentes que faziam da pesca o seu modo de vida. Hoje quase totalmente virada ao comércio e turismo, Sesimbra ainda alberga uma importante frota pesqueira no seu novo porto de abrigo. Tempo livre para almoço e exploração da vila.',
      },
      {
        location: 'Serra da Arrábida',
        description:
          'A serra da Arrábida está inserida na região protegida do Parque Natural da Arrábida. Desde os mirantes situados a 500 metros acima do nível do mar iremos observar paisagens de extraordinária beleza que perdurarão na nossa memória por muito tempo. Daqui poderemos ver a maior extensão de praia em Portugal, com 45 quilómetros de comprimento e a terceira maior praia do mundo: Troia!',
      },
      {
        location: 'Praias da Arrábida',
        description:
          'Paragem nas praias paradisíacas da Arrábida, com águas cristalinas e areias brancas, rodeadas pela vegetação verdejante da serra. Estas praias estão entre as mais belas de Portugal.',
      },
      {
        location: 'Setúbal',
        description:
          'Esta cidade capital da região, banhada pelo único rio em Portugal que flui de sul para norte, o rio Sado, teve grande desenvolvimento durante a época romana, com a produção de sal e de salga de peixe. Aqui era produzido um dos condimentos mais apreciados pelos povos da antiguidade de Grécia e Roma: o Garum. Tempo livre para caminhar nas ruas do comércio central de Setúbal e visitar o Mercado do Livramento, considerado um dos melhores mercados de peixe do mundo.',
      },
      {
        location: 'Regresso a Lisboa',
        description:
          'Regresso a Lisboa pela Ponte 25 de Abril, com vista panorâmica sobre a cidade e o rio Tejo.',
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
    image: 'https://images.pexels.com/photos/5496038/pexels-photo-5496038.jpeg',
    gallery: [
      'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/fa/10/7d/20200910-113406-largejpg.jpg?w=900&h=500&s=1',
      'https://images.pexels.com/photos/17847439/pexels-photo-17847439.jpeg',
      'https://www.sailing-360.com/wp-content/uploads/sites/4302/2025/02/A-historia-dos-barcos-rabelos-do-Douro-000.jpg?w=1000&h=1000',
    ],
    itinerary: [
      {
        location: 'Coimbra - Universidade',
        description:
          'A cidade de Coimbra, conhecida internacionalmente pela sua famosa universidade (uma das mais antigas da Europa), foi capital de Portugal até 1255. A cidade do Conhecimento, assim conhecida, respira cultura desde as margens do rio Mondego até à colina (morro) da Universidade. Aqui visitaremos a Biblioteca Joanina, considerada pelo jornal britânico "The Telegraph" a mais espetacular biblioteca do mundo. Construída por ordem do rei D. João V, esta biblioteca barroca de uma beleza e riqueza indescritíveis, foi o resultado da visão cultural do rei mais rico da Europa na época, com os seus cofres a abarrotar com o ouro proveniente das Minas Gerais na então colónia Brasileira.',
      },
      {
        location: 'Baixa de Coimbra',
        description:
          'Tempo livre para passear na "Baixa de Coimbra" e visita à Igreja de Santa Cruz onde encontramos os túmulos do primeiro rei de Portugal, D. Afonso I e de seu filho D. Sancho I. Na doçaria local destacamos os pastéis de Santa Clara, os pastéis de Tentúgal e as Arrufadas de Coimbra.',
      },
      {
        location: 'Leitão da Bairrada (Almoço Opcional)',
        description:
          'Tempo para nos deliciarmos com o famoso leitão à Bairrada num dos muitos restaurantes locais (este é um dos pratos típicos e mais famosos da gastronomia portuguesa). Claro que em opção existem outras escolhas para almoçar na região.',
      },
      {
        location: 'Porto - Panorâmica',
        description:
          'Porto é uma das mais belas cidades Europeias. Começamos a visita com uma panorâmica junto ao mar na praia de Matosinhos, seguindo a costa até à Foz do rio Douro, passando junto ao antigo bairro medieval de Miragaia e chegando aos Clérigos.',
      },
      {
        location: 'Clérigos, Livraria Lello e Igreja do Carmo',
        description:
          'Aqui poderemos fotografar o símbolo desta cidade: a Torre dos Clérigos, com 75 metros de altura, construída em 1754, na época o edifício mais alto do Porto. De seguida visitamos a Livraria Lello onde a escritora JK Rowling se inspirou para escrever o seu livro best-seller Harry Potter. Esta é sem dúvida uma das mais belas livrarias em todo o mundo, sendo por isso procurada por imensos turistas. Paragem para fotografia na Igreja do Carmo com os seus maravilhosos azulejos em azul e branco a revestir toda a fachada exterior.',
      },
      {
        location: 'Estação de São Bento e Catedral',
        description:
          'A estação de São Bento é mundialmente conhecida pelos seus painéis de azulejos no seu interior que retratam cenas importantes da história de Portugal. A Sé Catedral do Porto é um edifício de estilo românico do século 12 localizado num dos morros da cidade com uma vista fantástica sobre o rio Douro e as suas pontes.',
      },
      {
        location: 'Vila Nova de Gaia - Caves do Vinho do Porto',
        description:
          'Aqui estão as famosas Caves do Vinho do Porto. Se for sua opção poderemos fazer a visita e degustação em uma das caves da primeira região vinícola demarcada do mundo: a região do Vinho do Porto.',
      },
      {
        location: 'Barco Rabelo (Opcional)',
        description:
          'Assim se chamam os barcos que traziam os barris de vinho das vinícolas do Vale do Douro até às caves em Gaia. Se optar poderá fazer um passeio de 50 minutos num destes Barcos Rabelo e ficar a conhecer as seis pontes que cruzam o rio Douro na cidade do Porto. A vista panorâmica da cidade vista de barco é simplesmente deslumbrante.',
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
