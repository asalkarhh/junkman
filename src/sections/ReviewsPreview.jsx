import { motion } from 'framer-motion'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'
import ReviewCard from '../components/reviews/ReviewCard'
import { reviews, reviewHighlights } from '../data/reviews'
import { fadeUp, staggerContainer, viewportOnce } from '../animations/variants'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function ReviewsPreview() {
  const reducedMotion = usePrefersReducedMotion()
  const preview = reviews.slice(0, 3)

  return (
    <section className="section-padding bg-white">
      <Container className="space-y-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="Neighbors trust Junkman"
            description="Verified customer feedback from Nextdoor, Facebook, and Google."
          />
          <Button to="/reviews" variant="outline" className="shrink-0 self-start md:self-auto">
            Read All Reviews
          </Button>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {reviewHighlights.map((item) => (
            <div key={item.id} className="rounded-[var(--radius-card)] border border-border bg-surface px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">{item.label}</p>
              <p className="mt-1 font-heading text-base font-bold text-ink">{item.value}</p>
            </div>
          ))}
        </div>

        {preview.length === 0 ? (
          <p className="rounded-[var(--radius-card)] border border-dashed border-border bg-surface p-8 text-center text-muted">
            Reviews will appear here once available.
          </p>
        ) : (
          <motion.div
            className="grid gap-4 lg:grid-cols-3"
            variants={staggerContainer}
            initial={reducedMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={viewportOnce}
          >
            {preview.map((review) => (
              <motion.div key={review.id} variants={fadeUp}>
                <ReviewCard review={review} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </Container>
    </section>
  )
}
