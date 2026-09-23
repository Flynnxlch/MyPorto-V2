'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { site } from '@/data/site'

// Icons swap in CSS so server and client markup match
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      aria-label={site.ui.themeToggle}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="btn btn-square btn-ghost btn-sm"
    >
      <Sun aria-hidden className="size-4 dark:hidden" />
      <Moon aria-hidden className="hidden size-4 dark:block" />
    </button>
  )
}
