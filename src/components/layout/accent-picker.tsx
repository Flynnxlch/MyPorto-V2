'use client'

import { Check, Palette } from 'lucide-react'
import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { site } from '@/data/site'
import { ACCENT_STORAGE_KEY } from '@/lib/accent'

const DEFAULT_ACCENT = site.accents[0].id
const listeners = new Set<() => void>()

const subscribe = (listener: () => void) => {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}
const getSnapshot = () => document.documentElement.dataset.accent ?? DEFAULT_ACCENT
const getServerSnapshot = () => DEFAULT_ACCENT

function applyAccent(id: string) {
  document.documentElement.dataset.accent = id
  try {
    localStorage.setItem(ACCENT_STORAGE_KEY, id)
  } catch {
    // Storage may be blocked; still applies for this visit
  }
  listeners.forEach((listener) => listener())
}

// Accent color picker: sets data-accent on <html> to swap the primary color
export function AccentPicker() {
  const accent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const detailsRef = useRef<HTMLDetailsElement>(null)
  const [open, setOpen] = useState(false)

  // Close on outside click or Escape while open.
  useEffect(() => {
    if (!open) return
    const details = detailsRef.current
    const onPointerDown = (event: PointerEvent) => {
      if (details && !details.contains(event.target as Node)) details.open = false
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !details) return
      details.open = false
      details.querySelector('summary')?.focus()
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <details ref={detailsRef} onToggle={(event) => setOpen(event.currentTarget.open)} className="dropdown dropdown-end">
      <summary
        aria-label={site.ui.accentPicker}
        className="btn btn-square btn-ghost btn-sm list-none [&::-webkit-details-marker]:hidden"
      >
        <Palette aria-hidden className="size-4" />
      </summary>
      <ul className="dropdown-content menu z-50 mt-2 w-44 rounded-box border border-base-300 bg-base-100 p-2">
        {site.accents.map((option) => {
          const selected = accent === option.id
          return (
            <li key={option.id}>
              <button
                type="button"
                aria-pressed={selected}
                onClick={() => {
                  applyAccent(option.id)
                  if (detailsRef.current) detailsRef.current.open = false
                }}
              >
                {/* Swatch previews its own accent */}
                <span aria-hidden data-accent={option.id} className="size-4 rounded-full bg-primary" />
                {option.label}
                {selected && <Check aria-hidden className="ml-auto size-4" />}
              </button>
            </li>
          )
        })}
      </ul>
    </details>
  )
}
