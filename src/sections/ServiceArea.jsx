import { MapPin } from 'lucide-react'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import { serviceAreaIntro, serviceAreaNote, serviceAreas } from '../data/serviceAreas'

export default function ServiceArea() {
  return (
    <section className="section-padding bg-surface">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="Service Area"
          title="Serving the Hudson Valley"
          description={serviceAreaIntro}
        />
        <p className="text-sm font-medium text-muted">{serviceAreaNote}</p>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {serviceAreas.map((area) => (
            <li
              key={`${area.name}-${area.state}`}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-3 py-3 text-sm font-medium text-ink"
            >
              <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {area.name}, {area.state}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
