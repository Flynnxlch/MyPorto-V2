import { CONTAINER } from '@/components/layout/section-shell'
import { profile } from '@/data/profile'

export function Footer() {
  return (
    <footer>
      <div className={`${CONTAINER} py-8 text-sm text-base-content/60`}>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  )
}
