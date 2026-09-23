'use client'

import { AnimatePresence, LazyMotion } from 'motion/react'
import * as m from 'motion/react-m'
import { useState } from 'react'
import { EASE_OUT, Reveal } from '@/components/motion/reveal'
import { ProjectCard, type ProjectWithMedia } from '@/components/sections/project-card'
import { site } from '@/data/site'
import type { ProjectCategory } from '@/lib/types'

type Filter = 'all' | ProjectCategory

const FILTERS: Filter[] = ['all', 'web', 'android']

// Layout animation features, loaded on demand
const loadLayoutFeatures = () => import('motion/react').then((mod) => mod.domMax)

export function ProjectFilter({ projects }: { projects: ProjectWithMedia[] }) {
  const [filter, setFilter] = useState<Filter>('all')
  const visible = filter === 'all' ? projects : projects.filter((project) => project.category === filter)

  return (
    <LazyMotion features={loadLayoutFeatures} strict>
      <div role="group" aria-label={site.projects.filterLabel} className="flex flex-wrap gap-2">
        {FILTERS.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={filter === option}
            onClick={() => setFilter(option)}
            className={`btn btn-sm ${filter === option ? 'btn-primary' :'btn-ghost border-base-300'}`}
          >
            {site.projects.filters[option]}
          </button>
        ))}
      </div>

      <ul className="mt-8 grid gap-6 md:grid-cols-2">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((project) => (
            <m.li
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
            >
              <Reveal className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            </m.li>
          ))}
        </AnimatePresence>
      </ul>
    </LazyMotion>
  )
}
