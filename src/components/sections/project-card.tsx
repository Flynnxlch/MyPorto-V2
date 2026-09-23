import { ArrowUpRight, ImageOff } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { TextLink } from '@/components/ui/link'
import { MediaImage } from '@/components/ui/media-image'
import { TagList } from '@/components/ui/tag'
import { site } from '@/data/site'
import type { Project, ProjectMedia } from '@/lib/types'

export type ProjectWithMedia = Project & { media: ProjectMedia }

export function ProjectCard({ project }: { project: ProjectWithMedia }) {
  const { image, repo, demo } = project.media
  const links = [
    { href: repo, label: site.projects.github },
    { href: demo, label: site.projects.live },
  ].filter((link) => link.href)

  return (
    <Card>
      <div className="aspect-16/10 border-b border-base-300 bg-base-200">
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
          <div className="flex h-full flex-col items-center justify-center gap-2 text-base-content/50">
            <ImageOff aria-hidden className="size-6" strokeWidth={1.5} />
            <span className="text-sm">{site.projects.imagePending}</span>
          </div>
        )}
      </div>

      <div className="card-body gap-4 p-6">
        <div>
          <p className="font-mono text-xs text-base-content/60">{project.period}</p>
          <h3 className="mt-1 text-lg font-semibold">{project.title}</h3>
          <p className="mt-2 text-base-content/80">{project.description}</p>
        </div>
        <TagList tags={project.tags} />
        {links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-4 pt-2">
            {links.map((link) => (
              <TextLink key={link.label} href={link.href}>
                {link.label}
                <ArrowUpRight aria-hidden className="size-4" />
              </TextLink>
            ))}
          </div>
        )}
      </div>
    </Card>
  )
}
