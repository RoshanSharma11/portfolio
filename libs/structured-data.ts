// JSON-LD Structured Data for SEO
// This provides rich snippets for search engines

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Roshan Sharma',
  jobTitle: 'Full Stack Software Engineer',
  url: 'https://www.roshansharma.net',
  sameAs: [
    'https://github.com/RoshanSharma11',
    'https://linkedin.com/in/theroshansharma',
    'https://x.com/RoshanS25033',
  ],
  image: 'https://www.roshansharma.net/profile.jpeg',
  description: 'Full Stack Software Engineer specializing in scalable backend architecture, system design, and production-ready web platforms.',
  knowsAbout: [
    'Full Stack Development',
    'Backend Architecture',
    'System Design',
    'Python',
    'TypeScript',
    'Node.js',
    'React',
    'Next.js',
    'Distributed Systems',
    'Database Design',
    'API Development',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Roshan Sharma Portfolio',
  url: 'https://www.roshansharma.net',
  description: 'Professional portfolio of Roshan Sharma - Full Stack Software Engineer',
  author: {
    '@type': 'Person',
    name: 'Roshan Sharma',
  },
};

export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Roshan Sharma - Software Development Services',
  description: 'Full Stack Software Development, Backend Architecture, System Design, and Web Platform Development Services',
  provider: {
    '@type': 'Person',
    name: 'Roshan Sharma',
    jobTitle: 'Full Stack Software Engineer',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Remote',
    addressCountry: 'Worldwide',
  },
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Full Stack Development',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Backend Architecture',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'System Design',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'API Development',
        },
      },
    ],
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
