import { siteConfig } from '@/config/site';
import { Link } from '@/navigation';
import React from 'react';
import { Icons } from '../icons';

const HeaderLinks = () => {
  const links = siteConfig.headerLinks;

  return (
    <div className="flex flex-row items-center gap-6">
      {links.map((link, index) => (
        <Link
          aria-label={link.name}
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener norefferer nofollow"
          className={` flex max-w-[24px] flex-col items-center justify-center`}
        >
          {link.icon && <link.icon />}
        </Link>
      ))}
    </div>
  );
};
export default HeaderLinks;
