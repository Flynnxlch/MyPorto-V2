import { SectionShell } from '@/components/layout/section-shell'
import { ProjectCarousel } from '@/components/sections/project-carousel'
import { projectMedia } from '@/data/assets'
import { projects } from '@/data/projects'
import { site } from '@/data/site'

const NO_MEDIA = { image: '', repo: '', demo: '' }

export function Projects() {
  const withMedia = projects.map((project) => ({ ...project, media: projectMedia[project.id] ?? NO_MEDIA }))

  return (
    <SectionShell id="projects" title={site.sections.projects}>
      <ProjectCarousel projects={withMedia} />
    </SectionShell>
  )
}
