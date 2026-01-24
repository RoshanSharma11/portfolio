export interface Skill {
  name: string;
  category: string;
  icon: string;
  bgColor: string;
}

export const mainSkills: Skill[] = [
  {
    name: "Python",
    category: "Built backend services, data pipelines, and automation scripts, focusing on clean architecture and production-ready code.",
    icon: "/icons/python.png",
    bgColor: "bg-blue-600",
  },
  {
    name: "TypeScript",
    category: "Built type-safe full-stack applications with strong typing across frontend and backend to improve reliability and maintainability.",
    icon: "/icons/typescript.png",
    bgColor: "bg-blue-500",
  },
  {
    name: "Go",
    category: "Implemented high-throughput concurrent systems, optimizing event pipelines and matching engines for low-latency processing.",
    icon: "/icons/golang-2.png",
    bgColor: "bg-cyan-500",
  },
  {
    name: "Node.js",
    category: "Developed scalable backend services and real-time APIs for production systems handling concurrent users and background jobs.",
    icon: "/icons/nodejs.png",
    bgColor: "bg-green-600",
  },
  {
    name: "React",
    category: "Built interactive, component-driven user interfaces with a focus on performance, state management, and clean UI architecture.",
    icon: "/icons/reactjs.png",
    bgColor: "bg-cyan-400",
  },
  {
    name: "Next.js",
    category: "Developed production-ready full-stack web applications with server-side rendering, API routes, and optimized routing.",
    icon: "/icons/nextjs.png",
    bgColor: "bg-black",
  },
];

export const additionalSkills: Skill[] = [
  {
    name: "PostgreSQL",
    category: "Designed normalized schemas, optimized queries with indexing, and handled transactional workflows for data-intensive systems.",
    icon: "/icons/postgressql.jpeg",
    bgColor: "bg-blue-700",
  },
  {
    name: "MongoDB",
    category: "Built flexible data models for real-time and event-driven applications requiring fast writes and schema adaptability.",
    icon: "/icons/mongodb.png",
    bgColor: "bg-green-500",
  },
  {
    name: "Redis",
    category: "Used Redis for caching, leaderboards, and low-latency state management to improve system throughput and response times.",
    icon: "/icons/redis.png",
    bgColor: "bg-red-600",
  },
  {
    name: "Docker",
    category: "Containerized backend services and secure code-execution pipelines for reproducible builds and isolated runtime environments.",
    icon: "/icons/docker.webp",
    bgColor: "bg-blue-500",
  },
  {
    name: "Apache Kafka",
    category: "Designed event-driven pipelines using topics, producers, and consumers for asynchronous processing and scalable data flows.",
    icon: "/icons/kafka.png",
    bgColor: "bg-black",
  },
  {
    name: "GraphQL",
    category: "Built flexible APIs with efficient query resolution and role-based access patterns for complex frontend data requirements.",
    icon: "/icons/graphql.png",
    bgColor: "bg-pink-600",
  },
  {
    name: "Kubernetes",
    category: "Deployed and managed containerized services using pods, deployments, and services to support scalable, fault-tolerant systems.",
    icon: "/icons/kubernetes.png",
    bgColor: "bg-blue-600",
  },
  {
    name: "System Design & Architecture",
    category: "Designed scalable backend architectures, defined service boundaries, data models, and communication patterns for high-concurrency systems.",
    icon: "/icons/system-design.png",
    bgColor: "bg-zinc-700",
  },
];
