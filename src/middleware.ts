import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Verificar se é uma rota de tour
  if (pathname.startsWith('/tours/')) {
    const slug = pathname.split('/tours/')[1];

    // Lista de slugs válidos dos tours
    const validSlugs = [
      'lisboa-tour-privado-dia-completo',
      'sintra-cascais-costa-estoril',
      'fatima-batalha-nazare-obidos',
      'sintra-obidos-tour-privado',
      'fatima-meio-dia-tour-privado',
      'sintra-meio-dia-tour-privado',
      'jantar-fado-transporte-privado',
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
