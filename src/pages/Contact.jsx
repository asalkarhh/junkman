import { Mail, MapPin, Phone } from 'lucide-react'
import Seo from '../components/seo/Seo'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import QuoteForm from '../components/forms/QuoteForm'
import { business, getFullAddress } from '../data/business'

export default function Contact() {
  return (
    <>
      <Seo
        title="Get a Free Quote"
        description="Contact Junkman Carting for a free junk removal quote in the Hudson Valley. Call or text (845) 896-5865 or send your project details online."
        path="/contact"
      />

      <section className="section-padding bg-surface">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Contact"
              title="Get a free quote"
              description="Send us a message with your estimate needs, or call or text us directly. Every job is unique — tell us what you need help with."
            />

            <div className="space-y-4">
              <a
                href={`tel:${business.phoneTel}`}
                className="card-surface flex items-start gap-3 p-4 transition hover:border-accent"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-primary">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                    Call or Text
                  </span>
                  <span className="mt-1 block font-heading text-lg font-bold text-ink">
                    {business.phoneDisplay}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${business.email}?subject=Estimate%20Needed`}
                className="card-surface flex items-start gap-3 p-4 transition hover:border-accent"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-primary">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                    Email
                  </span>
                  <span className="mt-1 block font-heading text-lg font-bold text-ink">{business.email}</span>
                </span>
              </a>

              <div className="card-surface flex items-start gap-3 p-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Based In</p>
                  <p className="mt-1 font-heading text-lg font-bold text-ink">{getFullAddress()}</p>
                  <p className="text-sm text-muted">Serving Hudson Valley, New Jersey, and Connecticut</p>
                </div>
              </div>
            </div>
          </div>

          <QuoteForm />
        </Container>
      </section>
    </>
  )
}
