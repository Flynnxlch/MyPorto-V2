export type Fact = { label: string; value: string }

export type ExperienceItem = {
  id: string
  role: string
  company: string
  location: string
  period: string
  bullets: string[]
  tags: string[]
}

export type Credential = { title: string; issuer: string; year: string }

export type StackItem = {
  name: string
  /** File name in public/icons without `.svg`. Leave out to show a generic icon. */
  icon?: string
}

export type StackGroup = { title: string; items: StackItem[] }

export type ProjectCategory = 'web' | 'android'

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  period: string
  description: string
  tags: string[]
}

export type ProjectMedia = { image: string; repo: string; demo: string }
