import { motion } from 'framer-motion'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import SafeImage from '../components/common/SafeImage'
import Button from '../components/common/Button'
import joeImage from '../assets/images/team/joe.webp'
import { fadeLeft, fadeRight, viewportOnce } from '../animations/variants'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function AboutPreview() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section className="section-padding bg-white">
      <Container className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <motion.div
          variants={fadeLeft}
          initial={reducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewportOnce}
          className="overflow-hidden rounded-[1rem] border border-border shadow-[var(--shadow-card)]"
        >
          <SafeImage
            src={joeImage}
            alt="Joe, owner of Junkman Carting"
            className="aspect-[4/5] w-full object-cover object-top"
            width={900}
            height={1125}
          />
        </motion.div>

        <motion.div
          variants={fadeRight}
          initial={reducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewportOnce}
          className="space-y-5"
        >
          <SectionHeading
            eyebrow="About Junkman Carting"
            title="A local team you can trust"
            description="My name is Joe, Joe the Junkman. I’m a local born, raised, and married in the Hudson Valley who’s been in the junk industry for the past 15 years. My father and I are partners in Junkman Carting LLC, and we always want to keep it in the family."
          />
          <p className="text-base leading-relaxed text-muted">
            We take pride in providing affordable, local services for our neighbors. We are reasonable,
            negotiable, and willing to work until the job is done. And we enjoy seeing our neighbors happy
            after their space has been reclaimed.
          </p>
          <Button to="/about">Meet the Team</Button>
        </motion.div>
      </Container>
    </section>
  )
}
