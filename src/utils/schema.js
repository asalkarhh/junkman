import { business, getFullAddress } from '../data/business'
import { reviews } from '../data/reviews'
import { faqs } from '../data/faq'
import { serviceCategories } from '../data/services'

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    description: business.description,
    url: business.website,
    telephone: business.phoneTel,
    email: business.email,
    image: `${business.website}/`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: 'US',
    },
    areaServed: business.address.region,
    priceRange: '$$',
    sameAs: [
      business.social.instagram,
      business.social.facebook,
      business.social.nextdoor,
      business.social.google,
    ],
  }
}

export function buildServiceSchema() {
  return serviceCategories.map((category) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: category.title,
    description: category.description,
    provider: {
      '@type': 'LocalBusiness',
      name: business.name,
      telephone: business.phoneTel,
      address: getFullAddress(),
    },
    areaServed: business.address.region,
  }))
}

export function buildReviewSchema() {
  return reviews.map((review) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.name,
    },
    reviewBody: review.text,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
    },
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: business.name,
    },
  }))
}

export function buildFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
