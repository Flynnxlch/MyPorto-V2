import type { Project } from '@/lib/types'

// Projects; `id` links to assets.ts, `category` is 'web' or 'android'
export const projects: Project[] = [
  {
    id: 'bisaditas',
    title: 'BisaDitas',
    category: 'web',
    period: 'Sep 2025 – Oct 2025',
    description:
      'A bootcamp platform for people with disabilities, with text-to-speech, course streaks and rankings, built for APHACTON.',
    tags: ['Next.js', 'Supabase', 'Vercel'],
  },
  {
    id: 'task-management-app',
    title: 'Task Management App',
    category: 'android',
    period: 'Jun 2025 – Jul 2025',
    description:
      'An Android app for tasks, subtasks and group collaboration, with a calendar view and push notifications.',
    tags: ['Kotlin', 'Firebase Firestore', 'Realtime Database', 'Material Design'],
  },
  // TODO: Restaurant App (Java, Firebase) from v1 left out; re-add if wanted
]
