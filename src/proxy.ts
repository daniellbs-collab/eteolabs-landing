import { NextRequest, NextResponse } from 'next/server';

function normalizeHost(hostHeader: string | null): string {
  if (!hostHeader) return '';
  return hostHeader.split(':')[0].toLowerCase();
}

export function proxy(request: NextRequest) {
  const host = normalizeHost(request.headers.get('host'));
  const pathname = request.nextUrl.pathname;
  const isWwwMainHost = host === 'www.eteolabs.com.br';
  const isNexusHost = host.startsWith('nexus.');

  if (isWwwMainHost) {
    const url = request.nextUrl.clone();
    url.host = 'eteolabs.com.br';
    return NextResponse.redirect(url, 308);
  }

  if (isNexusHost && pathname === '/') {
    const url = request.nextUrl.clone();
    url.pathname = '/nexus';
    return NextResponse.rewrite(url);
  }

  if (isNexusHost && pathname === '/nexus') {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
