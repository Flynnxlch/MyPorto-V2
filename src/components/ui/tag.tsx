import { TechIcon } from '@/components/ui/tech-icon'
import { site } from '@/data/site'
import type { StackItem } from '@/lib/types'

// Icon only; the name shows in a tooltip on hover or focus
export function TagList({ tags, className = '' }: { tags: StackItem[]; className?: string }) {
  return (
    <ul aria-label={site.projects.builtWith} className={`flex flex-wrap gap-1 ${className}`.trim()}>
      {tags.map((tag) => (
        <li key={tag.name}>
          <span
            role="img"
            tabIndex={0}
            aria-label={tag.name}
            data-tip={tag.name}
            className="tooltip flex size-9 items-center justify-center rounded-field text-base-content/70 transition-colors hover:text-primary focus-visible:text-primary"
          >
            <TechIcon icon={tag.icon} className="size-5" />
          </span>
        </li>
      ))}
    </ul>
  )
}
