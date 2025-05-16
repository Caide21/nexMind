import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/Control_Components/ThemeToggle';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-gray-900 dark:text-gray-100 relative z-50">
      {/* Logo */}
      <Link href="/" className="text-lg font-semibold text-purple-600 dark:text-purple-300 hover:opacity-80 transition">
        NexMind
      </Link>

      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden text-purple-600 dark:text-purple-300 focus:outline-none"
      >
        ☰
      </button>

      {/* Links (desktop) */}
      <div className="hidden sm:flex items-center space-x-6 text-sm font-medium">
        <Link href="/codex" className="hover:text-purple-600 dark:hover:text-purple-300 transition">
          Codex
        </Link>
        <ThemeToggle />
      </div>

      {/* Mobile menu (absolute dropdown) */}
      {isOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 py-4 px-6 flex flex-col space-y-4 text-sm">
          <Link href="/codex" className="hover:text-purple-600 dark:hover:text-purple-300 transition">
            Codex
          </Link>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
