import { motion } from 'framer-motion'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import { fadeUp, staggerContainer, viewportOnce } from '../animations/variants'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const steps = [
  {
    number: '01',
    title: 'Contact Us',
    description: 'Tell us what you need removed, cleaned out, hauled, or moved.',
  },
  {
    number: '02',
    title: 'Get Your Quote',
    description:
      'Discuss your project and receive a free personal estimate. Labor, dump cost, and tax are included.',
  },
  {
    number: '03',
    title: 'We Handle the Heavy Lifting',
    description: 'Our team arrives ready to work and takes care of the removal.',
  },
]

export default function HowItWorks() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section className="section-padding bg-surface">
      <Container className="space-y-10">
        <SectionHeading
          align="center"
          eyebrow="How It Works"
          title="Three simple steps"
          description="Getting your space cleared should feel straightforward from the first call to the final haul-away."
          className="mx-auto"
        />

        <motion.ol
          className="grid gap-4 md:grid-cols-3"
          variants={staggerContainer}
          initial={reducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewportOnce}
        >
          {steps.map((step) => (
            <motion.li key={step.number} variants={fadeUp} className="card-surface p-6">
              <p className="font-heading text-4xl font-extrabold text-accent">{step.number}</p>
              <h3 className="mt-4 font-heading text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  )
}
