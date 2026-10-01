import { Download } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'
import { HeroProfileCard } from '@/components/sections/hero-profile-card'
import { RoleRotator } from '@/components/sections/role-rotator'
import { ButtonLink } from '@/components/ui/link'
import { files } from '@/data/assets'
import { profile } from '@/data/profile'
import { site } from '@/data/site'

export function Hero() {
  return (
    // Full-screen hero; container comes from page.tsx. Centred below lg, where the profile card leads
    <section id="home" className="flex min-h-svh flex-col justify-center pt-16 pb-12 max-lg:items-center max-lg:text-center">
      <Reveal eager className="max-lg:flex max-lg:w-full max-lg:justify-center">
        {/* Below lg the profile card carries the name; the heading stays for screen readers */}
        <HeroProfileCard />
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance max-lg:sr-only sm:text-5xl lg:text-6xl">
          {profile.name}
        </h1>
      </Reveal>
      <Reveal eager index={1}>
        <p className="mt-4 text-2xl font-semibold text-base-content/70 max-lg:mt-6 sm:text-3xl">
          <RoleRotator roles={profile.roles} />
        </p>
      </Reveal>

      <Reveal eager index={2} className="mt-8 flex flex-wrap items-center gap-3 max-lg:justify-center">
        <ButtonLink href="#projects" className="btn-primary">
          {site.hero.primaryButton}
        </ButtonLink>
        {files.cv && (
          <ButtonLink href={files.cv} className="btn-primary btn-outline">
            <Download aria-hidden className="size-4" />
            {site.ui.cv}
          </ButtonLink>
        )}
      </Reveal>
    </section>
  )
}
