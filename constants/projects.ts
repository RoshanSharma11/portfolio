export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  highlights: string[];
  techStack: string[];
  repository?: string;
  liveLink?: string;
  /** Platform-aware store links (iOS → App Store, else → Play Store). */
  storeLinks?: {
    ios: string;
    android: string;
  };
}

export const projects: Project[] = [
  {
    id: "genzfit",
    title: "GenZFit — Personalized Fitness & Nutrition App",
    category: "Mobile / Full-Stack",
    description:
      "A production fitness and nutrition app connecting users with certified dietitians, personalized meal plans, and subscription billing.",
    longDescription:
      "GenZFit is a personalized health and nutrition companion built to help users lose weight, gain muscle, or maintain a healthier lifestyle with expert support. As an SDE intern, I built backend and mobile workflows across React Native, Firebase, Cloud Functions, and Supabase — covering OTP authentication, real-time chat with dietitians, role-based access for users and experts, personalized diet plans, progress tracking, and subscription lifecycle management via RevenueCat with Firebase webhooks for both the App Store and Play Store.",
    image: "/projects/genzfit.png",
    highlights: [
      "Shipped production mobile workflows for dietitian matching, chat, and plan delivery",
      "Implemented OTP authentication and role-based access for users and dietitians",
      "Built real-time chat with photo sharing and subscription-gated expert guidance",
      "Integrated RevenueCat and Firebase webhooks for App Store and Play Store billing",
      "Supported personalized diet plans, progress tracking, reminders, and psychologist appointments",
    ],
    techStack: [
      "React Native",
      "Firebase",
      "Cloud Functions",
      "Supabase",
      "RevenueCat",
      "TypeScript",
    ],
    storeLinks: {
      ios: "https://apps.apple.com/us/app/genzfit/id6761322807",
      android: "https://play.google.com/store/apps/details?id=com.genzfit.app",
    },
  },

  {
    id: "toolsnitch",
    title: "Tool Snitch — Device Repair Marketplace",
    category: "Full-Stack / Marketplace",
    description:
      "A multi-role platform that matches broken devices with nearby repair shops, appointments, carts, and seller workflows.",
    longDescription:
      "Tool Snitch helps people with broken smartphones, laptops, and other devices find local repair stores and book fixes in a few steps. As a freelance software developer, I built APIs and backend workflows for seller onboarding, appointments, cart management, invoices, and repair order handling in Node.js, and developed user, seller, and admin panel features in Next.js and Tailwind CSS — including authentication, map-based shop discovery, and multi-role access across the platform.",
    image: "/projects/toolsnitch.png",
    highlights: [
      "Built seller onboarding, appointments, cart, invoice, and repair-order APIs in Node.js",
      "Developed user, seller, and admin portal features with Next.js and Tailwind CSS",
      "Implemented authentication and multi-role access across the marketplace",
      "Integrated map-based shop discovery to match users with nearby repair stores",
      "Supported end-to-end repair flows from issue intake through booking and order handling",
    ],
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Maps Integration",
      "TypeScript",
    ],
    liveLink: "https://www.toolsnitch.com/",
  },

  {
    id: "matchloop",
    title: "Matchloop – High-Performance Matching Engine",
    category: "Backend / Systems Engineering",
    description:
      "A high-throughput concurrent matching engine optimized for low-latency, real-time intent processing.",
    longDescription:
      "Matchloop is a high-performance concurrent matching engine designed to process millions of intents per second with predictable low-latency behavior. The system is architected around event-driven pipelines and memory-efficient concurrency patterns, achieving sub-millisecond matching latency under sustained load. The project focuses heavily on throughput optimization, tail-latency control, and scalable system design principles used in real-world matching and routing systems.",
    image: "/projects/matchloop.png",
    highlights: [
      "Achieved 2.5M intents/sec throughput on a single engine instance",
      "Maintained P50 latency of 150–180µs and P99 under 9ms under load",
      "Designed queue-dominated pipelines to avoid compute bottlenecks",
      "Instrumented GC behavior and allocation patterns for memory optimization",
      "Built event-driven architecture with predictable tail latency",
    ],
    techStack: [
      "Go",
      "Concurrent Programming",
      "Event-Driven Architecture",
      "Profiling",
      "System Design",
    ],
    repository: "https://github.com/RoshanSharma11/matchloop",
    liveLink: "https://matchloop.roshansharma.net/",
  },

  {
    id: "modelflow",
    title: "ModelFlow – No-Code ML Pipeline Platform",
    category: "Platform / Full-Stack Systems",
    description:
      "A visual no-code platform for building end-to-end machine learning pipelines with secure execution and orchestration.",
    longDescription:
      "ModelFlow is a no-code ML pipeline builder that enables users to design complete machine learning workflows using a drag-and-drop DAG interface. The platform orchestrates containerized microservices for secure dataset processing and model training, allowing reproducible, parallel pipeline execution. The system bridges research and production by generating executable pipelines while enforcing isolation, observability, and resource constraints.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    highlights: [
      "Designed DAG-based pipeline engine for modular ML workflows",
      "Built secure sandboxed execution using Docker and isolated services",
      "Enabled parallel pipeline runs with strict resource isolation",
      "Implemented intelligent pipeline recommendations and code generation",
      "Architected production-grade orchestration and monitoring layers",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "Docker",
      "PostgreSQL",
      "Redis",
      "React",
      "Next.js",
    ],
    repository: "https://github.com/RoshanSharma11/modelflow",
    liveLink: "",
  },
  {
    id: "storm",
    title: "Storm — Collaborative Brainstorming Platform",
    category: "Full-Stack / Real-Time Collaboration",
    description:
      "A real-time collaborative brainstorming platform with graphical idea mapping and AI-powered summaries and suggestions.",
    longDescription:
      "Storm is a real-time collaborative brainstorming platform designed to help teams visually organize ideas using a graphical mind-mapping approach. The application enables multiple users to work simultaneously on a single canvas with live updates, structured annotations, and AI-assisted summaries and suggestions. Built as a single-page collaborative workspace, Storm focuses on frictionless ideation, real-time synchronization, and intelligent agenda organization for teams and creative sessions.",
    image: "/projects/storm.png",
    highlights: [
      "Built a fully real-time collaborative workspace with multi-user synchronization",
      "Designed a single-page ideation interface with live graphical annotations and connections",
      "Implemented user allocation and shared editing using Liveblocks and Firebase",
      "Integrated AI-generated summaries, suggestions, and idea resolutions",
      "Enabled instant collaboration without authentication for frictionless onboarding",
      "Implemented structured rich-text editing using Editor.js blocks",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Firebase",
      "Liveblocks",
      "Editor.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    repository: "https://github.com/theVedanta/storm",
    liveLink: "",
  },
  {
    id: "scalable-leaderboard",
    title: "Scalable Leaderboard System",
    category: "Backend / Systems Engineering",
    description:
      "A high-performance in-memory leaderboard implementation built in Go, optimized for efficient ranking and real-time updates.",
    longDescription:
      "This project implements a scalable leaderboard engine in Go with a custom high-performance ranking data structure and efficient update/query patterns. Designed from the ground up for speed, the system uses optimized in-memory data structures to support fast score updates, deterministic rankings, and low latency for real-time applications. This implementation demonstrates deep understanding of performance engineering, custom algorithms, and memory-efficient systems design.",
    image: "/projects/scalable-leaderboard.png",
    highlights: [
      "Built a high-performance leaderboard engine in Go with custom data structures",
      "Optimized in-memory ranking for efficient update and query latencies",
      "Designed deterministic ordering with tie handling for consistent results",
      "Implemented efficient score insertion and lookup logic",
      "Engine is suitable as a core backend component for real-time competitive applications",
      "Focused on performance, memory efficiency, and concurrency safety",
    ],
    techStack: [
      "Go",
      "In-Memory Data Structures",
      "Algorithms",
      "System Design",
    ],
    repository: "https://github.com/RoshanSharma11/scalable-leaderboard-system",
    liveLink: "https://scalable-leaderboard-system.vercel.app/",
  },
  {
    id: "recall-ai",
    title: "Recall.Ai — AI Chat Summarization Chrome Extension",
    category: "Browser Extension / Full-Stack Application",
    description:
      "A Chrome extension that intelligently summarizes AI conversations to preserve context and enable cross-platform continuity.",
    longDescription:
      "Recall.Ai is a productivity-focused Chrome extension that enhances AI chat workflows by generating intelligent, human-friendly summaries of technical conversations with assistants like ChatGPT, Claude, and Gemini. The extension captures key discussion points, methods, examples, and technologies, allowing users to resume conversations across platforms or share context seamlessly. The system combines a lightweight React extension UI with a FastAPI backend and Gemini-powered summarization, focusing on privacy, usability, and seamless browser integration.",
    image: "/projects/recall-ai.png",
    highlights: [
      "Built a Chrome extension to capture and summarize AI conversations across multiple platforms",
      "Implemented intelligent summarization using Google Gemini API for technical discussion contexts",
      "Preserved key points, methods, examples, and technologies from long AI chat sessions",
      "Enabled cross-platform continuity by sharing summaries between different AI assistants",
      "Designed a privacy-focused pipeline with secure processing and CORS-protected APIs",
      "Built a clean in-browser UI with real-time feedback and toast-based user notifications",
    ],
    techStack: [
      "React",
      "Vite",
      "TypeScript",
      "Chrome Extension APIs",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "Google Gemini API",
    ],
    repository: "https://github.com/RoshanSharma11/recall.ai",
    liveLink:
      "https://chromewebstore.google.com/detail/igbcfkkcefgkggocdafpnnpkjijoldci?utm_source=item-share-cb",
    //   featured: false
  },

  {
    id: "asr-interior",
    title: "ASR Interior — Full-Stack Multi-Role E-Commerce Platform",
    category: "Full-Stack / Backend Systems",
    description:
      "A production-grade multi-role e-commerce platform with authentication, payments, inventory, and admin workflows.",
    longDescription:
      "ASR Interior is a complete full-stack e-commerce platform built for an interior design business, supporting users, sellers, and administrators with end-to-end workflows. The backend handles secure authentication, role-based access control, product catalogs, inventory management, order processing, real-time notifications, and Razorpay payment integration. The system is designed as a scalable SaaS backend with production security, modular APIs, and transactional consistency.",
    image: "/projects/asr-interiors.png",
    highlights: [
      "Designed a multi-role system with users, sellers, and administrators",
      "Implemented secure JWT authentication with bcrypt and role-based access",
      "Built complete e-commerce workflows: products, inventory, carts, orders",
      "Integrated Razorpay payments with transactional order state handling",
      "Added real-time notifications using Pusher and email automation",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Razorpay",
      "Pusher",
      "Docker",
    ],
    repository: "https://github.com/blaze-centurion/asr-interior-client",
    liveLink: "https://asr-interior.netlify.app/",
  },

  {
    id: "whiteboard",
    title: "Collaborative Whiteboard",
    category: "Full-Stack / Real-Time Systems",
    description:
      "A real-time collaborative whiteboard with multi-user synchronization and persistent canvas state.",
    longDescription:
      "This collaborative whiteboard enables multiple users to draw, annotate, and interact on a shared canvas in real time. The system focuses on low-latency synchronization, efficient state diffing, and conflict-free updates while maintaining persistent canvas state across sessions.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
    highlights: [
      "Implemented real-time multi-user canvas synchronization",
      "Designed efficient state diffing and update broadcasting",
      "Built persistent session storage for collaborative state recovery",
      "Added cursor tracking and live interaction indicators",
      "Optimized rendering for smooth low-latency drawing",
    ],
    techStack: ["TypeScript", "React", "Node.js", "WebSockets", "Canvas API"],
    repository: "https://github.com/RoshanSharma11/whiteboard",
    liveLink: "",
  },

  {
    id: "orbitron",
    title: "Orbitron — Real-Time Satellite Visualization",
    category: "Visualization / Real-Time Systems",
    description:
      "A real-time 3D visualization platform rendering live satellite and space debris trajectories.",
    longDescription:
      "Orbitron is a real-time 3D visualization platform that renders thousands of satellites and debris objects on an interactive globe using orbital mechanics and continuous position updates. The system integrates live TLE datasets and optimizes rendering pipelines to maintain smooth interactive frame rates under continuous motion.",
    image: "/projects/orbitron.png",
    highlights: [
      "Rendered 1,000+ satellites and debris objects in real time",
      "Integrated CelesTrak TLE datasets for orbital trajectory computation",
      "Optimized render and update loops for stable interactive FPS",
      "Implemented accurate Earth-relative orbital motion",
      "Balanced visual fidelity with real-time performance",
    ],
    techStack: [
      "React",
      "Three.js",
      "WebGL",
      "Orbital Mechanics",
      "Real-Time Rendering",
    ],
    repository: "https://github.com/blaze-centurion/orbitron",
    liveLink: "https://orbitron-hack.netlify.app/",
  },

  {
    id: "thunder-editor",
    title: "Thunder — Desktop Code Editor",
    category: "Desktop / Systems Engineering",
    description:
      "A lightweight desktop code editor with syntax highlighting and modular editing components.",
    longDescription:
      "Thunder is a lightweight desktop code editor built with JavaFX featuring syntax highlighting, multi-file editing, and extensible editor components. The project focuses on editor performance, clean document handling, and modular UI design suitable for future plugin-based extensions.",
    image: "/projects/thunder-code.png",
    highlights: [
      "Implemented syntax highlighting and multi-file editing",
      "Designed modular editor and document management components",
      "Built extensible architecture for future plugin support",
      "Optimized rendering and text handling performance",
      "Integrated file system navigation and project views",
    ],
    techStack: ["Java", "JavaFX", "Desktop UI", "File System APIs"],
    repository: "https://github.com/blaze-centurion/thunder-code-editor-javafx",
    liveLink:
      "https://github.com/blaze-centurion/thunder-code-editor-javafx/blob/master/demo.gif",
  },
];
