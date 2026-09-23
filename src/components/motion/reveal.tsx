'use client'

import type { Variants } from 'motion/react'
import * as m from 'motion/react-m'
import type { ReactNode } from 'react'

export const EASE_OUT = [0.25, 1, 0.5, 1] as const

const variants: Variants = {
  // Exit is quicker than enter, no delay
  hidden: { opacity: 0, y: 12, transition: { duration: 0.25, ease: EASE_OUT } },
  visible: (delay: number) => ({ opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE_OUT, delay } }),
}

// Fade-up on scroll into view; `index` staggers siblings by 60ms; `eager` starts visible (above the fold)
export function Reveal({
  children,
  className,
  index = 0,
  eager = false,
}: {
  children: ReactNode
  className?: string
  index?: number
  eager?: boolean
}) {
  return (
    <m.div
      data-reveal
      className={className}
      custom={Math.min(index * 0.06, 0.3)}
      variants={variants}
      inherit={false}
      initial={eager ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: false, margin: '0px 0px -64px 0px' }}
    >
      {children}
    </m.div>
  )
}
