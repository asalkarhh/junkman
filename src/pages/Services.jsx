import { Link } from 'react-router-dom'
import Seo from '../components/seo/Seo'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'
import FinalCTA from '../sections/FinalCTA'
import { serviceCategories } from '../data/services'
import { business } from '../data/business'
import { buildServiceSchema } from '../utils/schema'
import { serviceIcons } from '../utils/serviceIcons'

export default function Services() {
  return (
    <>
      <Seo
        title="Junk Removal & Cleanout Services"
        description="Junk removal, home cleanouts, demolition debris removal, furniture moving help, and more from Junkman Carting in the Hudson Valley."
        path="/services"
        jsonLd={buildServiceSchema()}
      />

      <section className="border-b border-border bg-white py-14 md:py-16">
        <Container className="space-y-6">
          <SectionHeading
            eyebrow="Our Services"
            title="Services we offer"
            description="Every job is unique. Tell us what you specifically need help with and we can give you a free personal estimate. Labor, dump cost, and tax are included in our estimates."
          />
          <Button to="/contact">Get a Free Quote</Button>
        </Container>
      </section>

      <section className="section-padding bg-surface">
        <Container className="space-y-14">
          {serviceCategories.map((category) => (
            <div key={category.id} id={category.id} className="space-y-6">
              <div className="max-w-3xl space-y-2">
                <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">{category.title}</h2>
                <p className="text-muted">{category.description}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.services.map((service) => {
                  const Icon = serviceIcons[service.icon] || serviceIcons.Truck
                  return (
                    <article key={service.id} className="card-surface p-5">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 font-heading text-lg font-bold">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
                    </article>
                  )
                })}
              </div>
            </div>
          ))}

          <div className="card-surface p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-bold">Construction & Remodeling</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
              {business.affiliation.note} Check out their website for more info:{' '}
              <a
                href={business.affiliation.url}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-ink underline-offset-2 hover:underline"
              >
                {business.affiliation.name}
              </a>
              .
            </p>
            <div className="mt-5">
              <Link to="/contact" className="font-semibold text-primary underline-offset-2 hover:underline">
                Need a related cleanout or debris removal? Get a free quote →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  )
}
