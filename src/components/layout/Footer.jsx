import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import Container from '../common/Container'
import logo from '../../assets/logo/junkman-logo.webp'
import { business, getFullAddress } from '../../data/business'
import { serviceCategories } from '../../data/services'

function InstagramIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z" />
    </svg>
  )
}

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-primary text-white">
      <Container className="section-padding grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-10 w-auto rounded-sm object-contain" />
            <p className="font-heading text-lg font-extrabold">{business.shortName}</p>
          </div>
          <p className="text-sm leading-relaxed text-white/75">{business.description}</p>
          <div className="flex items-center gap-3">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 hover:bg-accent hover:text-primary"
            >
              <InstagramIcon />
            </a>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 hover:bg-accent hover:text-primary"
            >
              <FacebookIcon />
            </a>
            <a
              href={`mailto:${business.email}?subject=Estimate%20Needed`}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 hover:bg-accent hover:text-primary"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-4 font-heading text-sm font-bold uppercase tracking-[0.08em] text-accent">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm text-white/80">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-heading text-sm font-bold uppercase tracking-[0.08em] text-accent">
            Services
          </h2>
          <ul className="space-y-2 text-sm text-white/80">
            {serviceCategories.slice(0, 5).map((category) => (
              <li key={category.id}>
                <Link to="/services" className="hover:text-accent">
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-heading text-sm font-bold uppercase tracking-[0.08em] text-accent">
            Contact
          </h2>
          <ul className="space-y-3 text-sm text-white/80">
            <li>
              <a href={`tel:${business.phoneTel}`} className="inline-flex items-start gap-2 hover:text-accent">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${business.email}?subject=Estimate%20Needed`}
                className="inline-flex items-start gap-2 hover:text-accent"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {business.email}
              </a>
            </li>
            <li className="inline-flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {getFullAddress()}
                <br />
                Serving {business.address.region}, NJ & CT
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/contact" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-accent">
              Terms
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  )
}
