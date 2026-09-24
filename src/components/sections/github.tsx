import { SectionShell } from '@/components/layout/section-shell'
import { Reveal } from '@/components/motion/reveal'
import { TextLink } from '@/components/ui/link'
import { socials } from '@/data/assets'
import { site } from '@/data/site'
import { getContributions, getTopLanguages, githubUser, type Contributions, type Language } from '@/lib/github'

// Graph geometry in SVG units: 11px cells with a 3px gap
const CELL = 11
const STEP = 14
const LEFT = 28
const TOP = 16

// Contribution level (0-4) to accent strength
const LEVEL_FILL = ['fill-base-300', 'fill-primary/30', 'fill-primary/55', 'fill-primary/80', 'fill-primary']
// Language rank to accent strength
const LANGUAGE_BG = ['bg-primary', 'bg-primary/75', 'bg-primary/55', 'bg-primary/40', 'bg-primary/25']

// min-w-0 lets the graph scroll inside its box instead of widening the page
const BOX = 'min-w-0 rounded-box border border-base-300 p-4 sm:p-6'

const formatDate = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })

// GitHub section: contribution graph on the left, top languages on the right
export async function GitHub() {
  const [contributions, languages] = await Promise.all([getContributions(), getTopLanguages()])

  return (
    <SectionShell id="github" title={site.sections.github}>
      <div className="grid gap-8 lg:grid-cols-12">
        <Reveal className={`${BOX} lg:col-span-8`}>
          {contributions ? <ContributionGraph data={contributions} /> : <Unavailable />}
        </Reveal>
        <Reveal index={1} className={`${BOX} lg:col-span-4`}>
          {languages ? <TopLanguages languages={languages} /> : <Unavailable />}
        </Reveal>
      </div>
    </SectionShell>
  )
}

function ContributionGraph({ data }: { data: Contributions }) {
  // Pad the first week so each column runs Sunday to Saturday
  const offset = data.days.length ? new Date(`${data.days[0].date}T00:00:00Z`).getUTCDay() : 0
  const columns = Math.ceil((offset + data.days.length) / 7)
  const width = LEFT + columns * STEP - (STEP - CELL)
  const height = TOP + 7 * STEP - (STEP - CELL)

  // Month label above the first column of each month, skipped if crowding the previous one
  const months: { x: number; label: string }[] = []
  let lastMonth = -1
  let lastColumn = -3
  data.days.forEach((day, i) => {
    const column = Math.floor((offset + i) / 7)
    const date = new Date(`${day.date}T00:00:00Z`)
    if (date.getUTCMonth() !== lastMonth && column - lastColumn >= 3) {
      months.push({ x: LEFT + column * STEP, label: date.toLocaleDateString('en-US', { month: 'short', timeZone: 'UTC' }) })
      lastColumn = column
    }
    lastMonth = date.getUTCMonth()
  })

  return (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p>
          <span className="text-2xl font-bold">{data.total}</span>{' '}
          <span className="text-base-content/70">{site.github.contributions}</span>
        </p>
        <TextLink href={socials.github} className="text-sm">
          @{githubUser}
        </TextLink>
      </div>

      {/* Scrolls sideways on small screens; rtl starts it at the latest weeks */}
      <div dir="rtl" className="mt-4 overflow-x-auto [scrollbar-width:none]">
        <div dir="ltr" className="min-w-160">
          <svg
            viewBox={`0 0 ${width} ${height}`}
            role="img"
            aria-label={`${data.total} ${site.github.contributions}`}
            className="h-auto w-full"
          >
            {months.map((month) => (
              <text key={month.x} x={month.x} y={10} className="fill-base-content/60 text-[10px]">
                {month.label}
              </text>
            ))}
            {['Mon', 'Wed', 'Fri'].map((label, i) => (
              <text key={label} x={0} y={TOP + (i * 2 + 1) * STEP + 9} className="fill-base-content/60 text-[10px]">
                {label}
              </text>
            ))}
            {data.days.map((day, i) => (
              <rect
                key={day.date}
                x={LEFT + Math.floor((offset + i) / 7) * STEP}
                y={TOP + ((offset + i) % 7) * STEP}
                width={CELL}
                height={CELL}
                rx={2}
                className={LEVEL_FILL[day.level]}
              >
                <title>{`${day.count} contribution${day.count === 1 ? '' : 's'} on ${formatDate(day.date)}`}</title>
              </rect>
            ))}
          </svg>
        </div>
      </div>

      <div aria-hidden className="mt-3 flex items-center justify-end gap-1 text-xs text-base-content/60">
        {site.github.less}
        {LEVEL_FILL.map((fill) => (
          <svg key={fill} viewBox="0 0 11 11" className="size-2.5">
            <rect width={11} height={11} rx={2} className={fill} />
          </svg>
        ))}
        {site.github.more}
      </div>
    </>
  )
}

function TopLanguages({ languages }: { languages: Language[] }) {
  return (
    <>
      <h3 className="font-mono text-xs tracking-wide text-base-content/60 uppercase">{site.github.languages}</h3>

      <div className="mt-4 flex h-2 overflow-hidden rounded-full bg-base-300">
        {languages.map((language, i) => (
          <span key={language.name} className={LANGUAGE_BG[i]} style={{ width: `${language.percent}%` }} />
        ))}
      </div>

      <ul className="mt-4 space-y-2 text-sm">
        {languages.map((language, i) => (
          <li key={language.name} className="flex items-center gap-2">
            <span aria-hidden className={`size-2.5 rounded-full ${LANGUAGE_BG[i]}`} />
            <span className="font-medium">{language.name}</span>
            <span className="ml-auto font-mono text-xs text-base-content/60">{language.percent.toFixed(1)}%</span>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-xs text-base-content/60">{site.github.languagesNote}</p>
    </>
  )
}

function Unavailable() {
  return (
    <p className="text-sm text-base-content/70">
      {site.github.unavailable}{' '}
      <TextLink href={socials.github} className="text-sm">
        @{githubUser}
      </TextLink>
    </p>
  )
}
