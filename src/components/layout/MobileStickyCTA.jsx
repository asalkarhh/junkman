import { Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { business } from '../../data/business'

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 p-2 backdrop-blur-md md:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-2">
        <a
          href={`tel:${business.phoneTel}`}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-btn)] border border-primary/15 bg-white px-3 text-sm font-bold text-primary"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call Now
        </a>
        <Link
          to="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-btn)] bg-accent px-3 text-sm font-bold text-primary"
        >
          Get Free Quote
        </Link>
      </div>
    </div>
  )
}
