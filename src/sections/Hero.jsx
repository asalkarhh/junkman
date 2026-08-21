import { motion } from 'framer-motion'
import { CheckCircle2, Phone } from 'lucide-react'
import Container from '../components/common/Container'
import Button from '../components/common/Button'
import SafeImage from '../components/common/SafeImage'
import heroImage from '../assets/images/hero/truck-team.webp'
import { business } from '../data/business'
import { fadeUp, scaleIn } from '../animations/variants'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const trustPoints = [
  business.claims.experience,
  business.claims.licensed,
  business.claims.quotes,
]

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,180,0,0.12),transparent_40%)]" />
      <Container className="relative grid items-center gap-10 py-12 md:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
        <div className="space-y-6">
          <motion.span
            className="label-badge"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Local & Family Owned
          </motion.span>

          <motion.h1
            className="max-w-xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl"
            variants={fadeUp}
            initial={reducedMotion ? false : 'hidden'}
            animate="visible"
          >
            Junk Removal
            <span className="block text-primary">Made Simple.</span>
          </motion.h1>

          <motion.p
            className="max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.45 }}
          >
            Professional junk removal, cleanouts, hauling, and related services throughout the Hudson
            Valley. Free quotes. Affordable prices. Your project done.
          </motion.p>

          <motion.ul
            className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.18 }}
          >
            {trustPoints.map((point) => (
              <li key={point} className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
                <CheckCircle2 className="h-4 w-4 text-accent" aria-hidden="true" />
                {point}
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="flex flex-col gap-3 sm:flex-row"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.4 }}
          >
            <Button to="/contact" size="lg">
              Get a Free Quote
            </Button>
            <Button href={`tel:${business.phoneTel}`} variant="secondary" size="lg">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </Button>
          </motion.div>

          <p className="text-sm text-muted">
            Call or text{' '}
            <a href={`tel:${business.phoneTel}`} className="font-semibold text-ink underline-offset-2 hover:underline">
              {business.phoneDisplay}
            </a>
          </p>
        </div>

        <motion.div
          className="relative"
          variants={scaleIn}
          initial={reducedMotion ? false : 'hidden'}
          animate="visible"
        >
          <div className="overflow-hidden rounded-[1rem] border border-border bg-white shadow-[var(--shadow-card)]">
            <SafeImage
              src={heroImage}
              alt="Junkman Carting team with their work truck"
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
              width={1400}
              height={1050}
            />
          </div>
          <div className="absolute -bottom-4 left-4 right-4 rounded-xl border border-border bg-white p-4 shadow-[var(--shadow-card)] sm:left-auto sm:right-6 sm:w-64">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">Based in</p>
            <p className="mt-1 font-heading text-lg font-bold text-ink">Hopewell Junction, NY</p>
            <p className="text-sm text-muted">Serving Hudson Valley, NJ & CT</p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
