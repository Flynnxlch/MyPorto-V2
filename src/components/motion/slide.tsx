'use client'

import type { Variants } from 'motion/react'
import * as m from 'motion/react-m'
import { useEffect, useId, useRef, useSyncExternalStore, type ReactNode } from 'react'
import { EASE_OUT } from '@/components/motion/reveal'

// Active slide store: only one section is visible at a time
let active: string | null = null
const listeners = new Set<() => void>()
let observer: IntersectionObserver | null = null

function setActive(id: string | undefined) {
  if (!id || id === active) return
  active = id
  for (const listener of listeners) listener()
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}

// Shared observer: the slide crossing the viewport middle becomes active
function getObserver() {
  if (observer) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive((entry.target as HTMLElement).dataset.slide)
      }
    },
    { rootMargin: '-40% 0px -55% 0px' },
  )

  // Page edges: first slide at the top, last slide at the bottom
  const onScroll = () => {
    const slides = document.querySelectorAll<HTMLElement>('[data-slide]')
    if (window.scrollY < 8) setActive(slides[0]?.dataset.slide)
    else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8)
      setActive(slides[slides.length - 1]?.dataset.slide)
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  return observer
}

// Exit is quick; enter waits for the exit to finish, then fades in slowly
const variants: Variants = {
  hidden: { opacity: 0, transition: { duration: 0.3, ease: EASE_OUT } },
  shown: { opacity: 1, transition: { duration: 0.8, ease: EASE_OUT, delay: 0.3 } },
}

// Presentation-style section: fades out when another section takes the viewport middle
export function Slide({ children, first = false, className }: { children: ReactNode; first?: boolean; className?: string }) {
  const id = useId()
  const ref = useRef<HTMLDivElement>(null)
  const current = useSyncExternalStore(subscribe, () => active, () => null)
  const shown = current === id || (current === null && first)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = getObserver()
    io.observe(el)
    return () => io.unobserve(el)
  }, [])

  return (
    <m.div
      ref={ref}
      data-slide={id}
      className={className}
      variants={variants}
      initial={false}
      animate={shown ? 'shown' : 'hidden'}
      // Keyboard focus into a hidden slide brings it forward
      onFocusCapture={() => setActive(id)}
      style={{ pointerEvents: shown ? undefined : 'none' }}
    >
      {children}
    </m.div>
  )
}
