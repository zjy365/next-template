'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Icons } from './icons';

export function ThemedButton() {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(typeof window !== 'undefined');
  }, []);
  return (
    <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' && isClient ? <Icons.moon /> : <Icons.sun />}
    </div>
  );
}
