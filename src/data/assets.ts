import type { ProjectMedia } from '@/lib/types'

// Assets & links: public/ paths, Google Drive share links or URLs; '' hides the item

export const images = {
  // Navbar logo and browser tab icon.
  logo: '/images/brand-logo.webp',
  // Portrait in the About section.
  portrait: '/images/profile-portrait.webp',
}

export const files = {
  // CV: a file in `public/` or a Google Drive link.
  cv: '/cv.pdf',
}

export const socials = {
  email: 'muhammadmisyalg@gmail.com',
  github: 'https://github.com/Flynnxlch',
  linkedin: 'https://www.linkedin.com/in/muhammad-misyal-gibran-412029297',
  whatsapp: 'https://wa.me/6289669358227',
}

// Project media keyed by project id: screenshot (16:10), repo, demo
export const projectMedia: Record<string, ProjectMedia> = {
  bisaditas: {
    image: '',
    repo: 'https://github.com/Flynnxlch/Bisaditas',
    demo: '',
  },
  'task-management-app': {
    image: '',
    repo: 'https://github.com/Flynnxlch/Aps-TaskList',
    demo: '',
  },
}
