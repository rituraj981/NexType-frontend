import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  // 1. Initialize state based on localStorage or system preference
  const [isDark, setIsDark] = useState(() => {
    // Check if the user has previously saved a preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // If no saved preference, check their OS/browser system settings
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 2. Update the DOM and save to localStorage whenever the state changes
  useEffect(() => {
    const root = document.documentElement;
    
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400 flex items-center justify-center"
      aria-label="Toggle Theme"
    >
      {/* If it's dark mode, show the Sun (to switch to light). Otherwise, show the Moon. */}
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}