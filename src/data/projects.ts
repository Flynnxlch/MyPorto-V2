import type { Project } from '@/lib/types'

/**
 * PROJECTS: shown as cards with an All / Web / Android filter.
 *
 * `id` links a project to its screenshot, GitHub and live links in assets.ts.
 * `category` must be 'web' or 'android'.
 */
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
  // TODO: v1 of the site also listed a Restaurant App (Java, Firebase). It is not on
  // the CV, so it is left out. Add it back here if you want it shown.
]
