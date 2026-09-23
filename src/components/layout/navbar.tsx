'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { Download, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { AccentPicker } from '@/components/layout/accent-picker'
import { CONTAINER } from '@/components/layout/section-shell'
import { ThemeToggle } from '@/components/layout/theme-toggle'
import { ButtonLink } from '@/components/ui/link'
import { MediaImage } from '@/components/ui/media-image'
import { TechIcon } from '@/components/ui/tech-icon'
import { files, images, socials } from '@/data/assets'
import { site } from '@/data/site'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('')
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const lastId = site.nav[site.nav.length - 1].id
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
      // The last section can be too short to reach the observer band, so mark it at the page bottom.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) setActiveId(lastId)
    }
    // Sync once for reloads that restore a scroll position without firing a scroll event.
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // The page's single IntersectionObserver: marks the section crossing the viewport middle.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    for (const id of ['home', ...site.nav.map((item) => item.id)]) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }
    return () => observer.disconnect()
  }, [])

  const navLinks = (onNavigate?: () => void) =>
    site.nav.map((item) => {
      const active = activeId === item.id
      return (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={onNavigate}
            aria-current={active ? 'true' : undefined}
            className={`block rounded-box px-3 py-2 text-sm font-medium transition-colors ${
              active ? 'text-primary' : 'text-base-content/70 hover:text-base-content'
            }`}
          >
            {item.label}
          </a>
        </li>
      )
    })

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-200 ${
        scrolled ? 'border-base-300 bg-base-100' : 'border-transparent'
      }`}
    >
      <nav className={`${CONTAINER} flex h-16 items-center justify-between gap-4`}>
        <a href="#home" className="flex items-center gap-2 rounded-box font-semibold">
          <MediaImage src={images.logo} alt="" width={30} height={24} className="h-6 w-auto" />
          {site.ui.brand}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">{navLinks()}</ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <AccentPicker />
          {files.cv && (
            <ButtonLink href={files.cv} className="btn-outline btn-sm hidden border-base-300 sm:inline-flex">
              <Download aria-hidden className="size-4" />
              {site.ui.cv}
            </ButtonLink>
          )}
          {socials.linkedin && (
            <ButtonLink href={socials.linkedin} className="btn-primary btn-sm hidden sm:inline-flex">
              <TechIcon icon="linkedin" className="size-4" />
              {site.ui.connect}
            </ButtonLink>
          )}

          <Dialog.Root open={drawerOpen} onOpenChange={setDrawerOpen}>
            <Dialog.Trigger aria-label={site.ui.openMenu} className="btn btn-square btn-ghost btn-sm lg:hidden">
              <Menu aria-hidden className="size-5" />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-base-content/20" />
              <Dialog.Content
                aria-describedby={undefined}
                className="fixed inset-y-0 right-0 z-50 flex w-72 max-w-[85vw] flex-col gap-6 border-l border-base-300 bg-base-100 p-6"
              >
                <div className="flex items-center justify-between">
                  <Dialog.Title className="font-semibold">{site.ui.menuTitle}</Dialog.Title>
                  <Dialog.Close aria-label={site.ui.closeMenu} className="btn btn-square btn-ghost btn-sm">
                    <X aria-hidden className="size-5" />
                  </Dialog.Close>
                </div>
                <ul className="flex flex-col gap-1">{navLinks(() => setDrawerOpen(false))}</ul>
                <div className="mt-auto flex flex-col gap-2">
                  {files.cv && (
                    <ButtonLink href={files.cv} className="btn-outline border-base-300">
                      <Download aria-hidden className="size-4" />
                      {site.ui.cv}
                    </ButtonLink>
                  )}
                  {socials.linkedin && (
                    <ButtonLink href={socials.linkedin} className="btn-primary">
                      <TechIcon icon="linkedin" className="size-4" />
                      {site.ui.connect}
                    </ButtonLink>
                  )}
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </nav>
    </header>
  )
}
