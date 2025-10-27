// Tipagem TypeScript
type ToursEnType = Record<string, any>;

export const toursEn: ToursEnType = {
  // 1 - Tour de Lisboa
  'tour-de-lisboa': {
    title: 'Lisbon Tour',
    subtitle: 'The City of Seven Hills',
    description: 'Explore the beauty of Lisbon at your own pace with a full-day private tour. Discover the rich history, vibrant culture and hidden gems of the Portuguese capital.',
    longDescription: `Lisbon has incredible views and impressive monuments. It has a yellow tram that has been running through the narrow streets and alleys of the old city since the early 20th century. Lisbon has stone pavements unchanged for centuries. It has old neighborhoods, famous taverns and crowds waiting for rolls and custard tarts. At night, among many other things, you can hear Fado and Portuguese guitars. The Tagus River surrounds Lisbon and provides a lively estuary where dolphins swim.`,
    highlights: [
      'Nations Park - Modern architecture from Expo 98',
      'Alfama - Oldest district, viewpoints, Fado',
      'Pombaline Downtown - Commerce Square, Rossio',
      'Eduardo VII Park - Panoramic view',
      '25 de Abril Bridge and Christ the King',
      'Belém - Jerónimos Monastery, Belém Tower, Pastries',
      'Chiado and Bairro Alto - Bohemian areas',
    ],
    itinerary: [
      {
        location: 'Expo 98 - Nations Park',
        description: 'The place where the World Fair took place in 1998, now called Nations Park is the newest district of Lisbon where you can admire some of the wonders of modern architecture (Vasco da Gama Bridge, Oceanarium, Orient Train Station, São Gabriel and São Rafael Towers, Vasco da Gama Shopping among others). Photo stops and visit to the Oceanarium (optional) voted by TripAdvisor as the best in Europe.',
      },
      {
        location: 'Alfama',
        description: 'The oldest district of Lisbon dating back to the Moorish era (8th to 12th centuries). The viewpoints of Santa Luzia and Senhora do Monte provide wonderful views of the Tagus River and the city. We will explore the narrow streets and alleys with basalt pavement, where the house facades are covered with tiles, an Arab heritage in the Iberian Peninsula. Here the Portuguese national song was born: Fado. The Lisbon Cathedral (year 1148) and the church of Santo António are two other passing points.',
      },
      {
        location: 'Pombaline Downtown',
        description: 'After the 1755 earthquake, the Marquis of Pombal rebuilt the devastated city center, creating the first modern city in Europe with an innovative geometric urban plan. We will visit the famous Commerce and Rossio squares (statue of Pedro I of Brazil), Augusta Street (the most important pedestrian street in Portugal), with its famous Triumphal Arch.',
      },
      {
        location: 'Eduardo VII Park',
        description: 'We will pass through Avenida da Liberdade, the Champs Élysées of Lisbon, one of the most beautiful avenues in the world. Passing by the monument of the Marquis of Pombal. From the top of Eduardo VII Park, we will admire the wonderful view of the city of Lisbon and the Tagus River.',
      },
      {
        location: '25 de Abril Bridge and Christ the King Monument',
        description: 'Inaugurated in 1966, the 25 de Abril Bridge is one of the most imposing cable-suspended bridges in the world. The Christ the King monument, inaugurated in 1959, offers the most spectacular panorama over the city of Lisbon about two hundred meters above the Tagus River level.',
      },
      {
        location: 'Belém',
        description: 'The district dedicated to the great Portuguese explorers of the 15th and 16th centuries. The majestic monuments reflect the golden age of Portuguese history: the Jerónimos Monastery, the Belém Tower, and the Monument to the Discoveries with statues of the great Portuguese navigators (Pedro Álvares Cabral, Vasco da Gama among others). A mandatory visit to Pastéis de Belém, the most typical sweets of Portugal.',
      },
      {
        location: 'Chiado and Bairro Alto',
        description: 'The bohemian Chiado district, rebuilt after the 1988 fire, is the busiest district in Lisbon, with the famous café A Brasileira and the statue of Fernando Pessoa. Here are some of the most famous restaurants in Portugal. Bairro Alto, located on one of the seven hills of Lisbon, is the favorite place of Lisboetas to enjoy Lisbon\'s nightlife, with its numerous bars, restaurants and fado houses.',
      },
    ],
  },

  // 2 - Passeio Sintra Cascais Estoril
  'passeio-sintra-cascais-estoril': {
    title: 'Sintra Cascais Estoril Tour',
    subtitle: 'Fairy Tale Palaces and Atlantic Coast',
    description: 'Embark on an unforgettable adventure showcasing the most enchanting corners of Portugal, from fairy tale palaces to the stunning Atlantic coast.',
    longDescription: `This tour combines the magic of Portuguese castles from medieval times to the romanticism period. Sintra, a UNESCO World Heritage Site and the capital of romanticism in Portugal, has housed the summer palaces of the royal family since the 14th century.`,
    highlights: [
      'Queluz Palace - The "Portuguese Versailles"',
      'Sintra - Historic center, palaces, traditional sweets',
      'Cabo da Roca - Westernmost point of Europe',
      'Hell\'s Mouth - Rocky crater in the Atlantic',
      'Cascais - Cosmopolitan fishing village',
      'Estoril Coast - Casino that inspired James Bond',
    ],
    itinerary: [
      {
        location: 'Queluz Palace',
        description: 'Visit to Queluz Palace, the "Portuguese Versailles", with its three architectural styles: Renaissance, Baroque and Neo-classical, French gardens decorated with fountains by English artists, Italian statues and a magnificent canal (pool-lake) decorated with 18th century tiles. It was the official residence of D. João VI. Here we can visit the room where Pedro I of Brazil was born and died.',
      },
      {
        location: 'Sintra - Historic Center',
        description: 'Sintra is undoubtedly one of the most extraordinary places in Portugal. Its microclimate makes this small town on the mountainside and next to the Atlantic an attraction point for visitors who pass by to admire its famous castles, or simply enjoy the traditional pastries and food, not forgetting the shops with their typical local items. Stop in the historic center and free time where you can taste the famous "travesseiros" and "queijadas" at Piriquita pastry shop and explore the alleys of the most romantic city in Portugal.',
      },
      {
        location: 'Cabo da Roca',
        description: 'Photo stop at Cabo da Roca, the westernmost point of continental Europe where "the land ends and the sea begins" (Luís Vaz de Camões). From the 140m high cliffs, you can see the Atlantic Ocean in all its fullness.',
      },
      {
        location: 'Hell\'s Mouth',
        description: 'Stop to photograph Hell\'s Mouth, an impressive rocky crater facing the Atlantic Ocean, formed by wave erosion over the centuries.',
      },
      {
        location: 'Cascais',
        description: 'This former Roman fishing town became in the 20th century one of the favorite beach resorts of Lisboetas who go there to enjoy the sun and sea, its bars and restaurants. Known internationally for its major nautical events (World Cup Sailing, America\'s Cup, Red Bull Flugtag), Cascais attracts many tourists from around the world, both to visit and to live, being one of the most cosmopolitan cities in Europe. Free time to explore the streets of Cascais.',
      },
      {
        location: 'Estoril Coast',
        description: 'Return trip to Lisbon along the Estoril Coast with stunning sea views, passing by the famous Estoril casino that inspired Ian Fleming to write "Casino Royale".',
      },
    ],
  },

  // 3 - Fátima, Batalha, Nazaré e Óbidos
  'fatima-batalha-nazare-obidos': {
    title: 'Fátima, Batalha, Nazaré and Óbidos',
    subtitle: 'Faith, History and Coastal Traditions',
    description: 'Full day tour combining the spirituality of Fátima, the medieval grandeur of Batalha, the fishing traditions of Nazaré and the medieval charm of Óbidos.',
    longDescription: `This tour encompasses the most important religious site in Portugal, one of the greatest gothic masterpieces, the most typical fishing village and the most romantic medieval town. A complete journey through Portuguese history, culture and traditions.`,
    highlights: [
      'Fátima - Marian Sanctuary',
      'Batalha Monastery - Gothic masterpiece',
      'Nazaré - Giant waves and fishing traditions',
      'Óbidos - Medieval village within walls',
      'Ginjinha liqueur tasting in chocolate cup',
    ],
    itinerary: [
      {
        location: 'Fátima - Sanctuary',
        description: 'The famous Marian sanctuary of Fátima is undoubtedly one of the largest pilgrimage centers in the world. Millions of people come here annually to pay homage to the three little shepherds who witnessed the apparition of the Virgin at Cova da Iria. Free time to attend mass (optional), visit the Chapel of Apparitions where you can see the image of Our Lady of Fátima, and the Basilica where the tombs of Lúcia, Jacinta and Francisco are located (the latter two canonized by Pope Francis in May 2017, thus becoming the youngest saints of the Catholic Church).',
      },
      {
        location: 'Batalha - Monastery',
        description: 'The Monastery of Batalha was built to commemorate the victory at the Battle of Aljubarrota in 1385, and took two centuries to complete. Its main façade is a perfect example of Late Gothic style and the interior of extraordinary beauty with its impossible vaults built according to mathematical, scientific and humanistic engineering. The Founders\' Chapel is unique in its mystical and symbolic reading.',
      },
      {
        location: 'Nazaré',
        description: 'Nazaré is the most typical fishing village in Portugal. Here everything revolves around the sea and fishing. The fishermen wear checkered shirts, black trousers and stocking caps. The women, who still wear seven skirts, lay the fish to dry on the sand and sell it on the streets. It\'s a tradition and spectacle not to be missed. Magnificent beach, huge cliffs rising to 318m, giant waves where Garrett McNamara broke the world record for the biggest wave ever surfed.',
      },
      {
        location: 'Óbidos',
        description: 'A medieval village given as a wedding gift by King D. Dinis to Queen Santa Isabel in 1282, and since then belongs to the House of Queens. We\'ll walk through its narrow medieval streets to the castle walls, passing by whitewashed houses adorned with bougainvilleas and the scent of jasmine. Don\'t miss trying the famous Ginjinha de Óbidos (cherry liqueur), served in a chocolate cup.',
      },
    ],
  },

  // 4 - Tour Lisboa e Sintra
  'tour-lisboa-sintra': {
    title: 'Lisbon and Sintra',
    subtitle: 'Capital and Romanticism in One Day',
    description: 'Combine the vibrant Portuguese capital with the romantic magic of Sintra in this complete full-day tour.',
    longDescription: `The perfect combination for those who want to experience the best of Lisbon and Sintra in a single day. From the historic neighborhoods of the capital to the fairy-tale palaces of the mountain, this tour offers a complete vision of the region's cultural and architectural richness.`,
    highlights: [
      'Belém - Monuments and Pastéis de Belém',
      'Alfama and viewpoints',
      'Commerce Square and Downtown',
      'Sintra - Romantic palaces',
      'Cabo da Roca - Edge of Europe',
      'Cascais - Coastal elegance',
    ],
    itinerary: [
      {
        location: 'Belém',
        description: 'We start with the monumental Belém district, visiting the Jerónimos Monastery, Belém Tower and the Monument to the Discoveries. Mandatory stop for the authentic Pastéis de Belém.',
      },
      {
        location: 'Alfama and Viewpoints',
        description: 'Explore the oldest district of Lisbon with its narrow streets, fado houses and stunning viewpoints over the Tagus.',
      },
      {
        location: 'Downtown Lisbon',
        description: 'Pass through Commerce Square, the commercial heart of the city, and Augusta Street with its Triumphal Arch.',
      },
      {
        location: 'Sintra',
        description: 'In the afternoon, we head to magical Sintra to visit one of its famous palaces (Pena, Sintra National or Quinta da Regaleira) and taste the traditional sweets.',
      },
      {
        location: 'Cabo da Roca',
        description: 'Brief stop at the westernmost point of continental Europe for unforgettable photos.',
      },
      {
        location: 'Cascais',
        description: 'End the day in elegant Cascais, with free time to explore this charming coastal town.',
      },
    ],
  },

  // 5 - Tour Évora e Monsaraz
  'tour-evora-monsaraz': {
    title: 'Évora and Monsaraz Tour',
    subtitle: 'Alentejo Heritage and Traditions',
    description: 'Discover the historic Évora, UNESCO World Heritage, and the medieval village of Monsaraz with stunning views over Alqueva.',
    longDescription: `Journey through time in Alentejo, discovering Évora with its Roman Temple and Bone Chapel, and Monsaraz, one of the most beautiful villages in Portugal. Experience the authentic Alentejo with its vast plains, cork oaks, olive trees and exceptional gastronomy.`,
    highlights: [
      'Évora - UNESCO World Heritage',
      'Diana Temple - Roman monument',
      'Bone Chapel',
      'Monsaraz - Medieval village',
      'Alqueva - Europe\'s largest artificial lake',
      'Wine and regional products tasting',
    ],
    itinerary: [
      {
        location: 'Évora - Historic Center',
        description: 'Explore the historic center of Évora, visiting the Roman Temple of Diana, the Gothic Cathedral, and the impressive Bone Chapel with its walls decorated with human bones and the famous inscription "We bones that are here await yours".',
      },
      {
        location: 'Giraldo Square',
        description: 'The heart of the city with its Renaissance fountain and traditional arcades, perfect for a coffee break.',
      },
      {
        location: 'Alentejo Countryside',
        description: 'Cross the typical Alentejo landscape with its cork oak forests, olive groves and vineyards, understanding the importance of cork production for the region.',
      },
      {
        location: 'Monsaraz',
        description: 'Visit this medieval village perched on a hill, with its castle, narrow streets and whitewashed houses. Enjoy breathtaking views over the Alqueva dam, Europe\'s largest artificial lake.',
      },
      {
        location: 'Wine Tasting',
        description: 'Stop at a local winery to taste the renowned Alentejo wines, accompanied by regional cheese and sausages.',
      },
    ],
  },

  // 6 - Tour Azeitão, Palmela, Sesimbra, Arrábida e Setúbal
  'tour-azeitao-palmela-sesimbra-arrabida-setubal': {
    title: 'Azeitão, Palmela, Sesimbra, Arrábida and Setúbal',
    subtitle: 'Serra da Arrábida and Atlantic Coast',
    description: 'Explore the Setúbal Peninsula with its stunning natural park, medieval castles, fishing villages and renowned wines.',
    longDescription: `Discover the natural beauty of Serra da Arrábida, considered the Mediterranean jewel of Portugal. Combine history, nature, gastronomy and wines in this complete tour south of Lisbon.`,
    highlights: [
      'Palmela Castle - Panoramic views',
      'Azeitão - Wines and tiles',
      'Serra da Arrábida - Protected natural park',
      'Sesimbra - Fishing village and castle',
      'Portinho da Arrábida - Paradise beach',
      'Setúbal - Dolphins and fresh fish',
    ],
    itinerary: [
      {
        location: 'Palmela Castle',
        description: 'Start with a visit to the medieval castle of Palmela, former headquarters of the Order of Santiago, with spectacular panoramic views over the Setúbal Peninsula.',
      },
      {
        location: 'Azeitão',
        description: 'Visit the José Maria da Fonseca wine cellars for a wine tasting including the famous Moscatel. Opportunity to see the traditional tile factory.',
      },
      {
        location: 'Serra da Arrábida',
        description: 'Cross the Natural Park of Serra da Arrábida with its Mediterranean vegetation, limestone cliffs and stunning views over the Atlantic.',
      },
      {
        location: 'Portinho da Arrábida',
        description: 'Stop at this paradise beach with crystal clear waters, considered one of the most beautiful in Portugal.',
      },
      {
        location: 'Sesimbra',
        description: 'Fishing village famous for its fresh fish and seafood. Visit to the Moorish castle with views over the bay.',
      },
      {
        location: 'Setúbal',
        description: 'End in the city of Setúbal, known for its fried cuttlefish and the possibility of spotting dolphins in the Sado estuary.',
      },
    ],
  },

  // 7 - Tour Coimbra e Porto
  'tour-coimbra-porto': {
    title: 'Coimbra and Porto',
    subtitle: 'University and Port Wine',
    description: 'Visit two of Portugal\'s most important cities: Coimbra with its historic university and Porto with its famous Port wine.',
    longDescription: `A journey through central and northern Portugal, discovering the academic city of Coimbra with one of the oldest universities in Europe, and Porto, the invicta city famous for its Port wine and stunning architecture.`,
    highlights: [
      'University of Coimbra - UNESCO Heritage',
      'Joanina Library - Baroque masterpiece',
      'Porto - Historic center',
      'Port wine cellars and tasting',
      'Luis I Bridge and river views',
      'Clérigos Tower and Lello Bookstore',
    ],
    itinerary: [
      {
        location: 'Coimbra - University',
        description: 'Visit the historic University of Coimbra, one of the oldest in Europe (1290), including the spectacular Joanina Library with its baroque decoration and colony of bats that protect the books.',
      },
      {
        location: 'Old Cathedral of Coimbra',
        description: 'Romanesque cathedral from the 12th century, one of the most important monuments of this style in Portugal.',
      },
      {
        location: 'Porto - Ribeira',
        description: 'Explore Porto\'s historic riverside district with its colorful houses and lively atmosphere.',
      },
      {
        location: 'Port Wine Cellars',
        description: 'Cross the Dom Luis I Bridge to Vila Nova de Gaia to visit one of the famous Port wine cellars with tasting included.',
      },
      {
        location: 'Porto City Center',
        description: 'Visit the Clérigos Tower, the beautiful Lello Bookstore (inspiration for Harry Potter), and the São Bento Station with its magnificent tiles.',
      },
    ],
  },

  // 8 - Passeio a Fátima e Sintra
  'passeio-fatima-sintra': {
    title: 'Fátima and Sintra Tour',
    subtitle: 'Spirituality and Romanticism',
    description: 'Unique combination of the spiritual Fátima sanctuary with the romantic palaces of Sintra.',
    longDescription: `Experience the contrast between the religious devotion of Fátima and the romantic fantasy of Sintra's palaces. Two UNESCO World Heritage sites in one unforgettable day.`,
    highlights: [
      'Fátima Sanctuary - Place of apparitions',
      'Chapel of Apparitions',
      'Sintra - Romantic palaces',
      'Traditional pastries of Sintra',
      'Cabo da Roca - Edge of Europe',
    ],
    itinerary: [
      {
        location: 'Fátima',
        description: 'Morning visit to the Sanctuary of Fátima, with time for prayer, visiting the Chapel of Apparitions and the tombs of the three little shepherds.',
      },
      {
        location: 'Valinhos',
        description: 'Visit the village where the three shepherds lived, seeing their original houses.',
      },
      {
        location: 'Sintra',
        description: 'Afternoon in magical Sintra, with option to visit one of its palaces and taste the famous travesseiros and queijadas.',
      },
      {
        location: 'Cabo da Roca',
        description: 'End with the sunset at the westernmost point of Europe.',
      },
    ],
  },

  // 9 - Passeio a Sintra e Óbidos
  'passeio-sintra-obidos': {
    title: 'Sintra and Óbidos Tour',
    subtitle: 'Palaces and Medieval Village',
    description: 'Combine the romantic palaces of Sintra with the medieval charm of Óbidos village.',
    longDescription: `From the fairy tale palaces of Sintra to the medieval walls of Óbidos, this tour offers the perfect contrast between romanticism and medieval history.`,
    highlights: [
      'Sintra - Choice of palace to visit',
      'Cabo da Roca - Westernmost point',
      'Óbidos - Medieval village',
      'Castle walls walk',
      'Ginjinha tasting in chocolate cup',
    ],
    itinerary: [
      {
        location: 'Sintra',
        description: 'Morning exploring Sintra with visit to Pena Palace or Quinta da Regaleira, plus time in the historic center.',
      },
      {
        location: 'Cabo da Roca',
        description: 'Stop at the dramatic cliffs at the edge of Europe.',
      },
      {
        location: 'Óbidos',
        description: 'Afternoon in the medieval village of Óbidos, walking the castle walls and tasting the famous ginjinha.',
      },
    ],
  },

  // 10 - Tour Algarve: Praia da Rocha, Lagos e Sagres
  'tour-algarve-praia-da-rocha-lagos-sagres': {
    title: 'Algarve: Praia da Rocha, Lagos and Sagres',
    subtitle: 'Golden Beaches and Dramatic Cliffs',
    description: 'Discover the Algarve with its spectacular beaches, impressive cliffs and the historic "End of the World" at Sagres.',
    longDescription: `Journey to the south of Portugal to discover the Algarve's most iconic locations: from the golden beaches to the dramatic cliffs where Prince Henry the Navigator planned the Portuguese Discoveries.`,
    highlights: [
      'Praia da Rocha - Iconic beach',
      'Lagos - Ponta da Piedade cliffs',
      'Sagres - Fortress and End of the World',
      'Cape St. Vincent - Southwesternmost point',
      'Traditional Algarve cuisine',
    ],
    itinerary: [
      {
        location: 'Praia da Rocha',
        description: 'Start at one of the Algarve\'s most famous beaches with its impressive rock formations and golden sand.',
      },
      {
        location: 'Lagos',
        description: 'Visit the historic city of Lagos and the spectacular cliffs of Ponta da Piedade with its hidden grottoes and turquoise waters.',
      },
      {
        location: 'Sagres',
        description: 'Explore the fortress of Sagres where Prince Henry the Navigator established his navigation school.',
      },
      {
        location: 'Cape St. Vincent',
        description: 'End at the "End of the World", the southwesternmost point of Europe with its powerful lighthouse.',
      },
    ],
  },

  // 11 - Tour Fátima e Coimbra
  'tour-fatima-coimbra': {
    title: 'Fátima and Coimbra',
    subtitle: 'Faith and Knowledge',
    description: 'Combine the spiritual experience of Fátima with the academic heritage of Coimbra.',
    longDescription: `A journey that unites faith and knowledge, visiting Portugal's most important religious site and one of Europe's oldest universities.`,
    highlights: [
      'Fátima Sanctuary',
      'University of Coimbra',
      'Joanina Library',
      'Old Cathedral of Coimbra',
      'Student traditions',
    ],
    itinerary: [
      {
        location: 'Fátima',
        description: 'Morning at the Sanctuary with time for mass and visiting the sacred sites.',
      },
      {
        location: 'Coimbra',
        description: 'Afternoon exploring the historic university, including the magnificent Joanina Library and the old city.',
      },
    ],
  },

  // 12 - Passeio Fátima e Óbidos
  'passeio-fatima-obidos': {
    title: 'Fátima and Óbidos Tour',
    subtitle: 'Pilgrimage and Medieval Heritage',
    description: 'Visit the Sanctuary of Fátima and the charming medieval village of Óbidos.',
    longDescription: `Combine spiritual devotion at Fátima with the medieval enchantment of Óbidos, one of Portugal's most romantic villages.`,
    highlights: [
      'Fátima - Marian sanctuary',
      'Chapel of Apparitions',
      'Óbidos - Medieval walls',
      'Ginjinha liqueur tasting',
      'Traditional handicrafts',
    ],
    itinerary: [
      {
        location: 'Fátima',
        description: 'Visit the Sanctuary with time for prayer and reflection.',
      },
      {
        location: 'Óbidos',
        description: 'Explore the medieval village within walls, with its narrow streets and traditional shops.',
      },
    ],
  },

  // 13 - Tour Templários em Portugal
  'tour-templarios-portugal': {
    title: 'Templars in Portugal',
    subtitle: 'Castles and Mysteries',
    description: 'Follow the footsteps of the Knights Templar through their castles and the headquarters of the Order of Christ.',
    longDescription: `Discover the legacy of the Knights Templar in Portugal, from their castles to the Convent of Christ in Tomar, headquarters of the Order that financed the Portuguese Discoveries.`,
    highlights: [
      'Convent of Christ - Tomar',
      'Templar Castle',
      'Charola - Templar church',
      'Almourol Castle - Island fortress',
      'Templar symbolism and mysteries',
    ],
    itinerary: [
      {
        location: 'Tomar',
        description: 'Visit the Convent of Christ, former Templar headquarters, with its famous Charola and Manueline window.',
      },
      {
        location: 'Almourol Castle',
        description: 'Visit the romantic castle on an island in the middle of the Tagus River.',
      },
      {
        location: 'Templar History',
        description: 'Learn about the transformation of the Templars into the Order of Christ and their role in the Discoveries.',
      },
    ],
  },

  // 14 - Tour Coimbra e Aveiro
  'tour-coimbra-aveiro': {
    title: 'Coimbra and Aveiro',
    subtitle: 'University and Venice of Portugal',
    description: 'Visit the historic university of Coimbra and the charming Aveiro with its canals and moliceiros boats.',
    longDescription: `Discover two gems of central Portugal: the academic Coimbra with its centuries-old traditions and Aveiro, known as the Portuguese Venice with its picturesque canals.`,
    highlights: [
      'University of Coimbra - UNESCO',
      'Aveiro - Canals and moliceiros',
      'Art Nouveau architecture',
      'Ovos moles - Traditional sweet',
      'Costa Nova - Striped houses',
    ],
    itinerary: [
      {
        location: 'Coimbra',
        description: 'Explore the historic university and the old city with its traditions.',
      },
      {
        location: 'Aveiro',
        description: 'Boat ride on the canals in traditional moliceiros and visit the Art Nouveau buildings.',
      },
      {
        location: 'Costa Nova',
        description: 'See the famous striped houses (palheiros) by the beach.',
      },
    ],
  },

  // 15 - Passeio Porto e Santiago de Compostela
  'passeio-porto-santiago-compostela': {
    title: 'Porto and Santiago de Compostela',
    subtitle: 'Port Wine and the Camino',
    description: 'Cross the border to visit Santiago de Compostela, final destination of the Camino, combined with Porto.',
    longDescription: `An international journey combining Porto's wine culture with the spiritual significance of Santiago de Compostela in Spanish Galicia.`,
    highlights: [
      'Porto - Wine cellars',
      'Santiago de Compostela - Cathedral',
      'Pilgrim traditions',
      'Galician gastronomy',
      'Cross-border experience',
    ],
    itinerary: [
      {
        location: 'Porto',
        description: 'Morning exploring Porto and its Port wine cellars.',
      },
      {
        location: 'Santiago de Compostela',
        description: 'Visit the famous Cathedral and explore the historic center of this pilgrimage city.',
      },
    ],
  },

  // 16 - Passeio Tomar, Convento de Cristo e Coimbra
  'passeio-tomar-convento-cristo-coimbra': {
    title: 'Tomar, Convent of Christ and Coimbra',
    subtitle: 'Templars and Academia',
    description: 'Visit the Templar city of Tomar and the university city of Coimbra.',
    longDescription: `Discover the Templar heritage in Tomar with its impressive Convent of Christ, followed by the academic traditions of Coimbra.`,
    highlights: [
      'Convent of Christ - UNESCO',
      'Manueline window',
      'University of Coimbra',
      'Joanina Library',
      'Portuguese history',
    ],
    itinerary: [
      {
        location: 'Tomar',
        description: 'Explore the Convent of Christ with its Templar church and cloisters.',
      },
      {
        location: 'Coimbra',
        description: 'Visit the historic university and experience the academic atmosphere.',
      },
    ],
  },

  // 17 - Tour Fátima e Santiago de Compostela
  'tour-fatima-santiago-compostela': {
    title: 'Fátima and Santiago de Compostela',
    subtitle: 'Two Great Pilgrimages',
    description: 'Connect two of the most important Catholic pilgrimage sites in the Iberian Peninsula.',
    longDescription: `A spiritual journey connecting Fátima, site of the Marian apparitions, with Santiago de Compostela, the destination of the famous Camino pilgrimage.`,
    highlights: [
      'Fátima Sanctuary',
      'Santiago Cathedral',
      'Tomb of St. James',
      'Pilgrim traditions',
      'Religious heritage',
    ],
    itinerary: [
      {
        location: 'Fátima',
        description: 'Visit the Sanctuary and sites of the apparitions.',
      },
      {
        location: 'Journey to Santiago',
        description: 'Travel through northern Portugal into Galicia.',
      },
      {
        location: 'Santiago de Compostela',
        description: 'Explore the Cathedral and the pilgrim city.',
      },
    ],
  },

  // 18 - Passeio a Sintra e Mafra
  'passeio-sintra-mafra': {
    title: 'Sintra and Mafra Tour',
    subtitle: 'Palaces and Baroque Grandeur',
    description: 'Visit the romantic Sintra and the impressive National Palace of Mafra.',
    longDescription: `Discover two architectural jewels: the romantic palaces of Sintra and the baroque magnificence of Mafra Palace, the Portuguese Versailles.`,
    highlights: [
      'Sintra - Romantic palaces',
      'Mafra Palace - Portuguese baroque',
      'Basilica of Mafra',
      'Historic library with 36,000 books',
      'Ericeira - Surfing village',
    ],
    itinerary: [
      {
        location: 'Sintra',
        description: 'Morning exploring Sintra\'s palaces and historic center.',
      },
      {
        location: 'Mafra',
        description: 'Visit the monumental Palace-Convent with its basilica and famous library.',
      },
      {
        location: 'Ericeira',
        description: 'Optional stop at this charming fishing and surfing village.',
      },
    ],
  },

  // 19 - Passeio de Fátima 5h
  'passeio-fatima-5horas': {
    title: 'Fátima Tour 5h',
    subtitle: 'Marian Sanctuary of Portugal',
    description: 'Visit the famous Sanctuary of Fátima, one of the world\'s largest pilgrimage centers, built where the Virgin Mary appeared to three shepherds in 1917.',
    longDescription: `Departing from Lisbon heading north, we arrive at Fátima where we will visit the famous Sanctuary. It is one of the world's largest pilgrimage centers, built around the site where, in 1917, the Virgin Mary appeared to three shepherds. After visiting the Basilica where the three visionaries are buried, the chapel of apparitions and the modern Church of the Holy Trinity, we will have some free time to pray or attend mass celebration (optional).`,
    highlights: [
      'Chapel of Apparitions',
      'Basilica of Our Lady of the Rosary',
      'Basilica of the Holy Trinity',
      'Tombs of Lúcia, Jacinta and Francisco',
      'Valinhos - Shepherds\' houses',
      'Time for prayer or mass',
    ],
    itinerary: [
      {
        location: 'Fátima - Sanctuary',
        description: 'The famous Marian sanctuary of Fátima is undoubtedly one of the world\'s largest pilgrimage centers. Millions of people come here annually to pay homage to the three little shepherds who witnessed the apparition of the Virgin at Cova da Iria. Free time to attend mass (optional), visit the Chapel of Apparitions where you can see the image of Our Lady of Fátima, and the Basilica where the tombs of Lúcia, Jacinta and Francisco are located (the latter two canonized by Pope Francis in May 2017, thus becoming the youngest saints of the Catholic Church).',
      },
      {
        location: 'Church of the Holy Trinity',
        description: 'Visit to the modern Church of the Holy Trinity of Fátima, with 8,633 seats and 40,000 m² area, a project by Greek architect Alexandros Tombazis. Time to shop for religious items for yourself, your family and friends.',
      },
      {
        location: 'Valinhos',
        description: 'The village where the three little shepherds were born, Lúcia, Jacinta and Francisco. Here in Valinhos we visit the limestone houses belonging to their families who were dedicated to agriculture and sheep farming, in an isolated and poor, but very beautiful environment in the interior of Portugal.',
      },
    ],
  },

  // 20 - Passeio a Sintra 4h
  'passeio-sintra-4horas': {
    title: 'Sintra Tour 4h',
    subtitle: 'Capital of Romanticism',
    description: 'This tour unveils the magic of this unique place on earth. Sintra takes us to enchanted palaces and castles, stunning views, mysterious caves and secret trails.',
    longDescription: `Sintra's microclimate is the key to the lush vegetation often praised by romantic authors and philanthropists of the 19th century, notably William Beckford, Lord Byron or Francis Cook. We will walk through the old stone streets with cozy shops displaying local crafts and pastry shops where you can taste the delicious Travesseiros and Queijadas.`,
    highlights: [
      'Historic center of Sintra',
      'Piriquita Pastry - Travesseiros and Queijadas',
      'Option to visit a palace',
      'Hell\'s Mouth - Rocky crater',
      'Cascais Bay',
      'Estoril and the famous Casino',
    ],
    itinerary: [
      {
        location: 'Queluz Palace (Optional)',
        description: 'Visit to Queluz Palace, the "Portuguese Versailles", with its three architectural styles: Renaissance, Baroque and Neo-classical, French gardens decorated with fountains by English artists, Italian statues and a magnificent canal (pool-lake) decorated with 18th century tiles. It was the official residence of D. João VI. Here we can visit the room where Pedro I of Brazil was born and died. (Optionally you can visit one of Sintra\'s palaces: National Palace of Sintra, Pena Palace, Quinta da Regaleira or Monserrate Palace)',
      },
      {
        location: 'Sintra - Historic Center',
        description: 'Sintra is undoubtedly one of the most extraordinary places in Portugal. Its microclimate makes this small town on the mountainside and next to the Atlantic an attraction point for visitors who pass by to admire its famous castles, or simply enjoy the traditional pastries and food, not forgetting the shops with their typical local items. Stop in the historic center and free time where you can taste the famous travesseiros and queijadas at Piriquita pastry shop and explore the alleys of the most romantic city in Portugal.',
      },
      {
        location: 'Hell\'s Mouth',
        description: 'Stop to photograph Hell\'s Mouth, an imposing rocky crater facing the Atlantic Ocean, formed by wave erosion over the centuries.',
      },
      {
        location: 'Cascais',
        description: 'This former Roman fishing town became in the 20th century one of the favorite beach resorts of Lisboetas who go there to enjoy the sun and sea, its bars and restaurants. Known internationally for its major nautical events (World Cup Sailing, America\'s Cup, Red Bull Flugtag), Cascais attracts many tourists from around the world, both to visit and to live, being one of the most cosmopolitan cities in Europe. Free time to explore the streets of Cascais.',
      },
      {
        location: 'Estoril Coast',
        description: 'Return trip to Lisbon along the Estoril Coast with stunning sea views, passing by the famous Estoril casino that inspired Ian Fleming to write "Casino Royale".',
      },
    ],
  },
};