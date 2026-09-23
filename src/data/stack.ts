import type { StackGroup } from '@/lib/types'

// Tech stack groups; `icon` is a file name in public/icons
export const stack: StackGroup[] = [
  {
    title: 'Languages',
    items: [
      { name: 'Kotlin', icon: 'kotlin' },
      { name: 'Java', icon: 'java' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'PHP', icon: 'php' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Express.js', icon: 'express' },
      { name: 'Android SDK', icon: 'android' },
      { name: 'Material Design' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'Firebase Firestore', icon: 'firebase' },
      { name: 'Firebase Realtime Database', icon: 'firebase' },
      { name: 'Supabase (PostgreSQL)', icon: 'supabase' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'Android Studio', icon: 'androidstudio' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Google Colab', icon: 'googlecolab' },
      { name: 'Microsoft Office' },
    ],
  },
]
