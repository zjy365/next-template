import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { localePrefix, locales, pathnames } from '@/i18n';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, pathnames, localePrefix });
