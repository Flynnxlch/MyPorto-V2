import type { StackGroup } from '@/lib/types'

// Tech stack groups; `icon` is a file name in public/icons
export const stack: StackGroup[] = [
  {
    title: 'Languages',
    items: [
      { name: 'Kotlin', icon: 'kotlin' },
      { name: 'Java', icon: 'java' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Express.js', icon: 'express' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MariaDB', icon: 'mariadb' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Firebase', icon: 'firebase' },
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
      { name: 'Docker', icon: 'docker' },
    ],
  },
]
