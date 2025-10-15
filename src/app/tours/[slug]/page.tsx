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
      title: 'Tour não encontrado',
    };
  }

  return {
    title: `${tour.title} | Premiere Tours Portugal`,
    description: tour.description,
    openGraph: {
      title: tour.title,
      description: tour.description,
      images: [tour.image],
      type: 'website',
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

  return (
    <>
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
