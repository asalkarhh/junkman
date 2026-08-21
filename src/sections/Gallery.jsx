import { motion } from 'framer-motion'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import SafeImage from '../components/common/SafeImage'
import { galleryItems } from '../data/gallery'
import { fadeUp, staggerContainer, viewportOnce } from '../animations/variants'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function Gallery() {
  const reducedMotion = usePrefersReducedMotion()
  const items = galleryItems.slice(0, 6)

  return (
    <section className="section-padding bg-surface">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Recent Work"
          title="Real jobs. Real results."
          description="A look at the trucks, team, and projects behind Junkman Carting."
        />

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial={reducedMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={viewportOnce}
        >
          {items.map((item) => (
            <motion.figure
              key={item.id}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[var(--radius-card)] border border-border bg-white"
            >
              <SafeImage
                src={item.src}
                alt={item.alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                width={1000}
                height={750}
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent px-4 pb-4 pt-10 text-sm font-semibold text-white opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
                {item.label}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
