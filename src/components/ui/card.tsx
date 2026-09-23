import type { ReactNode } from 'react'

/** Bordered surface. Borders instead of shadows, one radius everywhere. */
export function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <article className={`card h-full overflow-hidden rounded-box border border-base-300 bg-base-100 ${className}`}>
      {children}
    </article>
  )
}
