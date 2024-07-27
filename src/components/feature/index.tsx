import { cn } from '@/lib/utils';
import {
  Settings,
  Cloud,
  DollarSign,
  Heart,
  TrendingUp,
  Route,
  HelpCircle,
  Terminal,
} from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      title: 'Built for developers',
      description:
        'Built for engineers, developers, dreamers, thinkers and doers.',
      icon: <Terminal />,
    },
    {
      title: 'Ease of use',
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <TrendingUp />,
    },
    {
      title: 'Pricing like no other',
      description:
        'Our prices are best in the market. No cap, no lock, no credit card required.',
      icon: <DollarSign />,
    },
    {
      title: '100% Uptime guarantee',
      description: 'We just cannot be taken down by anyone.',
      icon: <Cloud />,
    },
    {
      title: 'Multi-tenant Architecture',
      description: 'You can simply share passwords instead of buying new seats',
      icon: <Route />,
    },
    {
      title: '24/7 Customer Support',
      description:
        'We are available a 100% of the time. Atleast our AI Agents are.',
      icon: <HelpCircle />,
    },
    {
      title: 'Money back guarantee',
      description:
        'If you donot like EveryAI, we will convince you to like us.',
      icon: <Settings />,
    },
    {
      title: 'And everything else',
      description: 'I just ran out of copy ideas. Accept my sincere apologies',
      icon: <Heart />,
    },
  ];
  return (
    <div className="py-40">
      <div className="mx-auto max-w-5xl text-center text-3xl font-medium tracking-tight text-black dark:text-white md:text-5xl md:leading-tight">
        Features
      </div>
      <div className="relative z-10 mx-auto grid  max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        'group/feature relative flex  flex-col py-10 dark:border-neutral-800 lg:border-r',
        (index === 0 || index === 4) && 'dark:border-neutral-800 lg:border-l',
        index < 4 && 'dark:border-neutral-800 lg:border-b',
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      <div className="relative z-10 mb-4 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="relative z-10 mb-2 px-10 text-lg font-bold">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-br-full rounded-tr-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-neutral-700" />
        <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-600 dark:text-neutral-300">
        {description}
      </p>
    </div>
  );
};
