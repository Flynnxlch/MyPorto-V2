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
  },

  // Accent picker options; `id` matches [data-accent] in globals.css
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
    organizations: 'Organizations',
    stack: 'Tech stack',
    projects: 'Projects',
    github: 'GitHub activity',
    contact: 'Contact',
  },

  projects: {
    previous: 'Previous project',
    next: 'Next project',
    github: 'GitHub',
    live: 'Live site',
    imagePending: 'Screenshot coming soon',
    builtWith: 'Built with',
  },

  github: {
    contributions: 'contributions in the last year',
    languages: 'Top languages',
    less: 'Less',
    more: 'More',
    unavailable: 'GitHub data is unavailable right now.',
  },

  contact: {
    formTitle: 'Send me a message',
    name: 'Name',
    namePlaceholder: 'Your name',
    nameHint: 'Letters, spaces, dots, apostrophes and hyphens only',
    message: 'Message',
    messagePlaceholder: 'What would you like to talk about?',
    messageHint: 'Plain text only, up to 2000 characters',
    send: 'Send via email',
    note: 'Opens your email app with the message ready to send.',
    subject: 'Portfolio message from',
    elsewhere: 'Other',
  },

  socials: {
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    whatsapp: 'WhatsApp',
  },
}
