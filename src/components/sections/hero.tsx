import { Download } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'
import { RoleRotator } from '@/components/sections/role-rotator'
import { ButtonLink } from '@/components/ui/link'
import { SocialLinks } from '@/components/ui/social-links'
import { files } from '@/data/assets'
import { profile } from '@/data/profile'
import { site } from '@/data/site'

export function Hero() {
  return (
    // Full-screen hero; container comes from page.tsx
    <section id="home" className="flex min-h-svh flex-col justify-center pt-16 pb-12">
      <Reveal>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
      </Reveal>
      <Reveal index={1}>
        <p className="mt-4 text-2xl font-semibold text-base-content/70 sm:text-3xl">
          <RoleRotator roles={profile.roles} />
        </p>
      </Reveal>

      <Reveal index={2} className="mt-8 flex flex-wrap items-center gap-3">
        <ButtonLink href="#projects" className="btn-primary">
          {site.hero.primaryButton}
        </ButtonLink>
        {files.cv && (
          <ButtonLink href={files.cv} className="btn-primary">
            <Download aria-hidden className="size-4" />
            {site.ui.cv}
          </ButtonLink>
        )}
        <SocialLinks variant="icons" />
      </Reveal>
    </section>
  )
}
