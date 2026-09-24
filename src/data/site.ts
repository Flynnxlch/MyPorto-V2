// Site labels: title, navigation, headings and UI text
export const site = {
  title: 'Muhammad Misyal Gibrani Razzaq · Web and Android Developer',
  description:
    'Portfolio of Muhammad Misyal Gibrani Razzaq, an Informatics Engineering student at UIN Syarif Hidayatullah Jakarta building web and Android applications.',

  // Navbar order; `id` must match a section
  nav: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'stack', label: 'Tech stack' },
    { id: 'projects', label: 'Projects' },
    { id: 'github', label: 'GitHub' },
    { id: 'contact', label: 'Contact' },
  ],

  ui: {
    brand: 'Misyal',
    cv: 'My Resume',
    connect: "Let's Connect",
    themeToggle: 'Toggle light and dark theme',
    accentPicker: 'Choose accent color',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menuTitle: 'Navigation',
    backToTop: 'Back to top',
  },

  // Accent picker options (first is default); `id` matches [data-accent] in globals.css
  accents: [
    { id: 'gold', label: 'Gold' },
    { id: 'blue', label: 'Blue' },
    { id: 'indigo', label: 'Indigo' },
    { id: 'green', label: 'Green' },
    { id: 'pink', label: 'Pink' },
    { id: 'rust', label: 'Rust' },
  ],

  hero: {
    primaryButton: 'Projects',
  },

  sections: {
    about: 'About',
    experience: 'Experience',
    certifications: 'Certifications',
    organizations: 'Organizations',
    stack: 'Tech stack',
    projects: 'Projects',
    github: 'GitHub activity',
    contact: 'Contact',
  },

  projects: {
    filterLabel: 'Filter projects',
    filters: { all: 'All', web: 'Web', android: 'Android' },
    github: 'GitHub',
    live: 'Live site',
    imagePending: 'Screenshot coming soon',
  },

  github: {
    contributions: 'contributions in the last year',
    languages: 'Top languages',
    languagesNote: 'By code size across my public repositories',
    less: 'Less',
    more: 'More',
    unavailable: 'GitHub data is unavailable right now.',
  },

  socials: {
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    whatsapp: 'WhatsApp',
  },
}
