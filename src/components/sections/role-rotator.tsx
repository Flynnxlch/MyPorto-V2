'use client'

import { AnimatePresence, useReducedMotion } from 'motion/react'
import * as m from 'motion/react-m'
import { useEffect, useState } from 'react'
import { EASE_OUT } from '@/components/motion/reveal'

const INTERVAL_MS = 3000

/**
 * Crossfades whole roles in place. Every role is also rendered invisibly in the
 * same grid cell, so the line is always as wide as the longest role (no layout shift).
 */
export function RoleRotator({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion || roles.length < 2) return
    const timer = setInterval(() => setIndex((current) => (current + 1) % roles.length), INTERVAL_MS)
    return () => clearInterval(timer)
  }, [reduceMotion, roles.length])

  return (
    <>
      <span className="sr-only">{roles.join(', ')}</span>
      <span aria-hidden className="inline-grid">
        {roles.map((role) => (
          <span key={role} className="invisible col-start-1 row-start-1">
            {role}
          </span>
        ))}
        <AnimatePresence initial={false}>
          <m.span
            key={roles[index]}
            className="col-start-1 row-start-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
          >
            {roles[index]}
          </m.span>
        </AnimatePresence>
      </span>
    </>
  )
}
