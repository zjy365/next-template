import Header from '@/components/header';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import { CircleIndicator } from '@/components/motion/test';
import GridBackground from '@/components/header/grid-background';

export default function Home() {
  const t = useTranslations('Header');

  return (
    <main>
      <Header />
      <div className="relative flex items-center justify-center">
        <GridBackground />

        <div className="container relative flex h-full min-h-screen flex-col pt-64">
          <div className="flex flex-col items-center gap-8 text-center">
            <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
              {t('title')}
            </h1>

            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              {t('description')}
            </p>

            <div className="flex gap-2">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                className={cn(buttonVariants({ size: 'default' }))}
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="h-96"></div>
          <div className="h-96"></div>
          <div className="h-96"></div>
        </div>
      </div>
    </main>
  );
}
