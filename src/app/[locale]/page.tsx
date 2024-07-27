import { Features } from '@/components/feature';
import { Feedbacks } from '@/components/feature/feedback';
import { ReadyCard } from '@/components/feature/ready-card';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { GridBackground } from '@/components/header/grid-background';
import { buttonVariants } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations('Header');

  return (
    <main>
      <Header />
      <div className="relative flex items-center justify-center">
        <GridBackground />
        <div className="container relative flex h-full min-h-screen flex-col pt-56">
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
          <div className="relative mt-24 rounded-[32px] border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 w-full scale-[1.1] bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black"></div>
            <div className="rounded-[24px] border border-neutral-200 bg-white p-2 dark:border-neutral-700 dark:bg-black">
              <Image
                alt="header"
                src="/images/header.png"
                width={1920}
                height={1080}
                className="rounded-[20px]"
              />
            </div>
          </div>
          <Features />
          <Feedbacks />
          {/* <ReadyCard /> */}
          <Footer />
        </div>
      </div>
    </main>
  );
}
