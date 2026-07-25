import type { Project } from "@/constants/projects";
import type { FaqItem } from "@/constants/faq";

const baseUrl = "https://roshansharma.net";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Roshan Sharma",
  jobTitle: "Software Developer",
  url: baseUrl,
  sameAs: [
    "https://github.com/RoshanSharma11",
    "https://www.linkedin.com/in/theroshansharma",
    "https://x.com/RoshanS25033",
    "https://www.instagram.com/roshansharma_11/",
  ],
  image: `${baseUrl}/profile.jpeg`,
  description:
    "Software Developer specializing in scalable backend architecture, system design, and production-ready web platforms. Available for remote and freelance software engineering work.",
  knowsAbout: [
    "Software Development",
    "Backend Architecture",
    "System Design",
    "Freelance Software Engineering",
    "Python",
    "TypeScript",
    "Go",
    "Node.js",
    "React",
    "Next.js",
    "Distributed Systems",
    "Database Design",
    "API Development",
    "Mobile App Development",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "professional inquiries",
    url: `${baseUrl}/contact`,
    availableLanguage: ["English"],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Roshan Sharma — Software Engineer",
  url: baseUrl,
  description:
    "Portfolio and services of Roshan Sharma, Software Developer available for hire and freelance work.",
  author: {
    "@type": "Person",
    name: "Roshan Sharma",
  },
  publisher: {
    "@type": "Person",
    name: "Roshan Sharma",
  },
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Roshan Sharma — Software Engineering Services",
  url: `${baseUrl}/services`,
  description:
    "Software engineering, backend architecture, API development, mobile apps, and system design. Remote and freelance engagements worldwide.",
  provider: {
    "@type": "Person",
    name: "Roshan Sharma",
    jobTitle: "Software Developer",
    url: baseUrl,
  },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Engineering Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full-Stack Web Platform Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Backend & API Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile Application Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "System Design & Architecture",
        },
      },
    ],
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqSchema = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const projectSchema = (project: Project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.title,
  description: project.longDescription,
  url: `${baseUrl}/projects/${project.id}`,
  image: project.image.startsWith("http")
    ? project.image
    : `${baseUrl}${project.image}`,
  author: {
    "@type": "Person",
    name: "Roshan Sharma",
    url: baseUrl,
  },
  keywords: project.techStack.join(", "),
  ...(project.repository && { codeRepository: project.repository }),
});
