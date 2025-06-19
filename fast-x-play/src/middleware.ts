import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const defaultLocale = 'en';
const locales = ['en', 'ku', 'ar'];

// Get the preferred locale, similar to next-intl
export function middleware(request: NextRequest) {
  // Get pathname
  const pathname = request.nextUrl.pathname;

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // If it's missing a locale, redirect to the default locale
  if (pathnameIsMissingLocale) {
    // If it's just the root path, redirect to the default locale
    if (pathname === '/') {
      return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
    }

    // Otherwise, prefix the pathname with the default locale
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

// Only run the middleware on the specified paths
export const config = {
  matcher: [
    // Skip all internal paths
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 