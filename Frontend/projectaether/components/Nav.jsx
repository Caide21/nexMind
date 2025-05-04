import Link from 'next/link';
import ThemeToggle from '@/components/Control_Components/ThemeToggle';

export default function Nav() {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Link href="/" className="text-lg font-semibold text-purple-600 dark:text-purple-300 hover:opacity-80 transition">
        NexMind
      </Link>

      <div className="flex items-center space-x-6 text-sm font-medium">
        <Link href="/codex" className="hover:text-purple-600 dark:hover:text-purple-300 transition">
          Codex
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
}
