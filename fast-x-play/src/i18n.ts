import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`./messages/${locale}.json`)).default
}));

export const locales = ['en', 'ku', 'ar'];
export const defaultLocale = 'en';

// We need this function to guard against unsupported locales
export function getLocale(pathname: string): string | undefined {
  const segments = pathname.split('/');
  const locale = segments.find((segment) => locales.includes(segment));
  return locale;
}

export function isValidLocale(locale: string | undefined): locale is string {
  return locale !== undefined && locales.includes(locale);
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
} 