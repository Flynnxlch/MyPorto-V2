import { SectionShell } from '@/components/layout/section-shell'
import { Reveal } from '@/components/motion/reveal'
import { MediaImage } from '@/components/ui/media-image'
import { images } from '@/data/assets'
import { profile } from '@/data/profile'
import { site } from '@/data/site'

export function About() {
  return (
    // Part of the hero slide; lg:pb-0 so the card column ends at the last paragraph
    <SectionShell id="about" title={site.sections.about} separator={false} contained={false} slide={false} className="lg:pb-0">
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="space-y-4 text-base-content/80 md:col-span-8 lg:col-span-12">
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="max-w-[65ch]">
              {paragraph}
            </p>
          ))}
        </Reveal>
        {/* Portrait below lg; the profile card replaces it above */}
        {images.portrait && (
          <Reveal index={1} className="md:col-span-4 lg:hidden md:w-full md:max-w-72 md:justify-self-end">
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
    </SectionShell>
  )
}
