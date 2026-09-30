import { ArrowUpRight, ImageOff } from 'lucide-react'
import { TextLink } from '@/components/ui/link'
import { MediaImage } from '@/components/ui/media-image'
import { TechIcon } from '@/components/ui/tech-icon'
import { site } from '@/data/site'
import type { Project, ProjectMedia } from '@/lib/types'

export type ProjectWithMedia = Project & { media: ProjectMedia }

// DaisyUI card: screenshot figure, body, icon tags and links
export function ProjectCard({ project }: { project: ProjectWithMedia }) {
  const { image, repo, demo } = project.media
  const links = [
    { href: repo, label: site.projects.github },
    { href: demo, label: site.projects.live },
  ].filter((link) => link.href)

  return (
    <article className="card card-border h-full overflow-hidden border-base-300 bg-base-100">
      <figure className="aspect-16/10 border-b border-base-300 bg-base-200">
        {image ? (
          <MediaImage
            src={image}
            alt={`${project.title} screenshot`}
            width={1600}
            height={1000}
            sizes="(min-width: 768px) 480px, 100vw"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-base-content/50">
            <ImageOff aria-hidden className="size-6" strokeWidth={1.5} />
            <span className="text-sm">{site.projects.imagePending}</span>
          </div>
        )}
      </figure>

      <div className="card-body gap-4 p-6">
        <div>
          <p className="font-mono text-xs text-base-content/60">{project.period}</p>
          <h3 className="card-title mt-1 text-lg">{project.title}</h3>
          <p className="mt-2 text-base-content/80">{project.description}</p>
        </div>

        {/* Icon only; the name shows in a tooltip on hover or focus */}
        <ul aria-label={site.projects.builtWith} className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <li key={tag.name}>
              <span
                tabIndex={0}
                aria-label={tag.name}
                data-tip={tag.name}
                className="tooltip flex size-9 items-center justify-center rounded-field text-base-content/70 transition-colors hover:text-primary focus-visible:text-primary"
              >
                <TechIcon icon={tag.icon} className="size-5" />
              </span>
            </li>
          ))}
        </ul>

        {links.length > 0 && (
          <div className="card-actions mt-auto gap-4 pt-2">
            {links.map((link) => (
              <TextLink key={link.label} href={link.href}>
                {link.label}
                <ArrowUpRight aria-hidden className="size-4" />
              </TextLink>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
