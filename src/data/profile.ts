import type { Fact } from '@/lib/types'

/**
 * PROFILE: who you are. Used by the hero, about and contact sections.
 *
 * Any value that starts with `TODO` is hidden on the page until you replace it.
 */
export const profile = {
  name: 'Muhammad Misyal Gibrani Razzaq',

  // The hero crossfades between these, one whole word group at a time.
  roles: ['Web Developer', 'Android Developer'],

  // One entry per paragraph.
  about: [
    "I'm in my seventh semester of Informatics Engineering at UIN Syarif Hidayatullah Jakarta, expecting to graduate in 2027. My coursework has focused on data structures and algorithms, mobile application development, and databases.",
    "I work across the web and Android. In early 2025 I interned at PT Gapura Angkasa, where I built a web module that calculates and visualises the company's cost of goods sold. On Android I build with Kotlin and Java, using Firebase for real-time data.",
    'I pick up new tools quickly and I work well in teams. I speak Indonesian and English.',
  ],

  // The facts strip under the about text.
  facts: [
    { label: 'University', value: 'UIN Syarif Hidayatullah Jakarta' },
    { label: 'Semester', value: '7th, Informatics Engineering' },
    { label: 'GPA', value: 'TODO: add your GPA, e.g. 3.60 / 4.00' },
    { label: 'Location', value: 'Ciputat, South Tangerang' },
    { label: 'Focus', value: 'Web and Android development' },
  ] satisfies Fact[],

  contact: {
    intro: 'Email is the quickest way to reach me. I also reply on LinkedIn and WhatsApp.',
  },
}
