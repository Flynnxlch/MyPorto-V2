import type { Credential, ExperienceItem } from '@/lib/types'

// Experience, newest first
export const experience: ExperienceItem[] = [
  {
    id: 'gapura-angkasa-it-development',
    role: 'IT Development Intern',
    company: 'PT Gapura Angkasa',
    location: 'Kemayoran, Jakarta',
    period: 'Jan 2026 – May 2026',
    bullets: [
      'Built a risk management system with React, Node.js and Express that doubled how efficiently and effectively the company identifies risks.',
      'Built a lease asset management system with React, Node.js and Express, with a geolocation map that tracks where each leased asset is and what condition it is in.',
      'Took part in team discussions, suggesting approaches to system development and current technology.',
    ],
    tags: ['React', 'Node.js', 'Express.js', 'JavaScript'],
  },
  {
    id: 'gapura-angkasa-internship',
    role: 'IT Support Intern',
    company: 'PT Gapura Angkasa',
    location: 'Jakarta',
    period: 'Jan 2025 – Feb 2025',
    bullets: [
      "Built a web module that calculates and visualises the company's cost of goods sold (HPP), using vanilla JavaScript, HTML5, CSS3 and Express.js.",
      "Worked with the team on a WordPress site promoting the company's products.",
    ],
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Express.js', 'WordPress'],
  },
]

// TODO: add organizations (hidden while empty)
export const organizations: Credential[] = []
