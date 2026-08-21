import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'
import ServiceGrid from '../components/services/ServiceGrid'
import { featuredServices } from '../data/services'

export default function ServicesPreview() {
  return (
    <section className="section-padding bg-surface" id="services">
      <Container className="space-y-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="What We Do"
            title="Professional Removal & Hauling Services"
            description="From junk haul-away and full cleanouts to light demolition and furniture moving help, we handle the heavy lifting."
          />
          <Button to="/services" variant="outline" className="shrink-0 self-start md:self-auto">
            View All Services
          </Button>
        </div>
        <ServiceGrid services={featuredServices} />
      </Container>
    </section>
  )
}
