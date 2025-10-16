import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { tours } from '@/data/tours';
import TourDetailHeader from '@/components/TourDetailHeader';
import TourDetailContent from '@/components/TourDetailContent';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// Gerar metadata dinâmica para SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const tour = tours.find(t => t.slug === params.slug);

  if (!tour) {
    return {
      title: 'Tour não encontrado | Premiere Tours Portugal',
      description: 'O tour solicitado não foi encontrado.',
    };
  }

  return {
    title: `${tour.title} | Premiere Tours Portugal`,
    description: tour.description,
    keywords: `${
      tour.title
    }, tours portugal, tour privado, ${tour.title.toLowerCase()}`,
    openGraph: {
      title: `${tour.title} | Premiere Tours Portugal`,
      description: tour.description,
      images: [
        {
          url: tour.image,
          width: 1200,
          height: 630,
          alt: tour.title,
        },
      ],
      type: 'website',
      url: `https://premieretours.pt/tours/${tour.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tour.title} | Premiere Tours Portugal`,
      description: tour.description,
      images: [tour.image],
    },
    alternates: {
      canonical: `https://premieretours.pt/tours/${tour.slug}`,
    },
  };
}

// Gerar rotas estáticas no build
export async function generateStaticParams() {
  return tours.map(tour => ({
    slug: tour.slug,
  }));
}

export default function TourDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const tour = tours.find(t => t.slug === params.slug);

  if (!tour) {
    notFound();
  }

  // Schema.org structured data para SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: tour.title,
    description: tour.description,
    image: tour.image,
    offers: {
      '@type': 'Offer',
      price: tour.price.total,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
    },
    provider: {
      '@type': 'TravelAgency',
      name: 'Premiere Tours Portugal',
      telephone: '+351 912 164 220',
      email: 'pedrazzoliorlando@gmail.com',
    },
    duration: tour.duration,
    touristType: 'Private Tour',
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Header />
      <main className='min-h-screen bg-gray-50'>
        <TourDetailHeader tour={tour} />
        <TourDetailContent tour={tour} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
