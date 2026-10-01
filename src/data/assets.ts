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
  cv: '/CV-Misyal.pdf',
}

export const socials = {
  email: 'muhammadmisyalg@gmail.com',
  github: 'https://github.com/Flynnxlch',
  linkedin: 'https://www.linkedin.com/in/muhammad-misyal-gibran-412029297',
  whatsapp: 'https://wa.me/6289669358227',
}

// Project media keyed by project id: screenshot (16:10), repo, demo
export const projectMedia: Record<string, ProjectMedia> = {
  'risk-management-system': {
    image: '',
    repo: 'https://github.com/Flynnxlch/RMS-DevProd',
    demo: '',
  },
  lemon: {
    image: '',
    repo: 'https://github.com/Flynnxlch/LeMon',
    demo: '',
  },
  digitalokal: {
    image: '',
    repo: 'https://github.com/Flynnxlch/Digitaloka',
    demo: 'https://digitalokal.vercel.app/',
  },
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
