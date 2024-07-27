import React from 'react';
import { Link } from '@/navigation';
import { getTranslations } from 'next-intl/server';
import { siteConfig } from '@/config/site';

const Footer = async () => {
  const t = await getTranslations();

  return (
    <div className="relative border-t border-neutral-100 bg-white px-8 pb-32 pt-20 dark:border-neutral-800 dark:bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between text-sm text-neutral-500 dark:text-neutral-400 sm:flex-row">
        <div>
          <div className="mb-4 mr-4 md:flex">
            <Link
              href="/"
              className="relative z-20 mr-4 flex items-center space-x-2 py-1 text-sm font-normal text-black"
            >
              <span className="font-medium text-black dark:text-white">
                {t('Header.title')}
              </span>
            </Link>
          </div>
          <div>Copyright © 2024 {siteConfig.author}</div>
          <div className="mt-2">All rights reserved</div>
        </div>
        <div className="mt-10 grid grid-cols-3 items-start gap-10 md:mt-0">
          <FooterLinkColumn>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterLinkColumn>
          <FooterLinkColumn>
            <FooterLink href={siteConfig.links.twitter}>Twitter</FooterLink>
            <FooterLink href={siteConfig.links.github}>GitHub</FooterLink>
          </FooterLinkColumn>
          <FooterLinkColumn>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
            <FooterLink href="#">Refund Policy</FooterLink>
          </FooterLinkColumn>
        </div>
      </div>
    </div>
  );
};

interface FooterLinkColumnProps {
  children: React.ReactNode;
}

const FooterLinkColumn: React.FC<FooterLinkColumnProps> = ({ children }) => (
  <div className="mt-4 flex flex-col justify-center space-y-4">{children}</div>
);

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <Link href={href} className="">
    {children}
  </Link>
);

export default Footer;
