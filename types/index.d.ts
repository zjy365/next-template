export type SiteConfig = {
  name: string;
  author: string;
  description: string;
  keywords: Array<string>;
  url: {
    base: string;
    author: string;
  };
  links: {
    github: string;
    twitter: string;
  };
  headerLinks: { name: string; href: string; icon: React.ElementType }[];
  ogImage: string;
};
