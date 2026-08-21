import Container from '../components/common/Container'
import { business } from '../data/business'

const items = [
  { value: '15+', label: 'Years Experience' },
  { value: 'Licensed', label: '& Insured' },
  { value: 'Local', label: 'Family Owned' },
  { value: 'Free', label: 'Quotes' },
]

export default function TrustBar() {
  return (
    <section className="border-y border-border bg-white" aria-label="Credibility highlights">
      <Container className="grid grid-cols-2 gap-6 py-8 md:grid-cols-4 md:gap-4 md:py-10">
        {items.map((item) => (
          <div key={item.label} className="text-center md:border-r md:border-border md:last:border-r-0">
            <p className="font-heading text-2xl font-extrabold text-ink sm:text-3xl">{item.value}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-muted sm:text-sm">
              {item.label}
            </p>
          </div>
        ))}
      </Container>
      <p className="sr-only">
        {business.claims.ownership}. {business.claims.licensed}. {business.claims.quotes}.
      </p>
    </section>
  )
}
