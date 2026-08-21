import { Helmet } from 'react-helmet-async'
import { business } from '../../data/business'

export default function Seo({
  title,
  description,
  path = '/',
  image,
  type = 'website',
  jsonLd,
}) {
  const fullTitle = title.includes('Junkman')
    ? title
    : `${title} | ${business.shortName}`
  const url = `${business.website}${path}`
  const imageUrl = image || `${business.website}/og-default.jpg`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={business.name} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  )
}
