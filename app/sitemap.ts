import { MetadataRoute } from 'next';
import { defaultLocale, locales } from '@/i18n';

// Can be imported from shared config

// Adapt this as necessary
const pathnames = ['/'];
const host = process.env.NEXT_PUBLIC_APP_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  function getUrl(pathname: string, locale: string) {
    return `${host}/${locale}${pathname === '/' ? '' : pathname}`;
  }

  return pathnames.map((pathname) => ({
    url: getUrl(pathname, defaultLocale),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, getUrl(pathname, locale)]),
      ),
    },
  }));
}
