import { SectionShell } from '@/components/layout/section-shell'
import { Reveal } from '@/components/motion/reveal'
import { TechIcon } from '@/components/ui/tech-icon'
import { site } from '@/data/site'
import { stack } from '@/data/stack'

export function Stack() {
  return (
    <SectionShell id="stack" title={site.sections.stack}>
      <div className="grid gap-12 md:grid-cols-2 md:gap-x-8">
        {stack.map((group, i) => (
          <Reveal key={group.title} index={i % 2}>
            <h3 className="font-mono text-xs tracking-wide text-base-content/60 uppercase">{group.title}</h3>
            {/* Icon above its name; no boxes */}
            <ul className="mt-6 grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4">
              {group.items.map((item) => (
                <li key={item.name} className="flex flex-col items-center gap-2 text-center text-sm font-medium">
                  <TechIcon icon={item.icon} className="size-8 text-base-content/70" />
                  {item.name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}
