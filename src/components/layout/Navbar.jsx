import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Container from '../common/Container'
import Button from '../common/Button'
import logo from '../../assets/logo/junkman-logo.webp'
import { business } from '../../data/business'
import { useLockBodyScroll } from '../../hooks/useScroll'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const reducedMotion = usePrefersReducedMotion()

  useLockBodyScroll(open)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <>
      <div className="bg-primary text-white">
        <Container className="flex items-center justify-between gap-3 py-2 text-xs sm:text-sm">
          <p className="font-medium tracking-wide">
            Locally & family owned · Hudson Valley junk removal
          </p>
          <a
            href={`tel:${business.phoneTel}`}
            className="inline-flex items-center gap-1.5 font-semibold text-accent hover:text-white"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="hidden sm:inline">Call or text</span>
            {business.phoneDisplay}
          </a>
        </Container>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-colors ${
          scrolled ? 'border-border bg-white/95 backdrop-blur-md shadow-sm' : 'border-transparent bg-white'
        }`}
      >
        <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={`${business.shortName} home`}>
            <img
              src={logo}
              alt=""
              className="h-10 w-auto rounded-sm object-contain sm:h-11"
              width={160}
              height={44}
            />
            <span className="truncate font-heading text-base font-extrabold tracking-tight text-ink sm:text-lg">
              {business.shortName}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                    isActive ? 'bg-accent/15 text-primary' : 'text-muted hover:text-ink'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button to="/contact" size="sm">
              Get a Free Quote
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-white text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-40 bg-primary/40 lg:hidden"
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col bg-white shadow-xl lg:hidden"
              initial={reducedMotion ? false : { x: '100%' }}
              animate={{ x: 0 }}
              exit={reducedMotion ? undefined : { x: '100%' }}
              transition={{ type: 'tween', duration: 0.28 }}
            >
              <div className="flex items-center justify-between border-b border-border px-4 py-4">
                <p className="font-heading text-lg font-bold">Menu</p>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-1 p-4" aria-label="Mobile">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `rounded-lg px-4 py-3 text-base font-semibold ${
                        isActive ? 'bg-accent/15 text-primary' : 'text-ink hover:bg-surface'
                      }`
                    }
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
              <div className="space-y-3 border-t border-border p-4">
                <Button to="/contact" className="w-full" onClick={() => setOpen(false)}>
                  Get a Free Quote
                </Button>
                <Button
                  href={`tel:${business.phoneTel}`}
                  variant="outline"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Call Now
                </Button>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  )
}
