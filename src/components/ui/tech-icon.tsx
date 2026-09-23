import { Blocks } from 'lucide-react'

// Icon from public/icons, drawn in the current text color
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
