'use client'

import { LazyMotion, MotionConfig, domAnimation } from 'motion/react'
import type { ReactNode } from 'react'

/** Loads only the DOM animation feature set; `strict` forbids the heavy `motion` component. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
