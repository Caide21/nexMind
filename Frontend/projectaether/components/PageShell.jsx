import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import useIdle from '../hooks/useIdle';
import PhaseShiftLayer from './Control_Components/PhaseShiftLayer';
import PsyTripEngine from './Control_Components/PsyTripEngine';

export default function PageShell({ children }) {
  const pathname = usePathname();
  const { theme } = useTheme();
  const isIdle = useIdle(8000);
  const [themeColor, setThemeColor] = useState('purple');

  useEffect(() => {
    if (pathname.includes('system-2')) setThemeColor('blue');
    else if (pathname.includes('system-1')) setThemeColor('purple');
    else setThemeColor('gold');
  }, [pathname]);

  return (
    <div
      className={`min-h-screen theme-transition ${theme === 'dark' ? 'dark' : ''}`}
      data-theme-color={themeColor}
    >
      <PhaseShiftLayer isIdle={isIdle} />
      <PsyTripEngine active={isIdle} />
      {children}
    </div>
  );
}
