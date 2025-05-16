// components/PageShell.jsx

import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { useState, useEffect } from 'react';
import PhaseShiftLayer from '@/components/Enchantment_Components/PhaseShiftLayer';
import PsyTripEngine from '@/components/Enchantment_Components/PsyTripEngine';
import useIdle from '@/hooks/useIdle';

export default function PageShell({ children }) {
  const pathname = usePathname();
  const { theme } = useTheme();
  const isIdle = useIdle(8000);
  const [themeColor, setThemeColor] = useState('purple');

  useEffect(() => {
    if (!pathname) return;

    if (pathname.includes('system-2')) setThemeColor('blue');
    else if (pathname.includes('system-1')) setThemeColor('purple');
    else setThemeColor('gold');

    console.log(`[PageShell] Path: ${pathname} → Theme: ${themeColor}`);
  }, [pathname]);

  return (
    <div data-theme-color={themeColor} className={theme === 'dark' ? 'dark' : ''}>
      <PhaseShiftLayer isIdle={isIdle} />
      <PsyTripEngine isIdle={isIdle} />
      {children}
    </div>
  );
}
