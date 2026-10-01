'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, type MouseEvent } from 'react'
import { Reveal } from '@/components/motion/reveal'
import { ProjectCard, type ProjectWithMedia } from '@/components/sections/project-card'
import { site } from '@/data/site'

// Copies of the list on the desktop track; the visitor stays in the middle one
const SETS = [0, 1, 2]
const MIDDLE = 1

// Desktop: two cards in view on an endless scroll-snap track, arrows on either side move one card. Mobile: every card stacked
export function ProjectCarousel({ projects }: { projects: ProjectWithMedia[] }) {
  const trackRef = useRef<HTMLUListElement>(null)
  // Index of the first card in view, counted across all copies
  const indexRef = useRef(projects.length * MIDDLE)
  const count = projects.length
  const loop = count > 2

  useEffect(() => {
    const track = trackRef.current
    if (!track || !loop) return

    // A card's width plus the gap; 0 on mobile, where the copies are hidden
    const step = () => {
      const card = track.children[count] as HTMLElement | undefined
      if (!card?.offsetWidth) return 0
      return card.offsetWidth + (parseFloat(getComputedStyle(track).columnGap) || 0)
    }

    const place = () => {
      const size = step()
      if (size) track.scrollLeft = indexRef.current * size
    }

    // Once scrolling settles outside the middle copy, jump to the same card in it; the copies match, so the jump is invisible
    let timer = 0
    const settle = () => {
      const size = step()
      if (!size) return
      let index = Math.round(track.scrollLeft / size)
      if (index < count) index += count
      else if (index >= count * 2) index -= count
      indexRef.current = index
      if (Math.abs(track.scrollLeft - index * size) > 1) track.scrollLeft = index * size
    }
    const onScroll = () => {
      window.clearTimeout(timer)
      timer = window.setTimeout(settle, 120)
    }

    place()
    track.addEventListener('scroll', onScroll, { passive: true })
    // Keeps the same card in view when the width changes
    const observer = new ResizeObserver(place)
    observer.observe(track)
    return () => {
      window.clearTimeout(timer)
      track.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [count, loop])

  // Arrow buttons carry their direction in data-direction
  const move = (event: MouseEvent<HTMLButtonElement>) => {
    const direction = Number(event.currentTarget.dataset.direction)
    const track = trackRef.current
    const card = track?.children[count] as HTMLElement | undefined
    if (!track || !card) return
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: reduce ? 'auto' : 'smooth' })
  }

  const arrows = [
    { direction: -1, label: site.projects.previous, Icon: ChevronLeft, side: 'left-0' },
    { direction: 1, label: site.projects.next, Icon: ChevronRight, side: 'right-0' },
  ]

  return (
    // One reveal for the whole carousel: per-card reveals would replay on every loop jump
    <Reveal className="relative">
      <ul
        ref={trackRef}
        className="grid gap-6 md:mx-auto md:flex md:w-[calc(88%+3px)] md:snap-x md:snap-mandatory md:overflow-x-auto md:overflow-y-hidden md:scrollbar-none"
      >
        {(loop ? SETS : [MIDDLE]).map((set) =>
          projects.map((project) => {
            const copy = set !== MIDDLE
            return (
              <li
                key={`${set}-${project.id}`}
                aria-hidden={copy || undefined}
                inert={copy}
                className={`md:w-[calc(50%-12px)] md:shrink-0 md:snap-start ${copy ? 'max-md:hidden' : ''}`}
              >
                <ProjectCard project={project} />
              </li>
            )
          }),
        )}
      </ul>

      {loop &&
        arrows.map(({ direction, label, Icon, side }) => (
          <button
            key={direction}
            type="button"
            aria-label={label}
            data-direction={direction}
            onClick={move}
            className={`btn btn-circle btn-sm btn-ghost absolute top-1/2 -translate-y-1/2 border-base-300 max-md:hidden ${side}`}
          >
            <Icon aria-hidden className="size-4" strokeWidth={1.5} />
          </button>
        ))}
    </Reveal>
  )
}
