import { Check } from 'lucide-react'
import Seo from '../components/seo/Seo'
import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import SafeImage from '../components/common/SafeImage'
import Button from '../components/common/Button'
import FinalCTA from '../sections/FinalCTA'
import joeSr from '../assets/images/team/joe-and-joe-sr.webp'
import joe from '../assets/images/team/joe.webp'
import teamWork from '../assets/images/team/team-work.webp'
import { business } from '../data/business'

const trustPoints = [
  business.claims.ownership,
  business.claims.experience,
  business.claims.licensed,
  business.claims.pricing,
  'Reasonable and negotiable',
  'Willing to work until the job is done',
]

export default function About() {
  return (
    <>
      <Seo
        title="About Junkman Carting"
        description="Meet Joe the Junkman and the family-owned Junkman Carting team serving the Hudson Valley with junk removal, cleanouts, and hauling."
        path="/about"
      />

      <section className="border-b border-border bg-white py-14 md:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            eyebrow="About Us"
            title="Our story"
            description="My name is Joe, Joe the Junkman. I’m a local born, raised, and married in the Hudson Valley who’s been in the junk industry for the past 15 years. I'm starting my family right here and want to help our community grow for future generations."
          />
          <div className="overflow-hidden rounded-[1rem] border border-border shadow-[var(--shadow-card)]">
            <SafeImage
              src={joe}
              alt="Joe, owner of Junkman Carting"
              className="aspect-[4/3] w-full object-cover object-top"
              width={900}
              height={675}
            />
          </div>
        </Container>
      </section>

      <section className="section-padding bg-surface">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[1rem] border border-border shadow-[var(--shadow-card)]">
            <SafeImage
              src={joeSr}
              alt="Joe and Joe Sr., partners in Junkman Carting"
              className="aspect-[4/3] w-full object-cover"
              width={1200}
              height={900}
            />
          </div>
          <div className="space-y-5">
            <h2 className="font-heading text-3xl font-extrabold sm:text-4xl">Kept in the family</h2>
            <p className="text-base leading-relaxed text-muted">
              My father and I are partners in Junkman Carting LLC, and we always want to keep it in the
              family. Our reputation and service means so much to us, and we never want to dilute our
              business in any way. We have the experience to understand what each individual project needs.
            </p>
            <p className="text-base leading-relaxed text-muted">
              We take pride in providing affordable, local services for our neighbors. We are reasonable,
              negotiable, and willing to work until the job is done. And we enjoy seeing our neighbors happy
              after their space has been reclaimed!
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <li key={point} className="inline-flex items-start gap-2 text-sm font-medium text-ink">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="font-heading text-3xl font-extrabold">Our service philosophy</h2>
            <p className="text-base leading-relaxed text-muted">
              Free quotes. Affordable prices. Your project done. We provide the labor and have the
              equipment to remove junk, provide cleanouts, move furniture, and more — with licensed and
              insured service that protects your home and property.
            </p>
            <Button to="/contact">Get a Free Quote</Button>
          </div>
          <div className="overflow-hidden rounded-[1rem] border border-border shadow-[var(--shadow-card)]">
            <SafeImage
              src={teamWork}
              alt="Junkman Carting team at work"
              className="aspect-[4/3] w-full object-cover"
              width={1200}
              height={900}
            />
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  )
}
