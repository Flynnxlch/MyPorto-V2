import { SectionShell } from '@/components/layout/section-shell'
import { Reveal } from '@/components/motion/reveal'
import { ContactForm } from '@/components/sections/contact-form'
import { SocialLinks } from '@/components/ui/social-links'
import { site } from '@/data/site'

export function Contact() {
  return (
    <SectionShell id="contact" title={site.sections.contact}>
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-7">
          <ContactForm />
        </Reveal>
        <Reveal index={1} className="md:col-span-4 md:col-start-9">
          <h3 className="font-mono text-xs tracking-wide text-base-content/60 uppercase">{site.contact.elsewhere}</h3>
          <div className="mt-4">
            <SocialLinks />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  )
}
