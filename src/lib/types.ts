
export type ExperienceItem = {
  id: string
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
  tags: StackItem[]
}

export type Credential = { title: string; issuer: string; year: string }

export type StackItem = {
  name: string
  // File name in public/icons, without .svg
  icon?: string
}

export type StackGroup = { title: string; items: StackItem[] }

export type ProjectCategory = 'web' | 'android'

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  description: string
  tags: StackItem[]
}

export type ProjectMedia = { image: string; repo: string; demo: string }
