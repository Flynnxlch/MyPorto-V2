import { socials } from '@/data/assets'

// Refetch GitHub data at most once a day
const REVALIDATE = 60 * 60 * 24

export type ContributionDay = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }
export type Contributions = { total: number; days: ContributionDay[] }
export type Language = { name: string; percent: number }

// Username from the GitHub link in assets.ts
export const githubUser = socials.github.replace(/\/$/, '').split('/').pop() ?? ''

// Optional GITHUB_TOKEN raises the API rate limit; the public limit is enough for a daily refresh
const headers: HeadersInit = process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}

async function getJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, { headers, next: { revalidate: REVALIDATE } })
    return res.ok ? ((await res.json()) as T) : null
  } catch {
    return null
  }
}

// Last-year contribution calendar (public profile data, no token needed)
export async function getContributions(): Promise<Contributions | null> {
  const data = await getJson<{ total: { lastYear: number }; contributions: ContributionDay[] }>(
    `https://github-contributions-api.jogruber.de/v4/${githubUser}?y=last`,
  )
  return data ? { total: data.total.lastYear, days: data.contributions } : null
}

// Top languages by code size across owned, non-fork repos
export async function getTopLanguages(limit = 5): Promise<Language[] | null> {
  const repos = await getJson<{ name: string; fork: boolean }[]>(
    `https://api.github.com/users/${githubUser}/repos?per_page=100&type=owner`,
  )
  if (!repos) return null

  const perRepo = await Promise.all(
    repos
      .filter((repo) => !repo.fork)
      .map((repo) => getJson<Record<string, number>>(`https://api.github.com/repos/${githubUser}/${repo.name}/languages`)),
  )

  const bytes = new Map<string, number>()
  for (const languages of perRepo) {
    for (const [name, size] of Object.entries(languages ?? {})) bytes.set(name, (bytes.get(name) ?? 0) + size)
  }
  const total = [...bytes.values()].reduce((sum, size) => sum + size, 0)
  if (total === 0) return null

  return [...bytes.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([name, size]) => ({ name, percent: (size / total) * 100 }))
}
