import dynamic from 'next/dynamic'
import { About } from '@/components/sections/about'
import { Hero } from '@/components/sections/hero'

// Below-fold sections are split out with next/dynamic.
const Experience = dynamic(() => import('@/components/sections/experience').then((mod) => mod.Experience))
const Stack = dynamic(() => import('@/components/sections/stack').then((mod) => mod.Stack))
const Projects = dynamic(() => import('@/components/sections/projects').then((mod) => mod.Projects))
const Contact = dynamic(() => import('@/components/sections/contact').then((mod) => mod.Contact))

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Stack />
      <Projects />
      <Contact />
    </main>
  )
}
