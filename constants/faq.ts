export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "What kind of software engineering work do you do?",
    answer:
      "I build full-stack web platforms, backend services and APIs, real-time systems, and mobile applications. My focus is production-ready software — clean architecture, reliable data models, and systems that scale from MVP to real users.",
  },
  {
    question: "Are you available for freelance or contract work?",
    answer:
      "Yes. I'm open to freelance, contract, and remote software engineering engagements worldwide. I'm based in India (IST) and work comfortably across async and overlapping time zones.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Python, TypeScript, Go, Node.js, React, and Next.js on the application layer; PostgreSQL, MongoDB, and Redis for data; Docker and Kubernetes for deployment. I also work on system design, event-driven pipelines, and performance-critical backend systems.",
  },
  {
    question: "What types of projects are a good fit?",
    answer:
      "SaaS products, internal tools, API backends, e-commerce platforms, real-time collaboration apps, and performance-sensitive systems. I work best on projects where engineering quality, maintainability, and scalability matter.",
  },
  {
    question: "How do you typically work with clients?",
    answer:
      "I start with a short discovery call to understand goals, scope, and timeline. From there I propose a clear plan, communicate regularly with async updates, and deliver in iterative milestones so you see progress early.",
  },
  {
    question: "Do you work remotely?",
    answer:
      "Yes — remote is my default. I've shipped production software for teams and clients without needing to be on-site.",
  },
  {
    question: "How can I get in touch?",
    answer:
      "Use the contact form at roshansharma.net/contact or reach out via LinkedIn. I respond to serious project inquiries within 1–2 business days.",
  },
];
