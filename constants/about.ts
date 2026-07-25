export interface TimelineItem {
  title: string;
  highlight: string;
  highlightColor: string;
  description: string;
  detailedDescription?: string;
  date: string;
  isActive?: boolean;
}

export const experienceData: TimelineItem[] = [
  {
    title: "SDE Intern",
    highlight: "GenZFit",
    highlightColor: "text-zinc-300",
    description:
      "Built and shipped a production-ready fitness & nutrition mobile app with real-time features and subscriptions",
    detailedDescription:
      "Built backend and mobile workflows for a nutrition platform using React Native, Firebase, Cloud Functions, and Supabase. Implemented OTP authentication, real-time chat, subscription billing, personalised diet plans, and role-based access for users and dietitians. Integrated RevenueCat and Firebase webhooks for App Store and Play Store subscription lifecycle management.",
    date: "Sep 2025 - Feb 2026",
  },
  {
    title: "Software Developer",
    highlight: "ToolSnitch",
    highlightColor: "text-zinc-300",
    description:
      "Developed scalable seller and user portals with role-based access, payments, and automated workflows",
    detailedDescription:
      "Built APIs and backend workflows for seller onboarding, appointments, cart management, invoices, and repair order handling using Node.js. Developed frontend features for user, seller, and admin panels using Next.js and Tailwind CSS. Contributed to authentication, map integration, and multi-role access flows across the platform.",
    date: "Sep 2024 - Nov 2024",
  },
];

export const educationData: TimelineItem[] = [
  {
    title: "Bachelor of Technology in Computer Science and Engineering ",
    highlight: "8.39 GPA",
    highlightColor: "text-blue-400",
    description: "Netaji Subhas Institute of Technology",
    date: "2024 - 2028",
    isActive: true,
  },
  {
    title: "Class XII",
    highlight: "93.2%",
    highlightColor: "text-zinc-300",
    description: "Delhi Public School, Vasant Kunj",
    date: "2024",
  },
  {
    title: "Class X",
    highlight: "93.0%",
    highlightColor: "text-zinc-300",
    description: "Masonic Public School, Vasant Kunj",
    date: "2022",
  },
];
