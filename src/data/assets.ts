import type { ProjectMedia } from '@/lib/types'

/**
 * ============================================================================
 *  ASSETS & LINKS: every image, file and URL on the site lives here
 * ============================================================================
 *
 *  THREE WAYS TO POINT AT AN IMAGE OR FILE
 *  1. A file inside the `public/` folder, starting with a slash:
 *        '/images/profile-portrait.webp'
 *  2. A Google Drive share link, pasted exactly as copied:
 *        'https://drive.google.com/file/d/1AbCdEfGh/view?usp=sharing'
 *     In Drive: Share → General access → "Anyone with the link".
 *     Image links are converted automatically so they display on the page.
 *  3. Any other internet link:  'https://example.com/photo.jpg'
 *
 *  Leaving a value empty ('') hides whatever uses it.
 * ============================================================================
 */

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

/**
 * PROJECT MEDIA: the key must match a project `id` in projects.ts.
 *   image: screenshot (16:10 looks best)
 *   repo:  GitHub repository
 *   demo:  live site or store listing
 */
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
