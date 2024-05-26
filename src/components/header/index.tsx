'use client';
import HeaderLinks from '@/components/header/header-links';
import { LangSwitcher } from '@/components/header/lang-switcher';
import { siteConfig } from '@/config/site';
import { MenuIcon } from 'lucide-react';
import Image from 'next/image';

import { useState } from 'react';
import { Icons } from '../icons';
import { ThemedButton } from '../themed-button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <nav className="relative z-50 flex justify-between">
        <div className="flex items-center md:gap-x-12">
          {/* <Link
            href="/"
            aria-label={siteConfig.name}
            title={siteConfig.name}
            className="flex items-center gap-2 font-bold"
          >
            <Image
              alt={siteConfig.name}
              src="/logo.svg"
              className="h-8 w-8"
              width={32}
              height={32}
            />
            <span className="hidden md:block">{siteConfig.name}</span>
          </Link> */}
        </div>
        <div className="hidden items-center gap-x-6 md:flex">
          <HeaderLinks />
          <ThemedButton />
          <LangSwitcher />
        </div>
        <div className="md:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50 -mr-1 rounded p-2 transition duration-200 focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon />
          </button>
          {isMenuOpen && (
            <div className="absolute left-0 top-0 z-50 w-full">
              <div className="rounded border bg-background p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    {/* <Link
                      href="/"
                      aria-label={siteConfig.name}
                      title={siteConfig.name}
                      className="inline-flex items-center"
                    >
                      <Image
                        alt={siteConfig.name}
                        src="/logo.svg"
                        className="h-8 w-8"
                        width={32}
                        height={32}
                      />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-950 dark:text-gray-300">
                        {siteConfig.name}
                      </span>
                    </Link> */}
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="font-norma tracking-wide transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icons.close />
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-center justify-between gap-x-5">
                    <HeaderLinks />
                    <div className="flex items-center justify-end gap-x-5">
                      <ThemedButton />
                      <LangSwitcher />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
