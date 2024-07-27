import { Link } from '@/navigation';
import { GridBackground } from '../header/grid-background';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

export function ReadyCard() {
  return (
    <div className="container relative py-60">
      <GridBackground gridRows={5} />
      <div className="relative z-10">
        <div
          className="flex h-[380px] w-full cursor-pointer flex-col items-center justify-center rounded-xl border border-gray-950/[.1] bg-gray-950/5 
                      p-5 py-20
                      transition-all 
                      duration-300
                      dark:border-gray-50/[.1] dark:bg-gray-50/[.10]"
        >
          <h2 className="mb-3 text-center text-3xl font-bold text-gray-800 dark:text-white">
            Ready to explore?
          </h2>
          <div className="mt-10 flex justify-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              className={cn(buttonVariants({ size: 'default' }), 'w-36')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
