import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { serviceIcons } from '../../utils/serviceIcons'

export default function ServiceCard({ service, href = '/services' }) {
  const Icon = serviceIcons[service.icon] || serviceIcons.Truck

  return (
    <Link
      to={href}
      className="card-surface group flex h-full flex-col gap-4 p-5 transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-accent sm:p-6"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent/15 text-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-lg font-heading font-bold text-ink">{service.title}</h3>
        <p className="text-sm leading-relaxed text-muted sm:text-[0.95rem]">{service.description}</p>
      </div>
      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
        Learn more
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  )
}
