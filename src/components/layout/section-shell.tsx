import type { ReactNode } from 'react'
import { Reveal } from '@/components/motion/reveal'
import { Separator } from '@/components/ui/separator'

export const CONTAINER = 'mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8'

/** Section frame: animated top rule, heading, and a reveal for the heading and body. */
export function SectionShell({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-16">
      <Separator />
      <div className={`${CONTAINER} py-16 md:py-24`}>
        <Reveal>
          <h2 id={`${id}-title`} className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
        </Reveal>
        <div className="mt-8 md:mt-12">{children}</div>
      </div>
    </section>
  )
}
