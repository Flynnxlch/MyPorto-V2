import { Mail, MessageCircle } from 'lucide-react'
import { TechIcon } from '@/components/ui/tech-icon'
import { socials } from '@/data/assets'
import { site } from '@/data/site'
import { displayUrl, newTabProps } from '@/lib/utils'

const ICON_SIZE = 'size-5'

const links = [
  {
    id: 'email',
    label: site.socials.email,
    href: socials.email && `mailto:${socials.email}`,
    icon: <Mail aria-hidden className={ICON_SIZE} strokeWidth={1.75} />,
  },
  { id: 'github', label: site.socials.github, href: socials.github, icon: <TechIcon icon="github" className={ICON_SIZE} /> },
  {
    id: 'linkedin',
    label: site.socials.linkedin,
    href: socials.linkedin,
    icon: <TechIcon icon="linkedin" className={ICON_SIZE} />,
  },
  {
    id: 'whatsapp',
    label: site.socials.whatsapp,
    href: socials.whatsapp,
    icon: <MessageCircle aria-hidden className={ICON_SIZE} strokeWidth={1.75} />,
  },
].filter((link) => link.href)

const iconLinks = links.filter((link) => link.id !== 'linkedin')

/** Icon-only row (hero; LinkedIn is the navbar's Let's Connect button) or labelled list (contact). */
export function SocialLinks({ variant }: { variant: 'icons' | 'list' }) {
  if (variant === 'icons') {
    return (
      <ul className="flex gap-2">
        {iconLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...newTabProps(link.href)}
              aria-label={link.label}
              className="btn btn-square btn-ghost text-base-content/70 hover:text-primary"
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="divide-y divide-base-300 border-y border-base-300">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            {...newTabProps(link.href)}
            className="group flex flex-wrap items-center gap-x-4 gap-y-1 py-4 transition-colors hover:text-primary"
          >
            <span className="text-base-content/60 group-hover:text-primary">{link.icon}</span>
            <span className="w-24 font-medium">{link.label}</span>
            <span className="min-w-0 break-words text-base-content/70 group-hover:text-primary">
              {displayUrl(link.href)}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
