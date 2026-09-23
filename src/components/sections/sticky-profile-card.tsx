'use client'

import { useInView, type Variants } from 'motion/react'
import * as m from 'motion/react-m'
import { useRef, useSyncExternalStore } from 'react'
import { EASE_OUT } from '@/components/motion/reveal'
import { ProfileCard } from '@/components/ui/profile-card'
import { images } from '@/data/assets'
import { profile } from '@/data/profile'
import { imageSrc } from '@/lib/utils'

const EASE_IN = [0.5, 0, 0.75, 0] as const

const hand: Variants = {
  // Exit: slides up and out
  hidden: { opacity: 0, y: -160, rotate: -4, transition: { duration: 0.45, ease: EASE_IN } },
  // Enter: slides down into place
  shown: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.9, ease: EASE_OUT, delay: 0.15 } },
}

// lg breakpoint: the only width where the card column is shown
const DESKTOP = '(min-width: 64rem)'

function subscribeDesktop(onChange: () => void) {
  const query = window.matchMedia(DESKTOP)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}

// Sticky profile card column beside hero and about
export function StickyProfileCard() {
  // Mount the card only on desktop, so phones skip its script work and image
  const isDesktop = useSyncExternalStore(subscribeDesktop, () => window.matchMedia(DESKTOP).matches, () => false)
  const columnRef = useRef<HTMLElement>(null)
  // Visible while the column reaches the top 45% of the viewport
  const shown = useInView(columnRef, { margin: '0px 0px -55% 0px' })

  return (
    <aside ref={columnRef} aria-label="Profile card" className="hidden lg:block">
      <div className="sticky top-24">
        <m.div
          variants={hand}
          initial="hidden"
          animate={shown ? 'shown' : 'hidden'}
          inert={!shown}
          style={{ transformOrigin: '50% 0%' }}
        >
          {isDesktop && <ProfileCard avatarUrl={imageSrc(images.portrait)} name={profile.name} />}
        </m.div>
      </div>
    </aside>
  )
}
