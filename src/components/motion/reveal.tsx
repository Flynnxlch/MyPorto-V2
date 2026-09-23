'use client'

import type { Variants } from 'motion/react'
import * as m from 'motion/react-m'
import type { ReactNode } from 'react'

export const EASE_OUT = [0.25, 1, 0.5, 1] as const

const variants: Variants = {
  // Leaving is quicker than entering and never waits on a delay.
  hidden: { opacity: 0, y: 12, transition: { duration: 0.25, ease: EASE_OUT } },
  visible: (delay: number) => ({ opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE_OUT, delay } }),
}

/**
 * Fades content up 12px when it scrolls into view, and back down when it scrolls out.
 * `index` staggers siblings by 60ms each, capped at 300ms so a group never waits past 400ms.
 * `inherit={false}` so a nested Reveal follows its own viewport, not its parent's.
 * Reduced motion is handled in CSS via [data-reveal] so server and client markup match.
 */
export function Reveal({ children, className, index = 0 }: { children: ReactNode; className?: string; index?: number }) {
  return (
    <m.div
      data-reveal
      className={className}
      custom={Math.min(index * 0.06, 0.3)}
      variants={variants}
      inherit={false}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '0px 0px -64px 0px' }}
    >
      {children}
    </m.div>
  )
}
