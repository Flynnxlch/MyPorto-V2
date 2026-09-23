import { CONTAINER } from '@/components/layout/section-shell'
import { profile } from '@/data/profile'
import { site } from '@/data/site'

export function Footer() {
  return (
    <footer>
      <div className={`${CONTAINER} flex flex-col gap-2 py-8 text-sm text-base-content/60 sm:flex-row sm:justify-between`}>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#home" className="rounded-box hover:text-primary">
          {site.ui.backToTop}
        </a>
      </div>
    </footer>
  )
}
