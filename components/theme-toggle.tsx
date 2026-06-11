"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconSun, IconMoon } from "@/components/icons";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="p-1.5 rounded transition-colors
        dark:text-zinc-500 dark:hover:text-zinc-300
        text-zinc-400 hover:text-zinc-700"
    >
      {mounted ? (theme === "dark" ? <IconSun /> : <IconMoon />) : <span className="w-4 h-4 block" />}
    </button>
  );
}
