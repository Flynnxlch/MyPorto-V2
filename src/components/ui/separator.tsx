// Blank 20px gap between sections
export function Separator({ className = '' }: { className?: string }) {
  return <div aria-hidden="true" className={`h-5 ${className}`} />
}
