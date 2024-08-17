'use client';

import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';

interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  highlight?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    id: 'hobby',
    name: 'Hobby',
    description: 'The essentials to provide your best work for clients.',
    price: 15,
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics'],
  },
  {
    id: 'freelancer',
    name: 'Freelancer',
    description: 'The essentials to provide your best work for clients.',
    price: 30,
    features: [
      '5 products',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '48-hour support response time',
    ],
  },
  {
    id: 'startup',
    name: 'Startup',
    description: 'A plan that scales with your rapidly growing business.',
    price: 60,
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    highlight: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Dedicated support and infrastructure for your company.',
    price: 90,
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools',
    ],
  },
];

const PricingComponent: React.FC = () => {
  const [billingFrequency, setBillingFrequency] = useState('monthly');

  const pricesList = pricingTiers.map((i) => ({
    ...i,
    price: billingFrequency === 'monthly' ? i.price : i.price * 10,
  }));

  return (
    <div className="bg-white py-24 dark:bg-gray-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mx-auto max-w-5xl text-center text-3xl font-medium tracking-tight text-black dark:text-white md:text-5xl md:leading-tight">
            Pricing
          </h1>
        </div>
        <div className="mt-14 flex justify-center">
          <Tabs
            defaultValue={billingFrequency}
            onValueChange={(v) => {
              setBillingFrequency(v);
            }}
            className="w-[300px]"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="annually">Annually</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="isolate mx-auto mt-12 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {pricesList.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl p-8 ring-1 ${
                tier.highlight
                  ? 'bg-gray-900 ring-gray-900 dark:bg-gray-800 dark:ring-gray-800'
                  : 'ring-gray-200 dark:bg-gray-800 dark:ring-gray-700'
              }`}
            >
              <h2
                id={`tier-${tier.id}`}
                className={`text-lg font-semibold leading-8 ${
                  tier.highlight
                    ? 'text-white'
                    : 'text-gray-900 dark:text-white'
                }`}
              >
                {tier.name}
              </h2>
              <p
                className={`mt-4 text-sm leading-6 ${
                  tier.highlight
                    ? 'text-gray-300'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span
                  className={`text-4xl font-bold tracking-tight ${
                    tier.highlight
                      ? 'text-white'
                      : 'text-gray-900 dark:text-white'
                  }`}
                >
                  ${tier.price}
                </span>
                <span
                  className={`text-sm font-semibold leading-6 ${
                    tier.highlight
                      ? 'text-gray-300'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  /month
                </span>
              </p>
              <Button
                className={cn(
                  'mt-6 w-full',
                  tier.highlight
                    ? 'bg-white text-gray-900 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                    : ' ',
                )}
              >
                Buy plan
              </Button>
              <ul
                role="list"
                className={`mt-8 space-y-3 text-sm leading-6 ${
                  tier.highlight
                    ? 'text-gray-300'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <svg
                      className={`h-6 w-5 flex-none ${
                        tier.highlight
                          ? 'text-white'
                          : 'text-indigo-600 dark:text-indigo-400'
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
