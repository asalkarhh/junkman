import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import { business } from '../data/business'
import { fadeUp, viewportOnce } from '../animations/variants'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function FinalCTA() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section className="section-padding bg-primary text-white">
      <Container>
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={fadeUp}
          initial={reducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">Ready when you are</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Ready to clear the clutter?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Tell us what you need removed and we will provide a free personal estimate. Labor, dump cost,
            and tax are included in our estimates.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/contact" size="lg">
              Get a Free Quote
            </Button>
            <Button href={`tel:${business.phoneTel}`} variant="outline" size="lg" className="border-white/20 bg-transparent text-white hover:bg-white hover:text-primary">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {business.phoneDisplay}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
