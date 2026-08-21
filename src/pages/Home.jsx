import Seo from '../components/seo/Seo'
import Hero from '../sections/Hero'
import TrustBar from '../sections/TrustBar'
import ServicesPreview from '../sections/ServicesPreview'
import WhyChooseUs from '../sections/WhyChooseUs'
import HowItWorks from '../sections/HowItWorks'
import AboutPreview from '../sections/AboutPreview'
import Gallery from '../sections/Gallery'
import ReviewsPreview from '../sections/ReviewsPreview'
import ServiceArea from '../sections/ServiceArea'
import FinalCTA from '../sections/FinalCTA'
import {
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildReviewSchema,
  buildServiceSchema,
} from '../utils/schema'

export default function Home() {
  const jsonLd = [
    buildLocalBusinessSchema(),
    ...buildServiceSchema(),
    ...buildReviewSchema(),
    buildFaqSchema(),
  ]

  return (
    <>
      <Seo
        title="Junk Removal in Hudson Valley, NY | Junkman Carting"
        description="Locally and family owned junk removal, cleanouts, hauling, and demolition help throughout the Hudson Valley. Free quotes. Licensed and insured."
        path="/"
        jsonLd={jsonLd}
      />
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <WhyChooseUs />
      <HowItWorks />
      <AboutPreview />
      <Gallery />
      <ReviewsPreview />
      <ServiceArea />
      <FinalCTA />
    </>
  )
}
