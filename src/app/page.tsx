import { siteConfig } from '@/config/site';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24">
      <h1>{siteConfig.name}</h1>
      <h2>{siteConfig.description}</h2>
    </main>
  );
}
