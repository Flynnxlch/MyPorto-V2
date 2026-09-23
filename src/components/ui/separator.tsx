'use client'

import type { Variants } from 'motion/react'
import * as m from 'motion/react-m'
import { EASE_OUT } from '@/components/motion/reveal'

const line: Variants = {
  hidden: { scaleX: 0, transition: { duration: 0.3, ease: EASE_OUT } },
  visible: { scaleX: 1, transition: { duration: 0.4, ease: EASE_OUT } },
}

/**
 * 1px base-300 rule that draws out from the center on entering the viewport and retracts on leaving.
 * The static wrapper is what gets observed, because a scaled-to-zero line has no area to intersect.
 */
export function Separator({ className = '' }: { className?: string }) {
  return (
    <m.div
      role="separator"
      className={`h-px ${className}`}
      inherit={false}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <m.div data-reveal variants={line} className="h-full bg-base-300" />
    </m.div>
  )
}
