// Blank 160px gap between sections
export function Separator({ className = '' }: { className?: string }) {
  return <div role="separator" className={`h-40 ${className}`} />
}
