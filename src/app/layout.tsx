import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Script from 'next/script';
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
  title: 'Pedrazzoli Tours Portugal | Tours Privados Exclusivos',
  description:
    'Descubra Portugal com tours privados personalizados. Transporte premium com motorista-guia certificado. Lisboa, Sintra, Fátima, Óbidos e mais.',
  keywords:
    'tours portugal, tours privados lisboa, transporte privado portugal, passeios turísticos portugal, sintra tour, fátima tour, óbidos tour, pedrazzoli tours',
  authors: [{ name: 'Pedrazzoli Tours Portugal' }],
  openGraph: {
    title: 'Pedrazzoli Tours Portugal | Tours Privados Exclusivos',
    description:
      'Descubra Portugal com tours privados personalizados. Transporte premium com motorista-guia certificado.',
    url: 'https://www.pedrazzolitours.pt',
    siteName: 'Pedrazzoli Tours Portugal',
    locale: 'pt_PT',
    type: 'website',
    images: [
      {
        url: 'https://www.pedrazzolitours.pt/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pedrazzoli Tours Portugal - Tours Privados',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pedrazzoli Tours Portugal | Tours Privados Exclusivos',
    description: 'Descubra Portugal com tours privados personalizados.',
    images: ['https://www.pedrazzolitours.pt/og-image.jpg'],
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
  alternates: {
    canonical: 'https://www.pedrazzolitours.pt',
  },
  verification: {
    google: 'seu-codigo-de-verificacao-aqui',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt' className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy='afterInteractive'
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
            <Script
              id='google-analytics'
              strategy='afterInteractive'
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Google Tag Manager (Opcional) */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <Script
            id='google-tag-manager'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
              `,
            }}
          />
        )}

        {/* Facebook Pixel (Opcional) */}
        {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && (
          <Script
            id='facebook-pixel'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
        )}

        {/* Verificação do Google Search Console */}
        <meta name='google-site-verification' content='seu-codigo-aqui' />

        {/* PWA */}
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#006847' />

        {/* Favicons */}
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />

        {/* Preconnect para melhor performance */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />

        {/* DNS Prefetch para serviços externos */}
        <link rel='dns-prefetch' href='https://www.googletagmanager.com' />
        <link rel='dns-prefetch' href='https://www.google-analytics.com' />

        {/* Schema.org JSON-LD */}
        <Script
          id='schema-org'
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'TravelAgency',
              name: 'Pedrazzoli Tours Portugal',
              description:
                'Tours privados exclusivos em Portugal com motorista-guia certificado',
              url: 'https://www.pedrazzolitours.pt',
              telephone: '+351912164220',
              email: 'pedrazzoliorlando@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Oeiras',
                addressRegion: 'Lisboa',
                addressCountry: 'PT',
              },
              priceRange: '€€',
              image: 'https://www.pedrazzolitours.pt/logo.jpg',
              sameAs: [
                'https://www.facebook.com/pedrazzolitours',
                'https://www.instagram.com/pedrazzolitours',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '500',
              },
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        {/* Facebook Pixel (noscript) */}
        {process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID && (
          <noscript>
            <img
              height='1'
              width='1'
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=''
            />
          </noscript>
        )}

        {children}
      </body>
    </html>
  );
}
