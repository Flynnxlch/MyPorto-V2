import dynamic from 'next/dynamic'
import { CONTAINER } from '@/components/layout/section-shell'
import { Slide } from '@/components/motion/slide'
import { About } from '@/components/sections/about'
import { Hero } from '@/components/sections/hero'
import { StickyProfileCard } from '@/components/sections/sticky-profile-card'
import { Separator } from '@/components/ui/separator'

// Below-fold sections, code-split
const Experience = dynamic(() => import('@/components/sections/experience').then((mod) => mod.Experience))
const Stack = dynamic(() => import('@/components/sections/stack').then((mod) => mod.Stack))
const Projects = dynamic(() => import('@/components/sections/projects').then((mod) => mod.Projects))
const Contact = dynamic(() => import('@/components/sections/contact').then((mod) => mod.Contact))

export default function Home() {
  return (
    <main>
      {/* Hero + about with the sticky profile card column */}
      <Slide first className={`${CONTAINER} lg:grid lg:grid-cols-[minmax(0,1fr)_20rem] lg:mb-16 lg:gap-10`}>
        <div className="min-w-0">
          <Hero />
          <About />
        </div>
        <StickyProfileCard />
      </Slide>
      <Separator />
      <Experience />
      <Stack />
      <Projects />
      <Contact />
    </main>
  )
}
