import { SectionShell } from '@/components/layout/section-shell'
import { Reveal } from '@/components/motion/reveal'
import { TagList } from '@/components/ui/tag'
import { experience, organizations } from '@/data/experience'
import { site } from '@/data/site'
import type { Credential } from '@/lib/types'

export function Experience() {
  return (
    <SectionShell id="experience" title={site.sections.experience}>
      {/* Timeline: alternating with an accent line between dots on desktop; on mobile a single column of accent-bordered cards, no line */}
      <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
        {experience.map((item, i) => (
          <li key={item.id}>
            {i > 0 && <hr className="bg-primary max-md:hidden" />}
            <div className="timeline-middle">
              <span className="block size-3 rounded-full bg-primary ring-4 ring-primary/20" />
            </div>
            <Reveal className={`max-md:ml-4 max-md:rounded-box max-md:border max-md:border-primary max-md:p-5 ${i < experience.length - 1 ? 'mb-12 max-md:mb-6' : ''} ${i % 2 === 0 ? 'timeline-start md:pr-8 md:text-end' : 'timeline-end md:pl-8'}`}>
              <p className="font-mono text-xs text-base-content/60">{item.period}</p>
              <h3 className="mt-2 text-lg font-semibold">{item.role}</h3>
              <p className="text-base-content/70">
                {item.company}, {item.location}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-4 text-left text-base-content/80">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {/* -ml-2 lines the first icon up with the text; its hit area stays full size */}
              <TagList tags={item.tags} className={`mt-4 -ml-2 ${i % 2 === 0 ? 'md:-mr-2 md:ml-0 md:justify-end' : ''}`} />
            </Reveal>
            {i < experience.length - 1 && <hr className="bg-primary max-md:hidden" />}
          </li>
        ))}
      </ul>

      {organizations.length > 0 && (
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <CredentialList title={site.sections.organizations} items={organizations} />
        </div>
      )}
    </SectionShell>
  )
}

function CredentialList({ title, items, index }: { title: string; items: Credential[]; index?: number }) {
  if (items.length === 0) return null

  return (
    <Reveal index={index}>
      <h3 className="font-mono text-xs tracking-wide text-base-content/60 uppercase">{title}</h3>
      <ul className="mt-4 divide-y divide-base-300 border-y border-base-300">
        {items.map((item) => (
          <li key={`${item.title}-${item.issuer}`} className="flex flex-wrap items-baseline justify-between gap-x-4 py-3">
            <span>
              <span className="font-semibold">{item.title}</span>
              <span className="text-base-content/70">, {item.issuer}</span>
            </span>
            <span className="font-mono text-xs text-base-content/60">{item.year}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  )
}
