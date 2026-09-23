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
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-3 rounded-box border border-base-300 px-3 py-2 text-sm font-medium"
                >
                  <TechIcon icon={item.icon} className="size-5 text-base-content/70" />
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
