import type { Project } from '@/lib/types'

// Projects; `id` links to assets.ts, `category` is 'web' or 'android', tag `icon` is a file in public/icons
export const projects: Project[] = [
  {
    id: 'risk-management-system',
    title: 'Risk Management System',
    category: 'web',
    description:
      'An internship project at PT Gapura Angkasa to improve how the company identifies risks, with a responsive dashboard that works on any device.',
    tags: [
      { name: 'React', icon: 'react' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Prisma ORM', icon: 'prisma' },
    ],
  },
  {
    id: 'lemon',
    title: 'LeMon',
    category: 'web',
    description:
      "A lease asset management system for the company's leased assets, with a geolocation map that shows where each asset is and what condition it is in.",
    tags: [
      { name: 'React', icon: 'react' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Prisma ORM', icon: 'prisma' },
      { name: 'Supabase', icon: 'supabase' },
    ],
  },
  {
    id: 'digitalokal',
    title: 'DigitaLokal',
    category: 'web',
    description: 'A landing page promoting DigitaLokal, a service that helps UMKM (small local businesses) go digital.',
    tags: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Radix UI', icon: 'radixui' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'Vercel', icon: 'vercel' },
    ],
  },
  {
    id: 'bisaditas',
    title: 'BisaDitas',
    category: 'web',
    description:
      'A bootcamp platform for people with disabilities, with text-to-speech, course streaks and rankings, built for APHACTON.',
    tags: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Vercel', icon: 'vercel' },
    ],
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    category: 'android',
    description:
      'An Android app for tasks, subtasks and group collaboration, with a calendar view and push notifications.',
    tags: [
      { name: 'Kotlin', icon: 'kotlin' },
      { name: 'Firebase Firestore & Realtime Database', icon: 'firebase' },
      { name: 'Material Design', icon: 'materialui' },
    ],
  },
  // TODO: Restaurant App (Java, Firebase) from v1 left out; re-add if wanted
]
