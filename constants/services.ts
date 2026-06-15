export interface Service {
  title: string;
  description: string;
  highlights: string[];
}

export const services: Service[] = [
  {
    title: "Full-Stack Web Platforms",
    description:
      "End-to-end web applications with modern frontends and robust backends — from MVPs to production SaaS.",
    highlights: [
      "Next.js and React frontends",
      "Authentication and role-based access",
      "Payments, dashboards, and admin workflows",
    ],
  },
  {
    title: "Backend & API Development",
    description:
      "Scalable backend services, REST and GraphQL APIs, and data-intensive systems built for reliability.",
    highlights: [
      "Python, Go, and Node.js services",
      "Database design and query optimization",
      "Event-driven and real-time pipelines",
    ],
  },
  {
    title: "Mobile Applications",
    description:
      "Production mobile apps with real-time features, subscriptions, and backend integration.",
    highlights: [
      "React Native cross-platform apps",
      "Firebase and Supabase backends",
      "Push notifications and in-app subscriptions",
    ],
  },
  {
    title: "System Design & Architecture",
    description:
      "Architecture for systems that need to handle growth — low latency, high throughput, and clean boundaries.",
    highlights: [
      "Performance and concurrency optimization",
      "Service boundaries and data modeling",
      "Caching, queues, and observability",
    ],
  },
];

export const workProcess = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We map your product goals, constraints, and success criteria upfront, so scope and priorities stay clear from day one.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "I outline milestones, stack choices, and a delivery timeline, giving you a concrete path before any code is written.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Development runs in focused sprints with regular demos and check-ins, so you see progress early and can steer as needed.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "We handle deployment, documentation, and handoff, plus support through go-live so nothing falls through the cracks.",
  },
];
