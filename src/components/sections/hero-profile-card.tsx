'use client'

import { useIsDesktop } from '@/components/sections/sticky-profile-card'
import { ProfileCard } from '@/components/ui/profile-card'
import { images } from '@/data/assets'
import { profile } from '@/data/profile'
import { imageSrc } from '@/lib/utils'

// Profile card in place of the hero name below lg; desktop shows the sticky column instead
export function HeroProfileCard() {
  const isDesktop = useIsDesktop()

  return (
    // Width also capped by viewport height, so card, role and buttons fit short phones
    <div className="w-[min(100%,18rem,calc((100svh_-_16rem)*0.718))] lg:hidden">
      {!isDesktop && <ProfileCard avatarUrl={imageSrc(images.portrait)} name={profile.name} />}
    </div>
  )
}
