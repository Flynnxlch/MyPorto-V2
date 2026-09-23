import { Blocks } from 'lucide-react'

/**
 * A logo from public/icons drawn as a mask in the current text color,
 * so brand colors never compete with the single accent.
 */
export function TechIcon({ icon, className = 'size-5' }: { icon?: string; className?: string }) {
  if (!icon) return <Blocks aria-hidden className={`shrink-0 ${className}`} strokeWidth={1.75} />

  const mask = `url(/icons/${icon}.svg) center / contain no-repeat`
  return (
    <span
      aria-hidden
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{ mask, WebkitMask: mask }}
    />
  )
}
