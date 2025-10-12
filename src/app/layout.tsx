import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Premiere Tours Portugal | Tours Privados Exclusivos',
  description:
    'Descubra Portugal com tours privados personalizados. Transporte premium com motorista-guia certificado. Lisboa, Sintra, Fátima, Óbidos e mais.',
  keywords:
    'tours portugal, tours privados lisboa, transporte privado portugal, passeios turísticos portugal, sintra tour, fátima tour, óbidos tour',
  authors: [{ name: 'Premiere Tours Portugal' }],
  openGraph: {
    title: 'Premiere Tours Portugal | Tours Privados Exclusivos',
    description:
      'Descubra Portugal com tours privados personalizados. Transporte premium com motorista-guia certificado.',
    url: 'https://premieretours.pt',
    siteName: 'Premiere Tours Portugal',
    locale: 'pt_PT',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1200',
        width: 1200,
        height: 630,
        alt: 'Premiere Tours Portugal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premiere Tours Portugal | Tours Privados Exclusivos',
    description: 'Descubra Portugal com tours privados personalizados.',
    images: [
      'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1200',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt' className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
