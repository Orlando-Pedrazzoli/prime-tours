import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verificar se é uma rota de tour
  if (pathname.startsWith('/tours/')) {
    const slug = pathname.split('/tours/')[1];

    // ✅ Lista de slugs válidos (SINCRONIZADO COM SITEMAP.XML)
    const validSlugs = [
      'tour-de-lisboa',
      'passeio-sintra-cascais-estoril',
      'passeio-obidos-nazare-fatima',
      'passeio-evora-monsaraz',
      'tour-porto-8h',
      'tour-porto-10h',
      'passeio-douro-8h',
      'passeio-porto-douro-2d-hotel',
      'passeio-porto-douro-2d-quinta',
      'passeio-porto-guimaraes-braga',
      'passeio-norte-2-dias',
      'passeio-sul-2-dias',
      'passeio-costa-vicentina-8h',
      'tour-oeste-medieval',
      'tour-oeste-e-centro-2d',
      'passeio-mafra-ericeira-peniche',
      'passeio-palacio-mafra-5h',
      'passeio-fatima-batalha-alcobaca',
      'passeio-fatima-5h',
      'passeio-sintra-4horas',
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
