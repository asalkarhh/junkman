import Seo from '../components/seo/Seo'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import ReviewCard from '../components/reviews/ReviewCard'
import Button from '../components/common/Button'
import FinalCTA from '../sections/FinalCTA'
import { reviews, reviewHighlights } from '../data/reviews'
import { business } from '../data/business'
import { buildReviewSchema } from '../utils/schema'

export default function Reviews() {
  return (
    <>
      <Seo
        title="Customer Reviews"
        description="Read verified Junkman Carting reviews from Nextdoor, Facebook, and Google customers across the Hudson Valley."
        path="/reviews"
        jsonLd={buildReviewSchema()}
      />

      <section className="border-b border-border bg-white py-14 md:py-16">
        <Container className="space-y-8">
          <SectionHeading
            eyebrow="Reviews"
            title="What customers are saying"
            description="Real feedback from homeowners and neighbors who hired Junkman Carting for junk removal, cleanouts, and furniture moving help."
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {reviewHighlights.map((item) => (
              <div key={item.id} className="rounded-[var(--radius-card)] border border-border bg-surface px-4 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">{item.label}</p>
                <p className="mt-1 font-heading text-base font-bold text-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding bg-surface">
        <Container>
          {reviews.length === 0 ? (
            <p className="rounded-[var(--radius-card)] border border-dashed border-border bg-white p-8 text-center text-muted">
              Reviews will appear here once available.
            </p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          )}

          <div className="mt-10 flex flex-wrap gap-3 text-sm">
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-ink underline-offset-2 hover:underline"
            >
              More reviews on Facebook
            </a>
            <span className="text-border">|</span>
            <a
              href={business.social.google}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-ink underline-offset-2 hover:underline"
            >
              More reviews on Google
            </a>
            <span className="text-border">|</span>
            <a
              href={business.social.nextdoor}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-ink underline-offset-2 hover:underline"
            >
              More reviews on Nextdoor
            </a>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container className="card-surface flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="font-heading text-2xl font-extrabold">Ready to get started?</h2>
            <p className="mt-1 text-muted">Request a free quote and tell us about your project.</p>
          </div>
          <Button to="/contact">Get a Free Quote</Button>
        </Container>
      </section>

      <FinalCTA />
    </>
  )
}
