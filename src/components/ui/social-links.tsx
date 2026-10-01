import { Mail, MessageCircle } from 'lucide-react'
import { TechIcon } from '@/components/ui/tech-icon'
import { socials } from '@/data/assets'
import { site } from '@/data/site'
import { newTabProps } from '@/lib/utils'

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

// Icon + name list (contact)
export function SocialLinks() {
  return (
    <ul className="divide-y divide-base-300 border-y border-base-300">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            {...newTabProps(link.href)}
            className="group flex items-center gap-4 py-4 font-medium transition-colors hover:text-primary"
          >
            <span className="text-base-content/60 group-hover:text-primary">{link.icon}</span>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}
