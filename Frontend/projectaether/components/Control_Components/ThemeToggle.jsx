import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-purple-600 border border-purple-600 px-3 py-1 rounded hover:bg-purple-600 hover:text-white dark:text-purple-300 dark:border-purple-300 dark:hover:bg-purple-300 dark:hover:text-black transition"
    >
      {theme === 'light' ? '☾ Dark Mode' : '☀ Light Mode'}
    </button>
  );
}
