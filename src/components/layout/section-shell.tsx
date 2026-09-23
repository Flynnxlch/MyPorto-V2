import type { ReactNode } from 'react'
import { Reveal } from '@/components/motion/reveal'
import { Slide } from '@/components/motion/slide'
import { Separator } from '@/components/ui/separator'

// Page width: fluid with side padding, capped at 1536px
export const CONTAINER = 'mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-10 xl:px-16'

// Vertical padding of every section
export const SECTION_Y = 'py-12 md:py-16'

// Section frame: slide fade, heading, body and the separator after it
export function SectionShell({
  id,
  title,
  children,
  separator = true,
  contained = true,
  slide = true,
  className = '',
}: {
  id: string
  title: string
  children: ReactNode
  separator?: boolean
  contained?: boolean
  slide?: boolean
  className?: string
}) {
  const section = (
    <section id={id} aria-labelledby={`${id}-title`} className={`${contained ? CONTAINER : ''} ${SECTION_Y} scroll-mt-16 ${className}`}>
      <Reveal>
        <h2 id={`${id}-title`} className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      <div className="mt-8 md:mt-12">{children}</div>
    </section>
  )

  return (
    <>
      {slide ? <Slide>{section}</Slide> : section}
      {separator && <Separator />}
    </>
  )
}
