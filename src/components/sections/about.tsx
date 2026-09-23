import { SectionShell } from '@/components/layout/section-shell'
import { Reveal } from '@/components/motion/reveal'
import { MediaImage } from '@/components/ui/media-image'
import { images } from '@/data/assets'
import { profile } from '@/data/profile'
import { site } from '@/data/site'
import { isFilled } from '@/lib/utils'

export function About() {
  const facts = profile.facts.filter((fact) => isFilled(fact.value))

  return (
    <SectionShell id="about" title={site.sections.about}>
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="space-y-4 text-base-content/80 md:col-span-8">
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="max-w-[65ch]">
              {paragraph}
            </p>
          ))}
        </Reveal>
        {images.portrait && (
          <Reveal index={1} className="md:col-span-4 md:w-full md:max-w-72 md:justify-self-end">
            <MediaImage
              src={images.portrait}
              alt={profile.name}
              width={513}
              height={532}
              sizes="(min-width: 768px) 280px, 60vw"
              className="h-auto w-3/5 max-w-72 rounded-box border border-base-300 md:w-full"
            />
          </Reveal>
        )}
      </div>

      <Reveal>
        <dl className="mt-12 grid gap-px overflow-hidden rounded-box border border-base-300 bg-base-300 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="bg-base-100 p-4">
              <dt className="font-mono text-xs tracking-wide text-base-content/60 uppercase">{fact.label}</dt>
              <dd className="mt-1 font-semibold">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </SectionShell>
  )
}
