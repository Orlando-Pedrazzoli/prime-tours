import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verificar se é uma rota de tour
  if (pathname.startsWith('/tours/')) {
    const slug = pathname.split('/tours/')[1];

    // ✅ LISTA CORRETA DE SLUGS (24 tours que REALMENTE EXISTEM no site)
    const validSlugs = [
      'tour-de-lisboa',
      'passeio-sintra-cascais-estoril',
      'fatima-batalha-nazare-obidos',
      'tour-lisboa-sintra',
      'tour-evora-monsaraz',
      'tour-azeitao-palmela-sesimbra-arrabida-setubal',
      'tour-coimbra-porto',
      'passeio-fatima-sintra',
      'passeio-sintra-obidos',
      'tour-algarve-praia-da-rocha-lagos-sagres',
      'tour-fatima-coimbra',
      'passeio-fatima-obidos',
      'tour-templarios-portugal',
      'tour-coimbra-aveiro',
      'passeio-porto-santiago-compostela',
      'passeio-tomar-convento-cristo-coimbra',
      'tour-fatima-santiago-compostela',
      'passeio-sintra-mafra',
      'passeio-fatima-5horas',
      'passeio-sintra-4horas',
      'tour-lisboa-4horas',
      'tour-a-pe-bonde-lisboa',
      'passeio-noturno-lisboa',
      'passeio-lisboa-noite-fado-jantar',
    ];

    // Se o slug não existe, redirecionar para a seção de tours
    if (slug && !validSlugs.includes(slug)) {
      return NextResponse.redirect(new URL('/#tours', request.url));
    }
  }

  // Redirecionar antigas URLs se necessário
  if (pathname === '/tour' || pathname === '/passeios') {
    return NextResponse.redirect(new URL('/#tours', request.url));
  }

  // Redirecionar URLs antigas de tours
  if (pathname === '/tours' || pathname === '/tours/') {
    return NextResponse.redirect(new URL('/#tours', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
