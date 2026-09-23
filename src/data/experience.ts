import type { Credential, ExperienceItem } from '@/lib/types'

// Experience, newest first
export const experience: ExperienceItem[] = [
  {
    id: 'gapura-angkasa-internship',
    role: 'IT Development Intern',
    company: 'PT Gapura Angkasa, Kantor Cabang Pusat',
    location: 'Jakarta',
    period: 'Jan 2025 – Feb 2025',
    bullets: [
      "Built a web module that calculates and visualises the company's cost of goods sold (HPP), using vanilla JavaScript, HTML5, CSS3 and Express.js.",
      "Worked with the team on a WordPress site promoting the company's products.",
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Express.js', 'WordPress'],
  },
]

export const certifications: Credential[] = [
  { title: 'Android Developer Fundamentals', issuer: 'Google Developers', year: '2024' },
]

// TODO: add organizations (hidden while empty)
export const organizations: Credential[] = []
