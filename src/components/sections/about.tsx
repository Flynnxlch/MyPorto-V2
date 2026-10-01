import { SectionShell } from '@/components/layout/section-shell'
import { Reveal } from '@/components/motion/reveal'
import { profile } from '@/data/profile'
import { site } from '@/data/site'

export function About() {
  return (
    // Part of the hero slide; lg:pb-0 so the card column ends at the last paragraph
    <SectionShell id="about" title={site.sections.about} separator={false} contained={false} className="lg:pb-0">
      {/* Justified below lg, with hyphenation to keep word gaps even on narrow screens */}
      <Reveal className="space-y-4 text-base-content/80 max-lg:text-justify max-lg:hyphens-auto">
        {profile.about.map((paragraph) => (
          <p key={paragraph} className="max-w-[65ch]">
            {paragraph}
          </p>
        ))}
      </Reveal>
    </SectionShell>
  )
}
