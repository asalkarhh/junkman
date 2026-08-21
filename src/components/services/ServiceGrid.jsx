import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'
import { fadeUp, staggerContainer, viewportOnce } from '../../animations/variants'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export default function ServiceGrid({ services, href = '/services' }) {
  const reducedMotion = usePrefersReducedMotion()

  if (reducedMotion) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} href={href} />
        ))}
      </div>
    )
  }

  return (
    <motion.div
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {services.map((service) => (
        <motion.div key={service.id} variants={fadeUp}>
          <ServiceCard service={service} href={href} />
        </motion.div>
      ))}
    </motion.div>
  )
}
