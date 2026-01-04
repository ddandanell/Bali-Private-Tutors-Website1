/**
 * Centralized SEO Configuration
 * Single source of truth for all SEO-related constants and metadata
 */

export const SEO_CONFIG = {
  // Site-wide constants
  siteName: 'Bali Private Tutors',
  siteUrl: 'https://baliprivatetutors.com',
  defaultTitle: 'Bali Private Tutors | International Curriculum Experts in Ubud, Canggu & Seminyak',
  defaultDescription: 'Expert private tutors in Bali for IB, IGCSE, A-Levels, and international curricula. Villa-based tutoring for expat families in Ubud, Canggu, Seminyak, and Sanur.',
  defaultKeywords: 'private tutor Bali, villa tutoring Bali, expat tutoring Bali, international curriculum tutor Bali, IB tutor Bali, IGCSE tutor Bali',
  
  // Business Information
  business: {
    name: 'Bali Private Tutors',
    description: 'Premium private tutoring services for expat families and international students in Bali',
    location: 'Ubud, Bali, Indonesia',
    priceRange: '$$',
    areaServed: ['Ubud', 'Canggu', 'Seminyak', 'Sanur', 'Uluwatu', 'Jimbaran'],
    // Services offered (based on actual site content)
    services: [
      'Mathematics Tutoring',
      'Science Tutoring (Physics, Chemistry, Biology)',
      'English Language & Literature',
      'Foreign Languages (Indonesian, French, Mandarin, Spanish)',
      'IB Programme Support (PYP, MYP, DP)',
      'IGCSE & A-Level Support',
      'Australian Curriculum Support',
      'US Common Core Support',
      'Homeschooling Support',
      'Test Preparation',
      'Study Skills & Organization'
    ]
  },

  // Open Graph default images
  images: {
    ogImage: '/og-image.jpg', // Main OG image
    ogImageAlt: 'Bali Private Tutors - Expert International Curriculum Support',
    twitterImage: '/twitter-card.jpg',
    logo: '/logo.png'
  },

  // Social media profiles (update with actual URLs when available)
  social: {
    // twitter: '@baliprivatetutors', // Add when Twitter account is created
    // facebook: 'https://facebook.com/baliprivatetutors', // Add when Facebook page is created
  },

  // Contact information (update with actual contact details)
  contact: {
    email: 'info@baliprivatetutors.com',
    // whatsapp: '+62-xxx-xxx-xxxx' // Add when WhatsApp business number is set up
  }
};

/**
 * Generate page-specific metadata
 * @param {Object} pageData - Page-specific metadata
 * @returns {Object} Complete metadata object
 */
export const generatePageMeta = (pageData = {}) => {
  const {
    title = SEO_CONFIG.defaultTitle,
    description = SEO_CONFIG.defaultDescription,
    keywords = SEO_CONFIG.defaultKeywords,
    path = '/',
    image = SEO_CONFIG.images.ogImage,
    imageAlt = SEO_CONFIG.images.ogImageAlt,
    type = 'website',
    noindex = false
  } = pageData;

  const fullUrl = `${SEO_CONFIG.siteUrl}${path}`;
  const fullImageUrl = image.startsWith('http') ? image : `${SEO_CONFIG.siteUrl}${image}`;

  return {
    title,
    description,
    keywords,
    canonical: fullUrl,
    noindex,
    openGraph: {
      type,
      url: fullUrl,
      title,
      description,
      siteName: SEO_CONFIG.siteName,
      image: fullImageUrl,
      imageAlt
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image: fullImageUrl,
      imageAlt
    }
  };
};

/**
 * Generate LocalBusiness Schema for structured data
 * @returns {Object} JSON-LD structured data
 */
export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': SEO_CONFIG.business.name,
    'description': SEO_CONFIG.business.description,
    'url': SEO_CONFIG.siteUrl,
    'logo': `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.logo}`,
    'priceRange': SEO_CONFIG.business.priceRange,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Ubud',
      'addressRegion': 'Bali',
      'addressCountry': 'ID'
    },
    'areaServed': SEO_CONFIG.business.areaServed.map(area => ({
      '@type': 'City',
      'name': area
    })),
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Private Tutoring Services',
      'itemListElement': SEO_CONFIG.business.services.map((service, index) => ({
        '@type': 'Offer',
        'position': index + 1,
        'itemOffered': {
          '@type': 'Service',
          'name': service
        }
      }))
    },
    'serviceType': [
      'Private Tutoring',
      'International Curriculum Support',
      'Homeschooling Support'
    ]
  };
};
