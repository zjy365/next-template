import { SiteConfig } from '@/types';
import { env } from '@/env.mjs';

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
  links: {
    github: 'https://github.com/zjy365/next-template',
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
};
