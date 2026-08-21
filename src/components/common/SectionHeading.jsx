import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../../animations/variants'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  as: TitleTag = 'h2',
}) {
  const reducedMotion = usePrefersReducedMotion()
  const alignClass = align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-left'

  const content = (
    <div className={`flex max-w-3xl flex-col gap-3 ${alignClass} ${className}`}>
      {eyebrow ? <span className="label-badge">{eyebrow}</span> : null}
      <TitleTag className="text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">{title}</TitleTag>
      {description ? (
        <p className="text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  )

  if (reducedMotion) return content

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {content}
    </motion.div>
  )
}
