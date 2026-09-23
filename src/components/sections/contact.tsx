import { SectionShell } from '@/components/layout/section-shell'
import { Reveal } from '@/components/motion/reveal'
import { TextLink } from '@/components/ui/link'
import { SocialLinks } from '@/components/ui/social-links'
import { socials } from '@/data/assets'
import { profile } from '@/data/profile'
import { site } from '@/data/site'

export function Contact() {
  return (
    <SectionShell id="contact" title={site.sections.contact}>
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-5">
          <p className="max-w-[65ch] text-base-content/80">{profile.contact.intro}</p>
          {socials.email && (
            <TextLink href={`mailto:${socials.email}`} className="mt-4 text-lg break-all sm:text-xl">
              {socials.email}
            </TextLink>
          )}
        </Reveal>
        <Reveal index={1} className="md:col-span-6 md:col-start-7">
          <SocialLinks variant="list" />
        </Reveal>
      </div>
    </SectionShell>
  )
}
