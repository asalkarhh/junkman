import { Star } from 'lucide-react'

export default function ReviewCard({ review }) {
  return (
    <article className="card-surface flex h-full flex-col gap-4 p-5 sm:p-6">
      <div className="flex items-center gap-1" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: review.rating }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
        ))}
      </div>
      {review.title ? (
        <h3 className="font-heading text-lg font-bold text-ink">{review.title}</h3>
      ) : null}
      <blockquote className="flex-1 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
        “{review.text}”
      </blockquote>
      <footer className="border-t border-border pt-4 text-sm">
        <p className="font-semibold text-ink">{review.name}</p>
        <p className="text-muted">
          {review.source}
          {review.date ? ` · ${review.date}` : ''}
        </p>
      </footer>
    </article>
  )
}
