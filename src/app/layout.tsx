import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Geist, Geist_Mono } from 'next/font/google'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { MotionProvider } from '@/components/motion/motion-provider'
import { images } from '@/data/assets'
import { site } from '@/data/site'
import { ACCENT_SCRIPT, DEFAULT_ACCENT } from '@/lib/accent'
import { imageSrc } from '@/lib/utils'
import './globals.css'

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  icons: { icon: imageSrc(images.logo) },
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    // next-themes edits <html> before hydration
    // Dark theme and blue accent on first visit; saved choices override them
    <html
      lang="en"
      data-theme="dark"
      data-accent={DEFAULT_ACCENT}
      className={`${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Saved accent, applied before paint */}
        <script dangerouslySetInnerHTML={{ __html: ACCENT_SCRIPT }} />
      </head>
      <body className="bg-base-100 font-sans text-base-content antialiased">
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <MotionProvider>
            <Navbar />
            {children}
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
