/**
 * SITE LABELS: page title, navigation, section headings and every small UI label.
 *
 * Edit only what is inside the quotes. Keep the labels on the left as they are.
 * Personal content lives in profile.ts, experience.ts, projects.ts and stack.ts.
 * Images, the CV and every link live in assets.ts.
 */
export const site = {
  title: 'Muhammad Misyal Gibrani Razzaq · Web and Android Developer',
  description:
    'Portfolio of Muhammad Misyal Gibrani Razzaq, an Informatics Engineering student at UIN Syarif Hidayatullah Jakarta building web and Android applications.',

  // `id` must match a section on the page. The order here is the order in the navbar.
  nav: [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'stack', label: 'Tech stack' },
    { id: 'projects', label: 'Projects' },
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

  // Accent colors for the palette picker next to the theme toggle. The first one is the default.
  // `id` must match a [data-accent] block in src/app/globals.css.
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
    contact: 'Contact',
  },

  projects: {
    filterLabel: 'Filter projects',
    filters: { all: 'All', web: 'Web', android: 'Android' },
    github: 'GitHub',
    live: 'Live site',
    imagePending: 'Screenshot coming soon',
  },

  socials: {
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    whatsapp: 'WhatsApp',
  },
}
