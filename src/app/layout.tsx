import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Geist_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { MotionProvider } from '@/components/motion/motion-provider'
import { images } from '@/data/assets'
import { site } from '@/data/site'
import { ACCENT_SCRIPT } from '@/lib/accent'
import { imageSrc } from '@/lib/utils'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
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
    <html lang="en" className={`${jakarta.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Saved accent, applied before paint */}
        <script dangerouslySetInnerHTML={{ __html: ACCENT_SCRIPT }} />
      </head>
      <body className="bg-base-100 font-sans text-base-content antialiased">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem disableTransitionOnChange>
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
