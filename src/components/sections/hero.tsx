import { CONTAINER } from '@/components/layout/section-shell'
import { Reveal } from '@/components/motion/reveal'
import { RoleRotator } from '@/components/sections/role-rotator'
import { ButtonLink } from '@/components/ui/link'
import { SocialLinks } from '@/components/ui/social-links'
import { profile } from '@/data/profile'
import { site } from '@/data/site'

export function Hero() {
  return (
    <section id="home" className="flex min-h-svh items-center pt-16">
      <div className={`${CONTAINER} py-16 md:py-24`}>
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
          <SocialLinks variant="icons" />
        </Reveal>
      </div>
    </section>
  )
}
