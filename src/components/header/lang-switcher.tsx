'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { defaultLocale, localeNames } from '@/i18n';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from '@/navigation';
import { useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export const LangSwitcher = () => {
  const router = useRouter();
  const params = useParams();
  // const locale = useLocale();
  const pathname = usePathname();

  const locale = Array.isArray(params.locale)
    ? params.locale[0]
    : params.locale;

  // const [locale, setLocale] = useState(defaultLocale as string);

  console.log(locale, pathname, params, localeNames);

  const handleSwitchLanguage = (value: string) => {
    console.log(value, 'va');

    router.replace(pathname, { locale: value });
  };

  return (
    <>
      <Select value={locale} onValueChange={handleSwitchLanguage}>
        <SelectTrigger className="w-fit">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        {locale}
        <SelectContent>
          {Object.keys(localeNames).map((key: string) => {
            const name = localeNames[key];
            return (
              <SelectItem className="cursor-pointer" key={key} value={key}>
                {name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>

      <label
        className={cn(
          'relative text-gray-400',
          'transition-opacity [&:disabled]:opacity-30',
        )}
      >
        <p className="sr-only">{locale}</p>
        <select
          className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
          defaultValue={'en'}
          onChange={(e) => {
            const nextLocale = e.target.value;
            console.log(nextLocale);
            router.replace(
              // @ts-expect-error -- TypeScript will validate that only known `params`
              // are used in combination with a given `pathname`. Since the two will
              // always match for the current route, we can skip runtime checks.
              pathname,
              { locale: nextLocale },
            );
          }}
        >
          {Object.keys(localeNames).map((key: string) => {
            const name = localeNames[key];
            return (
              <option className="cursor-pointer" key={key} value={key}>
                {name}
              </option>
            );
          })}
        </select>
        <span className="pointer-events-none absolute right-2 top-[8px]">
          ⌄
        </span>
      </label>
    </>
  );
};
