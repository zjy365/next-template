import { Icons } from '@/components/icons';
import { env } from '@/env.mjs';
import { SiteConfig } from '@/types';

export const OPEN_SOURCE_URL = 'https://github.com/zjy365/next-template';

export const siteConfig: SiteConfig = {
  name: 'Next Template',
  author: 'zjy365',
  description:
    'A starter template based on Next.js 14+, featuring app router, shadcn/ui, type-safe environment variables, icons and config setup, and support for next-intl internationalization. Ideal for quickly starting and developing modern web applications.',
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Radix UI',
    'shadcn/ui',
    'next-intl',
    'i18n',
  ],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: 'https://github.com/zjy365',
  },
  headerLinks: [{ name: 'repo', href: OPEN_SOURCE_URL, icon: Icons.github }],
  links: {
    github: OPEN_SOURCE_URL,
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.png?${new Date()}`,
};
