export const business = {
  name: 'Junkman Carting LLC',
  shortName: 'Junkman Carting',
  tagline: 'Junk Removal Made Simple.',
  description:
    'Locally and family owned junk removal, cleanouts, hauling, and related services throughout the Hudson Valley.',
  phoneDisplay: '(845) 896-5865',
  phoneTel: '+18458965865',
  email: 'Junkmancarting@gmail.com',
  address: {
    street: '376 All Angels Hill Rd',
    city: 'Hopewell Junction',
    state: 'NY',
    zip: '12533',
    region: 'Hudson Valley, NY',
  },
  hoursNote: 'Call or text for scheduling and free quotes.',
  website: 'https://www.hudsonvalleyjunkman.com',
  social: {
    instagram: 'https://www.instagram.com/junkmancarting/',
    facebook: 'https://www.facebook.com/profile.php?id=61554563469950',
    nextdoor:
      'https://nextdoor.com/pages/junkman-carting-llc-millbrook-ny?init_source=org_pages',
    google: 'https://g.co/kgs/APZ7N1y',
  },
  affiliation: {
    name: 'Hudson Valley Building and Restoration',
    url: 'http://hvbandr.com/',
    note: 'Affiliated construction and remodeling partner serving the Hudson Valley for over 40 years.',
  },
  claims: {
    experience: '15+ years experience',
    ownership: 'Locally & family owned',
    licensed: 'Licensed & insured',
    quotes: 'Free quotes',
    pricing: 'Affordable pricing',
  },
  awards: [
    'Nextdoor Neighborhood Favorite 2024 & 2025',
    '5 Stars on Google Reviews',
    '100% Recommendation on Facebook',
  ],
}

export const getFullAddress = () => {
  const { street, city, state, zip } = business.address
  return `${street}, ${city}, ${state} ${zip}`
}
