import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import SafeImage from '../components/common/SafeImage'
import Button from '../components/common/Button'
import teamImage from '../assets/images/team/joe-and-joe-sr.webp'
import { business } from '../data/business'
import { fadeLeft, fadeRight, viewportOnce } from '../animations/variants'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const points = [
  business.claims.ownership,
  business.claims.experience,
  business.claims.licensed,
  business.claims.pricing,
  'Professional service',
  'Reliable communication',
]

export default function WhyChooseUs() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section className="section-padding bg-white">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div
          variants={fadeLeft}
          initial={reducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewportOnce}
          className="overflow-hidden rounded-[1rem] border border-border shadow-[var(--shadow-card)]"
        >
          <SafeImage
            src={teamImage}
            alt="Joe and Joe Sr., partners in Junkman Carting"
            className="aspect-[4/3] w-full object-cover"
            width={1200}
            height={900}
          />
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial={reducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-6"
        >
          <SectionHeading
            eyebrow="Why Junkman?"
            title="A local team that shows up and gets it done"
            description="Locally and family owned with over 15 years of experience. Licensed and insured to protect your home and property. We provide the labor and equipment to remove junk, complete cleanouts, move furniture, and more."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="inline-flex items-start gap-2 text-sm font-medium text-ink">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-primary">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <Button to="/about" variant="outline">
            Learn About Us
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
